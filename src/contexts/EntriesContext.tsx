"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";
import { entryService, GroupedEntries } from "@/services/app/entryService";
import { DiaryEntry } from "@/lib/db";

interface EntriesContextType {
  groupedEntries: GroupedEntries[];
  isLoading: boolean;
  refreshEntries: () => Promise<void>;
  updateEntry: (entryId: string, updates: Partial<DiaryEntry>) => void;
  removeEntry: (entryId: string) => void;
}

const EntriesContext = createContext<EntriesContextType | undefined>(undefined);

// componente de contexto
export function EntriesProvider({ children }: { children: React.ReactNode }) {
  const [groupedEntries, setGroupedEntries] = useState<GroupedEntries[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // refresca las entradas
  const refreshEntries = useCallback(async () => {
    try {
      setIsLoading(true);
      const entries = await entryService.getAllEntries();
      const grouped = entryService.groupEntriesByDate(entries);
      setGroupedEntries(grouped);
    } catch (error) {
      console.error("error loading entries:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateEntry = useCallback(
    (entryId: string, updates: Partial<DiaryEntry>) => {
      setGroupedEntries((prev) => {
        const allEntries = prev.flatMap((g) => g.entries);
        const updatedEntries = allEntries.map((e) =>
          e.id === entryId ? { ...e, ...updates } : e,
        );
        return entryService.groupEntriesByDate(updatedEntries);
      });
    },
    [],
  );

  const removeEntry = useCallback((entryId: string) => {
    setGroupedEntries((prev) => {
      const allEntries = prev.flatMap((g) => g.entries);
      const filtered = allEntries.filter((e) => e.id !== entryId);
      return entryService.groupEntriesByDate(filtered);
    });
  }, []);

  React.useEffect(() => {
    refreshEntries();
  }, [refreshEntries]);

  const value = useMemo(
    () => ({
      groupedEntries,
      isLoading,
      refreshEntries,
      updateEntry,
      removeEntry,
    }),
    [groupedEntries, isLoading, refreshEntries, updateEntry, removeEntry],
  );

  return (
    <EntriesContext.Provider value={value}>{children}</EntriesContext.Provider>
  );
}

export function useEntries() {
  const context = useContext(EntriesContext);
  if (context === undefined) {
    throw new Error("useEntries must be used within an EntriesProvider");
  }
  return context;
}
