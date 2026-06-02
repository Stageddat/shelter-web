<script>
	import BackToHome from '$lib/components/landing/BackToHome.svelte';
	import Footer from '$lib/components/landing/sections/Footer.svelte';
	import Navbar from '$lib/components/landing/sections/Navbar.svelte';
</script>

<Navbar />
<main class="mx-auto max-w-4xl px-8 py-16 lg:py-24">
	<BackToHome />
	<h1 class="mb-8 text-6xl font-bold text-foreground">terms of service</h1>
	<p class="mb-12 text-lg text-muted-foreground">last updated: december 30, 2025</p>

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
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				your account
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				you&apos;re responsible for keeping your account secure. choose a strong password and
				don&apos;t share it with anyone. if you believe your account has been compromised, contact
				us immediately.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				your content
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				everything you write in shelter belongs to you. we don&apos;t claim any ownership over your
				content. because your data is encrypted, we can&apos;t access it anyway.
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
				<li>• interfere with other users access to the service</li>
				<li>• use shelter to distribute malware or harmful software</li>
				<li>• violate anyone&apos;s intellectual property or privacy rights</li>
			</ul>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				service availability
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				we work hard to keep shelter running smoothly, but we can&apos;t guarantee it will be
				available 100% of the time. we may need to take the service down for maintenance or updates
				occasionally.
			</p>
			<p class="text-xl text-pretty text-muted-foreground">
				since your data is stored locally on your device, you&apos;ll always have access to your
				entries even when shelter&apos;s sync service is down.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				backups
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				while we take reasonable measures to keep your synced data safe, we recommend you regularly
				export your entries as a backup. you&apos;re responsible for maintaining your own backups of
				important content.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				termination
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				you can stop using shelter at any time. if you want to delete your account, you can do so
				from your settings. this will remove any synced data from our servers.
			</p>
			<p class="text-xl text-pretty text-muted-foreground">
				we reserve the right to suspend or terminate accounts that violate these terms, though
				we&apos;ll always try to contact you first.
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
				if you have questions about these terms, reach out to us at{' '}
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
