import { getUser } from "@/lib/db.utils";
import { decryptMasterKey, deriveKeyFromPassword } from "@/lib/crypto";

export async function login(password: string): Promise<CryptoKey> {
  const user = await getUser();

  if (!user) {
    throw new Error("no account found");
  }

  const passwordKey = await deriveKeyFromPassword(password, user.salt);

  try {
    return await decryptMasterKey(
      user.encryptedMasterKey,
      user.iv,
      passwordKey,
    );
  } catch {
    throw new Error("incorrect password");
  }
}
