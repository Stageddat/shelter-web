<script lang="ts">
	import { Bold, Italic, Strikethrough, List, ListOrdered, Code } from '@lucide/svelte';
	import { Toggle } from '$lib/components/ui/toggle';
	import type { Editor } from '@tiptap/core';

	interface Props {
		editor: Editor;
	}

	let { editor }: Props = $props();

	const buttons = [
		{
			icon: Bold,
			isActive: () => editor.isActive('bold'),
			run: () => editor.chain().focus().toggleBold().run()
		},
		{
			icon: Italic,
			isActive: () => editor.isActive('italic'),
			run: () => editor.chain().focus().toggleItalic().run()
		},
		{
			icon: Strikethrough,
			isActive: () => editor.isActive('strike'),
			run: () => editor.chain().focus().toggleStrike().run()
		},
		{
			icon: List,
			isActive: () => editor.isActive('bulletList'),
			run: () => editor.chain().focus().toggleBulletList().run()
		},
		{
			icon: ListOrdered,
			isActive: () => editor.isActive('orderedList'),
			run: () => editor.chain().focus().toggleOrderedList().run()
		},
		{
			icon: Code,
			isActive: () => editor.isActive('code'),
			run: () => editor.chain().focus().toggleCode().run()
		}
	];
</script>

<div class="mb-2 flex gap-1 px-3">
	{#each buttons as button, i (i)}
		<Toggle pressed={button.isActive()} onPressedChange={button.run} class="rounded p-2">
			<button.icon class="h-4 w-4" />
		</Toggle>
	{/each}
</div>
