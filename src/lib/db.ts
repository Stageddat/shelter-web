import { Dexie, type EntityTable } from "dexie";

export interface User {
  id: string;
  username: string;

  // llave maestra
  // todo esta mierda esta en base64
  encryptedMasterKey: string;
  salt: string;
  iv: string;
}

interface DiaryEntry {
  // para identificar
  id: string;
  userId: string;

  // contenido
  encryptedtitle: string;
  encryptedContent: string;

  // metadatos
  date: string;
  time: string;
  createdAt: string;
  updatedAt: string;
}

const db = new Dexie("DiaryDatabase") as Dexie & {
  users: EntityTable<User, "id">;
  entries: EntityTable<DiaryEntry, "id">;
};

db.version(1).stores({
  users: "id, username",
  entries: "id, userId, date, createdAt, updatedAt",
});

export type { DiaryEntry };
export { db };
