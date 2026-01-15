// db.ts
import { Dexie, type EntityTable } from "dexie";

interface User {
  id: number;
  username: string;
  email: string;

  // llave maestra
  // todo esta mierda esta en base64
  encryptedMasterKey: string;
  salt: string;
  iv: string;
}

interface DiaryEntry {
  id: number;
  userId: number;
  title: string;
  encryptedContent: string;
  date: string;
  time: string;
}

const db = new Dexie("DiaryDatabase") as Dexie & {
  users: EntityTable<User, "id">;
  entries: EntityTable<DiaryEntry, "id">;
};

db.version(1).stores({
  users: "++id, email, username",
  entries: "++id, userId, title, date, time",
});

export type { DiaryEntry };
export { db };
