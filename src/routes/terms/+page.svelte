<script>
	import { m } from '$lib/paraglide/messages';
	import BackToHome from '$lib/components/landing/BackToHome.svelte';
	import Footer from '$lib/components/landing/sections/Footer.svelte';
	import Navbar from '$lib/components/landing/sections/Navbar.svelte';
</script>

<Navbar />
<main class="mx-auto max-w-4xl px-8 py-16 lg:py-24">
	<BackToHome />
	<h1 class="mb-8 text-6xl font-bold text-foreground">{m['landing.terms.title']()}</h1>
	<p class="mb-12 text-lg text-muted-foreground">{m['landing.terms.lastUpdated']()}</p>

	<div class="space-y-12">
		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				{m['landing.terms.welcome.title']()}
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				{m['landing.terms.welcome.content']()}
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				{m['landing.terms.whatIs.title']()}
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">{m['landing.terms.whatIs.content']()}</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				{m['landing.terms.yourContent.title']()}
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				{m['landing.terms.yourContent.content1']()}
			</p>
			<p class="text-xl text-pretty text-muted-foreground">
				{m['landing.terms.yourContent.content2']()}
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				{m['landing.terms.acceptableUse.title']()}
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				{m['landing.terms.acceptableUse.intro']()}
			</p>
			<ul class="ml-6 space-y-2 text-xl text-muted-foreground">
				<li>• {m['landing.terms.acceptableUse.items.illegal']()}</li>
				<li>• {m['landing.terms.acceptableUse.items.hack']()}</li>
				<li>• {m['landing.terms.acceptableUse.items.interfere']()}</li>
				<li>• {m['landing.terms.acceptableUse.items.malware']()}</li>
				<li>• {m['landing.terms.acceptableUse.items.ip']()}</li>
				<li>• {m['landing.terms.acceptableUse.items.superearth']()}</li>
			</ul>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				{m['landing.terms.availability.title']()}
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				{m['landing.terms.availability.content1']()}
			</p>
			<p class="text-xl text-pretty text-muted-foreground">
				{m['landing.terms.availability.content2']()}
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				{m['landing.terms.backups.title']()}
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				{m['landing.terms.backups.content']()}
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				{m['landing.terms.noWarranty.title']()}
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				{m['landing.terms.noWarranty.content']()}
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				{m['landing.terms.liability.title']()}
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				{m['landing.terms.liability.content']()}
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				{m['landing.terms.futureSync.title']()}
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				{m['landing.terms.futureSync.content']()}
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				{m['landing.terms.changes.title']()}
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				{m['landing.terms.changes.content']()}
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				{m['landing.terms.contact.title']()}
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html m['landing.terms.contact.content']()}
			</p>
		</section>
	</div>
</main>
<Footer />
