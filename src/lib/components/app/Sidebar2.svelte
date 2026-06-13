<!-- 
 HELP
 I CAN'T MAKE THIS SHIT TO WORK 😭
-->

<script lang="ts">
	import {
		CirclePlus,
		House,
		BookOpen,
		Calendar,
		ChartNoAxesColumn,
		Search,
		Settings
	} from '@lucide/svelte';

	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { page } from '$app/state';
	import { cn } from '$lib/utils';
	import Button from '../ui/button/button.svelte';

	// Menu items
	const items = [
		{ href: '/test', label: 'home', icon: House },
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

<Sidebar.Root collapsible="icon" variant="sidebar" class="backdrop-blur-md">
	<Sidebar.Header class=" pt-8 pb-0">
		<div
			class="grid w-full transition-[grid-template-columns] duration-300 ease-in-out
					group-data-[state=collapsed]:grid-cols-[0fr_1fr]
					group-data-[state=expanded]:grid-cols-[1fr_auto]"
		>
			<span
				class="overflow-hidden text-4xl font-semibold tracking-wide whitespace-nowrap lowercase transition-all duration-300 ease-in-out group-data-[state=collapsed]:opacity-0 group-data-[state=expanded]:opacity-100"
			>
				shelter
			</span>
			<div class="flex items-center justify-center">
				<Sidebar.Trigger class="size-6! [&_svg]:size-6!" />
			</div>
		</div>
	</Sidebar.Header>

	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each items as item (item.href)}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton>
								{#snippet child({ props })}
									<a href={item.navigateTo ?? item.href} {...props}>
										<item.icon />
										<span>{item.label}</span>
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>

	<Sidebar.Footer>
		<Sidebar.Menu>
			{#each items as item (item.href)}
				<Sidebar.MenuItem>
					<Sidebar.MenuButton>
						{#snippet child({ props })}
							<a href={item.navigateTo ?? item.href} {...props}>
								<item.icon />
								<span>{item.label}</span>
							</a>
						{/snippet}
					</Sidebar.MenuButton>
				</Sidebar.MenuItem>
			{/each}
		</Sidebar.Menu>
	</Sidebar.Footer>
</Sidebar.Root>
