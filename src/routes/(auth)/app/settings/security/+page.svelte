<script lang="ts">
	import { getAuthContext } from '$lib/contexts/auth.context.svelte';
	import { Check } from '@lucide/svelte';
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { changePassword } from '$lib/services/auth/changePassword.service';
	import { toast } from 'svelte-sonner';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';

	const auth = getAuthContext();

	// change password
	let oldPassword = $state('');
	let newPassword = $state('');
	let confirmPassword = $state('');
	let passwordError = $state('');
	let passwordLoading = $state(false);
	let showChangePassword = $state(false);
	// let passwordSuccess = $state(false);

	async function handleChangePassword() {
		passwordError = '';
		passwordLoading = true;
		// passwordSuccess = false;

		try {
			if (!auth.masterKey) throw new Error('not authenticated');
			await changePassword({
				oldPassword,
				newPassword,
				newPasswordConfirmation: confirmPassword,
				masterKey: auth.masterKey
			});
			// passwordSuccess = true;
			oldPassword = '';
			newPassword = '';
			confirmPassword = '';
			toast.success('password changed successfully');
			showChangePassword = false;
		} catch (err) {
			passwordError = err instanceof Error ? err.message : 'failed to change password';
		} finally {
			passwordLoading = false;
		}
	}

	// auto lock
	import { getAutoLockMinutes, setAutoLockMinutes } from '$lib/hooks/app/useAutoLock.svelte';

	const LOCK_OPTIONS = [
		{ label: 'never', value: 0 },
		{ label: '1 minute', value: 1 },
		{ label: '5 minutes', value: 5 },
		{ label: '15 minutes', value: 15 },
		{ label: '30 minutes', value: 30 },
		{ label: '1 hour', value: 60 }
	];

	let selected = $state(getAutoLockMinutes());

	function handleSelect(value: number) {
		selected = value;
		auth.autoLockMinutes = value;
		setAutoLockMinutes(value);
	}

	import {
		generateRecoveryFile,
		downloadRecoveryFile
	} from '$lib/services/auth/recoveryKey.service';
	import SettingsPageHeader from '$lib/components/app/SettingsPageHeader.svelte';

	let showRecoveryKey = $state(false);
	let recoveryPhrase = $state('');
	let recoveryLoading = $state(false);
	let recoveryStep = $state<'generate' | 'show'>('generate');

	async function handleGenerateKeyFile() {
		if (!auth.masterKey || !auth.user) return;
		recoveryLoading = true;
		try {
			const phrase = await generateRecoveryFile(auth.masterKey);
			downloadRecoveryFile(phrase, auth.user.username);
			recoveryPhrase = phrase;
			recoveryStep = 'show';
		} catch (err) {
			console.error(err);
			toast.error('failed to generate recovery key');
		} finally {
			recoveryLoading = false;
		}
	}

	function handleCloseRecovery() {
		showRecoveryKey = false;
		recoveryPhrase = '';
		recoveryStep = 'generate';
	}
</script>

