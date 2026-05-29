import Link from "next/link";
import { DecryptedEntry, deleteEntry } from "@/services/app/entry.service";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useEntries } from "@/contexts/EntriesContext";

export default function EntryCard({ entry }: { entry: DecryptedEntry }) {
  const { refreshEntries } = useEntries();

  function handleDelete(id: string) {
    if (
      confirm(
        `are you sure you want to delete \"${entry.title}\"?\nthis entry will be lost forever! (a long time!)`,
      )
    ) {
      deleteEntry(id);
      refreshEntries();
    }
  }

  return (
    <Link
      href={`/app/entries/${entry.id}`}
      className="hover:bg-accent border-border group flex items-center rounded-xl border p-4 transition-all"
    >
      <div className="flex-1">
        <p className="text-xl">{entry.title}</p>
        <p className="text-muted-foreground mt-1 text-base">
          {entry.date} · {entry.time}
        </p>
      </div>

      <Button
        variant="ghost"
        className="hover:text-destructive hover:bg-destructive/20 mr-2 hidden h-12 w-12 cursor-pointer items-center justify-center rounded-full p-0! group-hover:flex"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          handleDelete(entry.id);
        }}
      >
        <Trash className="h-6! w-6! stroke-2" />
      </Button>
    </Link>
  );
}
