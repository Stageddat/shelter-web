"use client";
import { AuthProvider } from "@/contexts/AuthContext";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
