import { getUser } from '$lib/services/app/db.service';
import { decryptMasterKey, deriveKeyFromPassword } from '$lib/crypto';

export async function login(password: string): Promise<CryptoKey> {
	const user = await getUser();

	if (!user) {
		throw new Error('no account found');
	}

	const passwordKey = await deriveKeyFromPassword(password, user.salt);

	// intenta desencriptar la llave,
	// si falla, significa que la contraseña es incorrecta
	try {
		return await decryptMasterKey(user.encryptedMasterKey, user.iv, passwordKey);
	} catch {
		throw new Error('incorrect password');
	}
}
