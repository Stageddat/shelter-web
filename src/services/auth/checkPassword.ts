import { decryptMasterKey, deriveKeyFromPassword } from "@/lib/crypto";

export async function checkPassword(
  password: string,
  saltBase64: string,
  encryptedMasterKeyBase64: string,
  ivBase64: string,
): Promise<boolean> {
  try {
    const passwordKey = await deriveKeyFromPassword(password, saltBase64);

    await decryptMasterKey(encryptedMasterKeyBase64, ivBase64, passwordKey);

    return true;
  } catch {
    return false;
  }
}
