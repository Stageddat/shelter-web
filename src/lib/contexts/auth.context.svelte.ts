import { createContext } from 'svelte';
import { type User } from '$lib/db';
import { getUser } from '$lib/services/app/db.service';

class AuthContext {
	user = $state<User | undefined>(undefined);
	masterKey = $state<CryptoKey | null>(null);
	isAuthenticated = $derived(this.masterKey !== null);

	constructor() {
		getUser().then((u) => (this.user = u));
	}

	logout = () => {
		this.masterKey = null;
		this.user = undefined;
	};
}

export const [getAuthContext, setAuthContext] = createContext<AuthContext>();
export { AuthContext };
