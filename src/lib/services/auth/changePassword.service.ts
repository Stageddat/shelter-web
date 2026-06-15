import { db } from '$lib/db';
import {
	deriveKeyFromPassword,
	generateSalt,
	decryptMasterKey,
	encryptMasterKey
} from '$lib/crypto';
import { getUser } from '$lib/services/app/db.service';

export async function changePassword({
	oldPassword,
	newPassword,
	newPasswordConfirmation,
	masterKey
}: {
	oldPassword: string;
	newPassword: string;
	newPasswordConfirmation: string;
	masterKey: CryptoKey;
}) {
	if (newPassword !== newPasswordConfirmation) {
		throw new Error('passwords do not match');
	}

	const user = await getUser();
	if (!user) throw new Error('no user found');

	// verificar que la contraseña antigua sea correcta
	const oldPasswordKey = await deriveKeyFromPassword(oldPassword, user.salt);
	try {
		await decryptMasterKey(user.encryptedMasterKey, user.iv, oldPasswordKey);
	} catch {
		throw new Error('current password is incorrect');
	}

	// reencriptar con el nuevo password
	const newSalt = generateSalt();
	const newPasswordKey = await deriveKeyFromPassword(newPassword, newSalt);
	const { encryptedMasterKey, iv } = await encryptMasterKey(masterKey, newPasswordKey);

	await db.users.update(user.id, {
		encryptedMasterKey,
		salt: newSalt,
		iv,
		updatedAt: new Date().toISOString()
	});
}
