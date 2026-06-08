// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

import 'vite-plugin-pwa/info';
import 'vite-plugin-pwa/vanillajs';
import 'vite-plugin-pwa/svelte';

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
