<script lang="ts">
	import LoginForm from '$lib/components/login/LoginForm.svelte';
	import { useLogin } from '$lib/hooks/login/useLogin.svelte';

	const login = useLogin();
</script>

{#if login.username}
	<main class="flex min-h-screen items-center justify-center px-8 py-16">
		<div class="w-full max-w-2xl">
			<div class="rounded-xl border bg-card px-4 py-3 shadow-lg md:px-8 md:py-6 lg:px-12 lg:py-8">
				<LoginForm
					username={login.username}
					password={login.password}
					handleChange={login.handleChange}
					handleSubmit={login.handleSubmit}
					isLoading={login.isLoading}
					error={login.error}
				/>
			</div>
		</div>
	</main>
{/if}
