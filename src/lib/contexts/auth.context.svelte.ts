import { createContext } from 'svelte';
import { type User } from '$lib/db';
import { getAutoLockMinutes } from '$lib/hooks/app/useAutoLock.svelte';

class AuthContext {
	user = $state<User | undefined>(undefined);
	masterKey = $state<CryptoKey | null>(null);
	isAuthenticated = $derived(this.masterKey !== null);
	autoLockMinutes = $state(getAutoLockMinutes());

	logout = () => {
		this.masterKey = null;
		this.user = undefined;
	};
}

export const [getAuthContext, setAuthContext] = createContext<AuthContext>();
export { AuthContext };
