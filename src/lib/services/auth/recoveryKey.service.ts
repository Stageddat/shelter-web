import { deriveKeyFromPassword, encryptMasterKey, decryptMasterKey } from '$lib/crypto';
import { db } from '$lib/db';
import { getUser } from '$lib/services/app/db.service';
import { generateMnemonic, validateMnemonic } from '@scure/bip39';
import { wordlist } from '@scure/bip39/wordlists/english.js';

function generateRecoveryPhrase(): string {
	return generateMnemonic(wordlist, 128);
}

function phraseToPassword(phrase: string): string {
	return phrase.trim().toLowerCase().replace(/\s+/g, ' ');
}

export function validateRecoveryPhrase(phrase: string): boolean {
	return validateMnemonic(phraseToPassword(phrase), wordlist);
}

export async function generateRecoveryFile(masterKey: CryptoKey): Promise<string> {
	const phrase = generateRecoveryPhrase();
	const salt = crypto.getRandomValues(new Uint8Array(16));

	const derivedKey = await deriveKeyFromPassword(phraseToPassword(phrase), salt);
	const { encryptedMasterKey, iv } = await encryptMasterKey(masterKey, derivedKey);

	const user = await getUser();
	if (!user) throw new Error('no user found');

	await db.users.update(user.id, {
		recoveryEncryptedMasterKey: encryptedMasterKey,
		recoverySalt: salt,
		recoveryIv: iv,
		updatedAt: new Date().toISOString()
	});

	return phrase;
}

export function downloadRecoveryFile(phrase: string, username: string): void {
	const blob = new Blob([phrase], { type: 'text/plain' });
	const url = URL.createObjectURL(blob);
	const a = document.createElement('a');
	a.href = url;
	a.download = `shelter-${username}.key`;
	a.click();
	URL.revokeObjectURL(url);
}

export async function recoverWithPhrase(phrase: string, newPassword: string): Promise<void> {
	if (!validateRecoveryPhrase(phrase)) {
		throw new Error('invalid recovery phrase');
	}

	const user = await getUser();
	if (!user) throw new Error('no user found');

	if (!user.recoveryEncryptedMasterKey || !user.recoverySalt || !user.recoveryIv) {
		throw new Error('no recovery key configured for this account');
	}

	let masterKey: CryptoKey;
	try {
		const derivedKey = await deriveKeyFromPassword(phraseToPassword(phrase), user.recoverySalt);
		masterKey = await decryptMasterKey(
			user.recoveryEncryptedMasterKey,
			user.recoveryIv,
			derivedKey
		);
	} catch {
		throw new Error('invalid recovery phrase');
	}

	const newSalt = crypto.getRandomValues(new Uint8Array(16));
	const newPasswordKey = await deriveKeyFromPassword(newPassword, newSalt);
	const { encryptedMasterKey, iv } = await encryptMasterKey(masterKey, newPasswordKey);

	await db.users.update(user.id, {
		encryptedMasterKey,
		salt: newSalt,
		iv,
		updatedAt: new Date().toISOString()
	});
}
