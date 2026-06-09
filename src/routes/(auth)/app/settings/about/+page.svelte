<script lang="ts">
	import packageJson from '$lib/../../package.json';
</script>

<div class="flex flex-col gap-2 px-12 py-9">
	<!-- header -->
	<div>
		<h2 class="mb-0.5 flex text-left text-4xl font-semibold tracking-wide lowercase">about</h2>
		<h3 class="mb-6 flex text-left text-xl tracking-wide lowercase">
			project and profile information
		</h3>
	</div>

	<!-- project info -->
	<div class="mb-6">
		<h2 class="mb-1 flex text-left text-3xl font-semibold tracking-wider lowercase">shelter</h2>
		<p class="mb-0 text-left text-xl tracking-wide lowercase opacity-70">
			shelter is a secure, open-source web-based journal designed with privacy and end-to-end<br />
			encryption. your data stays yours, stored directly in your browser.
		</p>
	</div>

	<hr class="border-current opacity-10" />

	<!-- project links -->
	<div class="my-4 flex flex-col gap-1">
		<p class="mb-2 text-2xl tracking-widest uppercase opacity-75">project info</p>
		<p class="text-left text-xl tracking-wide lowercase">
			version:
			<span class="opacity-50">{packageJson.version}</span>
		</p>
		<p class="text-left text-xl tracking-wide lowercase">
			source:
			<a
				href="https://github.com/Stageddat/shelter-web"
				target="_blank"
				rel="noopener noreferrer"
				class="underline underline-offset-2 opacity-50 transition-opacity hover:opacity-100"
			>
				github.com/Stageddat/shelter-web
			</a>
		</p>
		<p class="text-left text-xl tracking-wide lowercase">
			website:
			<a
				href="https://shelter.cat"
				target="_blank"
				rel="noopener noreferrer"
				class="underline underline-offset-2 opacity-50 transition-opacity hover:opacity-100"
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
				class="underline underline-offset-2 opacity-50 transition-opacity hover:opacity-100"
			>
				agpl-3.0
			</a>
		</p>
		<p class="text-left text-xl tracking-wide lowercase">
			translations:
			<a
				href="https://i18n.stageddat.dev/projects/shelter-web/"
				target="_blank"
				rel="noopener noreferrer"
				class="underline underline-offset-2 opacity-50 transition-opacity hover:opacity-100"
			>
				see translations progress
			</a>
		</p>
	</div>

	<hr class="border-current opacity-10" />

	<!-- credits -->
	<!-- <div class="my-4 flex flex-col gap-3">
		<p class="mb-1 text-xs tracking-widest uppercase opacity-40">credits</p>
	</div> -->

	<!-- <hr class="border-current opacity-10" /> -->

	<!-- links -->
	<div class="my-4">
		<p class="mb-3 text-2xl tracking-widest uppercase opacity-75">links</p>
		<div class="flex flex-row gap-3">
			<a
				href="https://github.com/Stageddat/shelter-web/issues"
				class="w-full rounded-lg border border-current px-4 py-2 text-xl lowercase opacity-60 transition-opacity hover:opacity-100"
			>
				report a bug
			</a>
			<a
				href="https://ko-fi.com/stageddat"
				class="w-full rounded-lg border border-current px-4 py-2 text-xl lowercase opacity-60 transition-opacity hover:opacity-100"
			>
				support on ko-fi
			</a>
			<a
				href="https://github.com/Stageddat/shelter-web/blob/main/CONTRIBUTING.md"
				class="w-full rounded-lg border border-current px-4 py-2 text-xl lowercase opacity-60 transition-opacity hover:opacity-100"
			>
				help translate
			</a>
		</div>
	</div>
</div>
