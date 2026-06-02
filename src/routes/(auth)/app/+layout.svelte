<script lang="ts">
	import { setAppContext, AppContext } from '$lib/contexts/app.context.svelte';
	import { getAuthContext } from '$lib/contexts/auth.context.svelte';
	import { goto } from '$app/navigation';

	let { children } = $props();

	const authContext = getAuthContext();

	const appContext = new AppContext();
	setAppContext(appContext);

	$effect(() => {
		if (!authContext.isAuthenticated && !authContext.masterKey) {
			goto('/login', { replaceState: true });
		}
	});
</script>

{@render children()}
