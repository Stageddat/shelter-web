import { paraglideVitePlugin } from '@inlang/paraglide-js';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import path from 'path';

export default defineConfig({
	resolve: {
		alias: {
			'@css': path.resolve('./src/routes')
		}
	},
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
			registerType: 'prompt',
			kit: {
				adapterFallback: 'app.html',
				spa: { fallbackMapping: '/app' }
			},
			workbox: {
				navigateFallback: '/app',
				navigateFallbackAllowlist: [/^\/app/, /^\/login/, /^\/signup/, /^\/restore/],
				globPatterns: ['client/**/*.{js,css,woff,woff2}', '**/*.html'],

				runtimeCaching: [
					{
						urlPattern: ({ url }) => {
							const publicRoutes = [/^\/app/, /^\/login/, /^\/signup/, /^\/restore/];
							return !publicRoutes.some((regex) => regex.test(url.pathname));
						},
						handler: 'NetworkFirst',
						options: {
							cacheName: 'public-marketing-routes',
							expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 7 }
						}
					},
					{
						urlPattern: /\.(?:png|jpg|webp|svg|ico)$/,
						handler: 'CacheFirst',
						options: {
							cacheName: 'images',
							expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 30 }
						}
					}
				]
			},

			manifest: {
				name: 'shelter',
				short_name: 'shelter',
				description: 'private encrypted journal',
				theme_color: '#ffffff',
				background_color: '#ffffff',
				display: 'standalone',
				start_url: '/app',
				scope: '/',
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
