import { dynamicGreetings } from '$lib/constants/app/dynamicGreetings';

type TimeOfDay = keyof typeof dynamicGreetings;

const getTimeOfDay = (): TimeOfDay => {
	const hour = new Date().getHours();
	if (hour >= 6 && hour < 12) return 'morning';
	if (hour >= 12 && hour < 18) return 'afternoon';
	if (hour >= 18 && hour < 22) return 'evening';
	return 'night';
};

export function getDynamicGreeting(username: string | null | undefined): string {
	const time = dynamicGreetings[getTimeOfDay()];

	if (username) {
		const pool = [...time.withUser, ...dynamicGreetings.default.withUser];
		const fn = pool[Math.floor(Math.random() * pool.length)];
		return fn({ username });
	} else {
		const pool = [...time.anonymous, ...dynamicGreetings.default.anonymous];
		const fn = pool[Math.floor(Math.random() * pool.length)];
		return fn();
	}
}
