import { db } from "@/lib/db";
import { encryptText } from "@/lib/crypto";

export interface CreateEntryParams {
  masterKey: CryptoKey;
  title: string;
  content: string;
}

export async function createEntry({
  masterKey,
  title,
  content,
}: CreateEntryParams) {
  // encriptar contenido
  const { ciphertext, iv } = await encryptText(masterKey, content);

  // obtener usuario actual
  const users = await db.users.toArray();
  const currentUser = users[0];

  if (!currentUser) {
    throw new Error("user not found");
  }

  // guardar en db
  const entryId = await db.entries.add({
    userId: currentUser.id,
    title: title || "untitled entry",
    encryptedContent: `${ciphertext}:${iv}`,
    date: new Date().toISOString().split("T")[0],
    time: new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  });

  return entryId;
}

export function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}
