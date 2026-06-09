import { createEntry } from '$lib/services/app/entry.service';

const LOREM_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

function makeParagraph(text: string) {
	return {
		type: 'paragraph',
		content: [{ type: 'text', text }]
	};
}

function makeContent(repeat: number) {
	return {
		type: 'doc',
		content: Array.from({ length: repeat }, () => makeParagraph(LOREM_TEXT))
	};
}

export async function seedEntries(masterKey: CryptoKey, count = 500) {
	console.time(`seed ${count} entries`);

	const BATCH = 50;
	for (let i = 0; i < count; i += BATCH) {
		await Promise.all(
			Array.from({ length: Math.min(BATCH, count - i) }, (_, j) => {
				const n = i + j;
				return createEntry({
					masterKey,
					title: `Entry ${n + 1}`,
					content: JSON.stringify(makeContent(Math.floor(Math.random() * 4) + 1))
				});
			})
		);
		console.log(`${Math.min(i + BATCH, count)}/${count}`);
	}

	console.timeEnd(`seed ${count} entries`);
}
