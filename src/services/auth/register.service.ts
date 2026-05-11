import { RegisterInput } from "@/schemas/register.schema";
import { db } from "../../lib/db";
import {
  generateSalt,
  deriveKeyFromPassword,
  generateMasterKey,
  encryptMasterKey,
} from "../../lib/crypto";
import { hasExistingUser } from "./hasExistingUser";

// TODO: add registration date and time
export async function register(registerInput: RegisterInput) {
  // verificar si ya hay usuario
  if (await hasExistingUser()) {
    throw new Error(
      "oops! there is already an account registered in this profile",
    );
  }

  // generar salt aleatorio
  const salt = generateSalt();

  // derivar clave con la contraseña
  const passwordKey = await deriveKeyFromPassword(registerInput.password, salt);

  // generar mk aleatoria
  const masterKey = await generateMasterKey();

  // cifrar mk con pk
  const { encryptedMasterKey, iv } = await encryptMasterKey(
    masterKey,
    passwordKey,
  );

  // registrar usuario
  const userId = await db.users.add({
    username: registerInput.username,
    encryptedMasterKey,
    salt,
    iv,
  });

  console.log("user registered with id:", userId);

  return {
    userId,
    username: registerInput.username,
    masterKey,
  };
}
