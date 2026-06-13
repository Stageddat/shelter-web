<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		if (!import.meta.env.DEV) {
			goto('/');
		}
	});
</script>
