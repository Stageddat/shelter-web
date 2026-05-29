import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth.context";
import { getUser } from "@/lib/db.utils";
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
      const masterKey = await login(password);
      setMasterKey(masterKey);
      router.push("/app");
    } catch (err) {
      if (err instanceof Error && err.message === "incorrect password") {
        setError("invalid password :(. please try again.");
        setIsLoading(false);
        throw err;
      } else {
        console.error("unexpected login error: ", err);
        setError("something exploded :(. please try again.");
        setIsLoading(false);
        throw err;
      }
    }
  };

  return { username, password, handleChange, handleSubmit, isLoading, error };
}
