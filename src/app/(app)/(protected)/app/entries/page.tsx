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
    <main className="space-y-2 p-6">
      {entries.map((entry) => (
        <Link
          key={entry.id}
          href={`/app/entries/${entry.id}`}
          className="hover:bg-accent block rounded-xl p-4"
        >
          <p className="font-medium">{entry.title}</p>
          <p className="text-muted-foreground text-sm">
            {entry.date} · {entry.time}
          </p>
        </Link>
      ))}
    </main>
  );
}
