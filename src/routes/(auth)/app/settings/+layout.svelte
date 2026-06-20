<script lang="ts">
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import settingsCategories from '$lib/types/app/settingsCategories';
	import { m } from '$lib/paraglide/messages';

	let { children } = $props();

	let activeId = $derived(page.url.pathname.split('/').pop());

	const categoryLabels = $derived({
		general: {
			title: m['app.settings.general.title'](),
			description: m['app.settings.general.description']()
		},
		security: {
			title: m['app.settings.security.title'](),
			description: m['app.settings.security.description']()
		},
		editor: {
			title: m['app.settings.editor.title'](),
			description: m['app.settings.editor.description']()
		},
		data: {
			title: m['app.settings.data.title'](),
			description: m['app.settings.data.description']()
		},
		about: {
			title: m['app.settings.about.title'](),
			description: m['app.settings.about.description']()
		}
	});
</script>

<div class="flex h-screen overflow-hidden">
	<aside
		class="hidden h-full w-72 flex-col overflow-hidden border-r bg-card/50 backdrop-blur-xs lg:flex"
	>
		<h2 class="mb-4 pt-8 pl-5 text-left text-4xl font-bold tracking-wide lowercase">
			{m['app.settings.title']()}
		</h2>
		<nav class="m-2 flex flex-col gap-2">
			{#each settingsCategories as category (category.id)}
				{@const isActive = activeId === category.id}
				<button
					onclick={() => goto(`/app/settings/${category.id}`)}
					class="relative flex items-center gap-4 rounded-2xl px-4 py-3 text-left transition-all duration-200
						{isActive
						? 'bg-primary/10 text-primary'
						: 'text-muted-foreground hover:bg-muted hover:text-foreground'}"
				>
					{#if isActive}
						<div class="absolute top-1/4 left-2 h-1/2 w-1 rounded-full bg-primary"></div>
					{/if}
					<div class="flex items-center gap-3 {isActive ? 'pl-2' : ''}">
						<category.icon class="h-6 w-6" />
						<div class="line-clamp-1 flex flex-col">
							<span class="text-lg font-bold tracking-wide">
								{categoryLabels[category.id as keyof typeof categoryLabels]?.title}
							</span>
							<span class="text-base tracking-wide opacity-85">
								{categoryLabels[category.id as keyof typeof categoryLabels]?.description}
							</span>
						</div>
					</div>
				</button>
			{/each}
		</nav>
	</aside>

	<div class="flex-1 overflow-y-auto">
		{@render children?.()}
	</div>
</div>
