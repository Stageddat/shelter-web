import { db } from "@/lib/db";

export async function checkUserExists(): Promise<boolean> {
  const userCount = await db.users.count();
  return userCount > 0;
}
