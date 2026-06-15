import { type RegisterInput } from '$lib/schemas/register.schema';
import User from '@lucide/svelte/icons/user';
import Info from '@lucide/svelte/icons/info';
import Lock from '@lucide/svelte/icons/lock';
import { type LucideIcon } from '@lucide/svelte';
import type { HTMLInputAttributes } from 'svelte/elements';

export interface FormFieldConfig {
	id: keyof RegisterInput;
	autocomplete?: HTMLInputAttributes['autocomplete'];
	name: keyof RegisterInput;
	label: string;
	type: string;
	placeholder?: string;
	icon: LucideIcon;
	tooltipIcon?: LucideIcon;
	tooltipContent?: string;
}

export const formFields: FormFieldConfig[] = [
	{
		id: 'username',
		autocomplete: 'username',
		name: 'username',
		label: 'what should we call you?',
		type: 'text',
		placeholder: 'enter your name',
		icon: User,
		tooltipIcon: Info,
		tooltipContent:
			"this is how we will call you across the app, you don't have to use your real name"
	},
	{
		id: 'password',
		autocomplete: 'new-password',
		name: 'password',
		label: 'choose a password',
		type: 'password',
		placeholder: 'set a password',
		icon: Lock
	},
	{
		id: 'password2',
		autocomplete: 'new-password',
		name: 'password2',
		label: 'repeat password',
		type: 'password',
		placeholder: 'repeat the password',
		icon: Lock
	}
];
