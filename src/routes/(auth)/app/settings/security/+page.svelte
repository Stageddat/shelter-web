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
</script>

<div class="flex flex-col gap-2 px-12 py-9">
	<!-- header -->
	<div>
		<h2 class="mb-0.5 flex text-left text-4xl font-semibold tracking-wide lowercase">security</h2>
		<h3 class="mb-6 flex text-left text-xl tracking-wide lowercase">change security behavior</h3>
	</div>
	<!-- security options -->
	<div class="mb-6">
		<h2 class="mb-2 text-2xl tracking-widest uppercase">options</h2>

		<!-- change password -->
		<div class="flex flex-row items-center justify-between gap-2">
			<div>
				<p class="text-xl tracking-wide lowercase opacity-85">change password</p>
			</div>
			<Dialog.Root bind:open={showChangePassword}>
				<form>
					<Dialog.Trigger
						type="button"
						class="{buttonVariants({
							variant: 'outline'
						})} h-10 gap-2 border-border/40 bg-secondary px-3 text-xl text-muted-foreground hover:text-foreground"
					>
						change my password
					</Dialog.Trigger>
					<Dialog.Content class="sm:max-w-106.25">
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
							<Dialog.Close type="button" class="text-lg! {buttonVariants({ variant: 'outline' })}">
								cancel
							</Dialog.Close>
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
			<p class="text-xl tracking-wide lowercase opacity-85">auto lock</p>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					{#snippet child({ props })}
						<Button
							{...props}
							variant="outline"
							class="h-10 gap-2 border-border/40 bg-secondary px-3 text-xl text-muted-foreground hover:text-foreground"
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
							<span class="w-4 text-muted-foreground">
								{#if selected === option.value}<Check />{/if}
							</span>
							{option.label}
						</DropdownMenu.Item>
					{/each}
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>

	<!-- info -->
	<div class="mb-6">
		<h2 class="mb-2 text-2xl tracking-widest uppercase">info</h2>

		<!-- derivation algorithm -->
		<div class="flex flex-row items-center justify-between gap-2">
			<p class="text-xl tracking-wide lowercase opacity-85">password derivation</p>
			<p class="text-lg text-foreground/85">PBKDF2 (SHA-256)</p>
		</div>
		<hr class="my-4 border-current opacity-10" />

		<!-- iterations -->
		<div class="mt-1 flex flex-row items-center justify-between gap-2">
			<p class="text-xl tracking-wide lowercase opacity-85">derivation iterations</p>
			<p class="text-lg text-foreground/85">600,000</p>
		</div>
		<hr class="my-4 border-current opacity-10" />

		<!-- salt size -->
		<div class="mt-1 flex flex-row items-center justify-between gap-2">
			<p class="text-xl tracking-wide lowercase opacity-85">salt size</p>
			<p class="text-lg text-foreground/85">16 bytes</p>
		</div>
		<hr class="my-4 border-current opacity-10" />

		<!-- main encryption algorithm -->
		<div class="flex flex-row items-center justify-between gap-2">
			<p class="text-xl tracking-wide lowercase opacity-85">encryption algorithm</p>
			<p class="text-lg text-foreground/85">AES-GCM (256 bits)</p>
		</div>
		<hr class="my-4 border-current opacity-10" />

		<!-- initialization vector size -->
		<div class="mt-1 flex flex-row items-center justify-between gap-2">
			<p class="text-xl tracking-wide lowercase opacity-85">initialization vector (iv)</p>
			<p class="text-lg text-foreground/85">12 bytes</p>
		</div>
		<hr class="my-4 border-current opacity-10" />

		<!-- encryption architecture -->
		<div class="mt-1 flex flex-row items-center justify-between gap-2">
			<p class="text-xl tracking-wide lowercase opacity-85">encryption architecture</p>
			<p class="text-lg text-foreground/85">hybrid (encrypted master key)</p>
		</div>
	</div>
</div>
