"use client";

import { useRouter } from "next/navigation";
import NoiseBackground from "@/components/shared/NoiseBackground";
import { NewEntryActions as EntryActions } from "@/components/app/NewEntryActions";
import { NewEntryEditor as EntryEditor } from "@/components/app/NewEntryEditor";
import { useCreateEntry } from "@/hooks/app/useCreateEntry";

export default function NewEntry() {
  const router = useRouter();
  const {
    title,
    setTitle,
    content,
    setContent,
    isSaving,
    handleSave,
    handleCancel,
  } = useCreateEntry();

  const handleSaveAndRedirect = async () => {
    const entryId = await handleSave();
    if (entryId) {
      router.push(`/app/entries/${entryId}`, { scroll: false });
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <NoiseBackground />

      <div className="flex flex-1 flex-col overflow-hidden">
        <main className="flex flex-1 flex-col items-center overflow-y-auto px-6 py-12">
          <div className="w-full max-w-3xl">
            <EntryEditor
              title={title}
              onTitleChange={setTitle}
              content={content}
              onContentChange={setContent}
            />

            <EntryActions
              onCancel={handleCancel}
              onSave={handleSaveAndRedirect}
              isSaving={isSaving}
              canSave={!!content.trim()}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
