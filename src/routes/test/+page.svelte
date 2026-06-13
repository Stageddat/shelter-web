<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		if (!import.meta.env.DEV) {
			throw new Error('not allowed');
		}
	});
</script>
