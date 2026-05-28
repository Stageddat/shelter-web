import Link from "next/link";
import { DecryptedEntry } from "@/services/app/entry.service";

export default function EntryCard({ entry }: { entry: DecryptedEntry }) {
  return (
    <Link
      href={`/app/entries/${entry.id}`}
      className="hover:bg-accent border-border group block rounded-xl border p-4 transition-all"
    >
      <p className="font-medium lowercase">{entry.title}</p>
      <p className="text-muted-foreground mt-1 text-xs">
        {entry.date} · {entry.time}
      </p>
    </Link>
  );
}
