import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { getUser } from "@/services/auth/getUser";
import { login } from "@/services/auth/login.service";

export function useLogin() {
  const router = useRouter();
  const { setMasterKey } = useAuth();

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUser();
        if (!user) {
          router.replace("/signup");
          return;
        }
        setUsername(user.username);
      } catch (e) {
        console.error("error fetching user:", e);
        router.replace("/signup");
      }
    };
    fetchUser();
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setError("");
  };

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // aqui se logea y guardar la masterKey en el contexto de react
      const result = await login({ password });

      if (result.success && result.masterKey) {
        setMasterKey(result.masterKey);
        router.push("/app");
      } else {
        setError("invalid password :(. please try again.");
      }
    } catch (err) {
      console.error("login error:", err);
      setError("something exploded :(. please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return { username, password, handleChange, handleSubmit, isLoading, error };
}
