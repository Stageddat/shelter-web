import { goto } from '$app/navigation';
import { getAuthContext } from '$lib/contexts/auth.context.svelte';
import { getUser } from '$lib/db.utils';
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
					goto('/signup', { replaceState: true });
					return;
				}
				username = user.username;
			} catch (e) {
				console.error('error fetching user:', e);
				goto('/signup', { replaceState: true });
			}
		}

		fetchUser();
	});

	function handleChange(e: Event & { currentTarget: HTMLInputElement }) {
		password = e.currentTarget.value;
		error = '';
	}

	async function handleSubmit(e: SubmitEvent) {
		error = '';
		isLoading = true;

		try {
			const masterKey = await login(password);
			auth.masterKey = masterKey;
			goto('/app');
		} catch (err) {
			if (err instanceof Error && err.message === 'incorrect password') {
				error = 'invalid password :(. please try again.';
			} else {
				console.error('unexpected login error: ', err);
				error = 'something exploded :(. please try again.';
			}
			isLoading = false;
			throw err;
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
