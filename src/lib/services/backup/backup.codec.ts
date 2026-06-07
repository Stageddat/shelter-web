import {
	type BackupMeta,
	HEADER_SIZE,
	MAGIC_NUMBER,
	FORMAT_VERSION,
	type DecodedHeader,
	type BlockRaw
} from '$lib/types/app/backup';

// crc32
function crc32(bytes: Uint8Array): number {
	let crc = 0xffffffff;
	for (const byte of bytes) {
		crc ^= byte;
		for (let i = 0; i < 8; i++) {
			crc = crc & 1 ? (crc >>> 1) ^ 0xedb88320 : crc >>> 1;
		}
	}
	return (crc ^ 0xffffffff) >>> 0;
}

// ENCODE
export function encodeMetadata(meta: BackupMeta): Uint8Array {
	return new TextEncoder().encode(JSON.stringify(meta));
}

export function encodeBlock(type: number, data: Uint8Array): Uint8Array {
	// [1 tipo] [4 longitud] [N datos]
	const buffer = new ArrayBuffer(1 + 4 + data.byteLength);
	const view = new DataView(buffer);
	const u8 = new Uint8Array(buffer);

	let offset = 0;

	view.setUint8(offset, type);
	offset += 1;

	view.setUint32(offset, data.byteLength, false);
	offset += 4;

	u8.set(data, offset);

	return u8;
}

export function encodeHeader(meta: Uint8Array, totalBlocks: number, mode: number): Uint8Array {
	const buffer = new ArrayBuffer(HEADER_SIZE);
	const view = new DataView(buffer);
	const u8 = new Uint8Array(buffer);

	let offset = 0;

	// magic "SHLT"
	u8.set(MAGIC_NUMBER, offset);
	offset += 4;

	// versión formato
	view.setUint16(offset, FORMAT_VERSION, false);
	offset += 2;

	// modo
	view.setUint8(offset, mode);
	offset += 1;

	// reservado
	view.setUint8(offset, 0x00);
	offset += 1;

	// timestamp ms
	view.setBigInt64(offset, BigInt(Date.now()), false);
	offset += 8;

	// longitud metadata JSON
	view.setUint32(offset, meta.byteLength, false);
	offset += 4;

	// total bloques
	view.setUint32(offset, totalBlocks, false);
	offset += 4;

	// checksum de los primeros 28 bytes (placeholder, se sobreescribe)
	const checksumOffset = offset;
	view.setUint32(offset, 0, false);

	// aqui faltan 4 bytes para llegar a HEADER_SIZE

	// escribir checksum real
	view.setUint32(checksumOffset, crc32(u8.slice(0, HEADER_SIZE)), false);

	return u8;
}

// decode
export function decodeHeader(buffer: ArrayBuffer): DecodedHeader {
	const view = new DataView(buffer);
	const u8 = new Uint8Array(buffer);

	// verificar magic
	const magic = String.fromCharCode(u8[0], u8[1], u8[2], u8[3]);
	if (magic !== 'SHLT') throw new Error('.shelter file not valid');

	// verificar checksum
	const storedChecksum = view.getUint32(24, false);

	// reemplazar los 4 bytes del checksum con 0 para recalcular
	const copy = u8.slice(0, HEADER_SIZE);
	copy[24] = 0;
	copy[25] = 0;
	copy[26] = 0;
	copy[27] = 0;
	const expectedChecksum = crc32(copy);
	if (storedChecksum !== expectedChecksum) throw new Error('invalid checksum');

	return {
		version: view.getUint16(4, false),
		mode: view.getUint8(6),
		timestamp: view.getBigInt64(8, false),
		metaLength: view.getUint32(16, false),
		totalBlocks: view.getUint32(20, false),
		checksum: storedChecksum
	};
}

export function decodeBlocks(buffer: ArrayBuffer, offset: number): BlockRaw[] {
	const view = new DataView(buffer);
	const u8 = new Uint8Array(buffer);
	const blocks: BlockRaw[] = [];

	while (offset < buffer.byteLength) {
		const type = view.getUint8(offset);
		offset += 1;

		const length = view.getUint32(offset, false);
		offset += 4;

		const data = u8.slice(offset, offset + length);
		offset += length;
		blocks.push({ type, data });
	}

	return blocks;
}
