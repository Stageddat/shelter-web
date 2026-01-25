// @/services/auth/login.ts
import { getUser } from "@/services/auth/getUser";
import { decryptMasterKey, deriveKeyFromPassword } from "@/lib/crypto";

export interface LoginCredentials {
  email?: string;
  password: string;
}

export interface LoginResult {
  success: boolean;
  masterKey?: CryptoKey;
}

export async function login(
  credentials: LoginCredentials,
): Promise<LoginResult> {
  try {
    const user = await getUser();

    if (!user) {
      throw new Error("no user found");
    }

    // comprovar correo
    if (credentials.email && user.email !== credentials.email) {
      throw new Error("email does not match");
    }

    // derivar clave
    const passwordKey = await deriveKeyFromPassword(
      credentials.password,
      user.salt,
    );

    // intentar desencriptar la masterKey
    const masterKey = await decryptMasterKey(
      user.encryptedMasterKey,
      user.iv,
      passwordKey,
    );

    // todo bien aqui??? la contraseña es correcta
    return {
      success: true,
      masterKey,
    };
  } catch (error) {
    console.error("login error:", error);
    return {
      success: false,
    };
  }
}
