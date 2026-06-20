import { UserRound, ShieldCheck, NotebookPen, ArrowDownUp, Info } from '@lucide/svelte';

const settingsCategories = [
	{ id: 'general', desc: 'account, language, appearance', icon: UserRound },
	{ id: 'security', desc: 'password, autolock', icon: ShieldCheck },
	{ id: 'editor', desc: 'typography, shortcuts', icon: NotebookPen },
	{ id: 'data', desc: 'export, import, purge', icon: ArrowDownUp },
	{ id: 'about', desc: 'version, credits, license', icon: Info }
];

export default settingsCategories;
