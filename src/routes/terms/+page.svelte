<script>
	import BackToHome from '$lib/components/landing/BackToHome.svelte';
	import Footer from '$lib/components/landing/sections/Footer.svelte';
	import Navbar from '$lib/components/landing/sections/Navbar.svelte';
</script>

<Navbar />
<main class="mx-auto max-w-4xl px-8 py-16 lg:py-24">
	<BackToHome />
	<h1 class="mb-8 text-6xl font-bold text-foreground">terms of service</h1>
	<p class="mb-12 text-lg text-muted-foreground">last updated: june 18, 2026</p>

	<div class="space-y-12">
		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				welcome to shelter!
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				by using shelter, you agree to these terms. we&apos;ve kept them simple and straightforward
				because we believe in transparency.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				what shelter is
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				shelter is a private, encrypted space for your thoughts, notes, and reflections. it&apos;s
				designed to be a safe place where you can write freely without judgment or surveillance.
				shelter currently runs entirely in your browser — there&apos;s no account or login required.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				your content
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				everything you write in shelter belongs to you. we don&apos;t claim any ownership over your
				content. because your data is encrypted and stored on your own device, we can&apos;t access
				it anyway.
			</p>
			<p class="text-xl text-pretty text-muted-foreground">
				you&apos;re responsible for the content you create. while we can&apos;t see your entries, we
				ask that you use shelter responsibly and legally.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				acceptable use
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">you agree not to:</p>
			<ul class="ml-6 space-y-2 text-xl text-muted-foreground">
				<li>• use shelter for any illegal activities</li>
				<li>• attempt to hack, break, or compromise the security of shelter</li>
				<li>• interfere with other users&apos; access to the service</li>
				<li>• use shelter to distribute malware or harmful software</li>
				<li>• violate anyone&apos;s intellectual property or privacy rights</li>
				<li>
					• swear eternal loyalty to super earth; any suspicious activity must be reported to your
					nearest democracy officer
				</li>
			</ul>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				service availability
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				we work hard to keep shelter running smoothly, but we can&apos;t guarantee the website will
				be available 100% of the time. we may need to take it down for maintenance or updates
				occasionally.
			</p>
			<p class="text-xl text-pretty text-muted-foreground">
				since your data is stored locally on your device, your entries remain accessible to you even
				if shelter&apos;s website is temporarily down.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				backups
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				your entries live on your device. we strongly recommend you regularly export your entries as
				a backup — if you lose access to your device or clear your browser data without a backup, we
				have no way to recover your entries. you&apos;re responsible for maintaining your own
				backups of important content.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				no warranty
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				shelter is provided &quot;as is&quot; without warranties of any kind. we do our best to make
				shelter reliable and secure, but we can&apos;t guarantee it will meet all your needs or be
				completely error-free.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				limitation of liability
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				we&apos;re not liable for any damages that result from using or being unable to use shelter.
				this includes data loss, even though we work hard to prevent it.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				future: accounts and cloud sync
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				we&apos;re working on an optional cloud sync feature, which will introduce accounts. when
				that launches, you&apos;ll be responsible for keeping your account secure, and we&apos;ll
				update these terms with full details on accounts, synced data, and termination before that
				feature goes live.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				changes to these terms
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				we may update these terms from time to time. if we make significant changes, we&apos;ll
				notify you clearly and give you time to review them. continuing to use shelter after changes
				means you accept the new terms.
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
