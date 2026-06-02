<script lang="ts">
	import { setAuthContext, AuthState } from '$lib/contexts/auth.context.svelte';
	let { children } = $props();

	const auth = new AuthState();
	setAuthContext(auth);
</script>

{@render children()}
