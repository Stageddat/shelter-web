"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useEntries } from "@/contexts/EntriesContext";

// TODO: mostrar una galeria de entradas
export default function EntriesPage() {
  const router = useRouter();
  const { groupedEntries, isLoading } = useEntries();

  useEffect(() => {
    // si hay entradas, redirigir a la primera
    if (!isLoading && groupedEntries.length > 0) {
      const firstEntry = groupedEntries[0].entries[0];
      if (firstEntry?.id) {
        router.replace(`/app/entries/${firstEntry.id}`);
      }
    } else if (!isLoading && groupedEntries.length === 0) {
      // si no hay entradas, ir a la página principal
      router.replace("/app");
    }
  }, [groupedEntries, isLoading, router]);

  return null;
}
