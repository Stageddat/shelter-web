<script>
	import Faqs from '$lib/components/landing/sections/Faqs.svelte';
	import Features from '$lib/components/landing/sections/Features.svelte';
	import Footer from '$lib/components/landing/sections/Footer.svelte';
	import Hero from '$lib/components/landing/sections/Hero.svelte';
	import Navbar from '$lib/components/landing/sections/Navbar.svelte';
	import Security from '$lib/components/landing/sections/Security.svelte';
	import Start from '$lib/components/landing/sections/Start.svelte';
	import { m } from '$lib/paraglide/messages';
</script>

<svelte:head>
	<title>{m['metadata.landing.title']()}</title>
	<meta name="description" content={m['metadata.landing.description']()} />
</svelte:head>

<Navbar />
<Hero />
<Features />
<Security />
<Faqs />
<Start />
<Footer />
