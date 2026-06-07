import { paraglideVitePlugin } from '@inlang/paraglide-js';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

export default defineConfig({
	plugins: [
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			strategy: ['url', 'localStorage', 'preferredLanguage', 'baseLocale'],
			routeStrategies: [
				{
					match: '/app/:path(.*)?',
					strategy: ['localStorage', 'preferredLanguage', 'baseLocale']
				},
				{
					match: '/login/:path(.*)?',
					strategy: ['localStorage', 'preferredLanguage', 'baseLocale']
				},
				{
					match: '/signup/:path(.*)?',
					strategy: ['localStorage', 'preferredLanguage', 'baseLocale']
				}
			]
		}),
		enhancedImages(),
		sveltekit(),
		tailwindcss(),
		SvelteKitPWA({
			registerType: 'autoUpdate',
			// injectRegister: 'inline',
			kit: { spa: true },
			workbox: {
				navigateFallback: '/',
				navigateFallbackAllowlist: [/^\/*/],
				globPatterns: ['client/**/*.{js,css,ico,png,svg,webp,webmanifest,woff,woff2}']
			},
			manifest: {
				name: 'shelter',
				short_name: 'shelter',
				description: 'Private encrypted journal',
				theme_color: '#ffffff',
				background_color: '#ffffff',
				display: 'standalone',
				icons: [
					{ src: 'android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
					{
						src: 'android-chrome-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable'
					},
					{ src: 'apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
				]
			}
		})
	]
	// build: { sourcemap: true }
	// build: {
	// 	rollupOptions: {
	// 		external: ['workbox-window']
	// 	}
	// }
});
