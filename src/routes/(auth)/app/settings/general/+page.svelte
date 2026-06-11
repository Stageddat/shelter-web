<script lang="ts">
	import LanguageSelector from '$lib/components/landing/LanguageSelector.svelte';
	import ThemeSelector from '$lib/components/shared/ThemeSelector.svelte';
	import { getAuthContext } from '$lib/contexts/auth.context.svelte';
	import { Copy, Check } from '@lucide/svelte';
	import * as InputGroup from '$lib/components/ui/input-group/index';
	import { updateDisplayName } from '$lib/services/app/user.service';

	const auth = getAuthContext();

	let copied = $state<'username' | 'id' | null>(null);

	function handleCopy(type: 'username' | 'id') {
		const value = type === 'username' ? auth.user?.username : auth.user?.id;
		navigator.clipboard.writeText(value ?? '');
		copied = type;
		setTimeout(() => (copied = null), 2000);
	}

	let displayName = $state(auth.user?.displayName ?? auth.user?.username ?? '');

	async function handleSaveDisplayName() {
		if (!auth.user) return;
		if (displayName === auth.user.displayName) return;
		if (displayName.length === 0 || displayName.length > 20) return;
		await updateDisplayName(auth.user.id, displayName.trim());
		auth.user = { ...auth.user, displayName };
	}
</script>

<div class="flex flex-col gap-2 px-12 py-9">
	<!-- header -->
	<div>
		<h2 class="mb-0.5 flex text-left text-4xl font-semibold tracking-wide lowercase">general</h2>
		<h3 class="mb-6 flex text-left text-xl tracking-wide lowercase">
			change your appareance, language, etc.
		</h3>
	</div>

	<!-- project info -->
	<div class="mb-6">
		<h2 class="mb-2 text-2xl tracking-widest uppercase">appereance</h2>
		<div class="flex flex-row items-center justify-between gap-2">
			<p class="text-xl tracking-wide lowercase opacity-85">theme</p>
			<ThemeSelector />
		</div>
		<hr class="my-4 border-current opacity-10" />
		<div class="flex flex-row items-center justify-between gap-2">
			<div>
				<p class="text-xl tracking-wide lowercase opacity-85">language</p>
				<p class="text-base tracking-wide lowercase opacity-60">this will reload the page!</p>
			</div>
			<LanguageSelector />
		</div>
	</div>
	<div class="mb-6">
		<h2 class="mb-2 text-2xl tracking-widest uppercase">user</h2>

		<div class="flex flex-row items-center justify-between gap-2">
			<div>
				<p class="text-xl tracking-wide lowercase opacity-85">display name</p>
				<p class="text-base tracking-wide lowercase opacity-60">this will reload the page!</p>
			</div>
			<InputGroup.Root>
				<InputGroup.Input placeholder="display name" bind:value={displayName} maxlength={20} />
				<InputGroup.Addon align="inline-end">
					{#if displayName !== auth.user?.displayName}
						<InputGroup.Button
							variant="secondary"
							onclick={() => (displayName = auth.user?.displayName ?? '')}
						>
							cancel
						</InputGroup.Button>
					{/if}
					<InputGroup.Button variant="secondary" onclick={handleSaveDisplayName}>
						save
					</InputGroup.Button>
				</InputGroup.Addon>
			</InputGroup.Root>
		</div>
		<hr class="my-4 border-current opacity-10" />
		<div class="flex flex-row items-center justify-between gap-2">
			<p class="text-xl tracking-wide lowercase opacity-85">username</p>
			<button
				onclick={() => handleCopy('username')}
				class="flex cursor-pointer items-center gap-2 rounded-md border border-border bg-muted/60 px-3 py-1 transition-opacity hover:opacity-90"
			>
				<span class="font-mono text-base opacity-85">{auth.user?.username}</span>
				{#if copied === 'username'}
					<Check class="size-3.5" />
				{:else}
					<Copy class="size-3.5" />
				{/if}
			</button>
		</div>
		<hr class="my-4 border-current opacity-10" />
		<div class="flex flex-row items-center justify-between gap-2">
			<p class="text-xl tracking-wide lowercase opacity-85">user id</p>
			<button
				onclick={() => handleCopy('id')}
				class="flex cursor-pointer items-center gap-2 rounded-md border border-border bg-muted/60 px-3 py-1 transition-opacity hover:opacity-90"
			>
				<span class="font-mono text-base opacity-85">{auth.user?.id}</span>
				{#if copied === 'id'}
					<Check class="size-3.5" />
				{:else}
					<Copy class="size-3.5" />
				{/if}
			</button>
		</div>
	</div>
</div>
