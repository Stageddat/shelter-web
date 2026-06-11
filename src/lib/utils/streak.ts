import type { DecryptedEntry } from '$lib/services/app/entry.service';

export function calculateStreak(entries: DecryptedEntry[]): number {
	if (entries.length === 0) return 0;

	const today = new Date().toLocaleDateString('sv');

	const yesterdayDate = new Date();
	yesterdayDate.setDate(yesterdayDate.getDate() - 1);
	const yesterday = yesterdayDate.toLocaleDateString('sv');

	const dates = new Set(entries.map((e) => e.date)); // e.date should be "YYYY-MM-DD"

	// si no escribiste hoy ni ayer, racha rota
	const anchor = dates.has(today) ? today : dates.has(yesterday) ? yesterday : null;
	if (!anchor) return 0;

	let streak = 0;
	const cursor = new Date(anchor);

	while (dates.has(cursor.toLocaleDateString('sv'))) {
		streak++;
		cursor.setDate(cursor.getDate() - 1);
	}

	return streak;
}
