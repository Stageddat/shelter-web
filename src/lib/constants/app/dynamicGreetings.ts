export const dynamicGreetings = {
	morning: {
		withUser: [
			'good morning, {username}!',
			'ready for a new day, {username}?',
			"grab a coffee and let's start, {username}.",
			'fresh morning, fresh thoughts, {username}.'
		],
		anonymous: ['good morning!', 'ready for a new day?', "grab a coffee and let's start."]
	},
	afternoon: {
		withUser: [
			'good afternoon, {username}!',
			'hope your day is going well, {username}.',
			'taking a little break, {username}?'
		],
		anonymous: ['good afternoon!', 'hope your day is going well.', 'taking a little break?']
	},
	evening: {
		withUser: [
			'good evening, {username}!',
			'time to wind down, {username}.',
			'how was your day, {username}?'
		],
		anonymous: ['good evening!', 'time to wind down.', 'how was your day?']
	},
	night: {
		withUser: ["it's late-night, {username}"],
		anonymous: ['working late?', 'the world is quiet now.']
	},
	default: {
		withUser: [
			'welcome back, {username}!',
			'so good to see you again, {username}!',
			"what's on your mind today, {username}?"
		],
		anonymous: ['welcome back!', 'so good to see you again!', "what's on your mind today?"]
	}
};
