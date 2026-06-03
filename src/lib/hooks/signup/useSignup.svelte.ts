import { register } from '$lib/services/auth/register.service';
import { hasExistingUser } from '$lib/db.utils';
import { goto } from '$app/navigation';
import { type RegisterInput, registerSchema } from '$lib/schemas/register.schema';
import { getAuthContext } from '$lib/contexts/auth.context.svelte';
import { resolve } from '$app/paths';

export function useSignup() {
	const auth = getAuthContext();

	let formData = $state<RegisterInput>({
		username: '',
		password: '',
		password2: ''
	});

	let error = $state('');
	let isLoading = $state(false);
	let isChecking = $state(true);

	const handleChange = (e: Event & { currentTarget: HTMLInputElement }) => {
		const target = e.currentTarget;
		formData = {
			...formData,
			[target.name]: target.value
		};
		error = '';
	};

	const handleSubmit = async (e: SubmitEvent) => {
		e.preventDefault();
		error = '';
		isLoading = true;

		try {
			const result = await registerSchema.safeParseAsync(formData);

			if (!result.success) {
				const firstError = result.error.issues[0]?.message ?? 'invalid data';
				error = firstError;
				return;
			}

			const { masterKey } = await register(result.data);

			console.log('registration successful!');

			if (auth) {
				auth.masterKey = masterKey;
			}

			goto(resolve('/app'));
		} catch (err) {
			console.error('registration error:', err);
			error = err instanceof Error ? err.message : 'registration failed';
		} finally {
			isLoading = false;
		}
	};

	$effect(() => {
		async function checkExistingUser() {
			try {
				const exists = await hasExistingUser();

				if (exists) {
					console.log('User already exists, redirecting to login...');
					goto(resolve('/login'));
					return;
				}
			} catch (err) {
				console.error('error checking user:', err);
			}
			isChecking = false;
		}

		checkExistingUser();
	});

	return {
		get formData() {
			return formData;
		},
		get error() {
			return error;
		},
		get isLoading() {
			return isLoading;
		},
		get isChecking() {
			return isChecking;
		},
		handleChange,
		handleSubmit
	};
}
