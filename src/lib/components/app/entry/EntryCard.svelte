<script lang="ts">
	import { getAppContext } from '$lib/contexts/app.context.svelte';
	import { deleteEntry, type DecryptedEntry } from '$lib/services/app/entry.service';
	import { Button } from '$lib/components/ui/button';
	import { Trash } from '@lucide/svelte';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import { resolve } from '$app/paths';
	import { m } from '$lib/paraglide/messages';

	interface Props {
		entry: DecryptedEntry;
		class?: string;
		enableDelete?: boolean;
	}
	let { entry, class: className = '', enableDelete = true }: Props = $props();

	const { removeEntry } = getAppContext();
	let showDialog = $state(false);

	async function handleConfirmDelete(id: string) {
		showDialog = false;
		removeEntry(id);
		await deleteEntry(id);
	}
</script>

<AlertDialog.Root bind:open={showDialog}>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title class="text-2xl! tracking-wide lg:text-3xl!">
				{m['app.entryCard.deleteTitle']({ title: entry.title })}
			</AlertDialog.Title>
			<AlertDialog.Description class="text-base tracking-wide text-muted-foreground lg:text-xl">
				{m['app.entryCard.deleteDescription']()}
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel class="cursor-pointer text-base! tracking-wide! lg:text-lg!">
				{m['app.entryCard.cancel']()}
			</AlertDialog.Cancel>
			<AlertDialog.Action
				variant="destructive"
				class="cursor-pointer bg-destructive/20! text-base! tracking-wider! text-destructive! hover:bg-destructive/30! lg:text-lg!"
				onclick={() => handleConfirmDelete(entry.id)}
			>
				{m['app.entryCard.delete']()}
			</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>

<a
	href={resolve(`/app/entries/${entry.id}`)}
	class="group flex items-center rounded-xl border border-border p-4 transition-all hover:bg-muted/50 {className}"
>
	<div class="flex-1">
		<p class="text-lg lg:text-xl">{entry.title}</p>
		<p class="mt-1 text-sm text-muted-foreground lg:text-base">
			{entry.date} · {entry.time}
		</p>
	</div>

	{#if enableDelete}
		<Button
			variant="ghost"
			class="mr-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full p-0! hover:bg-destructive/20 hover:text-destructive lg:hidden lg:h-12 lg:w-12 lg:group-hover:flex"
			onclick={(e) => {
				e.stopPropagation();
				e.preventDefault();
				showDialog = true;
			}}
		>
			<Trash class="h-5! w-5! stroke-2 lg:h-6! lg:w-6!" />
		</Button>
	{/if}
</a>
