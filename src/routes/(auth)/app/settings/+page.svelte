<!--
this is beastie, say hi to beastie! isn't he a cutie?
⠀⠀⠀⠀⠀⠀⢀⡤⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⡏⠀⠀⠈⠳⣄⠀⠀⠀⠀⠀⣀⠴⠋⠉⠉⡆⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠈⠉⠉⠙⠓⠚⠁⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⠞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣄⠀⠀⠀⠀
⠀⠀⠀⠀⡞⠀⠀⠀⠀⠀⠶⠀⠀⠀⠀⠀⠀⠶⠀⠀⠀⠀⠀⠸⡆⠀⠀⠀
⢠⣤⣶⣾⣧⣤⣤⣀⡀⠀⠀⠀⠀⠈⠀⠀⠀⢀⡤⠴⠶⠤⢤⡀⣧⣀⣀⠀
⠻⠶⣾⠁⠀⠀⠀⠀⠙⣆⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⢹⣿⣭⣽⠇
⠀⠀⠙⠤⠴⢤⡤⠤⠤⠋⠉⠉⠉⠉⠉⠉⠉⠳⠖⠦⠤⠶⠦⠞⠁⠀⠀⠀
-->
<script lang="ts">
	import { goto } from '$app/navigation';
	import settingsCategories from '$lib/types/app/settingsCategories';
	import { ChevronRight } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages';
	import { getCategoryLabels } from '$lib/types/app/settingsCategoriesLabels';

	const categoryLabels = $derived(getCategoryLabels());
</script>

<!--
		en pc redirige a settings/general,
    esta página es solo para móvil -->

<div class="flex flex-col px-4 py-6 lg:hidden">
	<h2 class="mb-6 text-3xl font-bold tracking-wide lowercase">{m['app.settings.title']()}</h2>
	<div class="flex flex-col gap-1">
		{#each settingsCategories as category (category.id)}
			<button
				onclick={() => goto(`/app/settings/${category.id}`)}
				class="flex items-center gap-4 rounded-2xl px-4 py-4 text-left transition-colors hover:bg-muted"
			>
				<div class="rounded-xl bg-muted p-2.5">
					<category.icon class="h-5 w-5" />
				</div>
				<div class="flex-1">
					<p class="text-lg font-semibold tracking-wide lowercase">
						{categoryLabels[category.id as keyof typeof categoryLabels]?.title}
					</p>
					<p class="text-sm tracking-wide opacity-60">
						{categoryLabels[category.id as keyof typeof categoryLabels]?.description}
					</p>
				</div>
				<ChevronRight class="h-4 w-4 opacity-40" />
			</button>
		{/each}
	</div>
</div>
