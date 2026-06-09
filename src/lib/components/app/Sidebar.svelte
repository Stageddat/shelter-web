<script lang="ts">
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import {
		CirclePlus,
		House,
		BookOpen,
		Calendar,
		ChartNoAxesColumn,
		Search,
		Settings
	} from '@lucide/svelte';

	const links = [
		{ href: '/app', label: 'home', icon: House },
		{ href: '/app/entries', label: 'entries', icon: BookOpen },
		{ href: '/app/calendar', label: 'calendar', icon: Calendar },
		{ href: '/app/stats', label: 'stats', icon: ChartNoAxesColumn },
		{ href: '/app/search', label: 'search', icon: Search },
		{
			href: '/app/settings',
			label: 'settings',
			icon: Settings,
			navigateTo: '/app/settings/general'
		}
	];

	function isActive(href: string) {
		if (href === '/app') return page.url.pathname === '/app';
		return page.url.pathname.startsWith(href);
	}
</script>

<aside class="flex h-screen w-72 flex-col border-r bg-card/50 backdrop-blur-md">
	<div class="flex h-full flex-col overflow-hidden px-8">
		<!-- logo -->
		<div class="py-8">
			<h1 class="text-4xl font-semibold tracking-wide lowercase">shelter</h1>
			<p class="text-lg tracking-widest text-muted-foreground">private space</p>
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
				<span class="text-lg tracking-wide">new entry</span>
			</Button>
		</div>
	</div>
</aside>
