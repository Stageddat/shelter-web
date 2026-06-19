<script lang="ts">
	import { ArrowLeft, Check, X } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import Editor from '$lib/components/app/editor/Editor.svelte';
	import { useCreateEntry } from '$lib/hooks/app/useCreateEntry.svelte';

	const entry = useCreateEntry();

	let contentRef = $state('');
	let isEditorEmpty = $state(true);
	let wordCount = $state(0);
	let charCount = $state(0);

	async function handleSaveAndRedirect() {
		try {
			const entryId = await entry.handleSave(contentRef, wordCount, charCount);
			if (entryId) {
				const resolved = resolve('/(auth)/app/entries/[id]', { id: entryId });
				goto(resolved, { replaceState: true });
			}
		} catch (err) {
			console.error('failed to save entry:', err);
		}
	}
</script>

<main class="flex h-full flex-col px-4 py-4 lg:px-12 lg:py-6">
	<div class="mb-4 flex items-center justify-between">
		<Button
			variant="ghost"
			href={resolve('/app')}
			class="flex items-center px-2! py-5! text-xl! lg:px-3! lg:py-6! lg:text-2xl!"
		>
			<ArrowLeft class="mt-1 -mr-0.5" />
			home
		</Button>

		<div class="flex gap-2">
			<Button
				variant="ghost"
				onclick={() => history.back()}
				class="flex h-10! w-10! items-center justify-center rounded-full"
			>
				<X class="h-5! w-5! stroke-3!" />
			</Button>
			<Button
				variant="default"
				onclick={handleSaveAndRedirect}
				disabled={entry.isSaving || !entry.title || isEditorEmpty}
				class="flex h-10! w-10! items-center justify-center rounded-full"
			>
				<Check class="h-5! w-5! stroke-3!" />
			</Button>
		</div>
	</div>

	<div class="px-1 lg:px-2">
		<input
			placeholder="untitled entry"
			type="text"
			value={entry.title}
			oninput={(e) => (entry.title = e.currentTarget.value)}
			class="font-editor mb-4 w-full border-b-2 border-accent bg-transparent text-xl outline-none placeholder:text-muted-foreground lg:text-2xl"
		/>
	</div>

	<div class="flex min-h-0 flex-1 flex-col rounded-sm border-2 bg-secondary/10 py-2">
		<Editor
			initialContent=""
			editable={true}
			onChange={(json) => (contentRef = json)}
			onEmptyChange={(isEmpty) => (isEditorEmpty = isEmpty)}
			onCountChange={(w, c) => {
				wordCount = w;
				charCount = c;
			}}
		/>
	</div>
</main>
