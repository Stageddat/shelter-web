import { useState, useEffect } from "react";
import { entryService, GroupedEntries } from "@/services/app/entryService";

export const useSidebarEntries = () => {
  const [groupedEntries, setGroupedEntries] = useState<GroupedEntries[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadEntries = async () => {
    try {
      setIsLoading(true);
      const entries = await entryService.getAllEntries();
      const grouped = entryService.groupEntriesByDate(entries);
      setGroupedEntries(grouped);
    } catch (error) {
      console.error("Error loading entries:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadEntries();
  }, []);

  return {
    groupedEntries,
    isLoading,
    refreshEntries: loadEntries,
  };
};
