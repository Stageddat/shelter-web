import { registerSchema, type RegisterValidation } from "../schemas/register";

// TODO: mejorar la validacion
export async function RegisterValidation(data: unknown) {
  const result = registerSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false as const,
      errors: result.error.flatten((issue) => issue.message).fieldErrors ?? {},
    };
  }

  const validatedData: RegisterValidation = result.data;
  console.log(validatedData);

  return { success: true as const };
}
