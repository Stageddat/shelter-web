const PBKDF2_ITERATIONS = 600_000;
const SALT_SIZE = 16;
const IV_SIZE = 12;

// ============================================================
// UTILITIES
// ============================================================
function bufferToBase64(buffer: ArrayBuffer | Uint8Array): string {
  const bytes = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function base64ToBuffer(base64: string): Uint8Array {
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
  saltBase64: string,
): Promise<CryptoKey> {
  const salt = base64ToBuffer(saltBase64);
  const encoder = new TextEncoder();

  const baseKey = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    "PBKDF2",
    false,
    ["deriveKey"],
  );

  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: salt as BufferSource,
      iterations: PBKDF2_ITERATIONS,
      hash: "SHA-256",
    },
    baseKey,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"],
  );
}

export function generateSalt(): string {
  const salt = crypto.getRandomValues(new Uint8Array(SALT_SIZE));
  return bufferToBase64(salt);
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
): Promise<{ encryptedMasterKey: string; iv: string }> {
  const iv = crypto.getRandomValues(new Uint8Array(IV_SIZE));
  const rawMasterKey = await crypto.subtle.exportKey("raw", masterKey);

  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv: iv as BufferSource },
    passwordKey,
    rawMasterKey,
  );

  return {
    encryptedMasterKey: bufferToBase64(encrypted),
    iv: bufferToBase64(iv),
  };
}

export async function decryptMasterKey(
  encryptedMasterKeyBase64: string,
  ivBase64: string,
  passwordKey: CryptoKey,
): Promise<CryptoKey> {
  const encrypted = base64ToBuffer(encryptedMasterKeyBase64);
  const iv = base64ToBuffer(ivBase64);

  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: iv as BufferSource },
    passwordKey,
    encrypted as BufferSource,
  );

  return crypto.subtle.importKey("raw", decrypted, { name: "AES-GCM" }, true, [
    "encrypt",
    "decrypt",
  ]);
}

// ============================================================
// ENCRYPT/DECRYPT TEXT
// ============================================================
export async function encryptText(
  masterKey: CryptoKey,
  plaintext: string,
): Promise<{ ciphertext: string; iv: string }> {
  const iv = crypto.getRandomValues(new Uint8Array(IV_SIZE));
  const encoded = new TextEncoder().encode(plaintext);

  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv: iv as BufferSource },
    masterKey,
    encoded,
  );

  return {
    ciphertext: bufferToBase64(encrypted),
    iv: bufferToBase64(iv),
  };
}

export async function decryptText(
  masterKey: CryptoKey,
  ciphertextBase64: string,
  ivBase64: string,
): Promise<string> {
  const ciphertext = base64ToBuffer(ciphertextBase64);
  const iv = base64ToBuffer(ivBase64);

  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: iv as BufferSource },
    masterKey,
    ciphertext as BufferSource,
  );

  return new TextDecoder().decode(decrypted);
}
