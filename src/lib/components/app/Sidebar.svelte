<script lang="ts">
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui/button';
	import { m } from '$lib/paraglide/messages';
	import { cn } from '$lib/utils';
	import {
		CirclePlus,
		House,
		BookOpen,
		// Calendar,
		// ChartNoAxesColumn,
		Search,
		Settings
	} from '@lucide/svelte';

	// para esconder el navbar en configuración
	let inSettings = $derived(page.url.pathname.startsWith('/app/settings/'));

	const links = [
		{ href: '/app', label: m['app.sidebar.nav.home'](), icon: House },
		{ href: '/app/entries', label: m['app.sidebar.nav.entries'](), icon: BookOpen },
		// { href: '/app/calendar', label: 'calendar', icon: Calendar },
		// { href: '/app/stats', label: 'stats', icon: ChartNoAxesColumn },
		{ href: '/app/search', label: m['app.sidebar.nav.search'](), icon: Search },
		{
			href: '/app/settings',
			label: m['app.sidebar.nav.settings'](),
			icon: Settings,
			navigateTo: '/app/settings/general'
		}
	];

	// mobile links
	const mobileLinks = [
		{ href: '/app', label: m['app.sidebar.nav.home'](), icon: House },
		{ href: '/app/entries', label: m['app.sidebar.nav.entries'](), icon: BookOpen },
		{ href: '/app/search', label: m['app.sidebar.nav.search'](), icon: Search },
		{
			href: '/app/settings',
			label: m['app.sidebar.nav.settings'](),
			icon: Settings,
			navigateTo: '/app/settings'
		}
	];

	function isActive(href: string) {
		if (href === '/app') return page.url.pathname === '/app';
		return page.url.pathname.startsWith(href);
	}
</script>

<!-- pc sidebar -->
<aside class="hidden h-screen w-72 flex-col border-r bg-card/50 backdrop-blur-md lg:flex">
	<div class="flex h-full flex-col overflow-hidden px-8">
		<!-- logo -->
		<div class="py-8">
			<h1 class="text-4xl font-semibold tracking-wide lowercase">shelter</h1>
			<p class="text-lg tracking-widest text-muted-foreground">{m['app.sidebar.tagline']()}</p>
		</div>

		<!-- links -->
		<nav class="flex flex-col gap-1">
			{#each links as { href, label, icon: Icon, navigateTo } (href)}
				<Button
					variant="ghost"
					class={cn(
						'w-full justify-start gap-3 py-6 pl-4 text-lg tracking-wider',
						'text-foreground/60 hover:bg-transparent! hover:text-foreground/95',
						isActive(href) &&
							'rounded-full bg-secondary/30 text-foreground hover:bg-secondary/30! hover:text-foreground'
					)}
					href={navigateTo ?? href}
				>
					<Icon class="h-7! w-7!" />
					<span>{label}</span>
				</Button>
			{/each}
		</nav>

		<!-- new entry -->
		<div class="mt-auto pt-4 pb-2">
			<Button class="w-full gap-2 py-6 lowercase shadow-sm" href="/app/new">
				<CirclePlus class="h-5 w-5" />
				<span class="text-xl font-semibold tracking-wider">{m['app.sidebar.newEntry']()}</span>
			</Button>
		</div>
	</div>
</aside>

<!-- mobile bottom nav -->
<nav
	class={cn(
		'fixed right-0 bottom-0 left-0 z-40 flex h-16 items-center justify-around border-t bg-card/80 px-2 backdrop-blur-md lg:hidden',
		inSettings && 'hidden'
	)}
>
	{#each mobileLinks.slice(0, 2) as { href, label, icon: Icon, navigateTo } (href)}
		<a
			href={navigateTo ?? href}
			class={cn(
				'flex flex-col items-center gap-1 rounded-xl px-3 py-2 transition-colors',
				'text-foreground/50',
				isActive(href) && 'text-foreground'
			)}
		>
			<Icon class={cn('h-6 w-6', isActive(href) && 'stroke-[2.5]')} />
			<span class="text-[10px] tracking-wider lowercase">{label}</span>
		</a>
	{/each}

	<!-- boton del medio, nueva entrada -->
	<a
		href="/app/new"
		class="-mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-foreground/85 text-background shadow-md"
		aria-label="new entry"
	>
		<CirclePlus class="h-6! w-6!" />
	</a>

	{#each mobileLinks.slice(2) as { href, label, icon: Icon, navigateTo } (href)}
		<a
			href={navigateTo ?? href}
			class={cn(
				'flex flex-col items-center gap-1 rounded-xl px-3 py-2 transition-colors',
				'text-foreground/50',
				isActive(href) && 'text-foreground'
			)}
		>
			<Icon class={cn('h-6 w-6', isActive(href) && 'stroke-[2.5]')} />
			<span class="text-[10px] tracking-wider lowercase">{label}</span>
		</a>
	{/each}
</nav>
