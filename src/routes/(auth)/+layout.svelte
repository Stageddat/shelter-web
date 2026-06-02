<script lang="ts">
	import { setAuthContext, AuthContext } from '$lib/contexts/auth.context.svelte';
	let { children } = $props();

	const auth = new AuthContext();
	setAuthContext(auth);
</script>

{@render children()}
