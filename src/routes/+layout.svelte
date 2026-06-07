<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import { page } from '$app/state';
	import { pwaInfo } from 'virtual:pwa-info';
	import { onMount } from 'svelte';

	onMount(async () => {
		if (pwaInfo) {
			const { registerSW } = await import('virtual:pwa-register/sveltekit');
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
	<script
		defer
		src="https://stats.stageddat.dev/script.js"
		data-website-id="77c3d000-480e-4bd8-b2e0-47dfde39965b"
	></script>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html webManifest}
</svelte:head>
<div class="sr-only" aria-hidden="true">
	{#each locales as locale (locale)}
		<a href={localizeHref(page.url.pathname, { locale })} data-sveltekit-reload>
			{locale}
		</a>
	{/each}
</div>
{@render children()}
