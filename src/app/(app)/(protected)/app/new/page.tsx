"use client";

import NoiseBackground from "@/components/shared/NoiseBackground";
import { Sidebar } from "@/components/app/Sidebar";
import { Header } from "@/components/app/Header";
import { NewEntryEditor as EntryEditor } from "@/components/app/NewEntryEditor";
import { NewEntryActions as EntryActions } from "@/components/app/NewEntryActions";
import { useNewEntry } from "@/hooks/app/useNewEntry";

export default function NewEntry() {
  const {
    title,
    setTitle,
    content,
    setContent,
    wordCount,
    isSaving,
    handleSave,
    handleCancel,
  } = useNewEntry();

  return (
    <div className="flex h-screen overflow-hidden">
      <NoiseBackground />
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />

        <main className="flex flex-1 flex-col items-center overflow-y-auto px-6 py-12">
          <div className="w-full max-w-3xl">
            <EntryEditor
              title={title}
              onTitleChange={setTitle}
              content={content}
              onContentChange={setContent}
              wordCount={wordCount}
            />

            <EntryActions
              onCancel={handleCancel}
              onSave={handleSave}
              isSaving={isSaving}
              canSave={!!content.trim()}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
