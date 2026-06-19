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
				<p class="text-4xl font-normal tracking-wide text-foreground">
					{m['landing.footer.title']()}
				</p>
				<div class="space-y-1 text-sm leading-relaxed text-muted-foreground">
					<p>{m['landing.footer.year']({ currentYear })}</p>
					<p>{m['landing.footer.copyright']()}</p>
				</div>
			</div>

			<!-- product -->
			<div class="space-y-4">
				<p class="text-xl font-medium tracking-wide text-foreground">
					{m['landing.footer.product.title']()}
				</p>
				<nav class="flex flex-col space-y-2.5">
					<FooterLink href={localizeHref('/credits')}
						>{m['landing.footer.product.credits']()}</FooterLink
					>
					<FooterLink href={localizeHref('/')}>{m['landing.footer.product.cloud']()}</FooterLink>
					<FooterLink href={localizeHref('/')}>{m['landing.footer.product.selfhost']()}</FooterLink>
				</nav>
			</div>

			<div class="space-y-4">
				<p class="text-lg font-medium tracking-wide text-foreground">
					{m['landing.footer.legal.title']()}
				</p>
				<nav class="flex flex-col space-y-2.5">
					<FooterLink href={localizeHref('/privacy')}>
						{m['landing.footer.legal.privacy']()}
					</FooterLink>
					<FooterLink href={localizeHref('/terms')}>
						{m['landing.footer.legal.terms']()}
					</FooterLink>
					<FooterLink href={localizeHref('/cookies')}>
						{m['landing.footer.legal.cookies']()}
					</FooterLink>
				</nav>
			</div>

			<div class="space-y-4">
				<p class="text-lg font-medium tracking-wide text-foreground">
					{m['landing.footer.contact.title']()}
				</p>
				<nav class="flex flex-col space-y-2.5">
					<FooterLink href="https://github.com/Stageddat/shelter-web" external>github</FooterLink>
					<FooterLink href="https://discord.gg/BntK5GbF2M" external>discord</FooterLink>
				</nav>
			</div>
		</div>
	</div>
</footer>
