<script>
	import BackToHome from '$lib/components/landing/BackToHome.svelte';
	import Footer from '$lib/components/landing/sections/Footer.svelte';
	import Navbar from '$lib/components/landing/sections/Navbar.svelte';
</script>

<Navbar />
<main class="mx-auto max-w-4xl px-8 py-24">
	<BackToHome />
	<h1 class="mb-8 text-6xl font-bold text-foreground">cookie policy</h1>
	<p class="mb-12 text-lg text-muted-foreground">last updated: december 30, 2025</p>

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
				we use the absolute minimum number of cookies necessary to make shelter work. we don&apos;t
				use tracking cookies, advertising cookies, or analytics cookies.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				essential cookies we use
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				these cookies are required for shelter to function properly:
			</p>
			<div class="ml-6 space-y-4 text-xl">
				<div>
					<p class="font-semibold text-foreground">• authentication cookies</p>
					<p class="text-muted-foreground">
						keeps you logged in so you don&apos;t have to sign in every time you visit shelter.
						without this cookie, you&apos;d need to log in on every page.
					</p>
				</div>
				<div>
					<p class="font-semibold text-foreground">• session cookies</p>
					<p class="text-muted-foreground">
						remembers your preferences and settings during your visit, like your theme choice or
						language preference.
					</p>
				</div>
				<div>
					<p class="font-semibold text-foreground">• security cookies</p>
					<p class="text-muted-foreground">
						helps protect your account from unauthorized access and ensures secure communication
						between your browser and our servers.
					</p>
				</div>
			</div>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				what we don&apos;t use
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">shelter does not use:</p>
			<ul class="ml-6 space-y-2 text-xl text-muted-foreground">
				<li>• tracking cookies to monitor your behavior</li>
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
				in addition to cookies, we use your browser&apos;s local storage to save your encrypted
				entries on your device. this is not the same as cookies and gives you offline access to your
				content.
			</p>
			<p class="text-xl text-pretty text-muted-foreground">
				everything stored locally is encrypted and only accessible by you.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				managing cookies
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				most browsers allow you to control cookies through their settings. you can set your browser
				to refuse cookies or alert you when cookies are being sent.
			</p>
			<p class="text-xl text-pretty text-muted-foreground">
				however, if you disable our essential cookies, shelter won&apos;t work properly. you
				won&apos;t be able to stay logged in or save your preferences.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				cookie lifetime
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				our authentication cookies last for 30 days or until you log out, whichever comes first.
				session cookies are deleted when you close your browser.
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
				questions
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				if you have questions about how we use cookies, contact us at{' '}
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
