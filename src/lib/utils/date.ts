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
