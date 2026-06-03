<script lang="ts">
	const { entriesCount } = $props();
</script>

<div class="mb-6">
	<h1 class="mb-0 text-left text-7xl font-bold tracking-wide lowercase">entries</h1>
	<p class="ml-1 text-lg text-muted-foreground">
		{entriesCount}
		{entriesCount === 1 ? 'entry' : 'entries'}
	</p>
</div>
