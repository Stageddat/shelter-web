"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";
import { getEntries, DecryptedEntry } from "@/services/app/entry.service";
import { useAuth } from "@/contexts/auth.context";
import { getDynamicGreeting } from "@/hooks/app/useDynamicGreetings";

interface EntriesContextType {
  entries: DecryptedEntry[];
  isLoading: boolean;
  refreshEntries: () => Promise<void>;
  removeEntry: (entryId: string) => void;
  greeting: string;
}

const EntriesContext = createContext<EntriesContextType | undefined>(undefined);

export function EntriesProvider({ children }: { children: React.ReactNode }) {
  const { masterKey, user } = useAuth();
  const [entries, setEntries] = useState<DecryptedEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [greeting] = useState(() => getDynamicGreeting(user?.username));

  // cargar entries inicio
  React.useEffect(() => {
    if (!masterKey) return;

    async function load() {
      try {
        setIsLoading(true);
        // await new Promise((resolve) => setTimeout(resolve, 600 * 1000)); // testing shit
        const data = await getEntries(masterKey!);
        setEntries(data);
      } catch (error) {
        console.error("error loading entries:", error);
      } finally {
        setIsLoading(false);
      }
    }

    load();
  }, [masterKey]);

  // actiualizar la lista de entries
  const refreshEntries = useCallback(async () => {
    if (!masterKey) return;
    try {
      setIsLoading(true);
      const data = await getEntries(masterKey);
      setEntries(data);
    } catch (error) {
      console.error("error loading entries:", error);
    } finally {
      setIsLoading(false);
    }
  }, [masterKey]);

  const removeEntry = useCallback((entryId: string) => {
    setEntries((prev) => prev.filter((e) => e.id !== entryId));
  }, []);

  const value = useMemo(
    () => ({ entries, isLoading, refreshEntries, removeEntry }),
    [entries, isLoading, refreshEntries, removeEntry],
  );

  return (
    <EntriesContext.Provider value={{ ...value, greeting }}>
      {children}
    </EntriesContext.Provider>
  );
}

export function useEntries() {
  const context = useContext(EntriesContext);
  if (context === undefined) {
    throw new Error("useEntries must be used within an EntriesProvider");
  }
  return context;
}
