<script lang="ts">
	// import packageJson from '../../../../package.json';
	import EntryCard from '$lib/components/app/entries/EntryCard';
	// import { ScrollArea } from '@/components/ui/scroll-area';
	// import { useEntries } from '@/contexts/EntriesContext';
	// import {
	// 	Popover,
	// 	PopoverContent,
	// 	PopoverDescription,
	// 	PopoverHeader,
	// 	PopoverTitle,
	// 	PopoverTrigger
	// } from '@/components/ui/popover';
	// import { Button } from '@/components/ui/button';
	// import { TriangleAlert } from 'lucide-react';
	// import Image from 'next/image';
	// import dumbCat from '@/assets/app/dumb-cat.png';

	// const { entries, greeting } = useEntries();
</script>

<main class="flex h-screen max-h-screen flex-col overflow-hidden px-10 py-12">
	<p>egg</p>
	{/* top */}
      <div class="flex items-center justify-between">
        <h2 class="mb-6 flex text-left text-7xl font-bold tracking-wide lowercase">
          {greeting}
        </h2>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="destructive"
              class="bg-destructive/20 h-12 w-12"
            >
              <TriangleAlert class="h-7! w-7!" />
            </Button>
          </PopoverTrigger>

          <PopoverContent
            align="end"
            class="w-2xl border-2 border-dashed border-red-600 bg-red-200"
          >
            <PopoverHeader>
              <PopoverTitle class="text-4xl font-semibold tracking-wide text-red-600">
                this app is in an early development stage
              </PopoverTitle>

              <PopoverDescription class="text-2xl text-red-600">
                shelter is under active development. while we work on
                stabilizing the database structure, data loss during updates is
                a possibility.{" "}
                <b>please make sure to export your journal frequently</b> to
                ensure you always have a local backup of your journal.
                <br />
                <br />
                you can export your journal easily from the settings page.
              </PopoverDescription>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </div>

      <div class="grid min-h-0 flex-1 grid-cols-4 grid-rows-[auto_2fr_2fr] gap-2">
        {/* row 1 */}
        <div class="bg-secondary/40 rounded-sm p-10 text-center text-3xl">
          <b>
            {/* change this count system */}
            {entries.length}
          </b>
          <br />
          entries
        </div>
        <div class="bg-secondary/40 rounded-sm p-10 text-center text-3xl">
          <b>67</b>
          <br />
          words
        </div>
        <div class="bg-secondary/40 rounded-sm p-10 text-center text-3xl">
          <b>NaN</b>
          <br />
          streak
        </div>
        <div class="bg-secondary/40 rounded-sm p-10 text-center text-3xl">
          <b>tomorrow</b>
          <br />
          last entry
        </div>

        <div class="bg-secondary/40 col-span-2 row-span-2 flex flex-col rounded-sm p-4 text-3xl">
          <h3 class="flex-none p-2 text-4xl">last entries</h3>
          <ScrollArea class="min-h-0 flex-1">
            <!-- <div class="mr-3 space-y-2 pb-6">
              {entries.map((entry) => (
                <EntryCard key={entry.id} entry={entry} />
              ))}
            </div> -->
          </ScrollArea>
        </div>
        <div class="bg-secondary/40 col-span-2 row-span-1 rounded-sm p-10 text-3xl">
          lofi & focus
        </div>
        <div class="bg-secondary/40 col-span-2 row-span-1 overflow-hidden rounded-sm text-3xl">
          <Image
            src={dumbCat}
            alt="machka"
            class="h-full w-full object-fill"
          />
        </div>
      </div>

      {/* abajo */}
      <div class="mt-auto">
        <p class="text-muted-foreground mt-2 -mr-8 -mb-10 text-right text-lg lowercase">
          v{packageJson.version}
        </p>
      </div>
</main>
