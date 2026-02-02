import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { countWords, createEntry } from "@/services/app/createNewEntry";

export const useNewEntry = () => {
  const router = useRouter();
  const { masterKey, isAuthenticated } = useAuth();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  // contar palabras
  useEffect(() => {
    setWordCount(countWords(content));
  }, [content]);

  const handleSave = async () => {
    if (!masterKey || !isAuthenticated) {
      // TODO: usar toast
      alert("you are not authenticated");
      return;
    }

    if (!content.trim()) {
      alert("write something first");
      return;
    }

    try {
      setIsSaving(true);

      await createEntry({
        masterKey,
        title,
        content,
      });

      router.push("/app");
    } catch (error) {
      console.error("error saving entry:", error);
      alert("failed to save entry");
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
