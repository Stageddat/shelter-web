import { db } from "@/lib/db";

export async function getUser() {
  const user = await db.users.limit(1).toArray();
  return user[0];
}
