import { db } from '$lib/db';
import { ExportMode, BlockType, type BackupMeta } from '$lib/types/app/backup';
import { encodeHeader, encodeBlock, encodeMetadata } from '$lib/services/backup/backup.codec';

export async function exportFullBackup(): Promise<ArrayBuffer> {
	const enc = new TextEncoder();

	// leer datos de db
	const user = await db.users.toCollection().first();
	if (!user) throw new Error('no hay usuario para exportar');

	const entries = await db.entries.where('userId').equals(user.id).toArray();

	// serializar user
	const userBytes = enc.encode(
		JSON.stringify({
			...user,
			encryptedMasterKey: Array.from(user.encryptedMasterKey),
			salt: Array.from(user.salt),
			iv: Array.from(user.iv)
		})
	);

	// serializar entries
	const entryBlocks = entries.map((entry) =>
		enc.encode(
			JSON.stringify({
				...entry,
				encryptedTitle: Array.from(entry.encryptedTitle),
				titleIv: Array.from(entry.titleIv),
				encryptedContent: Array.from(entry.encryptedContent),
				contentIv: Array.from(entry.contentIv)
			})
		)
	);

	// metadata
	const meta: BackupMeta = {
		appVersion: '0.1.0',
		username: user.username,
		totalEntries: entries.length,
		encrypted: true,
		platform: 'web'
	};
	const metaBytes = encodeMetadata(meta);

	// bloques
	const totalBlocks = 1 + entryBlocks.length; // 1 user + N entries
	const userBlock = encodeBlock(BlockType.User, userBytes);
	const encodedEntryBlocks = entryBlocks.map((e) => encodeBlock(BlockType.Entry, e));

	// header
	const header = encodeHeader(metaBytes, totalBlocks, ExportMode.Full);

	// ensamblar todo
	const totalSize =
		header.byteLength +
		metaBytes.byteLength +
		userBlock.byteLength +
		encodedEntryBlocks.reduce((acc, b) => acc + b.byteLength, 0);

	const result = new Uint8Array(totalSize);
	let offset = 0;

	// header ensamblado
	result.set(header, offset);
	offset += header.byteLength;

	// metadatos json ensamblados
	result.set(metaBytes, offset);
	offset += metaBytes.byteLength;

	// user ensamblado
	result.set(userBlock, offset);
	offset += userBlock.byteLength;

	// entries
	for (const block of encodedEntryBlocks) {
		result.set(block, offset);
		offset += block.byteLength;
	}

	return result.buffer;
}

export function exportEntriesOnlyBackup() {
	// TODO
}
