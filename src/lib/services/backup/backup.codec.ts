import {
	type BackupMeta,
	type DecodedHeader,
	type BlockRaw,
	HEADER_SIZE,
	MAGIC_NUMBER,
	FORMAT_VERSION,
	META_VERSION,
	Compressed
} from '$lib/types/app/backup';

// CRC32 checksum
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

	view.setUint8(0, type);
	view.setUint32(1, data.byteLength, false);
	u8.set(data, 5);

	return u8;
}

export function encodeHeader(meta: Uint8Array, totalBlocks: number, mode: number): Uint8Array {
	const buffer = new ArrayBuffer(HEADER_SIZE);
	const view = new DataView(buffer);
	const u8 = new Uint8Array(buffer);

	// [0-3] magic
	u8.set(MAGIC_NUMBER, 0);

	// [4] FORMAT_VERSION
	view.setUint8(4, FORMAT_VERSION);

	// [5] META_VERSION
	view.setUint8(5, META_VERSION);

	// [6] mode
	view.setUint8(6, mode);

	// [7] compressed (0x00 de momento)
	view.setUint8(7, Compressed.No);

	// [8-15] timestamp
	view.setBigInt64(8, BigInt(Date.now()), false);

	// [16-19] metaLength
	view.setUint32(16, meta.byteLength, false);

	// [20-23] totalBlocks
	view.setUint32(20, totalBlocks, false);

	// [24-27] checksum reservado 0x00000000
	view.setUint32(24, 0, false);

	// [28-31] reservado 0x00000000
	view.setUint32(28, 0, false);

	// CRC32 calculado sobre los 32 bytes del header
	view.setUint32(24, crc32(u8), false);

	return u8;
}

// decode
export function decodeHeader(buffer: ArrayBuffer): DecodedHeader {
	const view = new DataView(buffer);
	const u8 = new Uint8Array(buffer);

	// verificar magic
	const magic = String.fromCharCode(u8[0], u8[1], u8[2], u8[3]);
	if (magic !== 'SHLT') throw new Error('invalid_file');

	// verificar checksum
	// poner checksum a 0 y recalcularlo
	const copy = u8.slice(0, HEADER_SIZE);
	copy[24] = 0;
	copy[25] = 0;
	copy[26] = 0;
	copy[27] = 0;
	const expectedChecksum = crc32(copy);
	const storedChecksum = view.getUint32(24, false);
	if (storedChecksum !== expectedChecksum) throw new Error('invalid_checksum');

	return {
		formatVersion: view.getUint8(4),
		metaVersion: view.getUint8(5),
		mode: view.getUint8(6),
		compressed: view.getUint8(7),
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
