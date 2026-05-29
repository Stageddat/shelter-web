"use client";

import EntryView from "@/components/app/entries/EntryView";
import LoadingText from "@/components/shared/LoadingText";
import { useEntry } from "@/hooks/app/useEntry";
import { useParams } from "next/navigation";

export default function EntryContent() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const { entry, isLoading, error } = useEntry(id || "");

  // fallos
  if (!id) return <Centered>no id</Centered>; // id tiene q ir primero para ver si existe
  if (error) return <Centered>{error}</Centered>; // comprobar si hay error
  if (isLoading)
    return <Centered>{LoadingText({ text: "loading entry" })}</Centered>; // en caso q exista, se pone loading
  if (!entry) return <Centered>entry not found</Centered>; // en caso raro que no se encuentra?

  return (
    <main className="flex h-full flex-col px-12 py-6">
      <EntryView entry={entry} />
    </main>
  );
}

function Centered({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-foreground flex h-full w-full items-center justify-center text-4xl tracking-wide">
      {children}
    </div>
  );
}
