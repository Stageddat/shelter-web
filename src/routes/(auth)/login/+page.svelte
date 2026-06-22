<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Label } from '$lib/components/ui/label';
	import { InputGroup, InputGroupAddon, InputGroupInput } from '$lib/components/ui/input-group';
	import Lock from '@lucide/svelte/icons/lock';
	import LoadingText from '$lib/components/shared/LoadingText.svelte';
	import { m } from '$lib/paraglide/messages';
	import { useLogin } from '$lib/hooks/login/useLogin.svelte';

	const login = useLogin();

	function onFormSubmit(e: SubmitEvent) {
		e.preventDefault();
		login.handleSubmit();
	}
</script>

<svelte:head>
	<title>{m['metadata.login.title']()}</title>
</svelte:head>

{#if login.username}
	<main class="flex min-h-screen items-center justify-center px-2 py-4 md:px-8 md:py-16">
		<div class="w-full max-w-2xl">
			<div class="rounded-xl border bg-card px-4 py-3 shadow-lg md:px-8 md:py-6">
				<form onsubmit={onFormSubmit} class="space-y-6">
					<h1 class="mb-2 text-3xl font-bold tracking-wide text-foreground lg:text-5xl">
						{m['login.title']({ username: login.username })}
					</h1>

					<div class="space-y-2 {login.error ? 'mb-2' : 'mb-4'}">
						<Label class="mb-0.5 text-xl" for="password">{m['login.password.label']()}</Label>
						<InputGroup>
							<InputGroupInput
								type="password"
								id="password"
								name="password"
								autocomplete="current-password"
								value={login.password}
								oninput={login.handleChange}
								placeholder={m['login.password.placeholder']()}
								class="text-xl!"
								required
								disabled={login.isLoading}
							/>
							<InputGroupAddon>
								<Lock />
							</InputGroupAddon>
						</InputGroup>
					</div>

					{#if login.error}
						<p class="mb-2 text-sm font-medium text-destructive">{login.error}</p>
					{/if}

					<Button
						type="submit"
						class="w-full bg-primary text-lg tracking-wider text-primary-foreground hover:bg-primary/85"
						size="lg"
						disabled={login.isLoading}
					>
						{#if login.isLoading}
							<LoadingText text={m['login.button.loading']()} />
						{:else}
							{m['login.button.default']()}
						{/if}
					</Button>
				</form>
			</div>
		</div>
	</main>
{/if}
