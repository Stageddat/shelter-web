"use client";

import { useLogin } from "@/hooks/login/useLogin";
import PasswordForm from "@/components/login/PasswordForm";

export default function Login() {
  const { username, password, handleChange, handleSubmit, isLoading, error } =
    useLogin();

  // si no hay nombre de usuario, no mostrar nada
  // el hook ya hace un redirect a /signup
  if (!username) return null;

  return (
    <main className="flex min-h-screen items-center justify-center px-8 py-16">
      <div className="w-full max-w-2xl">
        <div className="border-border bg-card rounded-xl border shadow-lg lg:px-12 lg:py-8 lg:pb-4">
          <PasswordForm
            username={username}
            password={password}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </div>
    </main>
  );
}
