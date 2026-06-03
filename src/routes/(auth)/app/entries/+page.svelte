<script lang="ts">
	import EntryCard from '$lib/components/app/entry/EntryCard.svelte';
	import EmptyState from '$lib/components/app/entry/EmptyState.svelte';
	import EntriesHeader from '$lib/components/app/entry/EntriesHeader.svelte';
	import LoadingText from '$lib/components/shared/LoadingText.svelte';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import { getAppContext } from '$lib/contexts/app.context.svelte';

	const { entries, isLoading } = getAppContext();
</script>

{#if isLoading}
	<div class="flex h-full items-center justify-center text-6xl text-muted-foreground">
		<LoadingText />
	</div>
{:else}
	<main class="flex h-full flex-col px-10 pt-12">
		<EntriesHeader entriesCount={entries.length} />

		{#if entries.length === 0}
			<EmptyState />
		{:else}
			<ScrollArea class="min-h-0 flex-1">
				<div class="mr-3 space-y-2 pb-6">
					{#each entries as entry (entry.id)}
						<EntryCard {entry} />
					{/each}
				</div>
			</ScrollArea>
		{/if}
	</main>
{/if}
