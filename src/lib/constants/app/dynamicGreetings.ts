import { m } from '$lib/paraglide/messages';

export const dynamicGreetings = {
	morning: {
		withUser: [
			m['app.greetings.morning.withUser.0'],
			m['app.greetings.morning.withUser.1'],
			m['app.greetings.morning.withUser.2'],
			m['app.greetings.morning.withUser.3']
		],
		anonymous: [
			m['app.greetings.morning.anonymous.0'],
			m['app.greetings.morning.anonymous.1'],
			m['app.greetings.morning.anonymous.2']
		]
	},
	afternoon: {
		withUser: [
			m['app.greetings.afternoon.withUser.0'],
			m['app.greetings.afternoon.withUser.1'],
			m['app.greetings.afternoon.withUser.2']
		],
		anonymous: [
			m['app.greetings.afternoon.anonymous.0'],
			m['app.greetings.afternoon.anonymous.1'],
			m['app.greetings.afternoon.anonymous.2']
		]
	},
	evening: {
		withUser: [
			m['app.greetings.evening.withUser.0'],
			m['app.greetings.evening.withUser.1'],
			m['app.greetings.evening.withUser.2']
		],
		anonymous: [
			m['app.greetings.evening.anonymous.0'],
			m['app.greetings.evening.anonymous.1'],
			m['app.greetings.evening.anonymous.2']
		]
	},
	night: {
		withUser: [m['app.greetings.night.withUser.0']],
		anonymous: [m['app.greetings.night.anonymous.0'], m['app.greetings.night.anonymous.1']]
	},
	default: {
		withUser: [
			m['app.greetings.default.withUser.0'],
			m['app.greetings.default.withUser.1'],
			m['app.greetings.default.withUser.2']
		],
		anonymous: [
			m['app.greetings.default.anonymous.0'],
			m['app.greetings.default.anonymous.1'],
			m['app.greetings.default.anonymous.2']
		]
	}
};
