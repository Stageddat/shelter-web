"use client";

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
    <div className="p-6">
      <h1 className="text-2xl font-bold">{entry.title}</h1>
      <p className="text-sm text-gray-500">
        {entry.date} - {entry.time}
      </p>
      {entry.content && <p className="mt-4">{entry.content}</p>}
    </div>
  );
}
