<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.ico';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import { page } from '$app/state';
	import { pwaInfo } from 'virtual:pwa-info';
	import { onMount } from 'svelte';
	import { ModeWatcher } from 'mode-watcher';
	import { dev } from '$app/environment';

	onMount(async () => {
		if (pwaInfo) {
			const { registerSW } = await import('virtual:pwa-register');
			registerSW({
				immediate: true,
				onRegistered() {},
				onRegisterError(err: Error) {
					console.error('failed to register service worker:', err);
				}
			});
		}
	});

	const webManifest = $derived(pwaInfo ? pwaInfo.webManifest.linkTag : '');
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>shelter — your private, secure & open source journal</title>
	<meta
		name="description"
		content="your personal journal, secure and open source. write your thoughts in a private, cozy, and 100% secure space."
	/>
	{#if !import.meta.env.DEV}
		<script
			defer
			src="https://stats.stageddat.dev/script.js"
			data-website-id="77c3d000-480e-4bd8-b2e0-47dfde39965b"
			data-performance="true"
		></script>
	{/if}
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html webManifest}
</svelte:head>

<div class="sr-only" aria-hidden="true">
	{#each locales as locale (locale)}
		<a href={localizeHref(page.url.pathname, { locale })} data-sveltekit-reload tabindex="-1">
			{locale}
		</a>
	{/each}
</div>

<ModeWatcher />
{#if dev}
	<div
		class="fixed bottom-2 left-2 z-50 rounded bg-black/80 px-2 py-1 font-mono text-base text-white"
	>
		<span class="block sm:hidden">xs</span>
		<span class="hidden sm:block md:hidden">sm</span>
		<span class="hidden md:block lg:hidden">md</span>
		<span class="hidden lg:block xl:hidden">lg</span>
		<span class="hidden xl:block 2xl:hidden">xl</span>
		<span class="hidden 2xl:block">2xl</span>
	</div>
{/if}
{@render children()}
