<script>
	import BackToHome from '$lib/components/landing/BackToHome.svelte';
	import Footer from '$lib/components/landing/sections/Footer.svelte';
	import Navbar from '$lib/components/landing/sections/Navbar.svelte';
</script>

<Navbar />
<main class="mx-auto max-w-4xl bg-background px-8 py-16 lg:py-24">
	<BackToHome />
	<h1 class="mb-8 text-6xl font-bold text-foreground">privacy policy</h1>
	<p class="mb-12 text-lg text-balance text-muted-foreground">last updated: december 30, 2025</p>
	<div class="space-y-12">
		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				we don&apos;t collect your data
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				shelter is built on a simple principle: your thoughts are yours. we don&apos;t collect,
				store, or process any of your personal data on our servers. everything you write stays on
				your device.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				{' '}
				how your data is stored
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				all your entries are stored locally in your browser using encrypted storage. this means:
			</p>
			<ul class="text-prett ml-6 space-y-2 text-xl text-muted-foreground">
				<li>• your notes never leave your device unless you choose to sync</li>
				<li>• we cannot read your entries, even if we wanted to</li>
				<li>• your data is encrypted end-to-end</li>
				<li>• you have complete control over your information</li>
			</ul>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				{' '}
				end-to-end encryption
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				when you opt in to sync your entries across devices, your data is encrypted on your device
				before it ever reaches our servers. we use industry-standard encryption, and only you hold
				the keys to decrypt your content.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				{' '}
				no tracking or analytics
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				we don&apos;t use tracking pixels, analytics tools, or any third-party services that collect
				your personal information. we don&apos;t track your behavior, your location, or how you use
				shelter.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				{' '}
				no ads, no selling data
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				we will never display ads or sell your data to third parties. ever. your privacy is not for
				sale.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				cookies
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				we only use essential cookies necessary for the app to function properly, such as keeping
				you logged in. we don&apos;t use tracking cookies or advertising cookies. see our{' '}
				<a class="text-primary-dark hover:text-primary-dark/80 transition-colors" href="/cookies">
					cookie policy
				</a>{' '}
				for more details.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				your rights
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				since we don&apos;t collect your data, there&apos;s nothing for us to delete or share. you
				have complete ownership and control of everything you create in shelter. you can export or
				delete your data at any time directly from your device.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				changes to this policy
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				if we ever change this privacy policy, we&apos;ll notify you clearly and give you the option
				to review the changes. we&apos;ll never make changes that compromise your privacy without
				your knowledge.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				contact us
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				if you have any questions about this privacy policy, please contact us at{' '}
				<a
					href="mailto:hello@stageddat.dev"
					class="text-primary-dark hover:text-primary-dark/80 underline transition-colors"
				>
					hello@stageddat.dev
				</a>
			</p>
		</section>
	</div>
</main>
<Footer />
