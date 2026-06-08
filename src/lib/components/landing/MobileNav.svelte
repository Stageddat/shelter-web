<script lang="ts">
	import Menu from '@lucide/svelte/icons/menu';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages';

	let sheetOpen = $state(false);
</script>

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
				<Sheet.Close>
					<a
						href={localizeHref('/#features')}
						class="font-display text-3xl tracking-tight text-muted-foreground transition-colors hover:text-primary"
						>{m['landing.navbar.features']()}</a
					>
				</Sheet.Close>
				<Sheet.Close>
					<a
						href={localizeHref('/#security')}
						class="font-display text-3xl tracking-tight text-muted-foreground transition-colors hover:text-primary"
						>{m['landing.navbar.security']()}</a
					>
				</Sheet.Close>
				<Sheet.Close>
					<a
						href={localizeHref('/#faqs')}
						class="font-display text-3xl tracking-tight text-muted-foreground transition-colors hover:text-primary"
						>{m['landing.navbar.faqs']()}</a
					>
				</Sheet.Close>
			</nav>
		</div>
	</Sheet.Content>
</Sheet.Root>
