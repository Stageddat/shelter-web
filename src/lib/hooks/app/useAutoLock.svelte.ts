import { goto } from '$app/navigation';
import { resolve } from '$app/paths';
import { getAuthContext } from '$lib/contexts/auth.context.svelte';

const AUTOLOCK_KEY = 'shelter.autoLockMinutes';
const DEFAULT_MINUTES = 15;

export function getAutoLockMinutes(): number {
	return parseInt(localStorage.getItem(AUTOLOCK_KEY) ?? String(DEFAULT_MINUTES));
}

export function setAutoLockMinutes(minutes: number): void {
	localStorage.setItem(AUTOLOCK_KEY, String(minutes));
}

export function useAutoLock() {
	const auth = getAuthContext();

	$effect(() => {
		const minutes = auth.autoLockMinutes;
		if (minutes === 0) {
			// console.log('[autolock] disabled');
			return;
		}

		let timer: ReturnType<typeof setTimeout>;
		// let remaining = minutes * 60;
		// let debugInterval: ReturnType<typeof setInterval>;

		function lockOut() {
			// console.log('[autolock] locking out!');
			auth.logout();
			goto(resolve('/login'));
		}

		function reset() {
			clearTimeout(timer);
			// remaining = minutes * 60;
			timer = setTimeout(lockOut, minutes * 60 * 1000);
		}

		// if (import.meta.env.DEV) {
		// 	debugInterval = setInterval(() => {
		// 		remaining--;
		// 		console.log(`[autolock] ${remaining}s remaining`);
		// 	}, 1000);
		// }

		function handleVisibility() {
			if (document.hidden) return;
			reset();
		}

		const events = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'];
		events.forEach((e) => window.addEventListener(e, reset, { passive: true }));
		document.addEventListener('visibilitychange', handleVisibility);

		reset();

		return () => {
			clearTimeout(timer);
			// clearInterval(debugInterval);
			events.forEach((e) => window.removeEventListener(e, reset));
			document.removeEventListener('visibilitychange', handleVisibility);
		};
	});
}
