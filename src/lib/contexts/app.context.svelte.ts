import { createContext } from 'svelte';
import { getEntries, type DecryptedEntry } from '$lib/services/app/entry.service';
import { getAuthContext } from '$lib/contexts/auth.context.svelte';
import { getDynamicGreeting } from '$lib/hooks/app/useDynamicGreeting';
import { calculateStreak } from '../utils/streak';
import { formatRelativeDate } from '$lib/utils/date';

class AppContext {
	private auth = getAuthContext();

	entries = $state<DecryptedEntry[]>([]);
	isLoading = $state(true);

	constructor() {
		$effect(() => {
			if (!this.auth?.masterKey) return;
			this.loadEntries(this.auth.masterKey);
		});
	}

	greeting = $derived.by(() => {
		return getDynamicGreeting(
			this.auth?.user?.displayName ?? this.auth?.user?.username ?? 'John-117'
		);
	});

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
		if (!this.auth?.masterKey) return;
		await this.loadEntries(this.auth.masterKey);
	};

	removeEntry = (entryId: string) => {
		this.entries = this.entries.filter((e) => e.id !== entryId);
	};

	totalWordCount = $derived(this.entries.reduce((sum, e) => sum + (e.wordCount || 0), 0));

	lastEntry = $derived(this.entries[0] ? formatRelativeDate(this.entries[0].date) : null);
	streak = $derived(calculateStreak(this.entries));
}

export const [getAppContext, setAppContext] = createContext<AppContext>();
export { AppContext };
