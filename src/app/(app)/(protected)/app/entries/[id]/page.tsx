"use client";

import { use } from "react";
import NoiseBackground from "@/components/shared/NoiseBackground";
import { EntryViewer } from "@/components/app/EntryViewer";
import { EntryDetailActions } from "@/components/app/EntryDetailActions";
import { useEntryDetail } from "@/hooks/app/useEntryDetail";
import { useRouter } from "next/navigation";

function EntryContent({ entryId }: { entryId: number }) {
  const router = useRouter();

  const {
    entry,
    isLoading,
    isEditing,
    editTitle,
    setEditTitle,
    editContent,
    setEditContent,
    wordCount,
    isSaving,
    handleEdit,
    handleCancelEdit,
    handleSave,
    handleDelete,
  } = useEntryDetail(entryId);

  const handleBack = () => {
    router.push("/app", { scroll: false });
  };

  const handleDeleteWithNavigation = async () => {
    const deleted = await handleDelete();
    if (deleted) {
      router.push("/app", { scroll: false });
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-muted-foreground">loading entry...</p>
      </div>
    );
  }

  if (!entry) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-muted-foreground">entry not found</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl">
      <EntryViewer
        entry={entry}
        wordCount={wordCount}
        isEditing={isEditing}
        editTitle={editTitle}
        editContent={editContent}
        onTitleChange={setEditTitle}
        onContentChange={setEditContent}
      />

      <EntryDetailActions
        isEditing={isEditing}
        isSaving={isSaving}
        canSave={!!editContent.trim()}
        onEdit={handleEdit}
        onCancelEdit={handleCancelEdit}
        onSave={handleSave}
        onDelete={handleDeleteWithNavigation}
        onBack={handleBack}
      />
    </div>
  );
}

export default function EntryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const entryId = parseInt(resolvedParams.id);

  return (
    <div className="flex h-screen overflow-hidden">
      <NoiseBackground />

      <div className="flex flex-1 flex-col overflow-hidden">
        <main className="flex flex-1 flex-col items-center overflow-y-auto px-6 py-12">
          <EntryContent entryId={entryId} />
        </main>
      </div>
    </div>
  );
}
