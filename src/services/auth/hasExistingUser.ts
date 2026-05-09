import { db } from "@/lib/db";

export async function hasExistingUser(): Promise<boolean> {
  const userCount = await db.users.count();
  return userCount > 0;
}
