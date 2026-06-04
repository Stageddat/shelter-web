<script lang="ts">
	import type { Snippet } from 'svelte';
	import * as Accordion from '$lib/components/ui/accordion/index';
	import { ParaglideMessage } from '@inlang/paraglide-js-svelte';
	import { m } from '$lib/paraglide/messages';
	import { faqData } from '$lib/constants/landing/faqs';
</script>

<section class="bg-background px-8 py-24 lg:py-40" id="faqs">
	<div class="mx-auto max-w-3xl">
		<div class="mb-16 text-center">
			<h2 class="font-display text-4xl font-normal text-foreground sm:text-6xl lg:text-7xl">
				{m.landing_faqs_title()}
			</h2>
		</div>
		<Accordion.Root type="single" class="space-y-3">
			{#each faqData as faq, i (i)}
				<Accordion.Item
					value={`item-${i}`}
					class="rounded-2xl border border-border bg-secondary/20 px-6 py-1 transition-all hover:bg-secondary/30"
				>
					<Accordion.Trigger
						class="font-display items-center text-left text-2xl font-semibold tracking-wide text-foreground hover:text-primary hover:no-underline"
					>
						{faq.question()}
					</Accordion.Trigger>
					<Accordion.Content
						class="font-primary pb-4 text-2xl leading-relaxed tracking-normal text-muted-foreground"
					>
						<ParaglideMessage message={faq.message} inputs={{}}>
							{#snippet link({
								children,
								options
							}: {
								children: Snippet;
								options: { href: string };
							})}
								<a
									href={options.href}
									target="_blank"
									class="text-primary underline hover:opacity-80"
								>
									{@render children()}
								</a>
							{/snippet}
						</ParaglideMessage>
					</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</div>
</section>
