// src/lib/constants/features.ts
import Database from '@lucide/svelte/icons/database';
import Shield from '@lucide/svelte/icons/shield';
import CloudSync from '@lucide/svelte/icons/cloud-sync';
import EyeOff from '@lucide/svelte/icons/eye-off';
import Bird from '@lucide/svelte/icons/bird';
import PencilLine from '@lucide/svelte/icons/pencil-line';

export const features = [
	{
		icon: Shield,
		title: 'top-level security',
		text: 'your entries are encrypted and protected at all times.'
	},
	{
		icon: Database,
		title: 'local storage & offline-first',
		text: 'keep your journals safe on your own device.'
	},
	{
		icon: CloudSync,
		title: 'cloud sync (coming soon)',
		text: "soon you'll be able to access your thoughts anywhere."
	},
	{
		icon: EyeOff,
		title: '100% personal & private',
		text: 'your journal is for your eyes only.\nwe respect your privacy.'
	},
	{
		icon: Bird,
		title: 'designed for calm',
		text: 'a distraction-free interface to help you focus.'
	},
	{
		icon: PencilLine,
		title: 'write at your own pace',
		text: 'there are no deadlines or pressures. just you and your thoughts.'
	}
];
