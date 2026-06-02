<script lang="ts">
	import LoginForm from '$lib/components/login/LoginForm.svelte';
	import { useLogin } from '$lib/hooks/login/useLogin.svelte'; // Fíjate en la extensión .svelte.ts si usa runes adentro

	// Inicializamos la lógica del login
	const login = useLogin();

	// Si tu hook maneja la redirección mediante código (por ejemplo, con svelte-routing o el router de SvelteKit),
	// esto emula el guard de React.
	// En Svelte 5, usamos un efecto reactivo o un condicional en el HTML.
</script>

{#if login.username}
	<main class="flex min-h-screen items-center justify-center px-8 py-16">
		<div class="w-full max-w-2xl">
			<div class="rounded-xl border border-border bg-card shadow-lg lg:px-12 lg:py-8">
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
