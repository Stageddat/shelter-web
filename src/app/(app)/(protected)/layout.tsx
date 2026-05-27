"use client";

import { useAuth } from "@/contexts/auth.context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { EntriesProvider } from "@/contexts/EntriesContext";
import { Sidebar } from "@/components/app/Sidebar";

/**
 * layout protegido para /app y subrutas.
 * redirige a /login si no hay sesión activa.
 */
function ProtectedContent({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;

  return <EntriesProvider>{children}</EntriesProvider>;
}

/**
 * estructura visual fija para todas las páginas de /app:
 * el sidebar esta aqui para que se muestre en todas las páginas de la app
 */
export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedContent>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />

        <div className="flex flex-1 flex-col overflow-hidden">{children}</div>
      </div>
    </ProtectedContent>
  );
}
