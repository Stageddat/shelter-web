<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { page } from '$app/state';
	import { getLocale, localizeHref, locales } from '$lib/paraglide/runtime';
	import { Check, Languages } from '@lucide/svelte';

	const localeConfig: Record<string, { label: string; translation: 'official' | 'community' }> = {
		en: { label: 'english', translation: 'official' },
		ca: { label: 'català', translation: 'official' },
		es: { label: 'español', translation: 'community' },
		de: { label: 'deutsch', translation: 'community' },
		da: { label: 'dansk', translation: 'community' },
		ru: { label: 'русский', translation: 'community' }
	};

	const official = locales.filter((l) => localeConfig[l].translation === 'official');
	const community = locales.filter((l) => localeConfig[l].translation === 'community');
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button
				{...props}
				variant="outline"
				class="h-10 gap-2 border-border/40 bg-secondary px-3 text-xl text-muted-foreground hover:text-foreground"
			>
				<Languages class="h-6! w-6!" />
				{localeConfig[getLocale()].label}
			</Button>
		{/snippet}
	</DropdownMenu.Trigger>

	<DropdownMenu.Content align="end" class="w-52 p-0">
		<p class="px-3 pt-2 pb-1 font-mono text-xs tracking-wide text-muted-foreground uppercase">
			official translations
		</p>
		{#each official as locale (locale)}
			<DropdownMenu.Item>
				{#snippet child({ props })}
					<a
						{...props}
						href={localizeHref(page.url.pathname, { locale })}
						data-sveltekit-reload
						class="flex items-center gap-3 border-b border-border/20 px-3 py-2.5 text-base transition-colors last:border-0 hover:bg-accent/25"
					>
						<span class="w-4! text-muted-foreground">
							{#if locale === getLocale()}<Check />{/if}
						</span>
						<span class="flex-1 tracking-wide" class:font-medium={locale === getLocale()}
							>{localeConfig[locale].label}</span
						>
						<span
							class="rounded-full bg-blue-50 px-2 py-0.5 font-mono text-sm tracking-wide text-blue-600 dark:bg-blue-950 dark:text-blue-400"
							>official</span
						>
					</a>
				{/snippet}
			</DropdownMenu.Item>
		{/each}

		<p
			class="border-t border-border/20 px-3 pt-2 pb-1 font-mono text-xs tracking-wide text-muted-foreground uppercase"
		>
			community translations
		</p>
		{#each community as locale (locale)}
			<DropdownMenu.Item>
				{#snippet child({ props })}
					<a
						{...props}
						href={localizeHref(page.url.pathname, { locale })}
						data-sveltekit-reload
						class="flex items-center gap-3 border-b border-border/20 px-3 py-2.5 text-base transition-colors last:border-0 hover:bg-accent/25"
					>
						<span class="w-4! text-muted-foreground">
							{#if locale === getLocale()}<Check />{/if}
						</span>
						<span class="flex-1 tracking-wide" class:font-medium={locale === getLocale()}
							>{localeConfig[locale].label}</span
						>
						<span
							class="rounded-full border border-border/40 bg-secondary px-2 py-0.5 font-mono text-xs tracking-wide text-muted-foreground"
							>community</span
						>
					</a>
				{/snippet}
			</DropdownMenu.Item>
		{/each}
	</DropdownMenu.Content>
</DropdownMenu.Root>
