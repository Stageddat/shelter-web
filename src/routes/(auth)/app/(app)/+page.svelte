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

<main class="flex h-screen flex-col gap-4 overflow-hidden px-10 py-8">
	<!-- top -->
	<div class="flex shrink-0 items-center justify-between">
		<h2 class="mb-6 flex text-left text-7xl font-bold tracking-wide lowercase">
			{greetingMessage}
		</h2>

		<!-- aviso de desarrollo -->
		<Popover>
			<PopoverTrigger>
				<Button variant="outline" class="h-12 w-12">
					<Info class="h-7! w-7!" />
				</Button>
			</PopoverTrigger>

			<PopoverContent align="end" class="w-2xl">
				<PopoverHeader>
					<PopoverTitle class="text-3xl font-semibold tracking-wide">
						shelter is still in development!
					</PopoverTitle>

					<PopoverDescription class="space-y-3 text-xl">
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

	<!-- row 1 -->
	<div class="flex w-full shrink-0 gap-4">
		<div class="flex w-1/4 items-center gap-4 rounded-xl bg-secondary/40 px-6 py-5">
			<!-- entries -->
			<div class="h-9/12 rounded-md bg-mauve/20 p-3 text-mauve">
				<Pencil class="h-full! w-full!" />
			</div>
			<div>
				<p class="text-4xl font-bold">{appContext.entries.length}</p>
				<p class="text-xl">entries</p>
				<p class="text-xl text-mauve">+{appContext.weeklyEntries} entries this week!</p>
			</div>
		</div>
		<!-- words -->
		<div class="flex w-1/4 items-center gap-4 rounded-xl bg-secondary/40 px-6 py-5">
			<div class="h-9/12 rounded-md bg-green/20 p-3 text-green">
				<BookOpen class="h-full! w-full!" />
			</div>
			<div>
				<p class="text-4xl font-bold">{appContext.totalWordCount}</p>
				<p class="text-xl">words</p>
				<p class="text-xl text-green">+{appContext.weeklyWordCount} words this week!</p>
			</div>
		</div>

		<!-- streak -->
		<div class="flex w-1/4 items-center gap-4 rounded-xl bg-secondary/40 px-6 py-5">
			<div class="h-9/12 rounded-md bg-peach/20 p-2 text-peach">
				<Flame class="h-full! w-full!" />
			</div>
			<div>
				<p class="text-4xl font-bold">{appContext.streak}</p>
				<p class="text-xl">day streak</p>
				<p class="text-xl text-peach">{appContext.streakMotivation}</p>
			</div>
		</div>

		<!-- last entry -->
		<div class="flex w-1/4 items-center gap-4 rounded-xl bg-secondary/40 px-6 py-5">
			<div class="h-9/12 rounded-md bg-sky-500/20 p-2 text-sky">
				<CalendarDays class="h-full! w-full!" />
			</div>
			<div>
				<p class="text-4xl font-bold">{appContext.lastEntry}</p>
				<p class="text-xl">last entry</p>
				{#if appContext.lastEntryRelativeDate !== appContext.lastEntry}
					<p class="text-xl text-sky">{appContext.lastEntryRelativeDate}</p>
				{/if}
			</div>
		</div>
	</div>

	<!-- row 2 -->
	<div class="flex min-h-0 w-full flex-1 gap-4">
		<!-- left column -->
		<div class="flex h-full w-1/2 flex-col gap-4">
			<!-- recent entries -->
			<div class="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl bg-secondary/40 p-5">
				<div class="mb-3 flex items-center justify-between">
					<h3 class="text-2xl font-semibold">recent entries</h3>
					<Button variant="ghost" href={resolve('/app/entries')} class="text-xl">view all →</Button>
				</div>

				<ScrollArea class="min-h-0 flex-1">
					<div class="flex flex-col gap-2 pr-2.5">
						{#each appContext.entries.slice(0, 5) as entry (entry.id)}
							<EntryCard {entry} class="h-20" enableDelete={false} />
						{/each}
					</div>
				</ScrollArea>
			</div>

			<!-- quote bar -->
			<div class="shrink-0 rounded-xl bg-secondary/40 px-6 py-4">
				<p class="text-lg text-foreground/90 lowercase italic">
					"In the journal I do not just express myself more openly than I could to any person; I
					create myself."
				</p>
				<p class="text-base text-foreground/80 lowercase">- Susan Sontag</p>
			</div>
		</div>

		<!-- right column -->
		<div class="flex h-full w-1/2 flex-col gap-4">
			<!-- Writing activity chart -->
			<div class="flex min-h-0 flex-1 flex-col rounded-xl bg-secondary/40 p-5">
				<h3 class="mb-3 shrink-0 text-2xl font-semibold">writing activity</h3>
				<Char class="min-h-0 flex-1" />
			</div>

			<!-- quick actions -->
			<div class="flex shrink-0 flex-col rounded-xl bg-secondary/40 p-5">
				<h3 class="mb-3 text-2xl font-semibold">quick actions</h3>

				<div class="flex flex-col gap-2 overflow-hidden rounded-xl py-1">
					<!-- new Entry -->
					<Button
						variant="ghost"
						class="flex h-fit items-center justify-between border-b border-muted px-4 py-2 text-left transition hover:bg-muted/50"
						href="/app/new"
					>
						<div class="flex items-center gap-4">
							<Pencil class="h-6! w-6! text-primary" />
							<div>
								<h4 class="text-xl tracking-wide text-foreground">new entry</h4>
								<p class="text-base tracking-wide text-foreground/80">
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
							<Search class="h-6! w-6! text-primary" />
							<div>
								<h4 class="text-xl tracking-wide text-foreground">search entries</h4>
								<p class="text-base tracking-wide text-foreground/85">find something you wrote</p>
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
							<Calendar class="h-6! w-6! text-primary" />
							<div>
								<h4 class="text-xl tracking-wide text-foreground">view calendar</h4>
								<p class="text-base tracking-wide text-foreground/85">see your entries by date</p>
							</div>
						</div>
						<ChevronRight />
					</Button>
				</div>
			</div>
		</div>
	</div>
</main>
