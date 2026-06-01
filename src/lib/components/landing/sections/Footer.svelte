<script lang="ts">
	import FooterLink from '../FooterLink.svelte';

	const currentYear = new Date().getFullYear();
</script>

<footer class="w-full border-t border-border/40 bg-background pt-16 pb-12">
	<div class="mx-auto w-11/12 max-w-7xl">
		<div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
			<div class="space-y-4">
				<p class="font-display text-3xl font-normal tracking-tighter text-foreground">shelter</p>
				<div class="font-primary space-y-1 text-sm leading-relaxed text-muted-foreground/60">
					<p>© 2025–{currentYear} shelter</p>
					<p>all rights reserved</p>
				</div>
			</div>

			<!-- Product Section -->
			<div class="space-y-4">
				<p class="font-display text-lg font-medium tracking-tight text-foreground">product</p>
				<nav class="font-primary flex flex-col space-y-2.5">
					<FooterLink href="">about us</FooterLink>
					<FooterLink href="">cloud</FooterLink>
					<FooterLink href="">self-host</FooterLink>
				</nav>
			</div>

			<div class="space-y-4">
				<p class="font-display text-lg font-medium tracking-tight text-foreground">legal</p>
				<nav class="font-primary flex flex-col space-y-2.5">
					<FooterLink href="/privacy">privacy policy</FooterLink>
					<FooterLink href="/terms">terms of service</FooterLink>
					<FooterLink href="/cookies">cookie policy</FooterLink>
				</nav>
			</div>

			<div class="space-y-4">
				<p class="font-display text-lg font-medium tracking-tight text-foreground">contact</p>
				<nav class="font-primary flex flex-col space-y-2.5">
					<FooterLink href="https://github.com/Stageddat/shelter-web" external>github</FooterLink>
					<FooterLink href="mailto:hello@stageddat.dev">hello@stageddat.dev</FooterLink>
				</nav>
			</div>
		</div>
	</div>
</footer>
