"use client";

import { useEntries } from "@/contexts/EntriesContext";
import EntryCard from "@/components/app/entries/EntryCard";
import EmptyState from "@/components/app/entries/EmptyState";
import EntriesHeader from "@/components/app/entries/EntriesHeader";
import LoadingText from "@/components/shared/LoadingText";

export default function EntriesPage() {
  const { entries, isLoading } = useEntries();

  if (isLoading)
    return (
      <div className="text-muted-foreground flex h-full items-center justify-center text-6xl">
        <LoadingText />
      </div>
    );

  return (
    <main className="screen flex h-full flex-col overflow-y-auto px-10 py-12">
      <EntriesHeader entriesCount={entries.length} />
      {entries.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-2 pb-6">
          {entries.map((entry) => (
            <EntryCard key={entry.id} entry={entry} />
          ))}
        </div>
      )}
    </main>
  );
}
