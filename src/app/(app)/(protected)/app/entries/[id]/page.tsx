"use client";

import EntryView from "@/components/app/entries/EntryView";
import { useEntry } from "@/hooks/app/useEntry";
import { useParams } from "next/navigation";

export default function EntryContent() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const { entry, isLoading, error } = useEntry(id || "");

  // fallos
  if (!id) return <div>no id</div>; // id tiene q ir primero para ver si existe
  if (error) return <div>{error}</div>;
  if (isLoading) return <div>loading...</div>; // en caso q exista, se pone loading
  if (!entry) return <div>not found</div>;

  return (
    <main className="flex h-full flex-col px-6 py-3">
      <EntryView entry={entry}></EntryView>
    </main>
  );
}
