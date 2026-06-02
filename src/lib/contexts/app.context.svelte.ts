import { createContext } from 'svelte';
import { getEntries, type DecryptedEntry } from '$lib/services/app/entry.service';
import { getAuthContext } from '$lib/contexts/auth.context.svelte';
import { getDynamicGreeting } from '$lib/hooks/app/useDynamicGreeting';

class AppContext {
	entries = $state<DecryptedEntry[]>([]);
	isLoading = $state(true);

	greeting = $derived.by(() => {
		const auth = getAuthContext();
		return getDynamicGreeting(auth?.user?.username);
	});

	constructor() {
		const auth = getAuthContext();

		$effect(() => {
			if (!auth || !auth.masterKey) return;

			this.loadEntries(auth.masterKey);
		});
	}

	private async loadEntries(masterKey: CryptoKey) {
		try {
			this.isLoading = true;
			const data = await getEntries(masterKey);
			this.entries = data;
		} catch (error) {
			console.error('error loading entries:', error);
		} finally {
			this.isLoading = false;
		}
	}

	refreshEntries = async () => {
		const auth = getAuthContext();
		if (!auth || !auth.masterKey) return;
		await this.loadEntries(auth.masterKey);
	};

	removeEntry = (entryId: string) => {
		this.entries = this.entries.filter((e) => e.id !== entryId);
	};
}

export const [getAppContext, setAppContext] = createContext<AppContext>();
export { AppContext };
