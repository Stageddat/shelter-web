import { getLocale } from '$lib/paraglide/runtime';

export interface RelativeDateStrings {
	today: string;
	yesterday: string;
	daysAgo: (count: number) => string;
	justNow: string;
	minuteAgo: string;
	minutesAgo: (count: number) => string;
	hourAgo: string;
	hoursAgo: (count: number) => string;
}

export function formatRelativeDate(dateStr: string, t: RelativeDateStrings): string {
	const today = new Date().toLocaleDateString('sv');
	const yesterday = new Date();
	yesterday.setDate(yesterday.getDate() - 1);
	const yesterdayStr = yesterday.toLocaleDateString('sv');

	if (dateStr === today) return t.today;
	if (dateStr === yesterdayStr) return t.yesterday;

	const diff = Math.floor((new Date(today).getTime() - new Date(dateStr).getTime()) / 86400000);

	if (diff < 7) return t.daysAgo(diff);

	return new Date(dateStr).toLocaleDateString(getLocale(), {
		day: 'numeric',
		month: 'short',
		year: 'numeric'
	});
}

export function formatRelativeDateTime(
	dateStr: string,
	timeStr: string,
	t: RelativeDateStrings
): string {
	const now = new Date();
	const entryDate = new Date(`${dateStr}T${timeStr}`);
	const diffMs = now.getTime() - entryDate.getTime();
	const diffMins = Math.floor(diffMs / 60000);
	const diffHours = Math.floor(diffMs / 3600000);

	if (diffMins < 1) return t.justNow;
	if (diffMins === 1) return t.minuteAgo;
	if (diffMins < 60) return t.minutesAgo(diffMins);
	if (diffHours === 1) return t.hourAgo;
	if (diffHours < 24) return t.hoursAgo(diffHours);

	return formatRelativeDate(dateStr, t);
}
