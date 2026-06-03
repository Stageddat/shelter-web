import { getEntry, type DecryptedEntry } from '$lib/services/app/entry.service';
import { getAuthContext } from '$lib/contexts/auth.context.svelte';

export function useEntry(entryId: string) {
	const { masterKey } = getAuthContext();

	let entry = $state<DecryptedEntry | null>(null);
	let isLoading = $state(true);
	let error = $state('');

	$effect(() => {
		const id = entryId;
		if (!id || !masterKey) return;

		isLoading = true;
		error = '';

		async function loadEntry() {
			try {
				const data = await getEntry(id, masterKey!);
				entry = data;
			} catch (err) {
				console.error('error loading entry:', err);
				error = 'failed to load entry :c';
				entry = null;
				throw err;
			} finally {
				isLoading = false;
			}
		}

		loadEntry();
	});

	return {
		get entry() {
			return entry;
		},
		get isLoading() {
			return isLoading;
		},
		get error() {
			return error;
		}
	};
}
