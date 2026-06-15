import { decodeBlocks, decodeHeader } from '$lib/services/backup/backup.codec';
import {
	BlockType,
	ExportMode,
	FORMAT_VERSION,
	SCHEMA_VERSION,
	MIN_SUPPORTED_FORMAT,
	HEADER_SIZE,
	type ImportResult,
	MIN_SUPPORTED_SCHEMA
} from '$lib/types/app/backup';
import { db } from '$lib/db';

// compatibility checker
export function checkImportCompatibility(buffer: ArrayBuffer): ImportResult {
	let header;
	try {
		header = decodeHeader(buffer);
	} catch {
		return { ok: false, reason: 'invalid_file' };
	}

	// bloquea los formats antiguos y los nuevos
	if (header.formatVersion < MIN_SUPPORTED_FORMAT || header.formatVersion > FORMAT_VERSION) {
		return { ok: false, reason: 'format_incompatible' };
	}

	// bloquea los schemas antiguos
	if (header.schemaVersion < MIN_SUPPORTED_SCHEMA) {
		return { ok: false, reason: 'schema_incompatible' };
	}

	// unknown export mode
	const knownModes = Object.values(ExportMode) as number[];
	if (!knownModes.includes(header.mode)) {
		return { ok: false, reason: 'export_mode_not_supported' };
	}

	// meta es mas nueva que la app, aviso pero no bloquea
	// puede perder algunos datos
	if (header.schemaVersion > SCHEMA_VERSION) {
		return { ok: true, warning: 'backup_from_newer_app' };
	}

	// misma version de formato y meta
	return { ok: true };
}

// importar
export async function importFullBackup(buffer: ArrayBuffer): Promise<void> {
	const header = decodeHeader(buffer);

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
						displayName: json.displayName ?? json.username,
						encryptedMasterKey: new Uint8Array(json.encryptedMasterKey),
						salt: new Uint8Array(json.salt),
						iv: new Uint8Array(json.iv),

						// recovery v1.2
						recoveryEncryptedMasterKey: json.recoveryEncryptedMasterKey
							? new Uint8Array(json.recoveryEncryptedMasterKey)
							: undefined,
						recoverySalt: json.recoverySalt ? new Uint8Array(json.recoverySalt) : undefined,
						recoveryIv: json.recoveryIv ? new Uint8Array(json.recoveryIv) : undefined
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
