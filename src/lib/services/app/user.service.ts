import { db } from '$lib/db';

export async function updateDisplayName(userId: string, displayName: string): Promise<void> {
	await db.users.update(userId, { displayName });
}
