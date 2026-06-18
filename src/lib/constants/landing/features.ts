import Database from '@lucide/svelte/icons/database';
import CloudSync from '@lucide/svelte/icons/cloud-sync';
import Bird from '@lucide/svelte/icons/bird';
import { m } from '$lib/paraglide/messages';

export const features = [
	{
		icon: Database,
		title: m['landing.features.1.title'](),
		text: m['landing.features.1.description']()
	},
	{
		icon: CloudSync,
		title: m['landing.features.2.title'](),
		text: m['landing.features.2.description']()
	},
	{
		icon: Bird,
		title: m['landing.features.3.title'](),
		text: m['landing.features.3.description']()
	}
];
