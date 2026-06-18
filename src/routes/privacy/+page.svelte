<script>
	import BackToHome from '$lib/components/landing/BackToHome.svelte';
	import Footer from '$lib/components/landing/sections/Footer.svelte';
	import Navbar from '$lib/components/landing/sections/Navbar.svelte';
</script>

<Navbar />
<main class="mx-auto max-w-4xl bg-background px-8 py-16 lg:py-24">
	<BackToHome />
	<h1 class="mb-8 text-6xl font-bold text-foreground">privacy policy</h1>
	<p class="mb-12 text-lg text-balance text-muted-foreground">last updated: june 18, 2026</p>
	<div class="space-y-12">
		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				we don&apos;t collect your data
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				shelter is built on a simple principle: your thoughts are yours. shelter runs entirely in
				your browser, we don&apos;t collect, store, or process your personal data on any server.
				everything you write stays on your device.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				how your data is stored
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				all your entries are stored locally in your browser using encrypted storage. this means:
			</p>
			<ul class="text-prett ml-6 space-y-2 text-xl text-muted-foreground">
				<li>• your notes never leave your device</li>
				<li>• we cannot read your entries, even if we wanted to</li>
				<li>• your data is encrypted at rest with a key only you have</li>
				<li>• you have complete control over your information</li>
			</ul>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				analytics
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				we use self-hosted, privacy-respecting analytics (umami) to understand how shelter is used
				in aggregate — things like page views and general usage trends. this data is anonymized,
				never tied to your identity or journal entries, and never shared or sold to anyone. you can
				opt out at any time.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
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
				shelter doesn&apos;t use cookies. there&apos;s no account or login system, so there&apos;s
				nothing to remember between sessions beyond what&apos;s already stored locally in your
				browser. see our
				<a class="text-primary-dark hover:text-primary-dark/80 transition-colors" href="/cookies">
					cookie policy
				</a>
				for more details.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				your rights
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				since we don&apos;t collect your data, there&apos;s nothing for us to delete or share on our
				end. you have complete ownership and control of everything you create in shelter, and you
				can export or delete your data at any time directly from the app.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				future: cloud sync
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				we&apos;re working on an optional cloud sync feature. when it launches, your data will be
				encrypted on your device before it ever reaches our servers, and only you will hold the keys
				to decrypt it. we&apos;ll update this policy with full details before that feature goes
				live.
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
				if you have any questions about this privacy policy, please contact us on the
				<a
					href="https://discord.gg/BntK5GbF2M"
					class="text-primary-dark hover:text-primary-dark/80 underline transition-colors"
				>
					discord server
				</a>
			</p>
		</section>
	</div>
</main>
<Footer />
