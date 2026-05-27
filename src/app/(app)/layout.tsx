"use client";
import { AuthProvider } from "@/contexts/auth.context";

/**
 * layout raíz de la app.
 * envuelve todo con AuthProvider para que login, signup
 * y las páginas protegidas tengan acceso a la sesión.
 */
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
