<script lang="ts">
	import { goto } from '$app/navigation';
	import { ArrowLeft } from '@lucide/svelte';

	interface Props {
		title: string;
		description?: string;
	}
	let { title, description }: Props = $props();
</script>

<!-- mobile, boton volver -->
<div class="mb-4 flex items-center gap-3 lg:hidden">
	<button
		onclick={() => goto('/app/settings')}
		class="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
	>
		<ArrowLeft class="h-5 w-5" />
		<span class="text-base tracking-wide">settings</span>
	</button>
</div>

<!-- pc, oslo titulo -->
<div class="mb-6">
	<h2 class="mb-0.5 text-3xl font-semibold tracking-wide lowercase lg:text-4xl">{title}</h2>
	{#if description}
		<h3 class="text-base tracking-wide lowercase opacity-60 lg:text-xl">{description}</h3>
	{/if}
</div>
