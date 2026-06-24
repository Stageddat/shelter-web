import { m } from '$lib/paraglide/messages';

export function getCategoryLabels() {
	return {
		general: {
			title: m['app.settings.general.title'](),
			description: m['app.settings.general.description']()
		},
		security: {
			title: m['app.settings.security.title'](),
			description: m['app.settings.security.description']()
		},
		editor: {
			title: m['app.settings.editor.title'](),
			description: m['app.settings.editor.description']()
		},
		data: {
			title: m['app.settings.data.title'](),
			description: m['app.settings.data.description']()
		},
		about: {
			title: m['app.settings.about.title'](),
			description: m['app.settings.about.description']()
		}
	};
}
