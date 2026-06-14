<script lang="ts">
	import { setAppContext, AppContext } from '$lib/contexts/app.context.svelte';
	import { getAuthContext } from '$lib/contexts/auth.context.svelte';
	import { goto } from '$app/navigation';
	import Sidebar from '$lib/components/app/Sidebar.svelte';
	import { resolve } from '$app/paths';
	import PWAUpdatePrompt from '$lib/components/app/PWAUpdatePrompt.svelte';
	import { useAutoLock } from '$lib/hooks/app/useAutoLock.svelte';

	let { children } = $props();

	const authContext = getAuthContext();
	const appContext = new AppContext();
	setAppContext(appContext);

	useAutoLock();

	$effect(() => {
		if (!authContext.isAuthenticated && !authContext.masterKey) {
			goto(resolve('/login'), { replaceState: true });
		}
	});

	const auth = getAuthContext();

	if (import.meta.env.DEV) {
		import('$lib/dev/seed').then(({ seedEntries }) => {
			const seedWindow = window as Window & { __seed?: (n?: number) => void };
			seedWindow.__seed = (n = 500) => seedEntries(auth.masterKey!, n);
		});
	}
</script>

<PWAUpdatePrompt />

{#if authContext.isAuthenticated}
	<div class="flex h-screen">
		<Sidebar />
		<main class="flex-1 overflow-auto">
			{@render children()}
		</main>
	</div>
{/if}
