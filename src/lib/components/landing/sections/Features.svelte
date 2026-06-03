<script lang="ts">
	import FeatureCard from '$lib/components/landing/FeatureCard.svelte';
	import { features } from '$lib/constants/landing/features';
</script>

<section class="relative overflow-hidden bg-background px-12 py-24" id="features">
	<div class="mx-auto xl:max-w-10/12">
		<div class="mb-16 space-y-4 text-center">
			<h2
				class="font-display text-4xl font-normal text-pretty text-foreground sm:text-6xl lg:text-7xl"
			>
				a safe place for your thoughts
			</h2>
		</div>

		<div class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
			{#each features as feature (feature.title)}
				<FeatureCard {...feature} />
			{/each}
		</div>
	</div>
</section>
