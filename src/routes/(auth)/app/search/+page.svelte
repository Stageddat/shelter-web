<script lang="ts">
	import { onMount } from 'svelte';
	import { getAuthContext } from '$lib/contexts/auth.context.svelte';
	import { getAppContext } from '$lib/contexts/app.context.svelte';
	import { getEntry } from '$lib/services/app/entry.service';
	import { buildSearchIndex, searchEntries } from '$lib/search';
	import type { SearchResult } from 'minisearch';
	import { Search } from '@lucide/svelte';

	const auth = getAuthContext();
	const appContext = getAppContext();

	let query = $state('');
	let results = $state<SearchResult[]>([]);
	let isLoading = $state(true);

	onMount(async () => {
		if (!auth?.masterKey || !appContext) {
			isLoading = false;
			return;
		}

		try {
			isLoading = true;
			const fullEntries = await Promise.all(
				appContext.entries.map(async (entry) => {
					if (entry.content !== undefined) return entry;
					return await getEntry(entry.id, auth.masterKey!);
				})
			);

			appContext.entries = fullEntries;
			buildSearchIndex(fullEntries);
		} catch (error) {
			console.error('failed to build search index:', error);
		} finally {
			isLoading = false;
		}
	});

	$effect(() => {
		if (!isLoading) {
			const raw = searchEntries(query);
			results = raw.map((r) => ({
				...r,
				highlightTokens: getHighlightTokens(r.content, query)
			}));
		}
	});

	// i dont understand what the fuck is this shit but it somehow works
	// thanks claude, i hope this works
	function getHighlightTokens(
		plainText: string | undefined,
		searchTerm: string
	): { text: string; highlight: boolean }[] {
		if (!searchTerm.trim() || !plainText) return [];

		try {
			const normalizedText = plainText
				.toLowerCase()
				.normalize('NFD')
				.replace(/[\u0300-\u036f]/g, '');
			const normalizedSearch = searchTerm
				.toLowerCase()
				.normalize('NFD')
				.replace(/[\u0300-\u036f]/g, '');

			const index = normalizedText.indexOf(normalizedSearch);
			if (index === -1) {
				return [{ text: plainText.slice(0, 120) + '...', highlight: false }];
			}

			const start = Math.max(0, index - 40);
			const end = Math.min(plainText.length, index + searchTerm.length + 80);

			let snippet = plainText.slice(start, end);
			if (start > 0) snippet = '...' + snippet;
			if (end < plainText.length) snippet = snippet + '...';

			const escapedSearch = searchTerm.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
			const regex = new RegExp(`(${escapedSearch})`, 'gi');
			const parts = snippet.split(regex);

			return parts.map((part) => ({
				text: part,
				highlight: regex.test(part)
			}));
		} catch {
			return [];
		}
	}
</script>

<div class="mx-auto flex w-full max-w-4xl flex-col gap-6 p-6">
	<h1 class="mb-0 text-left text-4xl font-bold tracking-wide lowercase">search</h1>

	<div class="relative flex w-full items-center">
		<div
			class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-muted-foreground"
		>
			<Search />
		</div>

		<input
			type="text"
			bind:value={query}
			disabled={isLoading}
			placeholder={isLoading ? 'loading search engine...' : 'search...'}
			class="w-full rounded-xl border bg-background p-4 pl-12 text-xl shadow-xs outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
		/>
	</div>

	{#if isLoading}
		<p class="animate-pulse text-center font-patrick text-xl text-muted-foreground">
			preparing search engine...
		</p>
	{:else}
		<div class="flex flex-col gap-4">
			{#each results as result, i (i)}
				<div class="flex flex-col gap-1 rounded-xl border bg-card p-4 shadow-xs">
					<h3 class="font-patrick text-2xl font-bold">{result.title}</h3>
					<p class="mb-2 text-xs text-muted-foreground">{result.date}</p>

					{#if query.trim() !== ''}
						<p
							class="rounded-md border border-dashed bg-muted/30 p-2 font-patrick text-base leading-relaxed text-muted-foreground"
						>
							{#each result.highlightTokens as token, i (i)}
								{#if token.highlight}
									<strong class="font-bold text-foreground">{token.text}</strong>
								{:else}
									{token.text}
								{/if}
							{/each}
						</p>
					{/if}

					<a
						href="/app/entries/{result.id}"
						class="mt-2 inline-block self-start text-base font-medium text-blue-500 hover:underline"
					>
						open entry
					</a>
				</div>
			{:else}
				{#if query.trim() !== ''}
					<p class="text-muted-foreground text-center py-8">
						no entries found for "{query}".
					</p>
				{/if}
			{/each}
		</div>
	{/if}
</div>
