import { Dexie, type EntityTable } from 'dexie';

export interface User {
	id: string;
	username: string;
	displayName?: string;

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
	wordCount?: number;
	charCount?: number;
}

const db = new Dexie('DiaryDatabase') as Dexie & {
	users: EntityTable<User, 'id'>;
	entries: EntityTable<DiaryEntry, 'id'>;
};

db.version(1).stores({
	users: 'id, username',
	entries: 'id, userId, date, createdAt, updatedAt'
});

db.version(2)
	.stores({
		users: 'id, username',
		entries: 'id, userId, date, createdAt, updatedAt'
	})
	.upgrade(async (tx) => {
		await tx
			.table('users')
			.toCollection()
			.modify((user) => {
				if (!user.displayName) {
					user.displayName = user.username;
				}
			});

		await tx
			.table('entries')
			.toCollection()
			.modify((entry) => {
				if (!entry.wordCount) {
					entry.wordCount = 0;
				}
				if (!entry.charCount) {
					entry.charCount = 0;
				}
			});
	});

export type { DiaryEntry };
export { db };
