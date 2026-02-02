"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useEntries } from "@/contexts/EntriesContext";
import {
  countWords,
  createEntry as createEntryService,
} from "@/services/app/createNewEntry";

export const useNewEntry = () => {
  const router = useRouter();
  const { masterKey, isAuthenticated } = useAuth();
  const { refreshEntries } = useEntries();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  // contar palabras
  useEffect(() => {
    setWordCount(countWords(content));
  }, [content]);

  const handleSave = async (): Promise<number | null> => {
    if (!masterKey || !isAuthenticated) {
      alert("you are not authenticated");
      return null;
    }

    if (!content.trim()) {
      alert("write something first");
      return null;
    }

    try {
      setIsSaving(true);

      const entryId = await createEntryService({
        masterKey,
        title,
        content,
      });

      if (entryId) {
        await refreshEntries(); // actualizar el contexto
        return entryId; // devuelve solo el número
      }

      return null;
    } catch (error) {
      console.error("error saving entry:", error);
      alert("failed to save entry");
      return null;
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    router.back();
  };

  return {
    title,
    setTitle,
    content,
    setContent,
    wordCount,
    isSaving,
    handleSave,
    handleCancel,
  };
};
