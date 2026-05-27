"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth.context";
import { useEntries } from "@/contexts/EntriesContext";
import { createEntry } from "@/services/app/entry.service";

export function useCreateEntry() {
  const router = useRouter();
  const { masterKey } = useAuth();
  const { refreshEntries } = useEntries();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");

  const handleSave = async (): Promise<string | null> => {
    if (!masterKey) {
      setError("you are not authenticated");
      return null;
    }

    if (!content.trim()) {
      setError("write something first");
      return null;
    }

    try {
      setIsSaving(true);
      setError("");

      const entryId = await createEntry({ masterKey, title, content });
      await refreshEntries();
      router.push(`/app/entries/${entryId}`); //redirige a la entrada creada
      return entryId;
    } catch (err) {
      console.error("error saving entry:", err);
      setError("failed to save entry");
      return null;
    } finally {
      setIsSaving(false);
    }
  };

  return {
    title,
    setTitle,
    content,
    setContent,
    isSaving,
    error,
    handleSave,
    handleCancel: () => router.back(),
  };
}
