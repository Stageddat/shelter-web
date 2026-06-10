import { type RegisterInput } from '$lib/schemas/register.schema';
import { db } from '$lib/db';
import {
	generateSalt,
	deriveKeyFromPassword,
	generateMasterKey,
	encryptMasterKey
} from '$lib/crypto';
import { hasExistingUser } from '$lib/services/app/db.service';

export async function register(registerInput: RegisterInput) {
	if (await hasExistingUser()) {
		throw new Error('there is already an account registered in this profile');
	}

	const salt = generateSalt();
	const passwordKey = await deriveKeyFromPassword(registerInput.password, salt);
	const masterKey = await generateMasterKey();
	const { encryptedMasterKey, iv } = await encryptMasterKey(masterKey, passwordKey);

	try {
		await db.users.add({
			id: crypto.randomUUID(),
			username: registerInput.username,
			displayName: registerInput.username,

			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),

			encryptedMasterKey,
			salt,
			iv
		});
	} catch {
		throw new Error('failed to save account, please try again');
	}

	return { masterKey };
}
