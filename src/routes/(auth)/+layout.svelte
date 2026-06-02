<script lang="ts">
	import { getAuthContext, setAuthContext } from '$lib/contexts/auth.context.svelte';
	let { children } = $props();

	getAuthContext();
</script>

{@render children()}
