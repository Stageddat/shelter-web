import { useState } from "react";
import { register } from "@/services/auth/register";
import { RegisterValidation } from "@/services/auth/RegisterValidation";
import { checkUserExists } from "@/services/auth/checkUserExists";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Next.js 13+

export interface FormData {
  username: string;
  email: string;
  dateOfBirth: string;
  password: string;
  password2: string;
}

export function useSignupForm() {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    dateOfBirth: "",
    password: "",
    password2: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  // mirar si hay un usuario registrado
  useEffect(() => {
    async function checkExistingUser() {
      try {
        const exists = await checkUserExists();

        if (exists) {
          console.log("User already exists, redirecting to login...");
          router.push("/login");
        }
      } catch (e) {
        console.error("Error checking user:", e);
      }
    }

    checkExistingUser();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // validar datos del formulario
    try {
      const result = await RegisterValidation(formData);

      if (!result.success) {
        const firstError =
          Object.values(result.errors ?? {}).flat()[0] ?? "Invalid data";
        setError(firstError);
        setIsLoading(false);
        return;
      }

      // registrar usuario
      const { userId, username, email, masterKey } = await register(
        result.data,
      );

      console.log("registration successful!");
      // console.debug("userId:", userId);
      // console.log("username:", username);
      // console.log("email:", email);
      // console.log("mK:", masterKey);

      // TODO: guardar sesion (userId y masterKey en session storage/Context)
      // TODO: redirige al dashboard
    } catch (err) {
      console.error("registration error:", err);
      setError(err instanceof Error ? err.message : "registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    error,
    isLoading,
    handleChange,
    handleSubmit,
  };
}
