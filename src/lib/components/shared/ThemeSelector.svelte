<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { setTheme, setMode, theme, mode } from 'mode-watcher';
	import { Check, Palette } from '@lucide/svelte';

	const options = [
		{ label: 'light', theme: '', mode: 'light' as const },
		{ label: 'dark', theme: '', mode: 'dark' as const },
		{ label: 'catpuccin mocha lavender', theme: 'mocha-lavender', mode: null }
	];

	function applyTheme(option: (typeof options)[number]) {
		setTheme(option.theme);
		if (option.mode) setMode(option.mode);
	}

	function isActive(option: (typeof options)[number]) {
		return theme.current === option.theme && (!option.mode || mode.current === option.mode);
	}
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button
				{...props}
				variant="outline"
				class="h-10 gap-2 border-border/40 bg-secondary px-3 text-muted-foreground hover:text-foreground"
			>
				<Palette class="h-5 w-5" />
				{options.find(isActive)?.label ?? mode.current}
			</Button>
		{/snippet}
	</DropdownMenu.Trigger>

	<DropdownMenu.Content align="end" class="w-52 p-1">
		{#each options as option (option.label)}
			<DropdownMenu.Item>
				{#snippet child({ props })}
					<button
						{...props}
						onclick={() => applyTheme(option)}
						class="flex w-full items-center gap-3 rounded px-3 py-2 text-base transition-colors hover:bg-accent/25"
					>
						<span class="w-4 text-muted-foreground">
							{#if isActive(option)}<Check class="h-4 w-4" />{/if}
						</span>
						{option.label}
					</button>
				{/snippet}
			</DropdownMenu.Item>
		{/each}
	</DropdownMenu.Content>
</DropdownMenu.Root>
