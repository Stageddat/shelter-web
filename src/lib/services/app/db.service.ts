import { db } from '$lib/db';

export async function purgeAllData(): Promise<void> {
	await db.transaction('rw', db.users, db.entries, async () => {
		await db.users.clear();
		await db.entries.clear();
	});
}

export async function getUser() {
	const user = await db.users.limit(1).toArray();
	return user[0];
}

export async function hasExistingUser(): Promise<boolean> {
	const userCount = await db.users.count();
	return userCount > 0;
}
