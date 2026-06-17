<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import MobileNav from '$lib/components/landing/MobileNav.svelte';
	import DesktopNav from '$lib/components/landing/DesktopNav.svelte';
	import LanguageSelector from '$lib/components/landing/LanguageSelector.svelte';
	import { m } from '$lib/paraglide/messages';
	import { localizeHref } from '$lib/paraglide/runtime';
	import GitHub from '$lib/assets/icons/github.svelte';
	import Discord from '$lib/assets/icons/discord.svelte';
</script>

<header
	class="fixed top-0 z-50 w-full border-b border-border/20 bg-background/60 backdrop-blur-xl transition-all duration-300"
>
	<div class="container mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
		<div class="flex items-center gap-8">
			<MobileNav />

			<a
				href={localizeHref('/')}
				class="font-primary flex items-center text-2xl tracking-wide transition-opacity hover:opacity-80 lg:text-3xl"
			>
				<span class="relative -top-px">{m['landing.navbar.logo']()}</span>
			</a>

			<DesktopNav />
		</div>

		<div class="flex items-center gap-1.5">
			<LanguageSelector />
			<Button
				title="github repository"
				variant="outline"
				href="https://github.com/Stageddat/shelter-web"
				target="_blank"
				class="h-10 border-border/40 bg-secondary hover:text-foreground"
			>
				<GitHub class="h-6! w-6!" />
			</Button>
			<Button
				title="discord server"
				variant="outline"
				href="https://discord.gg/BntK5GbF2M"
				target="_blank"
				class="h-10 border-border/40 bg-secondary hover:text-foreground"
			>
				<Discord class="h-6! w-6!" />
			</Button>
			<Button
				href="/signup"
				class="hidden h-10 bg-primary px-4 py-2 text-2xl shadow-lg shadow-foreground/5 transition-all hover:bg-primary/85 sm:inline-flex"
			>
				{m['landing.navbar.start']()}
			</Button>
		</div>
	</div>
</header>
