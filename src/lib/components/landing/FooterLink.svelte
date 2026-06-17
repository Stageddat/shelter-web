<script lang="ts">
	import type { Snippet } from 'svelte';

	const {
		href,
		external = false,
		children
	} = $props<{
		href: string;
		external?: boolean;
		children?: Snippet;
	}>();
</script>

<a
	{href}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener noreferrer' : undefined}
	class="text-base tracking-wide text-muted-foreground transition-colors duration-200 ease-in-out hover:text-primary"
>
	{@render children?.()}
</a>
