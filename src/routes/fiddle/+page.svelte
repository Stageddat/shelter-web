<script>
	import { onMount } from 'svelte';

	// Placeholder works — Fiddle can replace with real ones
	const works = [
		{
			id: 1,
			title: 'Welcome!',
			tag: 'Illustration',
			src: 'fiddle/fiddle_welcome.jpg',
			aspect: 'square'
		},
		{
			id: 2,
			title: 'Machka',
			tag: 'Character design',
			src: 'fiddle/machka.webp',
			aspect: 'square'
		},
		{
			id: 3,
			title: 'Horse Fancy!',
			tag: 'Digital art',
			src: 'fiddle/horse-fancy.jpg',
			aspect: 'square'
		},
		{
			id: 4,
			title: 'Art & Wilderness',
			tag: 'Illustration',
			src: 'fiddle/wilderness.jpg',
			aspect: 'tall'
		},
		{
			id: 5,
			title: 'Art & Wilderness 2',
			tag: 'Character design',
			src: '/fiddle/wilderness2.jpg',
			aspect: 'tall'
		},
		{
			id: 6,
			title: 'Dark Side of the Moon',
			tag: 'Inquiry Illustration',
			src: '/fiddle/dark-side.png',
			aspect: 'square'
		},
		{
			id: 7,
			title: 'Loneliness',
			tag: 'Illustration',
			src: '/fiddle/loneliness.png',
			aspect: 'square'
		},
		{
			id: 8,
			title: 'Classical',
			tag: 'Inquiry Illustration',
			src: '/fiddle/classical.png',
			aspect: 'square'
		},
		{
			id: 9,
			title: 'Nude study cartoon',
			tag: 'Study',
			src: '/fiddle/nude.png',
			aspect: 'square'
		},
		{
			id: 10,
			title: 'Spark',
			tag: 'Illustration',
			src: '/fiddle/spark.png',
			aspect: 'tall'
		},
		{
			id: 11,
			title: 'Fiddle Ref Sheet',
			tag: 'Illustration',
			src: '/fiddle/fiddle-ref.png',
			aspect: 'square'
		},
		{
			id: 12,
			title: 'We’re getting older',
			tag: 'Illustration',
			src: '/fiddle/getting-older.png',
			aspect: 'square'
		},
		{
			id: 13,
			title: 'You can have it all',
			tag: 'Illustration',
			src: '/fiddle/have-it-all.png',
			aspect: 'wide'
		},
		{
			id: 14,
			title: 'Sonny Boy',
			tag: 'Fan art',
			src: '/fiddle/sonny-boy.png',
			aspect: 'square'
		},
		{
			id: 15,
			title: 'Why did you give me what I wanted',
			tag: 'Illustration',
			src: '/fiddle/give-me.png',
			aspect: 'square'
		},
		{
			id: 16,
			title: 'Two Birds',
			tag: 'Illustration',
			src: '/fiddle/two-birds.png',
			aspect: 'square'
		},
		{
			id: 17,
			title: 'The Survivor',
			tag: 'Fan Art',
			src: '/fiddle/survivor.png',
			aspect: 'square'
		},
		{
			id: 18,
			title: 'Friendship',
			tag: 'Illustration',
			src: '/fiddle/friendship.png',
			aspect: 'square'
		}
	];

	let visible = $state(false);
	onMount(() => {
		requestAnimationFrame(() => {
			visible = true;
		});
	});
</script>

