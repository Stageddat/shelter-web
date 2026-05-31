"use client";
import packageJson from "@/../package.json";
import EntryCard from "@/components/app/entries/EntryCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEntries } from "@/contexts/EntriesContext";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { TriangleAlert } from "lucide-react";
import Image from "next/image";
import dumbCat from "@/assets/app/dumb-cat.png";

export default function AppPage() {
  const { entries } = useEntries();
  return (
    <main className="flex h-screen max-h-screen flex-col overflow-hidden px-10 py-12">
      {/* top */}
      <div className="flex items-center justify-between">
        <h2 className="mb-6 flex text-left text-7xl font-bold tracking-wide lowercase">
          welcome to your shelter!
        </h2>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="destructive" className="h-12 w-12">
              <TriangleAlert className="h-7! w-7!" />
            </Button>
          </PopoverTrigger>

          <PopoverContent align="end" className="w-[800px] bg-red-500">
            <PopoverHeader>
              <PopoverTitle className="text-4xl text-white">
                WARNING
              </PopoverTitle>

              <PopoverDescription className="text-2xl text-white">
                This version of the application is in an early stage of
                development (Alpha). <br /> Its use is at your own risk; we are
                not responsible for any data loss between updates.
              </PopoverDescription>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </div>

      {/* El grid ahora es flex-1 y min-h-0 para congelar su altura */}
      <div className="grid min-h-0 flex-1 grid-cols-4 grid-rows-[auto_2fr_2fr] gap-2">
        {/* row 1 */}
        <div className="bg-accent/80 rounded-sm p-10 text-center text-3xl">
          {entries.length}
          <br />
          entries
        </div>
        <div className="bg-accent/80 rounded-sm p-10 text-center text-3xl">
          67
          <br />
          words
        </div>
        <div className="bg-accent/80 rounded-sm p-10 text-center text-3xl">
          <b>NaN</b>
          <br />
          streak
        </div>
        <div className="bg-accent/80 rounded-sm p-10 text-center text-3xl">
          <b>tomorrow</b>
          <br />
          last entry
        </div>

        <div className="bg-accent/80 col-span-2 row-span-2 flex flex-col rounded-sm p-4 text-3xl">
          <h3 className="flex-none text-4xl">last entries</h3>
          <ScrollArea className="min-h-0 flex-1">
            <div className="mr-3 space-y-2 pb-6">
              {entries.map((entry) => (
                <EntryCard key={entry.id} entry={entry} />
              ))}
            </div>
          </ScrollArea>
        </div>
        <div className="bg-accent/80 col-span-2 row-span-1 rounded-sm p-10 text-3xl">
          lofi & focus
        </div>
        <div className="bg-accent/80 col-span-2 row-span-1 overflow-hidden rounded-sm text-3xl">
          <Image
            src={dumbCat}
            alt="machka"
            className="h-full w-full object-fill"
          />
        </div>
      </div>

      {/* abajo */}
      <div className="mt-auto">
        <p className="text-muted-foreground mt-2 -mr-8 -mb-10 text-right text-lg lowercase">
          v{packageJson.version}
        </p>
      </div>
    </main>
  );
}
