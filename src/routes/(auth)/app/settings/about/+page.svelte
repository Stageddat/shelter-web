<script lang="ts">
	import packageJson from '$lib/../../package.json';
	import SettingsPageHeader from '$lib/components/app/SettingsPageHeader.svelte';
	import { m } from '$lib/paraglide/messages';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { Bug, Coffee, Globe, HouseHeart, Users } from '@lucide/svelte';
</script>

<div class="flex flex-col gap-2 px-5 py-6 lg:px-12 lg:py-9">
	<!-- header -->
	<SettingsPageHeader
		title={m['app.settings.about.title']()}
		description={m['app.settings.about.description']()}
	/>

	<!-- project description -->
	<div class="my-4 flex flex-col gap-2">
		<p class="tracking-widets text-xl uppercase lg:text-2xl">
			{m['app.settings.about.whatIs.title']()}
		</p>
		<p class="text-base tracking-wide lowercase opacity-85 lg:text-xl">
			{m['app.settings.about.whatIs.description']()}
		</p>
	</div>

	<hr class="border-current opacity-10" />

	<!-- project info -->
	<div class="my-4 flex flex-col gap-2">
		<p class="tracking-widets text-xl uppercase lg:text-2xl">
			{m['app.settings.about.info.title']()}
		</p>
		<p class="text-base tracking-wide lowercase lg:text-xl">
			{m['app.settings.about.info.version']()} <span class="opacity-60">{packageJson.version}</span>
		</p>
		<p class="text-base tracking-wide lowercase lg:text-xl">
			{m['app.settings.about.info.source']()}
			<a
				href="https://github.com/Stageddat/shelter-web"
				target="_blank"
				rel="noopener noreferrer"
				class="underline underline-offset-2 opacity-60 transition-opacity hover:opacity-100"
			>
				github.com/Stageddat/shelter-web
			</a>
		</p>
		<p class="text-base tracking-wide lowercase lg:text-xl">
			{m['app.settings.about.info.website']()}
			<a
				href={localizeHref('/')}
				target="_blank"
				rel="noopener noreferrer"
				class="underline underline-offset-2 opacity-60 transition-opacity hover:opacity-100"
			>
				shelter.cat
			</a>
		</p>
		<p class="text-base tracking-wide lg:text-xl">
			{m['app.settings.about.info.license']()}
			<a
				href="https://github.com/Stageddat/shelter-web/blob/main/LICENSE"
				target="_blank"
				rel="noopener noreferrer"
				class="underline underline-offset-2 opacity-60 transition-opacity hover:opacity-100"
			>
				GNU AFFERO GENERAL PUBLIC LICENSE v3.0
			</a>
		</p>
		<p class="text-base tracking-wide lowercase lg:text-xl">
			{m['app.settings.about.info.translations']()}
			<a
				href="https://i18n.stageddat.dev/projects/shelter-web/"
				target="_blank"
				rel="noopener noreferrer"
				class="underline underline-offset-2 opacity-60 transition-opacity hover:opacity-100"
			>
				{m['app.settings.about.info.translationsLink']()}
			</a>
		</p>
	</div>

	<hr class="border-current opacity-10" />

	<!-- credits -->
	<div class="my-4 flex flex-col gap-2">
		<p class="tracking-widets text-xl uppercase lg:text-2xl">
			{m['app.settings.about.credits.title']()}
		</p>
		<p class="text-base tracking-wide lowercase opacity-85 lg:text-xl">
			{m['app.settings.about.credits.description']()}
		</p>
		<a
			href={localizeHref('/credits')}
			target="_blank"
			class="flex w-full items-center justify-between rounded-lg border border-current px-4 py-2 text-base tracking-wider lowercase opacity-60 transition-opacity hover:opacity-100 lg:text-xl"
		>
			{m['app.settings.about.credits.seeAll']()}
			<Users class="h-5! w-5!" />
		</a>
	</div>

	<hr class="border-current opacity-10" />

	<!-- links -->
	<div class="my-4 gap-2">
		<p class="tracking-widets mb-3 text-xl uppercase lg:text-2xl">
			{m['app.settings.about.links.title']()}
		</p>
		<div class="grid grid-cols-2 gap-3 lg:flex lg:flex-row">
			<a
				href="https://github.com/Stageddat/shelter-web/issues"
				target="_blank"
				class="flex items-center rounded-lg border border-current px-4 py-2 text-base lowercase opacity-60 transition-opacity hover:opacity-100 lg:text-xl"
			>
				<Bug class="mt-1 mr-2 h-5! w-5!" />{m['app.settings.about.links.reportBug']()}
			</a>
			<a
				href="https://discord.gg/BntK5GbF2M"
				target="_blank"
				class="flex items-center rounded-lg border border-current px-4 py-2 text-base lowercase opacity-60 transition-opacity hover:opacity-100 lg:text-xl"
			>
				<HouseHeart class="mt-1 mr-2 h-5! w-5!" />{m['app.settings.about.links.discord']()}
			</a>
			<a
				href="https://ko-fi.com/stageddat"
				target="_blank"
				class="flex items-center rounded-lg border border-current px-4 py-2 text-base lowercase opacity-60 transition-opacity hover:opacity-100 lg:text-xl"
			>
				<Coffee class="mt-1 mr-2 h-5! w-5!" />{m['app.settings.about.links.kofi']()}
			</a>
			<a
				href="https://github.com/Stageddat/shelter-web/blob/main/CONTRIBUTING.md"
				target="_blank"
				class="flex items-center rounded-lg border border-current px-4 py-2 text-base lowercase opacity-60 transition-opacity hover:opacity-100 lg:text-xl"
			>
				<Globe class="mt-1 mr-2 h-5! w-5!" />{m['app.settings.about.links.translate']()}
			</a>
		</div>
	</div>
</div>
