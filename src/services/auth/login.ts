import { checkPassword } from "./checkPassword";
import { getUser } from "@/services/auth/getUser";

export interface LoginCredentials {
  email?: string;
  password: string;
}

export async function login(credentials: LoginCredentials): Promise<boolean> {
  try {
    const user = await getUser();

    if (!user) {
      throw new Error("No user found");
    }

    // si se proporciona email, verificar que coincida
    if (credentials.email && user.email !== credentials.email) {
      throw new Error("email does not match");
    }

    // verificar la contraseña
    const isPasswordValid = await checkPassword(
      credentials.password,
      user.salt,
      user.encryptedMasterKey,
      user.iv,
    );

    return isPasswordValid;
  } catch (error) {
    console.error("login error:", error);
    return false;
  }
}
