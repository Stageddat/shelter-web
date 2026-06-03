import { z } from 'zod';

export const registerSchema = z
	.object({
		username: z
			.string()
			.min(3, 'username must be at least 3 characters long')
			.max(20, 'username must be at most 20 characters long')
			.regex(/^[a-zA-Z0-9_]+$/, 'username can only contain letters, numbers, and underscores')
			.trim(),
		password: z.string().min(8, 'password must be at least 8 characters long'),
		password2: z.string().min(8, 'password must be at least 8 characters long')
	})
	.refine((data) => data.password === data.password2, {
		message: "passwords don't match",
		path: ['password2']
	});

export type RegisterInput = z.infer<typeof registerSchema>;
