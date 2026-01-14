// db.ts
import { Dexie, type EntityTable } from "dexie";

interface DiaryEntry {
  id: number;
  title: string;
  content: string;
  date: string;
  time: string;
}

const db = new Dexie("DiaryDatabase") as Dexie & {
  entries: EntityTable<DiaryEntry, "id">;
};

db.version(1).stores({
  entries: "++id, title, date, time",
});

export type { DiaryEntry };
export { db };
