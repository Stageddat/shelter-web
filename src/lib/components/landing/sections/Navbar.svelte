<script lang="ts">
	import Menu from '@lucide/svelte/icons/menu';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Sheet from '$lib/components/ui/sheet/index.js';

	const NAV_LINKS = [
		{ href: '/#features', label: 'features' },
		{ href: '/#security', label: 'security' },
		{ href: '/#faqs', label: 'faqs' }
	];

	let sheetOpen = $state(false);
</script>

<header
	class="fixed top-0 z-50 w-full border-b border-border/20 bg-background/60 backdrop-blur-xl transition-all duration-300"
>
	<div class="container mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
		<div class="flex items-center gap-8">
			<!-- mobile nav -->
			<Sheet.Root bind:open={sheetOpen}>
				<Sheet.Trigger
					class="flex h-10 w-10 items-center justify-center rounded-2xl border border-border/40 bg-secondary/80 transition-colors md:hidden"
				>
					<Menu class="h-5 w-5 text-foreground" />
				</Sheet.Trigger>

				<Sheet.Content side="left" class="w-80 border-r border-border/20 bg-background p-0">
					<div class="flex h-full flex-col p-10">
						<p class="font-display mb-12 text-3xl tracking-tighter text-foreground">shelter</p>
						<nav class="flex flex-col gap-8">
							{#each NAV_LINKS as { href, label }}
								<Sheet.Close>
									<a
										{href}
										class="font-display text-3xl tracking-tight text-muted-foreground transition-colors hover:text-primary"
									>
										{label}
									</a>
								</Sheet.Close>
							{/each}
						</nav>
					</div>
				</Sheet.Content>
			</Sheet.Root>

			<!-- logo -->
			<a
				href="/"
				class="font-primary flex items-center text-2xl tracking-wide transition-opacity hover:opacity-80 lg:text-3xl"
			>
				<span class="relative -top-px">shelter</span>
			</a>

			<!-- pc nav -->
			<NavigationMenu.Root class="hidden md:flex">
				<NavigationMenu.List class="gap-1">
					{#each NAV_LINKS as { href, label }}
						<NavigationMenu.Item>
							<NavigationMenu.Link
								{href}
								class="font-primary rounded-full bg-transparent px-4 text-xl tracking-tight text-muted-foreground transition-colors hover:bg-secondary/80 hover:text-foreground lg:text-3xl"
							>
								{label}
							</NavigationMenu.Link>
						</NavigationMenu.Item>
					{/each}
				</NavigationMenu.List>
			</NavigationMenu.Root>
		</div>

		<!-- boton para empezar -->
		<!-- TODO: añadir sitio de idioma y login tal vez? -->
		<Button
			href="/signup"
			class="hidden h-10 bg-primary px-4 py-2 text-2xl shadow-lg shadow-foreground/5 transition-all hover:bg-primary/85 sm:inline-flex"
		>
			get started
		</Button>
	</div>
</header>
