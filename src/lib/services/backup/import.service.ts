import { decodeBlocks, decodeHeader } from '$lib/services/backup/backup.codec';
import { BlockType, FORMAT_VERSION, HEADER_SIZE } from '$lib/types/app/backup';
import { db } from '$lib/db';

export async function importFullBackup(buffer: ArrayBuffer): Promise<void> {
	// validar header
	const header = decodeHeader(buffer);
	if (header.version !== FORMAT_VERSION) {
		throw new Error(`versión no soportada: v${header.version}`);
	}

	// leer meta y bloques
	const blocks = decodeBlocks(buffer, HEADER_SIZE + header.metaLength);

	// borrar todo lo que hay
	await db.transaction('rw', db.users, db.entries, async () => {
		await db.users.clear();
		await db.entries.clear();

		for (const block of blocks) {
			const json = JSON.parse(new TextDecoder().decode(block.data));

			switch (block.type) {
				case BlockType.User:
					await db.users.add({
						...json,
						encryptedMasterKey: new Uint8Array(json.encryptedMasterKey),
						salt: new Uint8Array(json.salt),
						iv: new Uint8Array(json.iv)
					});
					break;
				case BlockType.Entry:
					await db.entries.add({
						...json,
						encryptedTitle: new Uint8Array(json.encryptedTitle),
						titleIv: new Uint8Array(json.titleIv),
						encryptedContent: new Uint8Array(json.encryptedContent),
						contentIv: new Uint8Array(json.contentIv)
					});
					break;
				default:
					// bloque desconocido, ignorar
					break;
			}
		}
	});
}
