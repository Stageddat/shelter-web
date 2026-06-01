<script lang="ts">
	const {
		href,
		external = false,
		children
	} = $props<{
		href: string;
		external?: boolean;
		children?: any;
	}>();
</script>

<a
	{href}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener noreferrer' : undefined}
	class="text-sm text-muted-foreground transition-colors duration-200 ease-in-out hover:text-primary"
>
	{@render children?.()}
</a>
