<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<svelte:head
	><link rel="icon" href={favicon} />
	<title>shelter</title>
	<meta
		name="description"
		content="your personal journal, secure and open source. write your thoughts in a private, cozy, and 100% secure space."
	/>
</svelte:head>
<div class="sr-only" aria-hidden="true">
	{#each locales as locale (locale)}
		<a href={localizeHref(page.url.pathname, { locale })} data-sveltekit-reload>
			{locale}
		</a>
	{/each}
</div>
{@render children()}
