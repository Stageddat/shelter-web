"use client";

import { useEntries } from "@/contexts/EntriesContext";
import EntryCard from "@/components/app/entries/EntryCard";
import EmptyState from "@/components/app/entries/EmptyState";
import EntriesHeader from "@/components/app/entries/EntriesHeader";
import LoadingText from "@/components/shared/LoadingText";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function EntriesPage() {
  const { entries, isLoading } = useEntries();

  if (isLoading)
    return (
      <div className="text-muted-foreground flex h-full items-center justify-center text-6xl">
        <LoadingText />
      </div>
    );

  return (
    <main className="flex h-full flex-col px-10 pt-12">
      <EntriesHeader entriesCount={entries.length} />
      <ScrollArea className="min-h-0 flex-1">
        {" "}
        {entries.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="mr-3 space-y-2 pb-6">
            {entries.map((entry) => (
              <EntryCard key={entry.id} entry={entry} />
            ))}
          </div>
        )}
      </ScrollArea>
    </main>
  );
}
