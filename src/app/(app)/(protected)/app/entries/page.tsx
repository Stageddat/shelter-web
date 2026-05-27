"use client";

import { useEntries } from "@/contexts/EntriesContext";
import Link from "next/link";

export default function EntriesPage() {
  const { entries, isLoading } = useEntries();

  if (isLoading) return <p>loading...</p>;

  if (entries.length === 0) {
    return <p>no entries yet</p>;
  }

  return (
    <main>
      {entries.map((entry) => (
        <Link key={entry.id} href={`/app/entries/${entry.id}`}>
          {entry.id}
          {/* Arreglar esta putisima mierda  */}
          <br />
        </Link>
      ))}
    </main>
  );
}
