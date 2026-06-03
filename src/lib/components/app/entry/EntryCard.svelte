<script lang="ts">
	import { getAppContext } from '$lib/contexts/app.context.svelte';
	import { deleteEntry, type DecryptedEntry } from '$lib/services/app/entry.service';
	import { Button } from '$lib/components/ui/button';
	import { Trash } from '@lucide/svelte';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import { resolve } from '$app/paths';

	interface Props {
		entry: DecryptedEntry;
	}
	let { entry }: Props = $props();

	const { refreshEntries } = getAppContext();

	let showDialog = $state(false);

	async function handleConfirmDelete(id: string) {
		await deleteEntry(id);
		await refreshEntries();
		showDialog = false;
	}
</script>

<AlertDialog.Root bind:open={showDialog}>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title class="text-3xl! tracking-wide">
				delete "{entry.title}" entry?
			</AlertDialog.Title>
			<AlertDialog.Description class="text-xl tracking-wide text-muted-foreground">
				this entry will be lost forever! (a long time!)
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel class="cursor-pointer text-lg! tracking-wide!">cancel</AlertDialog.Cancel>
			<AlertDialog.Action
				variant="destructive"
				class="cursor-pointer bg-destructive/20! text-lg! tracking-wider! text-destructive! hover:bg-destructive/30!"
				onclick={() => handleConfirmDelete(entry.id)}
			>
				delete
			</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>

<a
	href={resolve(`/app/entries/${entry.id}`)}
	class="group flex items-center rounded-xl border border-border p-4 transition-all hover:bg-accent"
>
	<div class="flex-1">
		<p class="text-xl">{entry.title}</p>
		<p class="mt-1 text-base text-muted-foreground">
			{entry.date} · {entry.time}
		</p>
	</div>

	<Button
		variant="ghost"
		class="mr-2 hidden h-12 w-12 cursor-pointer items-center justify-center rounded-full p-0! group-hover:flex hover:bg-destructive/20 hover:text-destructive"
		onclick={(e) => {
			e.stopPropagation();
			e.preventDefault();
			showDialog = true;
		}}
	>
		<Trash class="h-6! w-6! stroke-2" />
	</Button>
</a>
