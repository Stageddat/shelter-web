import MiniSearch from 'minisearch';
import { generateText } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import type { DecryptedEntry } from './services/app/entry.service';

const miniSearch = new MiniSearch({
	fields: ['title', 'content'],
	storeFields: ['title', 'date', 'content'],
	searchOptions: {
		boost: { title: 2 },
		fuzzy: 0.2,
		prefix: true
	}
});

function tipTapToPlainText(jsonContent: string | undefined): string {
	if (!jsonContent) return '';
	try {
		// si viene de la db desencriptado como string, hacemos json parse
		// y devolvemos el texto con generateText
		const parsedJson = typeof jsonContent === 'string' ? JSON.parse(jsonContent) : jsonContent;
		return generateText(parsedJson, [StarterKit], { blockSeparator: ' ' });
	} catch (e) {
		console.error('Error al extraer texto de TipTap:', e);
		return '';
	}
}

export function buildSearchIndex(decryptedEntries: DecryptedEntry[]) {
	miniSearch.removeAll();
	const docs = decryptedEntries.map((entry) => ({
		id: entry.id,
		title: entry.title ?? '',
		content: tipTapToPlainText(entry.content),
		date: entry.date
	}));
	miniSearch.addAll(docs);
}

export function searchEntries(query: string) {
	if (!query.trim()) return [];
	return miniSearch.search(query);
}
