<script lang="ts">
  import FeatureCard from '$lib/components/landing/FeatureCard.svelte';
  import { features } from '$lib/constants/landing/features';
</script>

<section
  class="bg-background relative overflow-hidden px-12 py-24"
  id="features"
>
  <div class="bg-border/20 absolute top-1/2 left-1/2 -z-10 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" />

  <div class="mx-auto xl:max-w-10/12">
    <div class="mb-16 space-y-4 text-center">
      <h2 class="font-display text-foreground text-4xl font-normal text-pretty sm:text-6xl lg:text-7xl">
        a safe place for your thoughts
      </h2>
    </div>

    <div class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
      {#each features as feature}
        <FeatureCard {...feature} />
      {/each}
    </div>
  </div>
</section>