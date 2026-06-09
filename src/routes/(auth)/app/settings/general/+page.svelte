<script>
	import ThemeSelector from '$lib/components/shared/ThemeSelector.svelte';
</script>

<div class="flex flex-col gap-2 px-12 py-9">
	<!-- header -->
	<div>
		<h2 class="mb-0.5 flex text-left text-4xl font-semibold tracking-wide lowercase">general</h2>
		<h3 class="mb-6 flex text-left text-xl tracking-wide lowercase">
			change your appareance, language, etc.
		</h3>
	</div>

	<!-- project info -->
	<div class="mb-6">
		<h2 class="mb-1 flex text-left text-3xl font-semibold tracking-wider lowercase">appereance</h2>
		<div class="flex flex-row justify-between gap-2">
			<p class="mb-0 text-left text-xl tracking-wide lowercase opacity-70">theme</p>
			<ThemeSelector />
		</div>
	</div>

	<hr class="border-current opacity-10" />
</div>
