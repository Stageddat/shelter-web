<script lang="ts">
	import { getAuthContext, setAutContexth } from '$lib/contexts/auth.context.svelte';
	let { children } = $props();

	getAuthContext();
</script>

{@render children()}
