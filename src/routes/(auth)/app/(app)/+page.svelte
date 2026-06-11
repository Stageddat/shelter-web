<script lang="ts">
	import packageJson from '../../../../../package.json';
	import EntryCard from '$lib/components/app/entry/EntryCard.svelte';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import { getAppContext } from '$lib/contexts/app.context.svelte';
	import {
		Popover,
		PopoverContent,
		PopoverDescription,
		PopoverHeader,
		PopoverTitle,
		PopoverTrigger
	} from '$lib/components/ui/popover';
	import { Button } from '$lib/components/ui/button';
	import dumbCat from '$lib/assets/app/dumb-cat.png?enhanced';
	import { Info } from '@lucide/svelte';

	const appContext = getAppContext();
	const greetingMessage = $derived(appContext.greeting);
</script>

<main class="flex h-screen max-h-screen flex-col overflow-hidden px-10 py-12">
	<!-- top -->
	<div class="flex items-center justify-between">
		<h2 class="mb-6 flex text-left text-7xl font-bold tracking-wide lowercase">
			{greetingMessage}
		</h2>
		<Popover>
			<PopoverTrigger>
				<Button variant="outline" class="h-12 w-12">
					<Info class="h-7! w-7!" />
				</Button>
			</PopoverTrigger>

			<PopoverContent align="end" class="w-2xl">
				<PopoverHeader>
					<PopoverTitle class="text-3xl font-semibold tracking-wide">
						shelter is still in development!
					</PopoverTitle>

					<PopoverDescription class="space-y-3 text-xl">
						<span>
							we're actively working on shelter. as a precaution, we recommend exporting your
							journal from time to time, just in case ;)
						</span>
						<span class="block"> you can export easily in settings › data › export! </span>
					</PopoverDescription>
				</PopoverHeader>
			</PopoverContent>
		</Popover>
	</div>

	<div class="grid min-h-0 flex-1 grid-cols-4 grid-rows-[auto_2fr_2fr] gap-2">
		<!-- row 1 -->
		<div class="rounded-sm bg-secondary/40 p-10 text-center text-3xl">
			<b>
				<!-- {change this count system -->
				{appContext.entries.length}
			</b>
			<br />
			entries
		</div>
		<div class="rounded-sm bg-secondary/40 p-10 text-center text-3xl">
			<b>{appContext.totalWordCount}</b>
			<br />
			words
		</div>
		<div class="rounded-sm bg-secondary/40 p-10 text-center text-3xl">
			<b>{appContext.streak}</b>
			<br />
			streak
		</div>
		<div class="rounded-sm bg-secondary/40 p-10 text-center text-3xl">
			<b>{appContext.lastEntry}</b>
			<br />
			last entry
		</div>

		<div class="col-span-2 row-span-2 flex flex-col rounded-sm bg-secondary/40 p-4 text-3xl">
			<h3 class="flex-none p-2 text-4xl">last entries</h3>
			<ScrollArea class="min-h-0 flex-1">
				<!-- <div class="mr-3 space-y-2 pb-6">
              {entries.map((entry) => (
                <EntryCard key={entry.id} entry={entry} />
              ))}
            </div> -->
				{#each appContext.entries as entry (entry.id)}
					<EntryCard {entry} />
				{/each}
			</ScrollArea>
		</div>
		<div class="col-span-2 row-span-1 rounded-sm bg-secondary/40 p-10 text-3xl">lofi & focus</div>
		<div class="col-span-2 row-span-1 overflow-hidden rounded-sm bg-secondary/40 text-3xl">
			<enhanced:img src={dumbCat} alt="machka" class="h-full w-full object-fill" />
		</div>
	</div>

	<!-- abajo -->
	<div class="mt-auto">
		<p class="mt-2 -mr-8 -mb-10 text-right text-lg text-muted-foreground lowercase">
			v{packageJson.version}
		</p>
	</div>
</main>