<div class="flex flex-col gap-2 px-5 py-6 lg:px-12 lg:py-9">
	<SettingsPageHeader title="security" description="change security behavior" />

	<!-- security options -->
	<div class="mb-6">
		<h2 class="mb-2 text-xl tracking-widest uppercase lg:text-2xl">options</h2>

		<!-- change password -->
		<div class="flex flex-row items-center justify-between gap-2">
			<div>
				<p class="text-base tracking-wide lowercase opacity-85 lg:text-xl">change password</p>
				<p class="text-sm tracking-wide lowercase opacity-60">change your account password</p>
			</div>
			<Dialog.Root bind:open={showChangePassword}>
				<form>
					<Dialog.Trigger
						type="button"
						class="{buttonVariants({
							variant: 'outline'
						})} h-10 gap-2 border-border/40 bg-secondary px-3 text-base text-muted-foreground hover:text-foreground lg:text-xl"
					>
						change
					</Dialog.Trigger>
					<Dialog.Content class="w-[90vw] sm:max-w-106.25">
						<Dialog.Header class="gap-0.5!">
							<Dialog.Title class="text-2xl">change password</Dialog.Title>
							<Dialog.Description class="text-lg">
								make sure your new password is strong and secure :)
							</Dialog.Description>
						</Dialog.Header>
						<div class="grid gap-1">
							<div class="grid gap-1">
								<Label for="oldPassword" class="text-lg">old password</Label>
								<Input
									id="oldPassword"
									name="oldPassword"
									autocomplete="current-password"
									bind:value={oldPassword}
									class="text-lg"
									type="password"
								/>
							</div>
							<div class="grid gap-1">
								<Label for="newPassword" class="text-lg">new password</Label>
								<Input
									id="newPassword"
									name="newPassword"
									autocomplete="new-password"
									bind:value={newPassword}
									class="text-lg"
									type="password"
								/>
							</div>
							<div class="grid gap-1">
								<Label for="confirmPassword" class="text-lg">confirm password</Label>
								<Input
									id="confirmPassword"
									name="confirmPassword"
									autocomplete="new-password"
									bind:value={confirmPassword}
									class="text-lg"
									type="password"
								/>
							</div>
							{#if passwordError}
								<p class="text-sm text-destructive">{passwordError}</p>
							{/if}
						</div>
						<Dialog.Footer>
							<Dialog.Close type="button" class="text-lg! {buttonVariants({ variant: 'outline' })}"
								>cancel</Dialog.Close
							>
							<Button
								onclick={handleChangePassword}
								disabled={passwordLoading}
								type="submit"
								class="text-lg!"
							>
								{passwordLoading ? 'changing...' : 'change it!'}
							</Button>
						</Dialog.Footer>
					</Dialog.Content>
				</form>
			</Dialog.Root>
		</div>
		<hr class="my-4 border-current opacity-10" />

		<!-- auto lock -->
		<div class="flex flex-row items-center justify-between gap-2">
			<div>
				<p class="text-base tracking-wide lowercase opacity-85 lg:text-xl">auto lock</p>
				<p class="text-sm tracking-wide lowercase opacity-60">auto lock after inactivity</p>
			</div>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					{#snippet child({ props })}
						<Button
							{...props}
							variant="outline"
							class="h-10 gap-2 border-border/40 bg-secondary px-3 text-base text-muted-foreground hover:text-foreground lg:text-xl"
						>
							{LOCK_OPTIONS.find((o) => o.value === selected)?.label ?? '15 minutes'}
						</Button>
					{/snippet}
				</DropdownMenu.Trigger>
				<DropdownMenu.Content align="end">
					{#each LOCK_OPTIONS as option (option.value)}
						<DropdownMenu.Item
							onclick={() => handleSelect(option.value)}
							class="text-base tracking-wide"
						>
							<span class="w-4 text-muted-foreground"
								>{#if selected === option.value}<Check />{/if}</span
							>
							{option.label}
						</DropdownMenu.Item>
					{/each}
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
		<hr class="my-4 border-current opacity-10" />

		<!-- recovery key -->
		<div class="flex flex-row items-center justify-between gap-2">
			<div>
				<p class="text-base tracking-wide lowercase opacity-85 lg:text-xl">recovery key</p>
				<p class="text-sm tracking-wide lowercase opacity-60">
					generate a key file to recover your account
				</p>
			</div>
			<Dialog.Root
				bind:open={showRecoveryKey}
				onOpenChange={(o) => {
					if (!o) handleCloseRecovery();
				}}
			>
				<Dialog.Trigger
					class="{buttonVariants({
						variant: 'outline'
					})} h-10 gap-2 border-border/40 bg-secondary px-3 text-base text-muted-foreground hover:text-foreground lg:text-xl"
				>
					generate
				</Dialog.Trigger>
				<Dialog.Content class="w-[90vw] sm:max-w-lg">
					<Dialog.Header>
						<Dialog.Title class="text-2xl">recovery key</Dialog.Title>
						<Dialog.Description class="text-lg lg:text-xl">
							{#if recoveryStep === 'generate'}
								this will generate a <span class="font-mono">.key</span> file with your 12-word recovery
								phrase. keep it safe.
							{:else}
								your <span class="font-mono">.key</span> file has been downloaded. keep it somewhere safe.
							{/if}
						</Dialog.Description>
					</Dialog.Header>

					{#if recoveryStep === 'generate'}
						<p class="text-base tracking-wider text-destructive uppercase lg:text-lg">
							if you already have a recovery key, generating a new one will invalidate the old one.
						</p>
						<Dialog.Footer>
							<Dialog.Close class="text-lg! {buttonVariants({ variant: 'outline' })}"
								>cancel</Dialog.Close
							>
							<Button onclick={handleGenerateKeyFile} disabled={recoveryLoading} class="text-lg!">
								{recoveryLoading ? 'generating...' : 'generate & download'}
							</Button>
						</Dialog.Footer>
					{:else}
						<div class="rounded-lg border border-border/40 bg-secondary/60 p-4">
							<div class="grid grid-cols-3 gap-2">
								{#each recoveryPhrase.split(' ') as word, i (i)}
									<div class="flex items-center gap-2">
										<span class="text-sm text-foreground/85 opacity-60 select-none">{i + 1}.</span>
										<span class="font-mono text-base lg:text-lg">{word}</span>
									</div>
								{/each}
							</div>
						</div>
						<p class="text-base opacity-60 lg:text-xl">
							the .key file has been downloaded. store it separately from this phrase.
						</p>
						<Dialog.Footer>
							<Button onclick={handleCloseRecovery} class="text-lg!"
								>i've saved my recovery phrase</Button
							>
						</Dialog.Footer>
					{/if}
				</Dialog.Content>
			</Dialog.Root>
		</div>
	</div>

	<!-- info -->
	<div class="mb-6">
		<h2 class="mb-2 text-xl tracking-widest uppercase lg:text-2xl">info</h2>

		<!-- derivation algorithm -->
		<div class="flex flex-row items-center justify-between gap-2">
			<p class="text-base tracking-wide lowercase opacity-85 lg:text-xl">password derivation</p>
			<p class="text-sm text-foreground/85 lg:text-lg">PBKDF2 (SHA-256)</p>
		</div>
		<hr class="my-4 border-current opacity-10" />

		<!-- iterations -->
		<div class="flex flex-row items-center justify-between gap-2">
			<p class="text-base tracking-wide lowercase opacity-85 lg:text-xl">derivation iterations</p>
			<p class="text-sm text-foreground/85 lg:text-lg">600,000</p>
		</div>
		<hr class="my-4 border-current opacity-10" />

		<!-- salt size -->
		<div class="flex flex-row items-center justify-between gap-2">
			<p class="text-base tracking-wide lowercase opacity-85 lg:text-xl">salt size</p>
			<p class="text-sm text-foreground/85 lg:text-lg">16 bytes</p>
		</div>
		<hr class="my-4 border-current opacity-10" />

		<!-- main encryption algorithm -->
		<div class="flex flex-row items-center justify-between gap-2">
			<p class="text-base tracking-wide lowercase opacity-85 lg:text-xl">encryption algorithm</p>
			<p class="text-sm text-foreground/85 lg:text-lg">AES-GCM (256 bits)</p>
		</div>
		<hr class="my-4 border-current opacity-10" />

		<!-- initialization vector size -->
		<div class="flex flex-row items-center justify-between gap-2">
			<p class="text-base tracking-wide lowercase opacity-85 lg:text-xl">
				initialization vector (iv)
			</p>
			<p class="text-sm text-foreground/85 lg:text-lg">12 bytes</p>
		</div>
		<hr class="my-4 border-current opacity-10" />
		<!-- encryption architecture -->
		<div class="flex flex-row items-center justify-between gap-2">
			<p class="text-base tracking-wide lowercase opacity-85 lg:text-xl">encryption architecture</p>
			<p class="text-sm text-foreground/85 lg:text-lg">hybrid (encrypted master key)</p>
		</div>
	</div>
</div>
