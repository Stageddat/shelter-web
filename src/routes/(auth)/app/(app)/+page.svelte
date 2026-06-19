<script lang="ts">
	import EntryCard from '$lib/components/app/entry/EntryCard.svelte';
	import { getAppContext } from '$lib/contexts/app.context.svelte';
	import {
		Popover,
		PopoverContent,
		PopoverDescription,
		PopoverHeader,
		PopoverTitle,
		PopoverTrigger
	} from '$lib/components/ui/popover';
	import { Button } from '$lib/components/ui/button';
	import {
		BookOpen,
		Calendar,
		CalendarDays,
		ChevronRight,
		Flame,
		Info,
		Pencil,
		Search
	} from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import Char from '$lib/components/app/stats/Char.svelte';
	import ScrollArea from '$lib/components/ui/scroll-area/scroll-area.svelte';

	const appContext = getAppContext();
	const greetingMessage = $derived(appContext.greeting);
</script>

<main class="flex flex-col gap-4 px-4 py-6 lg:h-screen lg:overflow-hidden lg:px-10 lg:py-8">
	<div class="mb-4 flex shrink-0 items-center justify-between">
		<h2
			class="flex items-center justify-center text-left text-4xl font-bold tracking-wide text-pretty lowercase lg:text-5xl"
		>
			{greetingMessage}
		</h2>

		<!-- aviso de desarrollo -->
		<Popover>
			<PopoverTrigger>
				<Button variant="outline" class="h-10 w-10 lg:h-12 lg:w-12">
					<Info class="h-5! w-5! lg:h-7! lg:w-7!" />
				</Button>
			</PopoverTrigger>
			<PopoverContent align="end" class="w-[90vw] lg:w-2xl">
				<PopoverHeader>
					<PopoverTitle class="text-xl font-semibold tracking-wide lg:text-3xl">
						shelter is still in development!
					</PopoverTitle>
					<PopoverDescription class="space-y-3 text-base lg:text-xl">
						<span>
							we're actively working on shelter. as a precaution, we recommend exporting your
							journal from time to time, just in case ;)
						</span>
						<span class="block"> you can export easily in settings › data › export! </span>
					</PopoverDescription>
				</PopoverHeader>
			</PopoverContent>
		</Popover>
	</div>

	<div class="grid shrink-0 grid-cols-2 gap-3 lg:flex lg:w-full lg:gap-3">
		<div class="stats-card">
			<!-- entries -->
			<div class="stats-card-icon bg-mauve/20 text-mauve">
				<Pencil class="h-full! w-full!" />
			</div>
			<div>
				<p class="stats-card-counter">{appContext.entries.length}</p>
				<p class="stats-card-label">entries</p>
				<p class="stats-card-sublabel text-mauve">+{appContext.weeklyEntries} this week!</p>
			</div>
		</div>
		<!-- words -->
		<div class="stats-card">
			<div class="stats-card-icon bg-green/20 text-green">
				<BookOpen class="h-full! w-full!" />
			</div>
			<div>
				<p class="stats-card-counter">{appContext.totalWordCount}</p>
				<p class="stats-card-label">words</p>
				<p class="stats-card-sublabel text-green">+{appContext.weeklyWordCount} this week!</p>
			</div>
		</div>

		<!-- streak -->
		<div class="stats-card">
			<div class="stats-card-icon bg-peach/20 text-peach">
				<Flame class="h-full! w-full!" />
			</div>
			<div>
				<p class="stats-card-counter">{appContext.streak}</p>
				<p class="stats-card-label">day streak</p>
				<p class="stats-card-sublabel text-peach">{appContext.streakMotivation}</p>
			</div>
		</div>

		<!-- last entry -->
		<div class="stats-card">
			<div class="stats-card-icon bg-sky-500/20 text-sky">
				<CalendarDays class="h-full! w-full!" />
			</div>
			<div>
				<p class="stats-card-counter">{appContext.lastEntry}</p>
				<p class="stats-card-label">last entry</p>
				{#if appContext.lastEntryRelativeDate !== appContext.lastEntry}
					<p class="stats-card-sublabel text-sky">{appContext.lastEntryRelativeDate}</p>
				{/if}
			</div>
		</div>
	</div>

	<div class="flex w-full flex-col gap-4 lg:min-h-0 lg:flex-1 lg:flex-row lg:overflow-hidden">
		<!-- entries -->
		<div class="flex w-full flex-col gap-4 lg:h-full lg:w-1/2">
			<div
				class="flex h-80 flex-col overflow-hidden rounded-xl bg-secondary/40 px-3 py-3 lg:h-auto lg:min-h-0 lg:flex-1 lg:p-5"
			>
				<div class="mb-3 flex items-center justify-between px-3">
					<h3 class="text-xl font-semibold lg:text-2xl">recent entries</h3>
					<Button variant="ghost" href={resolve('/app/entries')} class="text-base lg:text-xl"
						>view all →</Button
					>
				</div>
				<ScrollArea class="min-h-0 flex-1">
					<div class="flex flex-col gap-2 px-3">
						{#each appContext.entries.slice(0, 5) as entry (entry.id)}
							<EntryCard {entry} class="h-20" enableDelete={false} />
						{/each}
					</div>
				</ScrollArea>
			</div>

			<div class="hidden shrink-0 rounded-xl bg-secondary/40 px-6 py-4 lg:block">
				<p class="text-base tracking-wider text-foreground/90 lowercase italic lg:text-lg">
					"In the journal I do not just express myself more openly than I could to any person; I
					create myself."
				</p>
				<p class="text-sm tracking-wider text-foreground/80 lowercase lg:text-base">
					- Susan Sontag
				</p>
			</div>
		</div>

		<div class="flex w-full flex-col gap-4 lg:h-full lg:w-1/2">
			<div
				class="h-64 flex-col rounded-xl bg-secondary/40 px-6 py-3 lg:flex lg:h-auto lg:min-h-0 lg:flex-1 lg:p-5"
			>
				<h3 class="mb-3 shrink-0 text-xl font-semibold lg:text-2xl">writing activity</h3>
				<Char class="min-h-0 flex-1" />
			</div>

			<!-- quick actions -->
			<div class="shrink-0 rounded-xl bg-secondary/40 px-6 py-3 lg:p-5">
				<h3 class="mb-3 text-xl font-semibold lg:text-2xl">quick actions</h3>
				<div class="flex flex-col gap-2 overflow-hidden rounded-xl py-1">
					<!-- new Entry -->
					<Button
						variant="ghost"
						class="flex h-fit items-center justify-between border-b border-muted px-4 py-2 text-left transition hover:bg-muted/50"
						href="/app/new"
					>
						<div class="flex items-center gap-4">
							<Pencil class="h-5! w-5! text-primary lg:h-6! lg:w-6!" />
							<div>
								<h4 class="text-base tracking-wide text-foreground lg:text-xl">new entry</h4>
								<p class="text-sm tracking-wide text-foreground/80 lg:text-base">
									start writing something new
								</p>
							</div>
						</div>
						<ChevronRight />
					</Button>

					<!-- search entries -->
					<Button
						variant="ghost"
						class="flex h-fit items-center justify-between border-b border-muted px-4 py-2 text-left transition hover:bg-muted"
						href="/app/search"
					>
						<div class="flex items-center gap-4">
							<Search class="h-5! w-5! text-primary lg:h-6! lg:w-6!" />
							<div>
								<h4 class="text-base tracking-wide text-foreground lg:text-xl">search entries</h4>
								<p class="text-sm tracking-wide text-foreground/85 lg:text-base">
									find something you wrote
								</p>
							</div>
						</div>
						<ChevronRight />
					</Button>

					<!-- view calendar -->
					<Button
						variant="ghost"
						class="flex h-fit items-center justify-between border-b border-muted px-4 py-2 text-left transition hover:bg-muted"
						href="/app/calendar"
					>
						<div class="flex items-center gap-4">
							<Calendar class="h-5! w-5! text-primary lg:h-6! lg:w-6!" />
							<div>
								<h4 class="text-base tracking-wide text-foreground lg:text-xl">view calendar</h4>
								<p class="text-sm tracking-wide text-foreground/85 lg:text-base">
									see your entries by date
								</p>
							</div>
						</div>
						<ChevronRight />
					</Button>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	@reference "@css/layout.css";

	:global(.stats-card) {
		@apply flex items-center gap-3 rounded-xl bg-secondary/40 px-3 py-2.5 lg:w-1/4 lg:px-4 lg:py-2 xl:px-6 xl:py-4;
	}

	:global(.stats-card-icon) {
		@apply h-9 w-9 shrink-0 rounded-md p-1.5 sm:h-14 sm:w-14 lg:h-10 lg:w-10 xl:h-12 xl:w-12;
	}

	:global(.stats-card-counter) {
		@apply text-2xl font-bold sm:text-3xl;
	}

	:global(.stats-card-label) {
		@apply text-xl sm:text-3xl lg:text-xl;
	}

	:global(.stats-card-sublabel) {
		@apply text-sm sm:text-lg lg:text-base;
	}
</style>
