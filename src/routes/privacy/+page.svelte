<script>
	import { m } from '$lib/paraglide/messages';
	import BackToHome from '$lib/components/landing/BackToHome.svelte';
	import Footer from '$lib/components/landing/sections/Footer.svelte';
	import Navbar from '$lib/components/landing/sections/Navbar.svelte';
</script>

<svelte:head>
	<title>{m['metadata.privacy.title']()}</title>
	<meta name="description" content={m['metadata.privacy.description']()} />
</svelte:head>

<Navbar />
<main class="mx-auto max-w-4xl px-8 py-20 lg:py-24">
	<BackToHome />
	<h1 class="mb-2 text-6xl font-bold text-foreground">{m['landing.privacy.title']()}</h1>
	<p class="mb-12 text-lg text-balance text-muted-foreground">
		{m['landing.privacy.lastUpdated']()}
	</p>
	<div class="space-y-12">
		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				{m['landing.privacy.noCollect.title']()}
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				{m['landing.privacy.noCollect.content']()}
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				{m['landing.privacy.storage.title']()}
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				{m['landing.privacy.storage.intro']()}
			</p>
			<ul class="ml-6 space-y-2 text-xl text-muted-foreground">
				<li>• {m['landing.privacy.storage.items.device']()}</li>
				<li>• {m['landing.privacy.storage.items.read']()}</li>
				<li>• {m['landing.privacy.storage.items.encrypted']()}</li>
				<li>• {m['landing.privacy.storage.items.control']()}</li>
			</ul>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				{m['landing.privacy.analytics.title']()}
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				{m['landing.privacy.analytics.content']()}
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				{m['landing.privacy.noAds.title']()}
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				{m['landing.privacy.noAds.content']()}
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				{m['landing.privacy.cookies.title']()}
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html m['landing.privacy.cookies.content']()}
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				{m['landing.privacy.rights.title']()}
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				{m['landing.privacy.rights.content']()}
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				{m['landing.privacy.futureSync.title']()}
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				{m['landing.privacy.futureSync.content']()}
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				{m['landing.privacy.changes.title']()}
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				{m['landing.privacy.changes.content']()}
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				{m['landing.privacy.contact.title']()}
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html m['landing.privacy.contact.content']()}
			</p>
		</section>
	</div>
</main>
<Footer />
