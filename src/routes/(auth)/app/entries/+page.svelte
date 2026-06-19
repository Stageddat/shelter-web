<script lang="ts">
	import EntryCard from '$lib/components/app/entry/EntryCard.svelte';
	import LoadingText from '$lib/components/shared/LoadingText.svelte';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import { Button } from '$lib/components/ui/button';
	import { getAppContext } from '$lib/contexts/app.context.svelte';

	const app = getAppContext();
</script>

{#if app.isLoading}
	<div class="flex h-full items-center justify-center text-6xl text-muted-foreground">
		<LoadingText />
	</div>
{:else}
	<main class="flex h-full flex-col px-4 pt-8 lg:px-10 lg:pt-12">
		<div class="mb-6 shrink-0">
			<h1 class="text-3xl font-bold tracking-wide lowercase lg:text-4xl">entries</h1>
			<p class="ml-1 text-base text-muted-foreground lg:text-lg">
				{app.entries.length}
				{app.entries.length === 1 ? 'entry' : 'entries'}
			</p>
		</div>

		{#if app.entries.length === 0}
			<div class="flex flex-1 flex-col items-center justify-center gap-2 text-muted-foreground">
				<p class="text-3xl lowercase lg:text-4xl">no entries yet</p>
				<p class="text-2xl lg:text-3xl">^▽^</p>
				<Button class="mt-2 p-5! text-lg! tracking-wide lg:text-xl!" href="/app/new">
					begin the story
				</Button>
			</div>
		{:else}
			<ScrollArea class="min-h-0 flex-1">
				<div class="mr-3 space-y-2 pb-6">
					{#each app.entries as entry (entry.id)}
						<EntryCard {entry} />
					{/each}
				</div>
			</ScrollArea>
		{/if}
	</main>
{/if}
