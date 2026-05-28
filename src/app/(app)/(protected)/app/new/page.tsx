"use client";

import { useRouter } from "next/navigation";
import { Editor } from "@/components/app/editor/Editor";
import { useCreateEntry } from "@/hooks/app/useCreateEntry";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NewEntry() {
  const router = useRouter();
  const { title, setTitle, content, setContent, isSaving, handleSave } =
    useCreateEntry();

  const handleSaveAndRedirect = async () => {
    const entryId = await handleSave();
    if (entryId) router.push(`/app/entries/${entryId}`, { scroll: false });
  };

  return (
    <main className="flex h-full flex-col px-6 py-3">
      <div className="mt-auto mb-4 flex flex-row items-center justify-between">
        <Button
          variant="ghost"
          asChild
          className="flex items-center px-3! py-6! text-2xl"
        >
          <Link href="/app/entries">
            <ArrowLeft className="mt-1 -mr-0.5" />
            new entry
          </Link>
        </Button>
        <Button
          variant="default"
          onClick={handleSaveAndRedirect}
          disabled={isSaving || !title || !content}
          className="flex h-10! w-10! items-center justify-center rounded-full text-2xl"
        >
          <Check className="h-5! w-5! stroke-3!" />
        </Button>
      </div>

      {/* titulo */}
      <div className="px-2">
        <h2 className="text-xl tracking-wide">title</h2>
        <input
          placeholder="untitled entry"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="placeholder:text-muted-foreground border-accent font-editor mb-4 w-full border-b-2 bg-transparent text-2xl outline-none"
        />
      </div>

      {/* editor */}
      <div className="flex min-h-0 flex-1 flex-col rounded-sm border-2 bg-white/80 py-2">
        <Editor content={content} editable={true} onChange={setContent} />
      </div>

      {/* botones */}
    </main>
  );
}
