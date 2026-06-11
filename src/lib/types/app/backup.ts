export const MAGIC_NUMBER = new Uint8Array([0x53, 0x48, 0x4c, 0x54]); // "SHLT"

export const FORMAT_VERSION = 1;
export const META_VERSION = 1;
export const MIN_SUPPORTED_FORMAT = 1;
export const MIN_SUPPORTED_META = 1;
export const HEADER_SIZE = 32;

// layout del header
//
// [0-3]   magic           4 bytes  "SHLT"
// [4]     FORMAT_VERSION  1 byte
// [5]     META_VERSION    1 byte
// [6]     mode            1 byte
// [7]     compressed      1 byte   (0x00 = no, 0x01 = sí)
// [8-15]  timestamp       8 bytes
// [16-19] metaLength      4 bytes
// [20-23] totalBlocks     4 bytes
// [24-27] checksum        4 bytes
// [28-31] reservat        4 bytes

export const BlockType = {
	User: 0x01,
	Entry: 0x02
} as const;

export const ExportMode = {
	Full: 0x01,
	EntriesOnly: 0x02
} as const;

export const Compressed = {
	No: 0x00,
	Yes: 0x01
} as const;

export interface BackupMeta {
	metaVersion: number;
	appVersion: string;
	username: string;
	totalEntries: number;
	encrypted: boolean;
	platform: string;
}

export interface BlockRaw {
	type: number;
	data: Uint8Array;
}

export interface DecodedHeader {
	formatVersion: number;
	metaVersion: number;
	mode: number;
	compressed: number;
	timestamp: bigint;
	metaLength: number;
	totalBlocks: number;
	checksum: number;
}

export type ImportResult =
	| { ok: true; warning?: 'backup_from_newer_app' }
	| {
			ok: false;
			reason:
				| 'format_incompatible'
				| 'export_mode_not_supported'
				| 'invalid_file'
				| 'meta_incompatible';
	  };
