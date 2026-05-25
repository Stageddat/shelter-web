"use client";
import { AuthProvider } from "@/contexts/AuthContext";
/**
 * layout para todo /app, (auth) y (protected)
 * se inicia el contexto de auth
 */
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
