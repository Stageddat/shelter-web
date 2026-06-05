<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Label } from '$lib/components/ui/label';
	import { InputGroup, InputGroupAddon, InputGroupInput } from '$lib/components/ui/input-group';
	import Lock from '@lucide/svelte/icons/lock';
	import LoadingText from '../shared/LoadingText.svelte';
	import { m } from '$lib/paraglide/messages';

	let {
		username,
		password = $bindable(),
		handleChange,
		handleSubmit,
		isLoading,
		error
	}: {
		username: string;
		password: string;
		handleChange: (e: Event & { currentTarget: HTMLInputElement }) => void;
		handleSubmit: (e: SubmitEvent) => void;
		isLoading: boolean;
		error: string;
	} = $props();

	function onFormSubmit(e: SubmitEvent) {
		e.preventDefault();
		handleSubmit(e);
	}
</script>

<form onsubmit={onFormSubmit} class="space-y-6">
	<h1 class="mb-2 text-4xl font-bold tracking-wide text-foreground lg:text-5xl">
		{m.login_title({ username })}
	</h1>

	<div class="space-y-2 {error ? 'mb-2' : 'mb-4'}">
		<Label class="mb-0.5 text-xl" for="password">{m.login_password_label()}</Label>
		<InputGroup>
			<InputGroupInput
				type="password"
				id="password"
				name="password"
				value={password}
				oninput={handleChange}
				placeholder={m.login_password_placeholder()}
				class="text-xl!"
				required
				disabled={isLoading}
			/>
			<InputGroupAddon>
				<Lock />
			</InputGroupAddon>
		</InputGroup>
	</div>

	{#if error}
		<p class="mb-2 text-sm font-medium text-destructive">{error}</p>
	{/if}

	<Button
		type="submit"
		class="w-full bg-primary text-lg tracking-wider text-primary-foreground hover:bg-primary/85"
		size="lg"
		disabled={isLoading}
	>
		{#if isLoading}
			<LoadingText text={m.login_button_loading()} />
		{:else}
			{m.login_button()}
		{/if}
	</Button>
</form>
