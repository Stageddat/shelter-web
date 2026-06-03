<script lang="ts">
	import LockImg from '$lib/assets/landing/book.png?enhanced';
	import { m } from '$lib/paraglide/messages';

	const securityFeatures = [
		{
			title: m.landing_security_1_title(),
			text: m.landing_security_1_description()
		},
		{
			title: m.landing_security_2_title(),
			text: m.landing_security_2_description()
		},
		{
			title: m.landing_security_3_title(),
			text: m.landing_security_3_description()
		}
	];
</script>

<section class="bg-background px-8 py-24 lg:py-40" id="security">
	<div class="mx-auto max-w-6xl">
		<div class="mb-20 space-y-4 text-center">
			<h2 class="font-display text-4xl font-normal text-foreground sm:text-6xl lg:text-7xl">
				{m.landing_security_title()}
			</h2>
		</div>

		<div class="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">
			<div class="relative flex w-full justify-center lg:w-1/2">
				<enhanced:img
					src={LockImg}
					alt="security lock illustration"
					class="w-full max-w-sm object-contain transition-all duration-1000 ease-in-out hover:scale-105 sm:max-w-md"
				/>
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
