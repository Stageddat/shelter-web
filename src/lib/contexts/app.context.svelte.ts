import { createContext } from 'svelte';
import { getEntries, type DecryptedEntry } from '$lib/services/app/entry.service';
import { getAuthContext } from '$lib/contexts/auth.context.svelte';
import { getDynamicGreeting } from '$lib/hooks/app/useDynamicGreeting';
import { calculateStreak } from '../utils/streak';
import {
	formatRelativeDate,
	formatRelativeDateTime,
	type RelativeDateStrings
} from '$lib/utils/date';
import { SvelteDate } from 'svelte/reactivity';
import { getLocale } from '$lib/paraglide/runtime';
import { m } from '$lib/paraglide/messages';

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

	private get dateStrings(): RelativeDateStrings {
		getLocale();
		return {
			today: m['app.utils.date.today'](),
			yesterday: m['app.utils.date.yesterday'](),
			daysAgo: (count) => m['app.utils.date.daysAgo']({ count }),
			justNow: m['app.utils.date.justNow'](),
			minuteAgo: m['app.utils.date.minuteAgo'](),
			minutesAgo: (count) => m['app.utils.date.minutesAgo']({ count }),
			hourAgo: m['app.utils.date.hourAgo'](),
			hoursAgo: (count) => m['app.utils.date.hoursAgo']({ count })
		};
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

	lastEntry = $derived(
		this.entries[0] ? formatRelativeDate(this.entries[0].date, this.dateStrings) : null
	);
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

	streakTier = $derived.by((): 'zero' | 'low' | 'mid' | 'high' => {
		const s = this.streak;
		if (s === 0) return 'zero';
		if (s <= 3) return 'low';
		if (s <= 7) return 'mid';
		return 'high';
	});

	lastEntryRelativeDate = $derived(
		this.entries[0]
			? formatRelativeDateTime(this.entries[0].date, this.entries[0].time, this.dateStrings)
			: m['app.utils.date.noEntries']()
	);
}

export const [getAppContext, setAppContext] = createContext<AppContext>();
export { AppContext };
