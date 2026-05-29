"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/auth.context";
import { useEntries } from "@/contexts/EntriesContext";
import { createEntry } from "@/services/app/entry.service";

export function useCreateEntry() {
  const { masterKey } = useAuth();
  const { refreshEntries } = useEntries();

  const [title, setTitle] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");

  const handleSave = async (editorContent: string): Promise<string | null> => {
    if (!masterKey) {
      setError("you are not authenticated");
      return null;
    }

    if (!editorContent.trim()) {
      setError("write something first");
      return null;
    }

    try {
      setIsSaving(true);
      setError("");

      const entryId = await createEntry({
        masterKey,
        title,
        content: editorContent,
      });
      await refreshEntries();
      return entryId;
    } catch (err) {
      throw err;
    } finally {
      setIsSaving(false);
    }
  };

  return {
    title,
    setTitle,
    isSaving,
    error,
    handleSave,
  };
}
