import { goto } from '$app/navigation';
import { resolve } from '$app/paths';
import { getAuthContext } from '$lib/contexts/auth.context.svelte';
import { getUser } from '$lib/services/app/db.service';
import { login } from '$lib/services/auth/login.service';

export function useLogin() {
	const auth = getAuthContext();
	let password = $state('');
	let username = $state<string | null>(null);
	let isLoading = $state(false);
	let error = $state('');

	$effect(() => {
		async function fetchUser() {
			try {
				const user = await getUser();
				if (!user) {
					goto(resolve('/signup'), { replaceState: true });
					return;
				}
				username = user.username;
			} catch (e) {
				console.error('error fetching user:', e);
				goto(resolve('/signup'), { replaceState: true });
			}
		}

		fetchUser();
	});

	function handleChange(e: Event & { currentTarget: HTMLInputElement }) {
		password = e.currentTarget.value;
		error = '';
	}

	async function handleSubmit() {
		error = '';
		isLoading = true;

		try {
			const masterKey = await login(password);
			auth.masterKey = masterKey;
			goto(resolve('/app'));
		} catch (err) {
			if (err instanceof Error && err.message === 'incorrect password') {
				error = 'invalid password :(. please try again.';
			} else {
				console.error('unexpected login error: ', err);
				error = 'something exploded :(. please try again.';
			}
			throw err;
		} finally {
			isLoading = false;
		}
	}

	return {
		get username() {
			return username;
		},
		get password() {
			return password;
		},
		get isLoading() {
			return isLoading;
		},
		get error() {
			return error;
		},
		handleChange,
		handleSubmit
	};
}
