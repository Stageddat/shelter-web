import { Dexie, Table } from "dexie";

export interface User {
  id: string;
  username: string;

  // datos de encriptacion
  encryptedMasterKey: Uint8Array;
  salt: Uint8Array;
  iv: Uint8Array;
}

interface DiaryEntry {
  id: string;
  userId: string;

  // titulo y contenido encriptado en binario
  encryptedTitle: Uint8Array;
  encryptedContent: Uint8Array;

  // metadatos
  date: string;
  time: string;
  createdAt: string;
  updatedAt: string;
}

const db = new Dexie("DiaryDatabase") as Dexie & {
  users: Table<User, "id">;
  entries: Table<DiaryEntry, "id">;
};

db.version(1).stores({
  users: "id, username",
  entries: "id, userId, date, createdAt, updatedAt",
});

export type { DiaryEntry };
export { db };
