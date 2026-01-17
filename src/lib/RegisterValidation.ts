import { registerSchema, type RegisterValidation } from "../schemas/register";

export async function RegisterValidation(data: unknown) {
  const result = registerSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false as const,
      errors: result.error.flatten((issue) => issue.message).fieldErrors ?? {},
    };
  }

  return {
    success: true as const,
    data: result.data,
  };
}
