import { useState } from "react";
import { register } from "@/services/auth/register.service";
import { hasExistingUser } from "@/services/auth/hasExistingUser";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { RegisterInput, registerSchema } from "@/schemas/register.schema";
import { useAuth } from "@/contexts/AuthContext";

export function useSignup() {
  const router = useRouter();
  const { setMasterKey } = useAuth();

  const [formData, setFormData] = useState<RegisterInput>({
    username: "",
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
        const exists = await hasExistingUser();

        if (exists) {
          console.log("User already exists, redirecting to login...");
          router.push("/login");
        }
      } catch (err) {
        console.error("error checking user:", err);
      }
    }

    checkExistingUser();
  }, [router]);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // validar datos del formulario
    try {
      const result = await registerSchema.safeParseAsync(formData);

      if (!result.success) {
        const firstError = result.error.issues[0]?.message ?? "invalid data";
        setError(firstError);
        return;
      }

      // registrar usuario y pillar mk para guardar leugo
      const { masterKey } = await register(result.data);

      console.log("registration successful!");
      // console.debug("userId:", userId);
      // console.log("username:", username);
      // console.log("email:", email);
      // console.log("mK:", masterKey);

      // guardar en el contexto de react y redirigir a /app
      setMasterKey(masterKey);
      router.push("/app");
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
