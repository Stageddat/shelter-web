<script lang="ts">
	import packageJson from '$lib/../../package.json';
	import SettingsPageHeader from '$lib/components/app/SettingsPageHeader.svelte';
	import { Bug, Coffee, Globe, HouseHeart, Users } from '@lucide/svelte';
</script>

<div class="flex flex-col gap-2 px-5 py-6 lg:px-12 lg:py-9">
	<!-- header -->
	<SettingsPageHeader title="about" description="information about this project" />
	<!-- project description -->
	<div class="my-4 flex flex-col gap-2">
		<p class="text-xl tracking-widest uppercase lg:text-2xl">what is shelter?</p>
		<p class="text-base tracking-wide lowercase opacity-85 lg:text-xl">
			shelter is a secure, open-source web-based journal designed with privacy and end-to-end
			encryption. your data stays yours, stored directly in your browser.
		</p>
	</div>

	<hr class="border-current opacity-10" />

	<!-- project info -->
	<div class="my-4 flex flex-col gap-2">
		<p class="text-xl tracking-widest uppercase lg:text-2xl">shelter info</p>
		<p class="text-base tracking-wide lowercase lg:text-xl">
			version: <span class="opacity-60">{packageJson.version}</span>
		</p>
		<p class="text-base tracking-wide lowercase lg:text-xl">
			source:
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
			website:
			<a
				href="/"
				target="_blank"
				rel="noopener noreferrer"
				class="underline underline-offset-2 opacity-60 transition-opacity hover:opacity-100"
			>
				shelter.cat
			</a>
		</p>
		<p class="text-base tracking-wide lowercase lg:text-xl">
			license:
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
			translations:
			<a
				href="https://i18n.stageddat.dev/projects/shelter-web/"
				target="_blank"
				rel="noopener noreferrer"
				class="underline underline-offset-2 opacity-60 transition-opacity hover:opacity-100"
			>
				see translations progress
			</a>
		</p>
	</div>

	<hr class="border-current opacity-10" />

	<!-- credits -->
	<div class="my-4 flex flex-col gap-2">
		<p class="text-xl tracking-widest uppercase lg:text-2xl">credits</p>
		<p class="text-base tracking-wide lowercase opacity-85 lg:text-xl">
			this project is made possible by an amazing community of developers, artists, illustrators,
			graphic designers, musicians, testers, translators, and way too much caffeine. i'm truly
			grateful for all your support!
		</p>
		<a
			href="/credits"
			class="flex w-full items-center justify-between rounded-lg border border-current px-4 py-2 text-base tracking-wider lowercase opacity-60 transition-opacity hover:opacity-100 lg:text-xl"
			target="_blank"
		>
			see all credits
			<Users class="h-5! w-5!" />
		</a>
	</div>

	<hr class="border-current opacity-10" />

	<!-- links -->
	<div class="my-4 gap-2">
		<p class="mb-3 text-xl tracking-widest uppercase lg:text-2xl">links</p>
		<div class="grid grid-cols-2 gap-3 lg:flex lg:flex-row">
			<a
				href="https://github.com/Stageddat/shelter-web/issues"
				class="flex items-center rounded-lg border border-current px-4 py-2 text-base lowercase opacity-60 transition-opacity hover:opacity-100 lg:text-xl"
				target="_blank"
			>
				<Bug class="mt-1 mr-2 h-5! w-5!" />
				report a bug
			</a>
			<a
				href="https://discord.gg/BntK5GbF2M"
				class="flex items-center rounded-lg border border-current px-4 py-2 text-base lowercase opacity-60 transition-opacity hover:opacity-100 lg:text-xl"
				target="_blank"
			>
				<HouseHeart class="mt-1 mr-2 h-5! w-5!" />
				discord server
			</a>
			<a
				href="https://ko-fi.com/stageddat"
				class="flex items-center rounded-lg border border-current px-4 py-2 text-base lowercase opacity-60 transition-opacity hover:opacity-100 lg:text-xl"
				target="_blank"
			>
				<Coffee class="mt-1 mr-2 h-5! w-5!" />
				support on ko-fi
			</a>
			<a
				href="https://github.com/Stageddat/shelter-web/blob/main/CONTRIBUTING.md"
				class="flex items-center rounded-lg border border-current px-4 py-2 text-base lowercase opacity-60 transition-opacity hover:opacity-100 lg:text-xl"
				target="_blank"
			>
				<Globe class="mt-1 mr-2 h-5! w-5!" />
				help translate
			</a>
		</div>
	</div>
</div>
