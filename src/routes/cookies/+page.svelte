<script>
	import BackToHome from '$lib/components/landing/BackToHome.svelte';
	import Footer from '$lib/components/landing/sections/Footer.svelte';
	import Navbar from '$lib/components/landing/sections/Navbar.svelte';
</script>

<Navbar />
<main class="mx-auto max-w-4xl px-8 py-24">
	<BackToHome />
	<h1 class="mb-8 text-6xl font-bold text-foreground">cookie policy</h1>
	<p class="mb-12 text-lg text-muted-foreground">last updated: june 18, 2026</p>

	<div class="space-y-12">
		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				what are cookies
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				cookies are small text files that websites store on your device to remember information
				about you. they&apos;re a standard part of how modern websites work.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				our approach to cookies
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				shelter doesn&apos;t use cookies. there&apos;s no account or login system, so there&apos;s
				nothing to remember between visits beyond what&apos;s already stored locally in your
				browser.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				what we don&apos;t use
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">shelter does not use:</p>
			<ul class="ml-6 space-y-2 text-xl text-muted-foreground">
				<li>• cookies to track your behavior</li>
				<li>• advertising cookies to show you ads</li>
				<li>• analytics cookies to collect usage statistics</li>
				<li>• third-party cookies from social media or other services</li>
				<li>• cookies that identify you personally</li>
			</ul>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				local storage
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				instead of cookies, shelter uses your browser&apos;s local storage to save your encrypted
				entries on your device. this is not the same as cookies, it&apos;s what gives you offline
				access to your content, and it never leaves your device.
			</p>
			<p class="text-xl text-pretty text-muted-foreground">
				everything stored locally is encrypted and only accessible by you.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				future: cloud sync
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				we&apos;re working on an optional cloud sync feature, which may introduce a small number of
				essential cookies (for example, to keep you signed in). if that changes, we&apos;ll update
				this policy with full details before that feature goes live.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				updates to this policy
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				if we ever need to add or change the cookies we use, we&apos;ll update this policy and let
				you know. we&apos;re committed to keeping cookie usage to the absolute minimum.
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
