> **Note:** This document was drafted with AI assistance and reviewed,
> corrected, and approved by a human maintainer before being merged.

# Shelter Data Schema

> Defines what Shelter entities (Entry, User) look like. Says nothing about
> how they're packaged into a file, or how they're transmitted over the
> network.

This document exists because both the **backup format** (`.shelter`) and
the **sync protocol** need to send the same thing: an Entry, a User.
Instead of each one defining its own version of "what an Entry is," both
point here.

`SCHEMA_VERSION` lives in this document. It increments when the **shape**
of an entity changes — a field is added, removed, or its type changes. It
does not increment because of anything happening in the backup format or
the sync protocol.

---

## Current SCHEMA_VERSION: `2`

## Entry

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

## User

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

---

## Changelog

### SCHEMA_VERSION 2
Added optional recovery key fields to `User`:
- `recoveryEncryptedMasterKey`
- `recoverySalt`
- `recoveryIv`

Fields are `undefined` if the user has not generated a recovery key. Any
consumer (backup, sync, API) receiving `SCHEMA_VERSION 1` must treat these
three fields as `undefined`.

### SCHEMA_VERSION 1
Initial version. `Entry` and `User` as shown above, without recovery key
fields.

---

## Rules for anyone consuming this schema (backup, sync, API...)

- If you're serializing an Entry or User, declare which `SCHEMA_VERSION`
  you're using.
- If you receive a `SCHEMA_VERSION` lower than what you support: fill new
  fields as `undefined`/absent, don't break.
- If you receive a `SCHEMA_VERSION` higher than what you support: warn,
  don't reject outright if you can safely ignore fields you don't
  recognize.