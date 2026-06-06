<script>
	import { Button } from '$lib/components/ui/button';
	import { Trash2, FileUp, FileDown } from '@lucide/svelte';
</script>

<div class="flex flex-col gap-2 px-12 py-9">
	<div>
		<h2 class="mb-0.5 flex text-left text-4xl font-semibold tracking-wide lowercase">data</h2>
		<h3 class="mb-6 flex text-left text-xl tracking-wide lowercase">
			manage your data and backups here.
		</h3>
	</div>

	<div class="flex flex-col rounded-md bg-primary/10 px-4 py-6">
		<h4 class="flex text-left text-3xl font-semibold tracking-wide lowercase">import & export</h4>
		<p class="mb-6 flex text-left text-2xl tracking-wide lowercase">
			backup up your data or bring it to this profile
		</p>

		<div class="flex w-full flex-row gap-4">
			<div class="flex w-1/2 flex-col rounded-xl bg-secondary/30 p-4">
				<p class="mt-1 mb-1.5 flex text-left text-2xl font-semibold tracking-wide lowercase">
					export data
				</p>
				<p class="mb-6 text-lg text-pretty">
					download an encrypted backup of all your entries and attachments. keep it somewhere safe,
					only you can open it.
				</p>
				<Button class="mt-auto h-12 w-full text-xl" href="/app/settings/data/export">
					<FileDown class="mr-1 h-6! w-6!" />
					export
				</Button>
			</div>

			<div class="flex w-1/2 flex-col rounded-xl bg-secondary/30 p-4">
				<p class="mt-1 mb-1.5 flex text-left text-2xl font-semibold tracking-wide lowercase">
					import data
				</p>
				<p class="mb-6 text-lg text-pretty">
					restore a previous backup from a <code>.shelter</code> file.<br /> this will replace all your
					data.
				</p>
				<Button class="mt-auto h-12 w-full text-xl" href="/app/settings/data/export">
					<FileUp class="mr-1 h-6! w-6!" />
					import
				</Button>
			</div>
		</div>
	</div>

	<div class="flex flex-col rounded-md bg-primary/10 px-4 py-6">
		<h4 class="flex text-left text-3xl font-semibold tracking-wide lowercase">purge data</h4>
		<p class="mb-6 flex text-left text-2xl tracking-wide lowercase">
			permanently delete all the data in this profile
		</p>

		<div
			class="flex h-24 w-full flex-row items-center justify-between gap-2 rounded-xl bg-secondary/30 p-4"
		>
			<p class="w-9/12 text-lg tracking-wide text-pretty text-destructive">
				this action is irreversible. all entries, accounts and attachments will be permanently
				deleted. make sure to export a backup if you want to keep a copy.
			</p>
			<Button
				class="h-12 w-3/12 gap-0 text-xl "
				href="/app/settings/data/export"
				variant="destructive"
			>
				<Trash2 class="mr-1 h-6! w-6!" />purge all data
			</Button>
		</div>
	</div>
</div>
