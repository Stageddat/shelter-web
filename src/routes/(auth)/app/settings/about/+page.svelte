<script lang="ts">
	import packageJson from '$lib/../../package.json';
	import { Bug, Coffee, Globe, HouseHeart, Users } from '@lucide/svelte';
</script>

<div class="flex flex-col gap-2 px-12 py-9">
	<!-- header -->
	<div>
		<h2 class="mb-0.5 flex text-left text-4xl font-semibold tracking-wide lowercase">about</h2>
		<h3 class="mb-6 flex text-left text-xl tracking-wide lowercase">
			information about this project
		</h3>
	</div>

	<!-- project description -->
	<div class="my-4 flex flex-col gap-2">
		<p class="text-2xl tracking-widest uppercase">what is shelter?</p>
		<p class="text-left text-xl tracking-wide lowercase opacity-85">
			shelter is a secure, open-source web-based journal designed with privacy and end-to-end<br />
			encryption. your data stays yours, stored directly in your browser.
		</p>
	</div>

	<hr class="border-current opacity-10" />

	<!-- project info -->
	<div class="my-4 flex flex-col gap-2">
		<p class="text-2xl tracking-widest uppercase">shelter info</p>
		<p class="text-left text-xl tracking-wide lowercase">
			version:
			<span class="opacity-60">{packageJson.version}</span>
		</p>
		<p class="text-left text-xl tracking-wide lowercase">
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
		<p class="text-left text-xl tracking-wide lowercase">
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
		<p class="text-left text-xl tracking-wide lowercase">
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
		<p class="text-left text-xl tracking-wide lowercase">
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
		<p class="text-2xl tracking-widest uppercase">credits</p>
		<p class="text-left text-xl tracking-wide lowercase opacity-85">
			this project is made possible by an amazing community of developers, artists, illustrators,
			graphic designers, musicians, testers, translators, and way too much caffeine. i'm truly
			grateful for all your support!
		</p>
		<a
			href="/credits"
			class="flex w-full items-center justify-between rounded-lg border border-current px-4 py-2 text-xl tracking-wider lowercase opacity-60 transition-opacity hover:opacity-100"
			target="_blank"
		>
			see all credits
			<Users class="h-5! w-5!" />
		</a>
	</div>

	<hr class="border-current opacity-10" />

	<!-- links -->
	<div class="my-4 gap-2">
		<p class="mb-3 text-2xl tracking-widest uppercase">links</p>
		<div class="flex flex-row gap-3">
			<a
				href="https://github.com/Stageddat/shelter-web/issues"
				class="flex w-full items-center rounded-lg border border-current px-4 py-2 text-xl lowercase opacity-60 transition-opacity hover:opacity-100"
				target="_blank"
			>
				<Bug class="mt-1 mr-2 h-5! w-5!" />
				report a bug
			</a>
			<a
				href="https://discord.gg/BntK5GbF2M"
				class="flex w-full items-center rounded-lg border border-current px-4 py-2 text-xl lowercase opacity-60 transition-opacity hover:opacity-100"
				target="_blank"
			>
				<HouseHeart class="mt-1 mr-2 h-5! w-5!" />
				discord
			</a>
			<a
				href="https://ko-fi.com/stageddat"
				class="flex w-full items-center rounded-lg border border-current px-4 py-2 text-xl lowercase opacity-60 transition-opacity hover:opacity-100"
				target="_blank"
			>
				<Coffee class="mt-1 mr-2 h-5! w-5!" />
				support on ko-fi
			</a>
			<a
				href="https://github.com/Stageddat/shelter-web/blob/main/CONTRIBUTING.md"
				class="flex w-full items-center rounded-lg border border-current px-4 py-2 text-xl lowercase opacity-60 transition-opacity hover:opacity-100"
				target="_blank"
			>
				<Globe class="mt-1 mr-2 h-5! w-5!" />
				help translate
			</a>
		</div>
	</div>
</div>
