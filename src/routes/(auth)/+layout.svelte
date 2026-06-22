<script lang="ts">
	import { Toaster } from '$lib/components/ui/sonner';
	import { setAuthContext, AuthContext } from '$lib/contexts/auth.context.svelte';

	let { children } = $props();

	const auth = new AuthContext();
	setAuthContext(auth);
</script>

<Toaster position="top-right" expand />
{@render children()}
