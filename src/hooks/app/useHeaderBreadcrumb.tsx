import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { useEntries } from "@/contexts/EntriesContext";
import { entryService } from "@/services/app/entryService";

export const useHeaderBreadcrumb = () => {
  const pathname = usePathname();
  const { groupedEntries } = useEntries();

  const breadcrumb = useMemo(() => {
    // si estamos en /app/new
    if (pathname === "/app/new") {
      return {
        section: "journal",
        current: "new entry",
      };
    }

    // si estamos en /app/entries/[id]
    const entryMatch = pathname.match(/\/app\/entries\/(\d+)/);
    if (entryMatch) {
      const entryId = parseInt(entryMatch[1]);

      // buscar la entrada en el contexto
      const allEntries = groupedEntries.flatMap((g) => g.entries);
      const entry = allEntries.find((e) => e.id === entryId);

      if (entry) {
        const displayDate = entryService.formatDisplayDate(entry.date);
        return {
          section: "journal",
          current: displayDate,
          entryId: entryMatch[1],
        };
      }

      return {
        section: "journal",
        current: "entry",
        entryId: entryMatch[1],
      };
    }

    // si estamos en /app
    return {
      section: "journal",
      current: null,
    };
  }, [pathname, groupedEntries]);

  return breadcrumb;
};
