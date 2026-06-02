import { type RegisterInput } from '$lib/schemas/register.schema';
import User from '@lucide/svelte/icons/user';
import Info from '@lucide/svelte/icons/info';
import Lock from '@lucide/svelte/icons/lock';
import { type LucideIcon } from '@lucide/svelte';

export interface FormFieldConfig {
	id: keyof RegisterInput;
	name: string;
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
		name: 'password',
		label: 'choose a password',
		type: 'password',
		placeholder: 'set a password',
		icon: Lock
	},
	{
		id: 'password2',
		name: 'password2',
		label: 'repeat password',
		type: 'password',
		placeholder: 'repeat the password',
		icon: Lock
	}
];
