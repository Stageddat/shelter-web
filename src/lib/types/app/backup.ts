export const MAGIC_NUMBER = new Uint8Array([0x53, 0x48, 0x4c, 0x54]); // "SHLT"
export const FORMAT_VERSION = 1;
export const HEADER_SIZE = 32;

export const BlockType = {
	User: 0x01,
	Entry: 0x02
} as const;

export const ExportMode = {
	Full: 0x01,
	EntriesOnly: 0x02
} as const;

export interface BackupMeta {
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
	version: number;
	mode: number;
	timestamp: bigint;
	metaLength: number;
	totalBlocks: number;
	checksum: number;
}
