<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import { CharacterCount } from '@tiptap/extensions';
	import { Separator } from '$lib/components/ui/separator';
	import EditorToolbar from './EditorToolbar.svelte';
	import { slide } from 'svelte/transition';
	import EditorFooter from './EditorFooter.svelte';

	interface Props {
		initialContent?: string;
		editable?: boolean;
		onChange?: (content: string) => void;
		onEmptyChange?: (isEmpty: boolean) => void;
		onCountChange?: (wordCount: number, charCount: number) => void;
		date?: string;
		time?: string;
	}

	let {
		initialContent = '',
		editable = true,
		onChange,
		onEmptyChange,
		onCountChange,
		date,
		time
	}: Props = $props();

	let element: HTMLDivElement;
	let editor = $state<Editor | null>(null);

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
				onEmptyChange?.(e.isEmpty);
				onCountChange?.(wordCount, charCount);

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

	<div bind:this={element} class="tiptap-editor min-h-0 flex-1 overflow-hidden"></div>

	{#if editor}
		<div class="mt-4">
			<Separator class="my-2 h-0.5!" />
			<EditorFooter {wordCount} {charCount} {date} {time} />
		</div>
	{/if}
</div>

<style>
	@reference "@css/layout.css";

	.tiptap-editor {
		min-height: 0;
		overflow: hidden;
	}

	.tiptap-editor :global(.tiptap) {
		height: 100%;
		overflow-y: auto;
		outline: none;

		&::-webkit-scrollbar {
			display: none;
		}

		@apply px-3;
	}

	.tiptap-editor :global(.tiptap[contenteditable='true']) {
		cursor: text;
	}

	.tiptap-editor :global(.tiptap p) {
		@apply mb-2 font-patrick text-xl leading-relaxed last:mb-0 lg:text-2xl;
	}

	.tiptap-editor :global(.tiptap h1) {
		@apply mt-8 mb-4 text-2xl font-bold first:mt-0 last:mb-0 lg:text-3xl;
	}

	.tiptap-editor :global(.tiptap ul) {
		@apply my-4 list-disc pl-5;
	}

	.tiptap-editor :global(.tiptap ol) {
		@apply my-4 list-decimal pl-5;
	}

	.tiptap-editor :global(.tiptap li) {
		@apply mb-1 font-patrick text-xl leading-relaxed lg:text-2xl;
	}

	.tiptap-editor :global(.tiptap ::selection) {
		@apply bg-selection text-foreground;
	}
</style>
