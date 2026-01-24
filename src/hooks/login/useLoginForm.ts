import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getUser } from "@/services/auth/getUser";

import { User } from "@/lib/db";
import { login } from "@/services/auth/login";

export interface LoginFormData {
  email: string;
  password: string;
}

// 1. mirar si hay usuario registrado
// 2. si hay usuario registrado, mostrar login con solo pass
// 3. en caso contrario (sin usuario), mostrar login con mail y pass
// 4. comprobar contraseña
// 5. redirigir a dashboard

export function useLoginForm() {
  const router = useRouter();

  const [loginFormData, setLoginFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<User | null>(null);

  // comprovar si hay un usuario registrado
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUser();
        console.log("user:", user);
        if (!user) return setUserData(null);
        setUserData(user);
      } catch (e) {
        console.error("error fetching user:", e);
        return null;
      }
    };
    fetchUser();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // TODO: comprobar contraseña
    try {
      // poner credenciales
      const credentials = userData
        ? { password: loginFormData.password }
        : { email: loginFormData.email, password: loginFormData.password };

      const isValid = await login(credentials);

      if (isValid) {
        // login correcto, redirigir a dashboard
        router.push("/app");
      } else {
        setError("invalid password or mail :(. please try again.");
      }
    } catch (err) {
      console.error("login error:", err);
      setError("something exploded :(. please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    loginFormData,
    error,
    isLoading,
    handleChange,
    handleSubmit,
    userData,
  };
}
