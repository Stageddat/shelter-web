"use client";

import { Editor } from "@/components/app/editor/Editor";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth.context";
import { useEntries } from "@/contexts/EntriesContext";
import { ArrowLeft, Pencil, X, Check } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";
import { DecryptedEntry, updateEntry } from "@/services/app/entry.service";

export default function EntryView({
  entry: initialEntry,
}: {
  entry: DecryptedEntry;
}) {
  const { masterKey } = useAuth();
  const { refreshEntries } = useEntries();

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(initialEntry.title);

  const [displayedEntry, setDisplayedEntry] = useState(initialEntry);

  const contentRef = useRef(initialEntry.content ?? "");

  const handleSave = async () => {
    if (!masterKey) return;

    await updateEntry(initialEntry.id, masterKey, title, contentRef.current);
    await refreshEntries();

    setDisplayedEntry({
      ...displayedEntry,
      title: title,
      content: contentRef.current,
      updatedAt: new Date().toISOString(),
    });

    setIsEditing(false);
  };

  const handleCancel = () => {
    setTitle(displayedEntry.title);
    contentRef.current = displayedEntry.content ?? "";
    setIsEditing(false);
  };

  return (
    <>
      {/* header */}
      <div className="mt-auto mb-4 flex flex-row items-center justify-between">
        <Button
          variant="ghost"
          asChild
          className="flex items-center px-3! py-6! text-2xl"
        >
          <Link href="/app/entries">
            <ArrowLeft className="mt-1 -mr-0.5" />
            entries
          </Link>
        </Button>

        {isEditing ? (
          <div className="flex gap-2">
            <Button
              variant="secondary"
              onClick={handleCancel}
              className="flex h-10! w-10! items-center justify-center rounded-full"
            >
              <X className="h-5! w-5! stroke-3!" />
            </Button>
            <Button
              variant="default"
              onClick={handleSave}
              className="flex h-10! w-10! items-center justify-center rounded-full"
            >
              <Check className="h-5! w-5! stroke-3!" />
            </Button>
          </div>
        ) : (
          <Button
            variant="default"
            onClick={() => setIsEditing(true)}
            className="flex h-10! w-10! items-center justify-center rounded-full"
          >
            <Pencil className="h-5! w-5! stroke-3!" />
          </Button>
        )}
      </div>

      {/* título */}
      <div className="px-2">
        <input
          placeholder="untitled entry"
          type="text"
          value={title}
          disabled={!isEditing}
          onChange={(e) => setTitle(e.target.value)}
          className="placeholder:text-muted-foreground border-accent mb-4 w-full border-b-2 bg-transparent text-2xl outline-none"
        />
      </div>

      {/* editor */}
      <div className="flex min-h-0 flex-1 flex-col rounded-sm border-2 bg-white/80 py-2">
        <Editor
          key={`${isEditing ? "editing" : "viewing"}-${displayedEntry.updatedAt}`}
          initialContent={displayedEntry.content ?? ""}
          editable={isEditing}
          onChange={(json) => {
            contentRef.current = json;
          }}
        />
      </div>
    </>
  );
}
