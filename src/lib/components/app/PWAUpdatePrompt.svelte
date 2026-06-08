<script lang="ts">
	import { useRegisterSW } from 'virtual:pwa-register/svelte';

	const { needRefresh, updateServiceWorker } = useRegisterSW();
	$effect(() => {
		console.log('needRefresh:', $needRefresh);
	});
	console.log('here!!');
</script>

{#if $needRefresh}
	<div class="fixed right-4 bottom-4 z-50 rounded-lg border bg-card px-4 py-3 shadow-lg">
		<p class="text-sm">new version available</p>
		<p class="text-xs text-muted-foreground">click to update</p>
		<div class="mt-2 flex gap-2">
			<button onclick={() => needRefresh.set(false)} class="text-xs text-muted-foreground">
				not now
			</button>
			<button onclick={() => updateServiceWorker(true)} class="text-xs text-primary underline">
				update
			</button>
		</div>
	</div>
{/if}
