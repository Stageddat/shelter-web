export function formatRelativeDate(dateStr: string): string {
	const today = new Date().toLocaleDateString('sv');
	const yesterday = new Date();
	yesterday.setDate(yesterday.getDate() - 1);
	const yesterdayStr = yesterday.toLocaleDateString('sv');

	if (dateStr === today) return 'today';
	if (dateStr === yesterdayStr) return 'yesterday';

	const diff = Math.floor((new Date(today).getTime() - new Date(dateStr).getTime()) / 86400000);

	if (diff < 7) return `${diff} days ago`;

	return new Date(dateStr).toLocaleDateString('en', {
		day: 'numeric',
		month: 'short',
		year: 'numeric'
	});
}

export function formatRelativeDateTime(dateStr: string, timeStr: string): string {
	const now = new Date();
	const entryDate = new Date(`${dateStr}T${timeStr}`);
	const diffMs = now.getTime() - entryDate.getTime();
	const diffMins = Math.floor(diffMs / 60000);
	const diffHours = Math.floor(diffMs / 3600000);

	if (diffMins < 1) return 'just now';
	if (diffMins < 60) return `${diffMins} minute${diffMins === 1 ? '' : 's'} ago`;
	if (diffHours < 24) return `${diffHours} hour${diffHours === 1 ? '' : 's'} ago`;

	return formatRelativeDate(dateStr);
}
