import Database from '@lucide/svelte/icons/database';
import Shield from '@lucide/svelte/icons/shield';
import CloudSync from '@lucide/svelte/icons/cloud-sync';
import EyeOff from '@lucide/svelte/icons/eye-off';
import Bird from '@lucide/svelte/icons/bird';
import PencilLine from '@lucide/svelte/icons/pencil-line';
import { m } from '$lib/paraglide/messages';

export const features = [
	{
		icon: Shield,
		title: m['landing.features.1.title'](),
		text: m['landing.features.1.description']()
	},
	{
		icon: Database,
		title: m['landing.features.2.title'](),
		text: m['landing.features.2.description']()
	},
	{
		icon: CloudSync,
		title: m['landing.features.3.title'](),
		text: m['landing.features.3.description']()
	},
	{
		icon: EyeOff,
		title: m['landing.features.4.title'](),
		text: m['landing.features.4.description']()
	},
	{
		icon: Bird,
		title: m['landing.features.5.title'](),
		text: m['landing.features.5.description']()
	},
	{
		icon: PencilLine,
		title: m['landing.features.6.title'](),
		text: m['landing.features.6.description']()
	}
];
