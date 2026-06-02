import { createContext } from 'svelte';
import { type User } from '$lib/db';
import { getUser } from '$lib/db.utils';

class AuthState {
	user = $state<User | undefined>(undefined);
	masterKey = $state<CryptoKey | null>(null);
	isAuthenticated = $derived(this.masterKey !== null);

	constructor() {
		getUser().then((u) => (this.user = u));
	}

	logout = () => {
		this.masterKey = null;
	};
}

export const [getAuthContext, setAuthContext] = createContext<AuthState>();
