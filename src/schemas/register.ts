import { z } from "zod";

// TODO: ser mas exigente con las contraseñas
export const registerSchema = z
  .object({
    username: z.string().min(3, "username must be at least 3 characters long"),
    email: z.email("please enter a valid email address"),
    dateOfBirth: z.coerce.date(),
    password: z.string().min(8, "password must be at least 8 characters long"),
    password2: z.string().min(8, "password must be at least 8 characters long"),
  })
  .refine((data) => data.password === data.password2, {
    message: "passwords don't match",
    path: ["password2"],
  });

export type RegisterValidation = z.infer<typeof registerSchema>;
