"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";
import {
  Entry,
  entryService,
  GroupedEntries,
} from "@/services/app/entryService";

interface EntriesContextType {
  groupedEntries: GroupedEntries[];
  isLoading: boolean;
  refreshEntries: () => Promise<void>;
  updateEntry: (entryId: number, updates: Partial<Entry>) => void;
  removeEntry: (entryId: number) => void;
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
    (entryId: number, updates: Partial<Entry>) => {
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

  const removeEntry = useCallback((entryId: number) => {
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
