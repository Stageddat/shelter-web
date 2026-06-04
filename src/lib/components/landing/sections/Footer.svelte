<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { localizeHref } from '$lib/paraglide/runtime';
	import FooterLink from '../FooterLink.svelte';

	const currentYear = new Date().getFullYear();
</script>

<footer class="w-full border-t border-border/40 bg-background pt-16 pb-12">
	<div class="mx-auto w-11/12 max-w-7xl">
		<div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
			<div class="space-y-4">
				<p class="text-4xl font-normal tracking-tighter text-foreground">
					{m.landing_footer_title()}
				</p>
				<div class="space-y-1 text-sm leading-relaxed text-muted-foreground">
					<p>{m.landing_footer_year({ currentYear })}</p>
					<p>{m.landing_footer_copyright()}</p>
				</div>
			</div>

			<!-- product -->
			<div class="space-y-4">
				<p class="text-xl font-medium tracking-wide text-foreground">
					{m.landing_footer_product_title()}
				</p>
				<nav class="flex flex-col space-y-2.5">
					<FooterLink href="">{m.landing_footer_product_about_us()}</FooterLink>
					<FooterLink href="">{m.landing_footer_product_cloud()}</FooterLink>
					<FooterLink href="">{m.landing_footer_product_selfhost()}</FooterLink>
				</nav>
			</div>

			<div class="space-y-4">
				<p class="text-lg font-medium tracking-tight text-foreground">
					{m.landing_footer_legal_title()}
				</p>
				<nav class="flex flex-col space-y-2.5">
					<FooterLink href={localizeHref('/privacy')}>{m.landing_footer_legal_privacy()}</FooterLink
					>
					<FooterLink href={localizeHref('/terms')}>{m.landing_footer_legal_terms()}</FooterLink>
					<FooterLink href={localizeHref('/cookies')}>{m.landing_footer_legal_cookies()}</FooterLink
					>
				</nav>
			</div>

			<div class="space-y-4">
				<p class="text-lg font-medium tracking-tight text-foreground">
					{m.landing_footer_contact_title()}
				</p>
				<nav class="flex flex-col space-y-2.5">
					<FooterLink href="https://github.com/Stageddat/shelter-web" external>github</FooterLink>
					<FooterLink href="mailto:hello@stageddat.dev">hello@stageddat.dev</FooterLink>
				</nav>
			</div>
		</div>
	</div>
</footer>
