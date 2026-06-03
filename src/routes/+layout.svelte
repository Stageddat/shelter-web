<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

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
{@render children()}
