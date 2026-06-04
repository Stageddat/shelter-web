<script lang="ts">
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
	import { localizeHref } from '$lib/paraglide/runtime';
</script>

<NavigationMenu.Root class="hidden md:flex">
	<NavigationMenu.List class="gap-1">
		<NavigationMenu.Item>
			<NavigationMenu.Link
				href={localizeHref('/#features')}
				class="font-primary rounded-full bg-transparent px-4 text-xl tracking-tight text-muted-foreground transition-colors hover:bg-secondary/80 hover:text-foreground lg:text-3xl"
			>
				features
			</NavigationMenu.Link>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Link
				href={localizeHref('/#security')}
				class="font-primary rounded-full bg-transparent px-4 text-xl tracking-tight text-muted-foreground transition-colors hover:bg-secondary/80 hover:text-foreground lg:text-3xl"
			>
				security
			</NavigationMenu.Link>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Link
				href={localizeHref('/#faqs')}
				class="font-primary rounded-full bg-transparent px-4 text-xl tracking-tight text-muted-foreground transition-colors hover:bg-secondary/80 hover:text-foreground lg:text-3xl"
			>
				faqs
			</NavigationMenu.Link>
		</NavigationMenu.Item>
	</NavigationMenu.List>
</NavigationMenu.Root>
