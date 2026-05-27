const PBKDF2_ITERATIONS = 600_000;
const SALT_SIZE = 16;
const IV_SIZE = 12;

// ============================================================
// UTILITIES
// ============================================================
export function bufferToBase64(buffer: ArrayBuffer | Uint8Array): string {
  const bytes = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export function base64ToBuffer(base64: string): Uint8Array {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

// ============================================================
// KEY DERIVATION
// ============================================================
export async function deriveKeyFromPassword(
  password: string,
  salt: Uint8Array<ArrayBuffer>,
): Promise<CryptoKey> {
  const baseKey = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveKey"],
  );

  return crypto.subtle.deriveKey(
    { name: "PBKDF2", salt, iterations: PBKDF2_ITERATIONS, hash: "SHA-256" },
    baseKey,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"],
  );
}

export function generateSalt(): Uint8Array<ArrayBuffer> {
  return crypto.getRandomValues(new Uint8Array(SALT_SIZE));
}

// ============================================================
// MASTER KEY
// ============================================================
export async function generateMasterKey(): Promise<CryptoKey> {
  return crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, true, [
    "encrypt",
    "decrypt",
  ]);
}

export async function encryptMasterKey(
  masterKey: CryptoKey,
  passwordKey: CryptoKey,
): Promise<{
  encryptedMasterKey: Uint8Array<ArrayBuffer>;
  iv: Uint8Array<ArrayBuffer>;
}> {
  const iv = crypto.getRandomValues(
    new Uint8Array(IV_SIZE),
  ) as Uint8Array<ArrayBuffer>;
  const rawMasterKey = await crypto.subtle.exportKey("raw", masterKey);

  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    passwordKey,
    rawMasterKey,
  );

  return {
    encryptedMasterKey: new Uint8Array(encrypted) as Uint8Array<ArrayBuffer>,
    iv,
  };
}

export async function decryptMasterKey(
  encryptedMasterKey: Uint8Array<ArrayBuffer>,
  iv: Uint8Array<ArrayBuffer>,
  passwordKey: CryptoKey,
): Promise<CryptoKey> {
  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv },
    passwordKey,
    encryptedMasterKey,
  );

  return crypto.subtle.importKey("raw", decrypted, { name: "AES-GCM" }, false, [
    "encrypt",
    "decrypt",
  ]);
}

// ============================================================
// ENCRYPT/DECRYPT TEXT
// ============================================================
export async function encryptText(
  masterKey: CryptoKey,
  textContent: string,
): Promise<{
  ciphertext: Uint8Array<ArrayBuffer>;
  iv: Uint8Array<ArrayBuffer>;
}> {
  const iv = crypto.getRandomValues(
    new Uint8Array(IV_SIZE),
  ) as Uint8Array<ArrayBuffer>;
  const encoded = new TextEncoder().encode(textContent);

  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    masterKey,
    encoded,
  );

  return {
    ciphertext: new Uint8Array(encrypted) as Uint8Array<ArrayBuffer>,
    iv,
  };
}
export async function decryptText(
  masterKey: CryptoKey,
  ciphertext: Uint8Array<ArrayBuffer>,
  iv: Uint8Array<ArrayBuffer>,
): Promise<string> {
  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv },
    masterKey,
    ciphertext,
  );

  return new TextDecoder().decode(decrypted);
}
