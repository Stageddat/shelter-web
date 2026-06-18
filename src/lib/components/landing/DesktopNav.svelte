<script lang="ts">
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
	import { m } from '$lib/paraglide/messages';
	import { localizeHref } from '$lib/paraglide/runtime';
</script>

<NavigationMenu.Root class="hidden md:flex">
	<NavigationMenu.List class="gap-0.5">
		<NavigationMenu.Item>
			<NavigationMenu.Link href={localizeHref('/#features')} class="cn-navigation-menu-item">
				{m['landing.navbar.features']()}
			</NavigationMenu.Link>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Link href={localizeHref('/#security')} class="cn-navigation-menu-item">
				{m['landing.navbar.security']()}
			</NavigationMenu.Link>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Link href={localizeHref('/#faqs')} class="cn-navigation-menu-item">
				{m['landing.navbar.faqs']()}
			</NavigationMenu.Link>
		</NavigationMenu.Item>
	</NavigationMenu.List>
</NavigationMenu.Root>

<style>
	@reference "@css/layout.css";

	:global(.cn-navigation-menu-item) {
		@apply rounded-full bg-transparent px-2 font-patrick text-xl tracking-tight text-muted-foreground transition-colors hover:text-primary md:text-2xl lg:text-3xl;
	}
</style>
