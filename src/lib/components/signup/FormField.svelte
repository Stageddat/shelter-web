<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import {
		InputGroup,
		InputGroupAddon,
		InputGroupButton,
		InputGroupInput
	} from '$lib/components/ui/input-group';
	import {
		Tooltip,
		TooltipContent,
		TooltipTrigger,
		TooltipProvider
	} from '$lib/components/ui/tooltip';
	import { type FormFieldConfig } from '$lib/constants/signup/formFields';

	interface FormFieldProps {
		field: FormFieldConfig;
		value: string;
		onChange: (e: Event & { currentTarget: HTMLInputElement }) => void;
		disabled?: boolean;
	}

	let { field, value, onChange, disabled = false }: FormFieldProps = $props();

	const Icon = $derived(field.icon);
	const TooltipIcon = $derived(field.tooltipIcon);
</script>

<div class="space-y-2">
	<Label class="text-xl" for={String(field.id)}>
		{field.label}
	</Label>

	<InputGroup class="h-12!">
		<InputGroupInput
			type={field.type}
			autocomplete={field.autocomplete}
			id={String(field.id)}
			name={String(field.name)}
			value={value ?? ''}
			oninput={onChange}
			placeholder={field.placeholder}
			class="text-lg!"
			required
			{disabled}
		/>

		<InputGroupAddon>
			{#if Icon}
				<Icon />
			{/if}
		</InputGroupAddon>

		{#if TooltipIcon && field.tooltipContent}
			<InputGroupAddon align="inline-end">
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							{#snippet child({ props })}
								<InputGroupButton {...props} class="rounded-full" size="icon-sm">
									<TooltipIcon />
								</InputGroupButton>
							{/snippet}
						</TooltipTrigger>

						<TooltipContent>
							{#each field.tooltipContent.split('\n') as line, i (i)}
								<span>
									{line}
									{#if i < field.tooltipContent.split('\n').length - 1}
										<br />
									{/if}
								</span>
							{/each}
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</InputGroupAddon>
		{/if}
	</InputGroup>
</div>
