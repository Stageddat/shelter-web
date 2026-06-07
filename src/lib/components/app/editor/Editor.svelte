<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import { Separator } from '$lib/components/ui/separator';
	import EditorToolbar from './EditorToolbar.svelte';
	import { slide } from 'svelte/transition';

	interface Props {
		initialContent?: string;
		editable?: boolean;
		onChange?: (content: string) => void;
		onEmptyChange?: (isEmpty: boolean) => void;
	}

	let { initialContent = '', editable = true, onChange, onEmptyChange }: Props = $props();

	let element: HTMLDivElement;
	let editor = $state<Editor | null>(null);
	let wasEmpty = true;

	export function resetContent(content: string) {
		editor?.commands.setContent(content ? JSON.parse(content) : '');
	}

	onMount(() => {
		editor = new Editor({
			element,
			extensions: [StarterKit.configure({ heading: false })],
			content: initialContent ? JSON.parse(initialContent) : '',
			editable,
			onUpdate: ({ editor: e }) => {
				onChange?.(JSON.stringify(e.getJSON()));

				const currentEmpty = e.isEmpty;
				if (currentEmpty !== wasEmpty) {
					wasEmpty = currentEmpty;
					queueMicrotask(() => {
						onEmptyChange?.(currentEmpty);
					});
				}
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
</div>

<style>
	@reference "../../../../routes/layout.css";

	.tiptap-editor :global(.tiptap) {
		flex: 1 1 0%;
		outline: none;

		&::-webkit-scrollbar {
			display: none;
		}

		@apply overflow-y-auto px-3;
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
