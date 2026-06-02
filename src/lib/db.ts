import { Dexie, type Table } from 'dexie';

export interface User {
	id: string;
	username: string;

	// metadata
	createdAt: string;
	updatedAt: string;

	// datos de encriptacion
	encryptedMasterKey: Uint8Array<ArrayBuffer>;
	salt: Uint8Array<ArrayBuffer>;
	iv: Uint8Array<ArrayBuffer>;
}

interface DiaryEntry {
	id: string;
	userId: string;

	encryptedTitle: Uint8Array;
	titleIv: Uint8Array;

	encryptedContent: Uint8Array;
	contentIv: Uint8Array;

	date: string;
	time: string;
	createdAt: string;
	updatedAt: string;
}

const db = new Dexie('DiaryDatabase') as Dexie & {
	users: Table<User, 'id'>;
	entries: Table<DiaryEntry, 'id'>;
};

db.version(1).stores({
	users: 'id, username',
	entries: 'id, userId, date, createdAt, updatedAt'
});

export type { DiaryEntry };
export { db };
