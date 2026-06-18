<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import Navbar from '$lib/components/landing/sections/Navbar.svelte';
	import Footer from '$lib/components/landing/sections/Footer.svelte';

	// pfps
	import stageddatPfp from '$lib/assets/landing/credits/pfp/stageddat.jpeg?enhanced';
	import fiddlePfp from '$lib/assets/landing/credits/pfp/fiddle.jpg?enhanced';
	import joshPfp from '$lib/assets/landing/credits/pfp/josh.jpg?enhanced';
	import meteorPfp from '$lib/assets/landing/credits/pfp/meteor.jpg?enhanced';
	import cheesyPfp from '$lib/assets/landing/credits/pfp/cheesy.png?enhanced';
	import bestPfp from '$lib/assets/landing/credits/pfp/bestgamez.jpg?enhanced';
	import _4xlsPfp from '$lib/assets/landing/credits/pfp/4xls.png?enhanced';
	import pandaPfp from '$lib/assets/landing/credits/pfp/panda.png?enhanced';
	import kiwiPfp from '$lib/assets/landing/credits/pfp/kiwi.jpg?enhanced';
	import csPfp from '$lib/assets/landing/credits/pfp/cs.jpg?enhanced';
	import defaultPfp from '$lib/assets/landing/credits/pfp/default.webp?enhanced';

	const roleMessages = {
		development: m['landing.credits.roles.development'],
		artist: m['landing.credits.roles.artist'],
		tester: m['landing.credits.roles.tester'],
		translator: m['landing.credits.roles.translator']
	} as const;

	const contributors = [
		{
			name: 'stageddat',
			pfp: stageddatPfp,
			roles: ['development'],
			links: [
				{ label: 'webs', href: 'https://stageddat.dev' },
				{ label: 'github', href: 'https://github.com/stageddat' }
			]
		},
		{
			name: 'fiddle',
			pfp: fiddlePfp,
			roles: ['artist'],
			links: [{ label: 'instagram', href: 'https://www.instagram.com/fiddlearty/' }]
		},
		{ name: 'josh', pfp: joshPfp, roles: ['tester'], links: [] },
		{ name: 'Cheesy Bacon', pfp: cheesyPfp, roles: ['tester', 'translator'], links: [] },
		{ name: 'BestG', pfp: bestPfp, roles: ['translator'], links: [] },
		{ name: '4XLS', pfp: _4xlsPfp, roles: ['tester'], links: [] },
		{ name: 'meteor', pfp: meteorPfp, roles: ['tester'], links: [] },
		{ name: 'panda', pfp: pandaPfp, roles: ['tester'], links: [] },
		{ name: 'fisch', pfp: defaultPfp, roles: ['translator'], links: [] },
		{ name: 'Capitan Solnan', pfp: csPfp, roles: ['tester'], links: [] },
		{
			name: 'kiwi',
			pfp: kiwiPfp,
			roles: ['tester'],
			links: [{ label: 'youtube', href: 'https://www.youtube.com/@thesubmergedkiwi' }]
		}
	];
</script>

<Navbar />
<div class="mx-auto mt-12 max-w-4xl px-4 py-12">
	<h1 class="mb-8 text-6xl font-bold text-foreground">{m['landing.credits.title']()}</h1>
	<p class="text-xl text-pretty text-muted-foreground">{m['landing.credits.intro']()}</p>
	<section class="mt-10">
		<h2 class="border-b-2 border-primary pb-2 text-3xl font-bold text-balance text-primary">
			{m['landing.credits.contributors']()}
		</h2>
		<div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
			{#each contributors as contributor (contributor.name)}
				<div class="flex flex-col items-center gap-3 rounded-lg border p-4 text-center">
					<enhanced:img
						src={contributor.pfp}
						alt={contributor.name}
						class="h-32 w-32 shrink-0 rounded-full object-cover"
					/>
					<div>
						<p class="text-3xl font-medium tracking-wide">{contributor.name}</p>
						<div class="mt-1 flex flex-row flex-wrap items-center justify-center gap-2">
							{#each contributor.roles as role (role)}
								<p class="rounded-md border px-1.5 text-xl text-muted-foreground">
									{roleMessages[role as keyof typeof roleMessages]()}
								</p>
							{/each}
						</div>
					</div>

					{#if contributor.links.length > 0}
						<div class="mt-1 flex flex-wrap justify-center gap-3">
							{#each contributor.links as link (link)}
								<a
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									class="text-lg text-primary underline-offset-4 hover:underline"
								>
									{link.label}
								</a>
							{/each}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</section>
</div>
<Footer />
