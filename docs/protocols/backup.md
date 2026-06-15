# Shelter Backup Format

> Binary format specification for `.shelter` backup files.

The Shelter backup format is a custom binary format designed for encrypted, versioned, and portable backups of diary entries. It is identified by the magic bytes `SHLT` and supports forward/backward compatibility via versioned headers and schema blocks.

---

## File Structure

```
[HEADER 32 bytes]
[META JSON (variable)]
[BLOCK 1]
[BLOCK 2]
...
[BLOCK N]
```

---

## Header (32 bytes)

| Offset | Size | Field          | Type       | Description                           |
|--------|------|----------------|------------|---------------------------------------|
| 0–3    | 4    | magic          | `u8[4]`    | Always `SHLT` (`0x53 0x48 0x4C 0x54`) |
| 4      | 1    | FORMAT_VERSION | `u8`       | Binary layout version                 |
| 5      | 1    | SCHEMA_VERSION | `u8`       | Content schema version                |
| 6      | 1    | mode           | `u8`       | Export mode (see below)               |
| 7      | 1    | compressed     | `u8`       | `0x00` = none, `0x01` = compressed    |
| 8–15   | 8    | timestamp      | `i64 BE`   | Unix timestamp in milliseconds        |
| 16–19  | 4    | metaLength     | `u32 BE`   | Length of meta JSON in bytes          |
| 20–23  | 4    | totalBlocks    | `u32 BE`   | Number of blocks following meta       |
| 24–27  | 4    | checksum       | `u32 BE`   | CRC32 of all blocks payload           |
| 28–31  | 4    | reserved       | `u8[4]`    | Reserved for future use, set to 0     |

### Export Modes

| Value  | Name         | Description                        |
|--------|--------------|------------------------------------|
| `0x01` | Full         | User block + all entry blocks      |
| `0x02` | EntriesOnly  | Entry blocks only, no user block   |

---

## Meta JSON

Immediately follows the header. Length defined by `metaLength` in the header.

```json
{
  "metaVersion": 1,
  "appVersion": "0.x.x",
  "username": "stageddat",
  "totalEntries": 42,
  "encrypted": true,
  "platform": "web"
}
```

---

## Blocks

Each block follows the meta JSON. Blocks are self-describing and can be skipped if the type is unknown.

### Block Layout

| Offset | Size | Field     | Type     | Description              |
|--------|------|-----------|----------|--------------------------|
| 0      | 1    | type      | `u8`     | Block type identifier    |
| 1–4    | 4    | length    | `u32 BE` | Length of data in bytes  |
| 5+     | N    | data      | `u8[N]`  | JSON-encoded block data  |

### Block Types

| Value  | Name  | Description          |
|--------|-------|----------------------|
| `0x01` | User  | User account data    |
| `0x02` | Entry | Diary entry data     |

---

## Block Schemas

### User Block (`0x01`)

```json
{
  "id": "uuid",
  "username": "string",
  "displayName": "string",
  "createdAt": "ISO8601",
  "updatedAt": "ISO8601",
  "encryptedMasterKey": [/* Uint8Array as number[] */],
  "salt": [/* Uint8Array as number[] */],
  "iv": [/* Uint8Array as number[] */],
  "recoveryEncryptedMasterKey": [/* Uint8Array as number[], optional */],
  "recoverySalt": [/* Uint8Array as number[], optional */],
  "recoveryIv": [/* Uint8Array as number[], optional */]
}
```

### Entry Block (`0x02`)

```json
{
  "id": "uuid",
  "userId": "uuid",
  "encryptedTitle": [/* Uint8Array as number[] */],
  "titleIv": [/* Uint8Array as number[] */],
  "encryptedContent": [/* Uint8Array as number[] */],
  "contentIv": [/* Uint8Array as number[] */],
  "date": "YYYY-MM-DD",
  "time": "HH:MM",
  "createdAt": "ISO8601",
  "updatedAt": "ISO8601",
  "wordCount": 0,
  "charCount": 0
}
```

---

## Compatibility

| FORMAT_VERSION | SCHEMA_VERSION | App Version | Notes                          |
|----------------|----------------|-------------|--------------------------------|
| 1              | 2              | 0.7.4       | Added recovery key fields      |
| 1              | 1              | 0.6.0       | Initial release                |

### Rules

- A client **must reject** files where `FORMAT_VERSION < MIN_SUPPORTED_FORMAT` or `FORMAT_VERSION > FORMAT_VERSION`.
- A client **must reject** files where `SCHEMA_VERSION < MIN_SUPPORTED_SCHEMA`.
- A client **should warn** (but not reject) files where `SCHEMA_VERSION > current`, as they may have been created by a newer version of the app.
- Unknown block types **must be skipped**, not rejected — forward compatibility.

---

## Changelog
> [!NOTE]
> **vXX.YY**<br/>
> **XX** is the meta version<br/>
> **YY** is the schema version

### v1.2 — Recovery Key Fields
**Added in app version:** `0.7.4`

Added optional recovery key fields to the User block:
- `recoveryEncryptedMasterKey` — master key encrypted with the recovery phrase derived key
- `recoverySalt` — PBKDF2 salt used to derive the key from the recovery phrase
- `recoveryIv` — AES-GCM IV used for encryption

These fields are `undefined` if the user has not generated a recovery key. Backups from SCHEMA_VERSION 1 remain fully compatible — missing fields are treated as `undefined` on import.

---

### v1.1 — Initial Format
**Added in app version:** `0.6.0`

Initial binary backup format with:
- 32-byte fixed header with magic `SHLT`
- Variable-length meta JSON block
- Self-describing binary blocks for User and Entry data
- CRC32 checksum over payload
- AES-GCM encrypted content (entries are encrypted, master key is wrapped)