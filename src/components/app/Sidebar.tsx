"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEntries } from "@/contexts/EntriesContext";
import { Entry } from "@/services/app/entryService";

const EntryItem = ({
  entry,
  active = false,
}: {
  entry: Entry;
  active?: boolean;
}) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(`/app/entries/${entry.id}`, { scroll: false });
  };

  return (
    <div
      onClick={handleClick}
      className={`group flex cursor-pointer items-start gap-3 rounded-xl px-2 py-2 transition-all ${
        active
          ? "bg-primary/10 text-primary"
          : "hover:bg-accent text-muted-foreground hover:text-foreground"
      }`}
    >
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium lowercase">{entry.title}</p>
        <p className="text-muted-foreground/70 text-xs">{entry.time}</p>
      </div>
    </div>
  );
};

export function Sidebar() {
  const pathname = usePathname();
  const { groupedEntries, isLoading } = useEntries();

  return (
    <aside className="bg-card/50 flex h-screen w-72 flex-col border-r backdrop-blur-md">
      <div className="flex h-full flex-col overflow-hidden">
        {/* logo */}
        <div className="flex items-center gap-3 px-8 py-8">
          <div>
            <h1 className="text-xl font-semibold tracking-tight lowercase">
              shelter
            </h1>
            <p className="text-muted-foreground text-[10px] tracking-[0.2em]">
              private space
            </p>
          </div>
        </div>

        {/* nav */}
        <ScrollArea className="flex-1 overflow-hidden px-8">
          <nav className="space-y-6">
            {isLoading ? (
              <div className="text-muted-foreground py-4 text-center text-sm">
                loading...
              </div>
            ) : groupedEntries.length === 0 ? (
              <div className="text-muted-foreground py-4 text-center text-sm">
                no entries yet
              </div>
            ) : (
              groupedEntries.map((group) => (
                <div key={group.date}>
                  <p className="text-muted-foreground/50 mb-3 text-[11px] font-bold tracking-widest lowercase">
                    {group.displayDate}
                  </p>
                  <div className="space-y-1">
                    {group.entries.map((entry) => (
                      <EntryItem
                        key={entry.id}
                        entry={entry}
                        active={pathname === `/app/entries/${entry.id}`}
                      />
                    ))}
                  </div>
                </div>
              ))
            )}
          </nav>
        </ScrollArea>

        {/* new entry */}
        <div className="mt-auto px-8 pt-4 pb-2">
          <Button
            asChild
            className="w-full gap-2 rounded-xl py-6 lowercase shadow-sm"
          >
            <Link href="/app/new">
              <PlusCircle className="h-5 w-5" />
              <span className="text-sm tracking-tight">new entry</span>
            </Link>
          </Button>
        </div>
      </div>
    </aside>
  );
}
