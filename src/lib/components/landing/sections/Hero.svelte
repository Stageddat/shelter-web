<script>
	import MachkaImg from '$lib/assets/landing/machka.png?enhanced';
</script>

<section
	class="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background px-8"
>
	<div
		class="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-0 pt-32 pb-20 lg:flex-row lg:items-center lg:pt-0 lg:pb-0"
	>
		<!-- {/* text left */} -->
		<div class="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
			<div class="space-y-8">
				<h1
					class="text-8xl leading-[0.8] font-normal tracking-wide text-foreground sm:text-9xl lg:text-[13rem]"
				>
					shelter
				</h1>
				<p
					class="font-primary mx-auto max-w-md text-left text-xl leading-relaxed text-pretty text-muted-foreground lg:mx-0 lg:text-3xl"
				>
					a secure place where your thoughts can breathe
				</p>
			</div>
		</div>

		<!-- {/* img */} -->
		<div class="flex flex-1 items-center justify-center lg:-ml-16">
			<div class="relative w-full max-w-125 sm:max-w-150 lg:max-w-175">
				<enhanced:img
					src={MachkaImg}
					alt="machka writing her journal with her kitty"
					class="h-auto w-full object-contain brightness-[1.02] transition-all duration-1000"
				/>
			</div>
		</div>
	</div>
</section>
