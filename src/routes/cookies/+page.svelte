<script>
	import { m } from '$lib/paraglide/messages';
	import BackToHome from '$lib/components/landing/BackToHome.svelte';
	import Footer from '$lib/components/landing/sections/Footer.svelte';
	import Navbar from '$lib/components/landing/sections/Navbar.svelte';
</script>

<Navbar />
<main class="mx-auto max-w-4xl px-8 py-20 lg:py-24">
	<BackToHome />
	<h1 class="mb-2 text-6xl font-bold text-foreground">{m['landing.cookies.title']()}</h1>
	<p class="mb-12 text-lg text-muted-foreground">{m['landing.cookies.lastUpdated']()}</p>

	<div class="space-y-12">
		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				{m['landing.cookies.whatAreCookies.title']()}
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				{m['landing.cookies.whatAreCookies.content']()}
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				{m['landing.cookies.ourApproach.title']()}
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				{m['landing.cookies.ourApproach.content']()}
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				{m['landing.cookies.whatWeDontUse.title']()}
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				{m['landing.cookies.whatWeDontUse.intro']()}
			</p>
			<ul class="ml-6 space-y-2 text-xl text-muted-foreground">
				<li>• {m['landing.cookies.whatWeDontUse.items.tracking']()}</li>
				<li>• {m['landing.cookies.whatWeDontUse.items.advertising']()}</li>
				<li>• {m['landing.cookies.whatWeDontUse.items.analytics']()}</li>
				<li>• {m['landing.cookies.whatWeDontUse.items.thirdParty']()}</li>
				<li>• {m['landing.cookies.whatWeDontUse.items.personal']()}</li>
			</ul>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				{m['landing.cookies.localStorage.title']()}
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				{m['landing.cookies.localStorage.content1']()}
			</p>
			<p class="text-xl text-pretty text-muted-foreground">
				{m['landing.cookies.localStorage.content2']()}
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				{m['landing.cookies.futureSync.title']()}
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				{m['landing.cookies.futureSync.content']()}
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				{m['landing.cookies.updates.title']()}
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				{m['landing.cookies.updates.content']()}
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
				{m['landing.cookies.contact.title']()}
			</h2>
			<p class="text-xl text-pretty text-muted-foreground">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html m['landing.cookies.contact.content']()}
			</p>
		</section>
	</div>
</main>
<Footer />
