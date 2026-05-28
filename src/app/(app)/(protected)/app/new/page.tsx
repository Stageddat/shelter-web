"use client";

import { useRouter } from "next/navigation";
import { Editor } from "@/components/app/editor/Editor";
import { useCreateEntry } from "@/hooks/app/useCreateEntry";

export default function NewEntry() {
  const router = useRouter();
  const { title, setTitle, content, setContent, isSaving, handleSave } =
    useCreateEntry();

  const handleSaveAndRedirect = async () => {
    const entryId = await handleSave();
    if (entryId) router.push(`/app/entries/${entryId}`, { scroll: false });
  };

  return (
    <main className="flex h-full flex-col px-10 py-12">
      <div className="mt-auto flex gap-2">
        <h1 className="mb-8 text-7xl font-bold tracking-wide lowercase">
          new entry
        </h1>
        <button onClick={handleSaveAndRedirect} disabled={isSaving}>
          {isSaving ? "saving..." : "save"}
        </button>
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
