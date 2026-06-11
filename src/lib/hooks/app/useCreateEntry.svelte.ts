import { getAuthContext } from '$lib/contexts/auth.context.svelte';
import { getAppContext } from '$lib/contexts/app.context.svelte';
import { createEntry } from '$lib/services/app/entry.service';

export function useCreateEntry() {
	const auth = getAuthContext();
	const entries = getAppContext();

	let title = $state('');
	let isSaving = $state(false);
	let error = $state('');

	async function handleSave(editorContent: string, wordCount: number, charCount: number) {
		if (!auth.masterKey) {
			error = 'you are not authenticated';
			return null;
		}
		if (!editorContent.trim()) {
			error = 'write something first';
			return null;
		}

		try {
			isSaving = true;
			error = '';
			const entryId = await createEntry({
				masterKey: auth.masterKey,
				title,
				content: editorContent,
				wordCount,
				charCount
			});
			await entries.refreshEntries();
			return entryId;
		} finally {
			isSaving = false;
		}
	}

	return {
		get title() {
			return title;
		},
		set title(v) {
			title = v;
		},
		get isSaving() {
			return isSaving;
		},
		get error() {
			return error;
		},
		handleSave
	};
}
