<script lang="ts">
	import type { Component } from 'svelte';
	import { cn } from '$lib/utils'; // Tu alias $lib en SvelteKit

	// En Svelte 5, definimos la interfaz de las Props directamente
	interface FeatureCardProps {
		icon: Component; // En lucide-svelte, los iconos son componentes puros de Svelte
		title: string;
		text: string;
	}

	// Recibimos las props usando el Rune $props() con destructuring
	let { icon: Icon, title, text }: FeatureCardProps = $props();
</script>

<article
	class={cn(
		'group relative flex flex-col p-4 md:p-6 lg:p-8',
		'rounded-xl border border-border',
		'border-0 bg-secondary/50 transition-colors duration-300 ease-in-out',
		'hover:bg-accent/50'
	)}
>
	<div
		class="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-border/50 bg-background text-primary"
	>
		<Icon class="h-6 w-6 stroke-[1.5]" />
	</div>

	<div class="space-y-3">
		<h3 class="font-display text-3xl font-medium tracking-normal text-foreground">
			{title.toLowerCase()}
		</h3>
		<p class="font-primary text-2xl leading-relaxed text-pretty text-muted-foreground">
			{text}
		</p>
	</div>
</article>
