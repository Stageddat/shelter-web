<script lang="ts">
	let { text = 'loading' } = $props();
</script>

<span class="dots text-muted-foreground">{text}</span>

<style>
	.dots::after {
		content: '';
		display: inline-block;
		width: 1.5ch;
		text-align: left;
		animation: dots 1.4s steps(4, end) infinite;
	}

	@keyframes dots {
		0% {
			content: '';
		}
		25% {
			content: '.';
		}
		50% {
			content: '..';
		}
		75% {
			content: '...';
		}
		100% {
			content: '';
		}
	}
</style>
