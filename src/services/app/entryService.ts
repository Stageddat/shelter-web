import { db } from "@/lib/db";
import { encryptText, decryptText } from "@/lib/crypto";

export interface CreateEntryParams {
  masterKey: CryptoKey;
  title: string;
  content: string;
}

export interface Entry {
  id?: number;
  userId: number;
  title: string;
  encryptedContent: string;
  date: string;
  time: string;
}

export interface DecryptedEntry extends Entry {
  content: string;
}

export interface GroupedEntries {
  date: string;
  displayDate: string;
  entries: Entry[];
}

export const entryService = {
  async getEntryById(entryId: number): Promise<Entry | undefined> {
    return await db.entries.get(entryId);
  },

  async decryptEntry(
    entry: Entry,
    masterKey: CryptoKey,
  ): Promise<DecryptedEntry> {
    const [ciphertext, iv] = entry.encryptedContent.split(":");
    const content = await decryptText(masterKey, ciphertext, iv);

    return {
      ...entry,
      content,
    };
  },

  async getAllEntries(): Promise<Entry[]> {
    const users = await db.users.toArray();
    const currentUser = users[0];

    if (!currentUser) {
      return [];
    }

    return await db.entries
      .where("userId")
      .equals(currentUser.id)
      .reverse()
      .sortBy("date");
  },

  groupEntriesByDate(entries: Entry[]): GroupedEntries[] {
    const grouped = entries.reduce(
      (acc, entry) => {
        if (!acc[entry.date]) {
          acc[entry.date] = [];
        }
        acc[entry.date].push(entry);
        return acc;
      },
      {} as Record<string, Entry[]>,
    );

    return Object.entries(grouped).map(([date, entries]) => ({
      date,
      displayDate: this.formatDisplayDate(date),
      entries,
    }));
  },

  formatDisplayDate(dateString: string): string {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const dateOnly = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    );
    const todayOnly = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );
    const yesterdayOnly = new Date(
      yesterday.getFullYear(),
      yesterday.getMonth(),
      yesterday.getDate(),
    );

    if (dateOnly.getTime() === todayOnly.getTime()) {
      return "today";
    } else if (dateOnly.getTime() === yesterdayOnly.getTime()) {
      return "yesterday";
    } else {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    }
  },

  countWords(text: string): number {
    return text.trim().split(/\s+/).filter(Boolean).length;
  },

  async deleteEntry(entryId: number): Promise<void> {
    await db.entries.delete(entryId);
  },

  async updateEntry(
    entryId: number,
    masterKey: CryptoKey,
    title: string,
    content: string,
  ): Promise<void> {
    const { ciphertext, iv } = await encryptText(masterKey, content);

    await db.entries.update(entryId, {
      title: title || "untitled entry",
      encryptedContent: `${ciphertext}:${iv}`,
    });
  },
};
