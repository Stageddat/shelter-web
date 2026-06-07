<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import { CharacterCount } from '@tiptap/extensions';
	import { Separator } from '$lib/components/ui/separator';
	import EditorToolbar from './EditorToolbar.svelte';
	import { slide } from 'svelte/transition';

	interface Props {
		initialContent?: string;
		editable?: boolean;
		onChange?: (content: string) => void;
	}

	let { initialContent = '', editable = true, onChange }: Props = $props();

	let element: HTMLDivElement;
	let editor = $state<Editor | null>(null);

	// metadata
	let wordCount = $state(0);
	let charCount = $state(0);

	export function resetContent(content: string) {
		editor?.commands.setContent(content ? JSON.parse(content) : '');
	}

	onMount(() => {
		editor = new Editor({
			element,
			extensions: [StarterKit.configure({ heading: false }), CharacterCount],
			content: initialContent ? JSON.parse(initialContent) : '',
			editable,
			onUpdate: ({ editor: e }) => {
				onChange?.(JSON.stringify(e.getJSON()));

				charCount = e.storage.characterCount.characters();
				wordCount = e.storage.characterCount.words();
			},
			onTransaction: ({ editor: e }) => {
				editor = e as unknown as Editor;
			}
		});
	});

	$effect(() => {
		editor?.setEditable(editable);
	});

	onDestroy(() => {
		editor?.destroy();
	});
</script>

<div class="flex min-h-0 flex-1 flex-col">
	{#if editable && editor}
		<div transition:slide={{ duration: 200 }}>
			<EditorToolbar {editor} />
			<Separator class="mb-4 h-0.5!" />
		</div>
	{/if}

	<div bind:this={element} class="tiptap-editor flex-1 outline-none"></div>

	{#if editor}
		<div class="mt-4">
			<Separator class="my-2 h-0.5!" />

			<div class="flex justify-end gap-4 px-3 font-mono text-sm text-muted-foreground">
				<span>{wordCount} {wordCount === 1 ? 'word' : 'words'}</span>
				<span>•</span>
				<span>{charCount} {charCount === 1 ? 'character' : 'characters'}</span>
			</div>
		</div>
	{/if}
</div>

<style>
	@reference "../../../../routes/layout.css";

	.tiptap-editor :global(.tiptap) {
		flex: 1 1 0%;
		outline: none;
		min-height: 100%;

		&::-webkit-scrollbar {
			display: none;
		}

		@apply overflow-y-auto px-3;
	}

	.tiptap-editor :global(.tiptap[contenteditable='true']) {
		cursor: text;
	}
	.tiptap-editor :global(.tiptap p) {
		@apply mb-2 font-patrick text-2xl leading-relaxed last:mb-0;
	}

	.tiptap-editor :global(.tiptap h1) {
		@apply mt-8 mb-4 text-3xl font-bold first:mt-0 last:mb-0;
	}

	.tiptap-editor :global(.tiptap ul) {
		@apply my-4 list-disc pl-5;
	}

	.tiptap-editor :global(.tiptap ol) {
		@apply my-4 list-decimal pl-5;
	}

	.tiptap-editor :global(.tiptap li) {
		@apply mb-1 font-patrick text-2xl leading-relaxed;
	}

	.tiptap-editor :global(.tiptap ::selection) {
		@apply bg-accent/30 text-foreground;
	}
</style>
