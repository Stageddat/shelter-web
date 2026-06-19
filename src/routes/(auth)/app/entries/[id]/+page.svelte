<script lang="ts">
	import EntryView from '$lib/components/app/entry/EntryView.svelte';
	import LoadingText from '$lib/components/shared/LoadingText.svelte';
	import { useEntry } from '$lib/hooks/app/useEntry.svelte';
	import type { PageProps } from './$types';

	const { params }: PageProps = $props();

	const entryState = $derived(useEntry(params.id));
</script>

{#if !params.id}
	<div
		class="flex h-full w-full items-center justify-center text-2xl tracking-wide text-foreground lg:text-4xl"
	>
		no id
	</div>
{:else if entryState.error}
	<div
		class="flex h-full w-full items-center justify-center text-2xl tracking-wide text-foreground lg:text-4xl"
	>
		{entryState.error}
	</div>
{:else if entryState.isLoading}
	<div
		class="flex h-full w-full items-center justify-center text-2xl tracking-wide text-foreground lg:text-4xl"
	>
		<LoadingText text="loading entry" />
	</div>
{:else if !entryState.entry}
	<div
		class="flex h-full w-full items-center justify-center text-2xl tracking-wide text-foreground lg:text-4xl"
	>
		entry not found
	</div>
{:else}
	<main class="flex h-full flex-col px-4 py-4 lg:px-12 lg:py-6">
		<EntryView entry={entryState.entry} />
	</main>
{/if}
