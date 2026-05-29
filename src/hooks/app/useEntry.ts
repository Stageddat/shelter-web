import { useEffect, useState } from "react";
import { getEntry } from "@/services/app/entry.service";
import { useAuth } from "@/contexts/auth.context";
import { DecryptedEntry } from "@/services/app/entry.service";

export const useEntry = (entryId: string) => {
  const { masterKey } = useAuth();
  const [entry, setEntry] = useState<DecryptedEntry | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!entryId || !masterKey) return;

    async function loadEntry() {
      try {
        const data = await getEntry(entryId, masterKey!);
        setEntry(data);
        // throw new Error("entry loaded"); // debug
      } catch (err) {
        console.error("error loading entry:", err);
        setError("failed to load entry :c");
        setEntry(null);
        throw err;
      } finally {
        setIsLoading(false);
      }
    }

    loadEntry();
  }, [entryId, masterKey]);

  return { entry, isLoading, error };
};
