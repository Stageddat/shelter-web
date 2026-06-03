<script lang="ts">
	import { useSignup } from '$lib/hooks/signup/useSignup.svelte';
	import { formFields } from '$lib/constants/signup/formFields';
	import FormField from '$lib/components/signup/FormField.svelte';
	import { Button } from '$lib/components/ui/button';
	import { resolve } from '$app/paths';

	const signup = useSignup();
</script>

{#if signup.isChecking}
	<!-- add loading? -->
	<!-- <div class="flex min-h-screen items-center justify-center">
		<div class="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
	</div> -->
	<div></div>
{:else}
	<main class="flex min-h-screen items-center justify-center px-8 py-16">
		<div class="w-full max-w-2xl">
			<div class="rounded-xl border border-border bg-card shadow-lg lg:px-12 lg:py-8 lg:pb-4">
				<form onsubmit={signup.handleSubmit} class="space-y-6">
					<!-- header -->
					<h1 class="mb-8 text-4xl font-bold text-foreground lg:text-5xl">welcome to shelter!</h1>

					<!-- form -->
					<div class="space-y-4">
						{#each formFields as field (field.id)}
							<FormField
								{field}
								value={signup.formData[field.name]}
								onChange={signup.handleChange}
								disabled={signup.isLoading}
							/>
						{/each}
					</div>

					<!-- err -->
					{#if signup.error}
						<p class="text-sm font-medium text-destructive">{signup.error}</p>
					{/if}

					<!-- btn -->
					<Button
						type="submit"
						class="w-full bg-primary text-lg tracking-wide text-primary-foreground hover:bg-primary/85"
						size="lg"
						disabled={signup.isLoading}
					>
						{signup.isLoading ? 'creating your diary...' : 'create my diary'}
					</Button>
				</form>

				<p class="text-md mt-4 text-center text-muted-foreground">
					already have a diary?
					<a
						class="text-primary-dark font-medium underline transition-colors hover:text-primary"
						href={resolve('/restore')}
					>
						restore
					</a>
				</p>
			</div>
		</div>
	</main>
{/if}
