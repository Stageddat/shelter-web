// src/lib/register.ts
import { RegisterValidation } from "@/schemas/register";
import { db } from "./db";
import {
  generateSalt,
  deriveKeyFromPassword,
  generateMasterKey,
  encryptMasterKey,
} from "./crypto";

export async function register(validatedData: RegisterValidation) {
  // 1. verificar si el email ya existe
  const existingUser = await db.users
    .where("email")
    .equals(validatedData.email)
    .first();

  if (existingUser) {
    throw new Error("oops this email is already registered!");
  }

  // 2. generar salt aleatorio
  const salt = generateSalt();

  // 3. derivar clave con la contraseña
  const passwordKey = await deriveKeyFromPassword(validatedData.password, salt);

  // 4. generar master key aleatoria
  const masterKey = await generateMasterKey();

  // 5. cifrar la master key con la clave derivada
  const { encryptedMasterKey, iv } = await encryptMasterKey(
    masterKey,
    passwordKey,
  );

  // 6. guardar usuario en DB
  const userId = await db.users.add({
    username: validatedData.username,
    email: validatedData.email,
    encryptedMasterKey,
    salt,
    iv,
  });

  console.log("user registered with id:", userId);

  return {
    userId,
    username: validatedData.username,
    email: validatedData.email,
    masterKey,
  };
}
