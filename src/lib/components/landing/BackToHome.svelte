<script>
	import { resolve } from '$app/paths';
	import { localizeHref } from '$lib/paraglide/runtime';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
</script>

<a
	href={localizeHref(resolve('/'))}
	class="text-primary-dark flex flex-row items-center underline-offset-4 hover:underline"
>
	<ArrowLeft class="mr-2 h-4 w-4" />
	go back to home
</a>
