<script lang="ts">
	import * as Chart from '$lib/components/ui/chart/index.js';
	import { BarChart } from 'layerchart';
	import { scaleBand } from 'd3-scale';
	import { getAppContext } from '$lib/contexts/app.context.svelte';
	import { SvelteDate } from 'svelte/reactivity';

	const appContext = getAppContext();

	let { class: className = '' } = $props();

	const chartConfig = {
		entries: {
			label: 'entries',
			color: 'var(--primary)'
		}
	} satisfies Chart.ChartConfig;

	const chartData = $derived.by(() => {
		const last7Days = Array.from({ length: 7 }, (_, i) => {
			const d = new SvelteDate();
			d.setDate(d.getDate() - (6 - i));
			return d.toLocaleDateString('sv'); // YYYY-MM-DD
		});

		const countByDate = Object.fromEntries(last7Days.map((d) => [d, 0]));

		for (const entry of appContext.entries) {
			if (entry.date in countByDate) {
				countByDate[entry.date]++;
			}
		}

		return last7Days.map((date) => ({
			day: new Date(date).toLocaleDateString('en', { weekday: 'short' }).toLowerCase(), // solo "Mon"
			fullDate: new Date(date)
				.toLocaleDateString('en', {
					weekday: 'long',
					month: 'short',
					day: 'numeric'
				})
				.toLocaleLowerCase(),
			entries: countByDate[date]
		}));
	});
</script>

<Chart.Container config={chartConfig} class="h-32 w-full {className}">
	<BarChart
		data={chartData}
		xScale={scaleBand().padding(0.3)}
		x="day"
		y="entries"
		axis={true}
		series={[{ key: 'entries', label: 'entries', color: 'var(--primary)' }]}
		props={{
			xAxis: { format: (d) => d },
			bars: { radius: 4 }
		}}
	>
		{#snippet tooltip()}
			<Chart.Tooltip
				hideLabel={false}
				indicator="line"
				class="text-xl tracking-wide"
				labelFormatter={(value) => {
					const found = chartData.find((d) => d.day === value);
					return found?.fullDate ?? String(value);
				}}
			/>
		{/snippet}
	</BarChart>
</Chart.Container>
