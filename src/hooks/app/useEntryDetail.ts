import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useEntries } from "@/contexts/EntriesContext";
import { entryService, DecryptedEntry } from "@/services/app/entryService";

// TODO: change confirmation with popup

export const useEntryDetail = (entryId: number) => {
  const { masterKey, isAuthenticated } = useAuth();
  const { updateEntry: updateEntryInContext, removeEntry } = useEntries();
  const [entry, setEntry] = useState<DecryptedEntry | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const loadEntry = useCallback(async () => {
    if (!masterKey || !isAuthenticated || !entryId) {
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      const fetchedEntry = await entryService.getEntryById(entryId);

      if (!fetchedEntry) {
        setEntry(null);
        return;
      }

      const decryptedEntry = await entryService.decryptEntry(
        fetchedEntry,
        masterKey,
      );
      setEntry(decryptedEntry);
      setEditTitle(decryptedEntry.title);
      setEditContent(decryptedEntry.content);
    } catch (error) {
      console.error("Error loading entry:", error);
      setEntry(null);
    } finally {
      setIsLoading(false);
    }
  }, [entryId, masterKey, isAuthenticated]);

  useEffect(() => {
    loadEntry();
  }, [loadEntry]);

  useEffect(() => {
    if (isEditing) {
      setWordCount(entryService.countWords(editContent));
    } else if (entry) {
      setWordCount(entryService.countWords(entry.content));
    }
  }, [editContent, entry, isEditing]);

  const handleEdit = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleCancelEdit = useCallback(() => {
    if (entry) {
      setEditTitle(entry.title);
      setEditContent(entry.content);
    }
    setIsEditing(false);
  }, [entry]);

  const handleSave = useCallback(async () => {
    if (!masterKey || !entry) return;

    try {
      setIsSaving(true);
      await entryService.updateEntry(
        entry.id!,
        masterKey,
        editTitle,
        editContent,
      );

      const updatedEntry = {
        ...entry,
        title: editTitle,
        content: editContent,
      };
      setEntry(updatedEntry);

      updateEntryInContext(entry.id!, {
        title: editTitle,
      });

      setIsEditing(false);
    } catch (error) {
      console.error("Error updating entry:", error);
      alert("Failed to update entry");
    } finally {
      setIsSaving(false);
    }
  }, [masterKey, entry, editTitle, editContent, updateEntryInContext]);

  const handleDelete = useCallback(async () => {
    if (!entry) return false;

    const confirmed = confirm(
      "are you sure you want to delete this entry? this action cannot be undone.",
    );

    if (!confirmed) return false;

    try {
      await entryService.deleteEntry(entry.id!);
      removeEntry(entry.id!);
      return true;
    } catch (error) {
      console.error("error deleting entry:", error);
      alert("failed to delete entry");
      return false;
    }
  }, [entry, removeEntry]);

  return {
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
  };
};
