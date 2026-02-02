"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { EntriesProvider } from "@/contexts/EntriesContext";
import { Sidebar } from "@/components/app/Sidebar";
import { Header } from "@/components/app/Header";
import NoiseBackground from "@/components/shared/NoiseBackground";

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

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedContent>
      <div className="flex h-screen overflow-hidden">
        <NoiseBackground />
        <Sidebar />

        <div className="flex flex-1 flex-col overflow-hidden">
          <Header />

          {children}
        </div>
      </div>
    </ProtectedContent>
  );
}
