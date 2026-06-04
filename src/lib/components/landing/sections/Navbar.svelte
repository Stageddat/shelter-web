<script lang="ts">
	import { resolve } from '$app/paths';
	import { Button } from '$lib/components/ui/button/index.js';
	import MobileNav from '$lib/components/landing/MobileNav.svelte';
	import DesktopNav from '$lib/components/landing/DesktopNav.svelte';
	import LanguageSelector from '$lib/components/landing/LanguageSelector.svelte';
</script>

<header
	class="fixed top-0 z-50 w-full border-b border-border/20 bg-background/60 backdrop-blur-xl transition-all duration-300"
>
	<div class="container mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
		<div class="flex items-center gap-8">
			<MobileNav />

			<a
				href={resolve('/')}
				class="font-primary flex items-center text-2xl tracking-wide transition-opacity hover:opacity-80 lg:text-3xl"
			>
				<span class="relative -top-px">shelter</span>
			</a>

			<DesktopNav />
		</div>

		<div class="flex items-center gap-4">
			<LanguageSelector />

			<Button
				href="/signup"
				class="hidden h-10 bg-primary px-4 py-2 text-2xl shadow-lg shadow-foreground/5 transition-all hover:bg-primary/85 sm:inline-flex"
			>
				get started
			</Button>
		</div>
	</div>
</header>
