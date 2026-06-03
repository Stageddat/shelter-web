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
		title: m.landing_features_1_title(),
		text: m.landing_features_1_description()
	},
	{
		icon: Database,
		title: m.landing_features_2_title(),
		text: m.landing_features_2_description()
	},
	{
		icon: CloudSync,
		title: m.landing_features_3_title(),
		text: m.landing_features_3_description()
	},
	{
		icon: EyeOff,
		title: m.landing_features_4_title(),
		text: m.landing_features_4_description()
	},
	{
		icon: Bird,
		title: m.landing_features_5_title(),
		text: m.landing_features_5_description()
	},
	{
		icon: PencilLine,
		title: m.landing_features_6_title(),
		text: m.landing_features_6_description()
	}
];
