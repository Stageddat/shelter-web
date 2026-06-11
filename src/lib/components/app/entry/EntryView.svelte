<script lang="ts">
	import Editor from '$lib/components/app/editor/Editor.svelte';
	import { Button } from '$lib/components/ui/button';
	import { getAuthContext } from '$lib/contexts/auth.context.svelte';
	import { getAppContext } from '$lib/contexts/app.context.svelte';
	import { ArrowLeft, Pencil, X, Check } from '@lucide/svelte';
	import { updateEntry, type DecryptedEntry } from '$lib/services/app/entry.service';
	import { resolve } from '$app/paths';

	interface Props {
		entry: DecryptedEntry;
	}

	let { entry: initialEntry }: Props = $props();

	const { masterKey } = getAuthContext();
	const { refreshEntries } = getAppContext();

	let isEditing = $state(false);
	let title = $state('');
	let displayedEntry = $state<DecryptedEntry | null>(null);
	let currentContent = $state('');
	let editorRef = $state<Editor | null>(null);
	let wordCount = $state(0);
	let charCount = $state(0);

	$effect(() => {
		title = initialEntry.title;
		displayedEntry = initialEntry;
		currentContent = initialEntry.content ?? '';
		wordCount = initialEntry.wordCount ?? 0;
		charCount = initialEntry.charCount ?? 0;
	});

	const handleSave = async () => {
		if (!masterKey || !displayedEntry) return;
		await updateEntry(initialEntry.id, masterKey, title, currentContent, wordCount, charCount);
		await refreshEntries();
		displayedEntry = {
			...displayedEntry,
			title,
			content: currentContent,
			updatedAt: new Date().toISOString()
		};
		isEditing = false;
	};

	const handleCancel = () => {
		if (!displayedEntry) return;
		title = displayedEntry.title;
		currentContent = displayedEntry.content ?? '';
		editorRef?.resetContent(displayedEntry.content ?? '');
		isEditing = false;
	};
</script>

<div class="mt-auto mb-4 flex flex-row items-center justify-between">
	<Button
		variant="ghost"
		class="flex items-center gap-1 px-3! py-6! text-2xl"
		href={resolve('/app/entries')}
	>
		<ArrowLeft class="mt-1 -mr-0.5" />
		entries
	</Button>

	{#if isEditing}
		<div class="flex gap-2">
			<Button
				variant="ghost"
				onclick={handleCancel}
				class="flex h-10! w-10! items-center justify-center rounded-full"
			>
				<X class="h-5! w-5! stroke-3!" />
			</Button>
			<Button
				variant="default"
				onclick={handleSave}
				class="flex h-10! w-10! items-center justify-center rounded-full"
			>
				<Check class="h-5! w-5! stroke-3!" />
			</Button>
		</div>
	{:else}
		<Button
			variant="default"
			onclick={() => (isEditing = true)}
			class="flex h-10! w-10! items-center justify-center rounded-full"
		>
			<Pencil class="h-5! w-5! stroke-3!" />
		</Button>
	{/if}
</div>

<div class="px-2">
	<input
		placeholder="untitled entry"
		type="text"
		value={title}
		disabled={!isEditing}
		oninput={(e) => (title = e.currentTarget.value)}
		class="mb-4 w-full border-b-2 border-accent bg-transparent text-2xl outline-none placeholder:text-muted-foreground"
	/>
</div>

<div class="flex min-h-0 flex-1 flex-col rounded-sm border-2 bg-secondary/10 py-2">
	{#if displayedEntry}
		<Editor
			bind:this={editorRef}
			initialContent={displayedEntry.content ?? ''}
			editable={isEditing}
			onChange={(json) => (currentContent = json)}
			date={displayedEntry.date}
			time={displayedEntry.time}
			onCountChange={(w, c) => {
				wordCount = w;
				charCount = c;
			}}
			onEmptyChange={(isEmpty) => {
				if (isEmpty) {
					isEditing = true;
				}
			}}
		/>
	{/if}
</div>
