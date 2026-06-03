<script>
	import { resolve } from '$app/paths';
</script>

<section class="relative overflow-hidden bg-background px-8 py-32 lg:py-52" id="start">
	<div class="mx-auto max-w-4xl text-center">
		<div class="space-y-6">
			<h2
				class="font-display text-6xl font-normal tracking-tighter text-foreground sm:text-7xl lg:text-8xl"
			>
				ready to rest?
			</h2>

			<p
				class="font-primary mx-auto max-w-md text-xl leading-relaxed text-muted-foreground lg:text-2xl"
			>
				start your journey at your own pace.
			</p>
		</div>

		<div class="mt-2 flex flex-col items-center gap-6">
			<a
				href={resolve('/signup')}
				class="font-primary inline-block min-w-60 rounded-2xl bg-primary px-12 py-5 text-center text-2xl font-bold text-primary-foreground transition-all duration-200 hover:brightness-110 active:scale-95 active:brightness-90"
			>
				start my journey!
			</a>
		</div>
	</div>
</section>
