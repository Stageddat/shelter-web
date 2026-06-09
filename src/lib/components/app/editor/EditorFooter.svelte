<script lang="ts">
	const {
		wordCount,
		charCount,
		date,
		time
	}: { wordCount: number; charCount: number; date?: string; time?: string } = $props();
</script>

<div>
	<div class="flex justify-between gap-4 px-3 font-mono text-sm text-muted-foreground">
		<!-- right -->
		<div class="flex">
			{#if date && time}
				<span>{date} {time}</span>
			{/if}
		</div>

		<!-- left -->
		<div class="flex justify-end gap-2">
			<span>{wordCount} {wordCount === 1 ? 'word' : 'words'}</span>
			<span> • </span>
			<span>{charCount} {charCount === 1 ? 'character' : 'characters'}</span>
		</div>
	</div>
</div>
