"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function App() {
  const { masterKey, isAuthenticated } = useAuth();
  const router = useRouter();
  if (!isAuthenticated) {
    router.push("/login");
  }

  return (
    <div>
      <h1>nuke france please</h1>
      <p>{masterKey?.type}</p>
    </div>
  );
}
