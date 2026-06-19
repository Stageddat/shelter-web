<script lang="ts">
	import LanguageSelector from '$lib/components/landing/LanguageSelector.svelte';
	import ThemeSelector from '$lib/components/shared/ThemeSelector.svelte';
	import { getAuthContext } from '$lib/contexts/auth.context.svelte';
	import { Copy, Check, X } from '@lucide/svelte';
	import * as InputGroup from '$lib/components/ui/input-group/index';
	import { updateDisplayName } from '$lib/services/app/user.service';
	import Switch from '$lib/components/ui/switch/switch.svelte';
	import { onMount } from 'svelte';
	import SettingsPageHeader from '$lib/components/app/SettingsPageHeader.svelte';

	const auth = getAuthContext();

	// copy
	let copied = $state<'username' | 'id' | null>(null);

	function handleCopy(type: 'username' | 'id') {
		const value = type === 'username' ? auth.user?.username : auth.user?.id;
		navigator.clipboard.writeText(value ?? '');
		copied = type;
		setTimeout(() => (copied = null), 2000);
	}

	// display name
	let displayName = $state(auth.user?.displayName ?? auth.user?.username ?? '');

	async function handleSaveDisplayName() {
		if (!auth.user) return;
		if (displayName === auth.user.displayName) return;
		if (displayName.length === 0 || displayName.length > 20) return;
		await updateDisplayName(auth.user.id, displayName.trim());
		displayName = displayName.trim();
		auth.user = { ...auth.user, displayName };
	}

	// toggle analytics
	let analyticsEnabled = $state(false);

	onMount(() => {
		analyticsEnabled = localStorage.getItem('umami.disabled') !== '1';
	});

	function toggleAnalytics(value: boolean) {
		analyticsEnabled = value;
		if (value) {
			localStorage.removeItem('umami.disabled');
		} else {
			localStorage.setItem('umami.disabled', '1');
		}
	}
</script>

<div class="flex flex-col gap-2 px-5 py-6 lg:px-12 lg:py-9">
	<!-- header -->
	<SettingsPageHeader title="general" description="change your appearance, language, etc." />
	<!-- appereance -->
	<div class="mb-6">
		<h2 class="mb-2 text-xl tracking-widest uppercase lg:text-2xl">appereance</h2>
		<div class="flex flex-row items-center justify-between gap-2">
			<p class="text-base tracking-wide lowercase opacity-85 lg:text-xl">theme</p>
			<ThemeSelector />
		</div>
		<hr class="my-4 border-current opacity-10" />
		<div class="flex flex-row items-center justify-between gap-2">
			<div>
				<p class="text-base tracking-wide lowercase opacity-85 lg:text-xl">language</p>
				<p class="text-sm tracking-wide lowercase opacity-60 lg:text-base">
					this will reload the page!
				</p>
			</div>
			<LanguageSelector />
		</div>
	</div>

	<!-- user -->
	<div class="mb-6">
		<h2 class="mb-2 text-xl tracking-widest uppercase lg:text-2xl">user</h2>

		<div class="flex flex-row items-center justify-between gap-2">
			<p class="text-base tracking-wide lowercase opacity-85 lg:text-xl">display name</p>
			<InputGroup.Root class="w-40 lg:w-sm">
				<InputGroup.Input
					class="text-base! lg:text-xl!"
					placeholder="display name"
					bind:value={displayName}
					maxlength={20}
				/>
				<InputGroup.Addon align="inline-end" class="margin-0 gap-0">
					{#if displayName !== auth.user?.displayName}
						<InputGroup.Button
							variant="ghost"
							onclick={() => (displayName = auth.user?.displayName ?? '')}
							class="p-1! text-red-500 hover:bg-red-500/10 hover:text-red-500 dark:text-red-400 dark:hover:bg-red-400/10"
						>
							<X class="size-5 p-0!" />
						</InputGroup.Button>
						<InputGroup.Button
							variant="ghost"
							onclick={handleSaveDisplayName}
							class="p-1! text-green-600 hover:bg-green-500/10 hover:text-green-600 dark:text-green-400 dark:hover:bg-green-400/10"
						>
							<Check class="size-5 p-0!" />
						</InputGroup.Button>
					{/if}
				</InputGroup.Addon>
			</InputGroup.Root>
		</div>
		<hr class="my-4 border-current opacity-10" />
		<div class="flex flex-row items-center justify-between gap-2">
			<p class="text-base tracking-wide lowercase opacity-85 lg:text-xl">username</p>
			<button
				onclick={() => handleCopy('username')}
				class="flex cursor-pointer items-center gap-2 rounded-md border border-border bg-muted/60 px-3 py-1 transition-opacity hover:opacity-90"
			>
				<span class="max-w-32 truncate font-mono text-sm opacity-85 lg:max-w-none lg:text-base"
					>{auth.user?.username}</span
				>
				{#if copied === 'username'}
					<Check class="size-3.5 shrink-0" />
				{:else}
					<Copy class="size-3.5 shrink-0" />
				{/if}
			</button>
		</div>
		<hr class="my-4 border-current opacity-10" />
		<div class="flex flex-row items-center justify-between gap-2">
			<p class="text-base tracking-wide lowercase opacity-85 lg:text-xl">user id</p>
			<button
				onclick={() => handleCopy('id')}
				class="flex cursor-pointer items-center gap-2 rounded-md border border-border bg-muted/60 px-3 py-1 transition-opacity hover:opacity-90"
			>
				<span class="max-w-32 truncate font-mono text-sm opacity-85 lg:max-w-none lg:text-base"
					>{auth.user?.id}</span
				>
				{#if copied === 'id'}
					<Check class="size-3.5 shrink-0" />
				{:else}
					<Copy class="size-3.5 shrink-0" />
				{/if}
			</button>
		</div>
	</div>

	<!-- privacy -->
	<div class="mb-6">
		<h2 class="mb-2 text-xl tracking-widest uppercase lg:text-2xl">privacy</h2>
		<div class="flex flex-row items-center justify-between gap-2">
			<div>
				<p class="text-base tracking-wide lowercase opacity-85 lg:text-xl">analytics</p>
				<p class="text-sm tracking-wide lowercase opacity-60 lg:text-base">
					share anonymous usage data to help improve shelter. no personal data is collected.
				</p>
			</div>
			<div class="flex items-center space-x-2">
				<Switch id="analytics" checked={analyticsEnabled} onCheckedChange={toggleAnalytics} />
			</div>
		</div>
		<!-- <hr class="my-4 border-current opacity-10" /> -->
	</div>
</div>
