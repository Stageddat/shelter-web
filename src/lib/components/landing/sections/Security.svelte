<script lang="ts">
	import BookLight from '$lib/assets/landing/book.webp?enhanced';
	import BookDark from '$lib/assets/landing/book-dark.webp?enhanced';
	import BookMochaLavender from '$lib/assets/landing/book-mocha-lavender.webp?enhanced';
	import { theme, mode } from 'mode-watcher';
	import { m } from '$lib/paraglide/messages';

	const securityFeatures = [
		{
			title: m['landing.security.1.title'](),
			text: m['landing.security.1.description']()
		},
		{
			title: m['landing.security.2.title'](),
			text: m['landing.security.2.description']()
		},
		{
			title: m['landing.security.3.title'](),
			text: m['landing.security.3.description']()
		}
	];
</script>

<section class="bg-background px-4 py-24 md:px-8 lg:py-40" id="security">
	<div class="mx-auto max-w-6xl">
		<div class="mb-4 space-y-4 text-center">
			<h2
				class="font-display text-5xl font-normal text-pretty text-foreground sm:text-6xl lg:mb-3 lg:text-7xl"
			>
				{m['landing.security.title']()}
			</h2>
		</div>

		<div class="flex flex-col items-center gap-2 lg:flex-row lg:gap-24">
			<div class="relative flex w-full justify-center lg:w-1/2">
				{#if theme.current === 'mocha-lavender'}
					<enhanced:img
						src={BookMochaLavender}
						alt="security lock illustration"
						class="w-full max-w-sm object-contain transition-all duration-1000 ease-in-out hover:scale-105 sm:max-w-md"
						loading="lazy"
					/>
				{:else if mode.current === 'dark'}
					<enhanced:img
						src={BookDark}
						alt="security lock illustration"
						class="w-full max-w-sm object-contain transition-all duration-1000 ease-in-out hover:scale-105 sm:max-w-md"
						loading="lazy"
					/>
				{:else}
					<enhanced:img
						src={BookLight}
						alt="security lock illustration"
						class="w-full max-w-sm object-contain transition-all duration-1000 ease-in-out hover:scale-105 sm:max-w-md"
						loading="lazy"
					/>
				{/if}
			</div>

			<div class="w-full space-y-6 lg:w-1/2">
				{#each securityFeatures as feature (feature.title)}
					<article class="group space-y-3">
						<h3 class="font-display text-3xl text-foreground">
							{feature.title.toLowerCase()}
						</h3>

						<div
							class="relative border-l-2 border-border/60 pl-6 transition-colors group-hover:border-primary"
						>
							<p
								class="font-primary text-2xl leading-relaxed text-pretty text-muted-foreground lg:text-2xl"
							>
								{feature.text}
							</p>
						</div>
					</article>
				{/each}
				<!-- {securityFeatures.map((feature) => (
              <article class="group space-y-3">
                <h3 class="font-display text-foreground text-3xl">
                  {feature.title.toLowerCase()}
                </h3>

                <div class="border-border/60 group-hover:border-primary relative border-l-2 pl-6 transition-colors">
                  <p class="font-primary text-muted-foreground text-2xl leading-relaxed text-pretty lg:text-2xl">
                    {feature.text}
                  </p>
                </div>
              </article>
            ))} -->
			</div>
		</div>
	</div>
</section>
