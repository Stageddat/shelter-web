<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { page } from '$app/state';
	import { getLocale, localizeHref, locales } from '$lib/paraglide/runtime';
	import 'flag-icons/css/flag-icons.min.css';

	const localeConfig: Record<string, { label: string; flag: string }> = {
		en: { label: 'english', flag: 'gb' },
		ca: { label: 'català', flag: 'es-ct' }
	};
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button
				{...props}
				variant="outline"
				class="h-10 gap-2 border-border/40 bg-secondary p-0 px-3 text-xl text-muted-foreground hover:text-foreground"
			>
				<span class="fi fi-{localeConfig[getLocale()].flag} mt-0.5 text-xl"></span>
				{localeConfig[getLocale()].label}
			</Button>
		{/snippet}
	</DropdownMenu.Trigger>

	<DropdownMenu.Content align="end" class="min-w-36 p-0">
		{#each locales as locale (locale)}
			<DropdownMenu.Item>
				{#snippet child({ props })}
					<a
						{...props}
						href={localizeHref(page.url.pathname, { locale })}
						data-sveltekit-reload
						class="flex items-center gap-3 rounded-sm px-3 py-2 text-xl transition-colors hover:bg-accent/50 hover:text-accent-foreground"
					>
						<span class="fi fi-{localeConfig[locale].flag} mt-0.5 text-xl"></span>
						{localeConfig[locale].label}
					</a>
				{/snippet}
			</DropdownMenu.Item>
		{/each}
	</DropdownMenu.Content>
</DropdownMenu.Root>