<svelte:head>
	<title>Fiddle — Art & Illustration</title>
	<meta
		name="description"
		content="Fiddle is an illustrator and character designer. Available for commissions."
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&family=Inter:wght@300;400;500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="page" class:visible>
	<!-- Hero -->
	<header class="hero">
		<div class="hero-inner">
			<p class="eyebrow">Art & Illustration</p>
			<h1 class="name" aria-label="Fiddle">
				<span class="letter" style="--d:0">F</span><span class="letter" style="--d:1">i</span><span
					class="letter"
					style="--d:2">d</span
				><span class="letter" style="--d:3">d</span><span class="letter" style="--d:4">l</span><span
					class="letter"
					style="--d:5">e</span
				>
			</h1>
			<p class="tagline">Character design · Digital illustration · Commissions open</p>
		</div>
		<div class="hero-accent" aria-hidden="true"></div>
	</header>

	<!-- Gallery -->
	<section class="gallery-section">
		<div class="gallery">
			{#each works as work (works.indexOf(work))}
				<article class="work work--{work.aspect}">
					<div class="work-img">
						{#if work.src}
							<enhanced:img src={work.src} alt={work.title} />
						{:else}
							<div class="work-placeholder">
								<span class="placeholder-icon">✦</span>
							</div>
						{/if}
					</div>
					<div class="work-meta">
						<span class="work-tag">{work.tag}</span>
						<span class="work-title">{work.title}</span>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<!-- About -->
	<section class="about-section">
		<div class="about-inner">
			<div class="about-label">About</div>
			<div class="about-content">
				<p class="about-text">
					I'm Fiddle, an illustrator drawn to characters with a life of their own..
				</p>
				<p class="about-text">
					My work lives between cute and uncanny with characters that feel familiar but carry
					something quieter underneath.
				</p>
			</div>
		</div>
	</section>

	<!-- Contact -->
	<section class="contact-section">
		<div class="contact-inner">
			<h2 class="contact-heading">Let's work together</h2>
			<p class="contact-sub">Open for commissions and collaborations.</p>
			<a href="https://www.instagram.com/fiddlearty" class="contact-btn" target="_blank"
				>DM me on Instagram</a
			>
		</div>
	</section>

	<!-- Footer -->
	<footer class="footer">
		<span>© Fiddle {new Date().getFullYear()}</span>
		<span>Made with ❤️ by <a href="https://stageddat.dev" target="_blank">Stageddat</a></span>
	</footer>
</div>

<style>
	:global(body) {
		margin: 0;
		background: #faf7f4;
		color: #1a1410;
		font-family: 'Inter', sans-serif;
	}

	.page {
		opacity: 0;
		transform: translateY(12px);
		transition:
			opacity 0.6s ease,
			transform 0.6s ease;
	}
	.page.visible {
		opacity: 1;
		transform: translateY(0);
	}

	/* ── Hero ── */
	.hero {
		position: relative;
		min-height: 60vh;
		display: flex;
		align-items: center;
		padding: 6rem 2rem 4rem;
		overflow: hidden;
	}
	.hero-inner {
		position: relative;
		z-index: 1;
		max-width: 720px;
		margin: 0 auto;
		text-align: center;
	}
	.hero-accent {
		position: absolute;
		top: -120px;
		right: -120px;
		width: 480px;
		height: 480px;
		border-radius: 50%;
		background: radial-gradient(circle, #e8a0bf44 0%, #c4a8d422 60%, transparent 80%);
		pointer-events: none;
	}

	.eyebrow {
		font-size: 0.75rem;
		font-weight: 500;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: #8c7b72;
		margin: 0 0 1.5rem;
	}

	/* Signature: staggered letter heights */
	.name {
		font-family: 'Playfair Display', serif;
		font-style: italic;
		font-size: clamp(5rem, 15vw, 10rem);
		font-weight: 600;
		line-height: 1;
		margin: 0 0 1.5rem;
		display: flex;
		justify-content: center;
		gap: 0.02em;
	}
	.letter {
		display: inline-block;
		animation: letterDrop 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
		animation-delay: calc(var(--d) * 60ms + 200ms);
		/* Alternating vertical offset — the signature element */
		transform: translateY(calc(sin(var(--d) * 1.1rad) * 0.12em));
	}
	@media (prefers-reduced-motion: reduce) {
		.letter {
			animation: none;
		}
	}
	@keyframes letterDrop {
		from {
			opacity: 0;
			transform: translateY(calc(sin(var(--d) * 1.1rad) * 0.12em - 20px));
		}
		to {
			opacity: 1;
			transform: translateY(calc(sin(var(--d) * 1.1rad) * 0.12em));
		}
	}

	.tagline {
		font-size: 0.9rem;
		font-weight: 300;
		color: #8c7b72;
		letter-spacing: 0.04em;
		margin: 0;
	}

	/* ── Gallery ── */
	.gallery-section {
		padding: 2rem 2rem 5rem;
		max-width: 1100px;
		margin: 0 auto;
	}
	.gallery {
		columns: 3 280px;
		column-gap: 1.25rem;
	}
	.work {
		break-inside: avoid;
		margin-bottom: 1.25rem;
		cursor: pointer;
	}
	.work-img {
		border-radius: 12px;
		overflow: hidden;
		background: #ede8e3;
	}
	.work--tall .work-img {
		aspect-ratio: 3/4;
	}
	.work--wide .work-img {
		aspect-ratio: 4/3;
	}
	.work--square .work-img {
		aspect-ratio: 1/1;
	}

	.work-img img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: transform 0.4s ease;
	}
	.work:hover .work-img img {
		transform: scale(1.03);
	}
	.work-placeholder {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #c4a8d4;
		font-size: 1.5rem;
		transition: color 0.3s;
	}
	.work:hover .work-placeholder {
		color: #e8a0bf;
	}

	.work-meta {
		display: flex;
		gap: 0.5rem;
		align-items: baseline;
		padding: 0.6rem 0.25rem 0;
	}
	.work-tag {
		font-size: 0.65rem;
		font-weight: 500;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: #c4a8d4;
	}
	.work-title {
		font-size: 0.85rem;
		font-weight: 400;
		color: #8c7b72;
	}

	/* ── About ── */
	.about-section {
		padding: 5rem 2rem;
		border-top: 1px solid #e5ddd7;
		max-width: 800px;
		margin: 0 auto;
	}
	.about-inner {
		display: grid;
		grid-template-columns: 100px 1fr;
		gap: 2rem;
		align-items: start;
	}
	@media (max-width: 600px) {
		.about-inner {
			grid-template-columns: 1fr;
			gap: 1rem;
		}
	}
	.about-label {
		font-size: 0.7rem;
		font-weight: 500;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: #8c7b72;
		padding-top: 0.3rem;
	}
	.about-text {
		font-size: 1.1rem;
		font-weight: 300;
		line-height: 1.75;
		color: #3a2e28;
		margin: 0 0 1rem;
	}
	.about-text:last-child {
		margin-bottom: 0;
	}
	.shelter-link {
		color: #c4a8d4;
		text-decoration: none;
		border-bottom: 1px solid currentColor;
		transition: color 0.2s;
	}
	.shelter-link:hover {
		color: #e8a0bf;
	}

	/* ── Contact ── */
	.contact-section {
		background: #1a1410;
		color: #faf7f4;
		padding: 6rem 2rem;
		text-align: center;
	}
	.contact-heading {
		font-family: 'Playfair Display', serif;
		font-style: italic;
		font-size: clamp(2rem, 6vw, 3.5rem);
		font-weight: 400;
		margin: 0 0 1rem;
	}
	.contact-sub {
		font-weight: 300;
		color: #8c7b72;
		margin: 0 0 2.5rem;
		font-size: 1rem;
	}
	.contact-btn {
		display: inline-block;
		padding: 0.9rem 2.5rem;
		border: 1px solid #e8a0bf;
		color: #e8a0bf;
		text-decoration: none;
		font-size: 0.85rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		border-radius: 100px;
		transition:
			background 0.25s,
			color 0.25s;
	}
	.contact-btn:hover {
		background: #e8a0bf;
		color: #1a1410;
	}

	/* ── Footer ── */
	.footer {
		padding: 1.5rem 2rem;
		display: flex;
		justify-content: center;
		gap: 0.75rem;
		font-size: 0.78rem;
		color: #8c7b72;
		background: #1a1410;
		border-top: 1px solid #2a2018;
	}
	.footer-sep {
		opacity: 0.4;
	}
	.footer-link {
		color: #8c7b72;
		text-decoration: none;
		transition: color 0.2s;
	}
	.footer-link:hover {
		color: #c4a8d4;
	}
</style>
