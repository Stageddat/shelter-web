<script lang="ts">
	import FeatureCard from '$lib/components/landing/FeatureCard.svelte';
	import { features } from '$lib/constants/landing/features';
	import { m } from '$lib/paraglide/messages';
</script>

<section class="relative overflow-hidden bg-background px-4 py-2 lg:px-8 lg:py-8" id="features">
	<div class="mx-auto xl:max-w-10/12">
		<div class="mb-4 text-center">
			<h2
				class="font-display text-5xl font-normal text-pretty text-foreground sm:text-6xl lg:mb-3 lg:text-7xl"
			>
				{m['landing.features.title']()}
			</h2>
		</div>

		<div class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
			{#each features as feature (feature.title)}
				<FeatureCard {...feature} />
			{/each}
		</div>
	</div>
</section>
