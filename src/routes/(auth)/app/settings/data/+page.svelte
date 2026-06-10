<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { exportFullBackup } from '$lib/services/backup/export.service';
	import { checkImportCompatibility, importFullBackup } from '$lib/services/backup/import.service';
	import { purgeAllData } from '$lib/services/app/db.service';
	import { getAuthContext } from '$lib/contexts/auth.context.svelte';
	import { Trash2, FileUp, FileDown } from '@lucide/svelte';
	import { toast } from 'svelte-sonner';

	const auth = getAuthContext();
	let exporting = $state(false);
	let importing = $state(false);
	let purging = $state(false);
	let fileInput = $state<HTMLInputElement>();

	async function handleExport() {
		exporting = true;
		try {
			const buffer = await exportFullBackup();
			const blob = new Blob([buffer], { type: 'application/octet-stream' });
			const date = new Date().toISOString().slice(0, 16).replace('T', '_');
			const a = document.createElement('a');
			a.href = URL.createObjectURL(blob);
			a.download = `backup-${date}-${auth.user?.username}.shelter`;
			a.click();
			URL.revokeObjectURL(a.href);
			toast.success('backup exported successfully');
		} catch (err) {
			console.error(err);
			toast.error('failed to export backup :(');
		} finally {
			exporting = false;
		}
	}

	function handleImportClick() {
		const ok = confirm(
			'importing a backup will permanently delete all your current data, including entries, account and password. everything will be replaced with the backup contents.\nTHIS CANNOT BE UNDONE\n\ncontinue?'
		);
		if (!ok) return;
		fileInput?.click();
	}

	async function handleImport(e: Event) {
		const file = (e.target as HTMLInputElement).files?.[0];
		if (!file) return;

		importing = true;
		try {
			const buffer = await file.arrayBuffer();

			const check = checkImportCompatibility(buffer);

			if (!check.ok) {
				toast.error(
					check.reason === 'format_incompatible'
						? 'this backup is not compatible with this version of shelter'
						: 'this backup format is not supported'
				);
				return;
			}

			if (check.warning === 'backup_from_newer_app') {
				const ok = confirm(
					'this backup was created with a newer version of shelter. some data may be lost. continue?'
				);
				if (!ok) return;
			}

			await importFullBackup(buffer);
			window.alert('backup imported successfully, you will be logged out in 3 seconds');
			toast.success('backup imported successfully');
			setTimeout(() => auth.logout(), 3000);
		} catch (err) {
			console.error(err);
			toast.error('failed to import backup :(');
		} finally {
			importing = false;
		}
	}

	async function handlePurge() {
		const ok = confirm(
			'this will permanently delete all your data, including entries, account and password. there is no way to recover it.\nTHIS CANNOT BE UNDONE\n\ncontinue?'
		);
		if (!ok) return;

		purging = true;
		try {
			await purgeAllData();
			alert('all data has been deleted. you will be logged out.');
			auth.logout();
		} catch (err) {
			toast.error(err instanceof Error ? err.message : 'unknown error');
		} finally {
			purging = false;
		}
	}
</script>

<input bind:this={fileInput} type="file" accept=".shelter" class="hidden" onchange={handleImport} />

<div class="flex flex-col gap-2 px-12 py-9">
	<!-- header -->
	<div>
		<h2 class="mb-0.5 flex text-left text-4xl font-semibold tracking-wide lowercase">data</h2>
		<h3 class="mb-6 flex text-left text-xl tracking-wide lowercase">
			manage your data and backups here.
		</h3>
	</div>

	<!-- import & export -->
	<div class="mb-4">
		<p class="mb-1 text-2xl tracking-widest uppercase">import & export</p>
		<p class="mb-4 text-xl lowercase opacity-85">backup your data or bring it to this profile</p>
		<div class="flex w-full flex-row gap-4">
			<div
				class="flex w-1/2 flex-col rounded-xl border border-current p-5 opacity-100"
				style="border-opacity: 0.1;"
			>
				<p class="mb-1 text-2xl font-semibold tracking-wide lowercase">export data</p>
				<p class="mb-6 text-xl leading-relaxed lowercase opacity-60">
					download an encrypted backup of all your entries and attachments. keep it somewhere safe,
					only you can open it.
				</p>
				<Button
					class="mt-auto h-12 w-full cursor-pointer text-xl"
					onclick={handleExport}
					disabled={exporting}
				>
					<FileDown class="mr-1 h-6! w-6!" />
					{exporting ? 'exporting...' : 'export'}
				</Button>
			</div>

			<div
				class="flex w-1/2 flex-col rounded-xl border border-current p-5"
				style="border-opacity: 0.1;"
			>
				<p class="mb-1 text-2xl font-semibold tracking-wide lowercase">import data</p>
				<p class="mb-6 text-xl leading-relaxed lowercase opacity-60">
					restore a previous backup from a <code>.shelter</code> file. this will replace all your current
					data.
				</p>
				<Button
					class="mt-auto h-12 w-full cursor-pointer text-xl"
					onclick={handleImportClick}
					disabled={importing}
				>
					<FileUp class="mr-1 h-6! w-6!" />
					{importing ? 'importing...' : 'import'}
				</Button>
			</div>
		</div>
	</div>

	<hr class="border-current opacity-25" />

	<!-- purge -->
	<div class="my-4">
		<p class="mb-1 text-2xl tracking-widest uppercase">danger zone</p>
		<p class="mb-4 text-xl lowercase opacity-85">permanently delete all the data in this profile</p>
		<div
			class="flex flex-row items-center justify-between gap-4 rounded-xl border border-destructive/20 p-5"
		>
			<p class="w-9/12 text-xl leading-relaxed text-destructive lowercase opacity-90">
				this action is irreversible. all entries, accounts and attachments will be permanently
				deleted. make sure to export a backup first if you want to keep a copy.
			</p>
			<Button
				class="h-12 w-3/12 cursor-pointer text-xl"
				onclick={handlePurge}
				disabled={purging}
				variant="destructive"
			>
				<Trash2 class="mr-1 h-6! w-6!" />
				{purging ? 'purging...' : 'purge all data'}
			</Button>
		</div>
	</div>
</div>
