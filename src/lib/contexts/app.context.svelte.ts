import { createContext } from 'svelte';
import { getEntries, type DecryptedEntry } from '$lib/services/app/entry.service';
import { getAuthContext } from '$lib/contexts/auth.context.svelte';
import { getDynamicGreeting } from '$lib/hooks/app/useDynamicGreeting';
import { calculateStreak } from '../utils/streak';
import { formatRelativeDate, formatRelativeDateTime } from '$lib/utils/date';
import { SvelteDate } from 'svelte/reactivity';

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

	logout = () => {
		this.entries = [];
	};

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

	weeklyEntries = $derived.by(() => {
		const oneWeekAgo = new SvelteDate();
		oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
		return this.entries.filter((e) => new SvelteDate(e.date) >= oneWeekAgo).length;
	});

	weeklyWordCount = $derived.by(() => {
		const oneWeekAgo = new SvelteDate();
		oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
		return this.entries
			.filter((e) => new SvelteDate(e.date) >= oneWeekAgo)
			.reduce((sum, e) => sum + (e.wordCount || 0), 0);
	});

	streakMotivation = $derived.by(() => {
		const s = this.streak;

		// streak 0
		const zeroStreak = ['write the first line!'];

		// streak 1 - 3
		const lowStreak = ['keep it up!', 'off to a great start!', 'you’re doing great!'];

		// streak 4 - 7
		const midStreak = ['you’re on a roll!', 'absolutely cooking!', 'locked in', 'look at you go!'];

		// streak 8+
		const highStreak = ['unstoppable!', 'legendary status', 'built different?'];

		// random selection
		const getRandom = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

		if (s === 0) return getRandom(zeroStreak);
		if (s <= 3) return getRandom(lowStreak);
		if (s <= 7) return getRandom(midStreak);
		return getRandom(highStreak);
	});

	lastEntryRelativeDate = $derived(
		this.entries[0]
			? formatRelativeDateTime(this.entries[0].date, this.entries[0].time)
			: 'no entries yet'
	);
}

export const [getAppContext, setAppContext] = createContext<AppContext>();
export { AppContext };
