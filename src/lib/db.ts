// db.ts
import { Dexie, type EntityTable } from "dexie";

export interface User {
  id: number;
  username: string;
  email: string;
  passwordHash: string;
  dateOfBirth: string;
}

interface DiaryEntry {
  id: number;
  userId: number;
  title: string;
  content: string;
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
