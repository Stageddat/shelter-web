<script lang="ts">
	import { Toaster } from '$lib/components/ui/sonner';
	import { setAuthContext, AuthContext } from '$lib/contexts/auth.context.svelte';
	import { m } from '$lib/paraglide/messages';

	let { children } = $props();

	const auth = new AuthContext();
	setAuthContext(auth);
</script>

<svelte:head>
	<title>{m['metadata.app.title']()}</title>
	<meta name="description" content={m['metadata.app.description']()} />
</svelte:head>

<Toaster position="top-right" expand />
{@render children()}
