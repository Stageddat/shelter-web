"use client";

import LoginForm from "@/components/login/loginForm";
import Link from "next/link";

export default function Login() {
  return (
    <main className="flex min-h-screen items-center justify-center px-8 py-16">
      <div className="w-full max-w-2xl space-y-8">
        <div className="border-border bg-card rounded-xl border p-8 shadow-lg lg:p-12">
          <LoginForm />
        </div>

        <p className="text-muted-foreground text-center text-sm">
          don’t have an account?{" "}
          <Link
            className="text-primary-dark hover:text-primary font-medium underline transition-colors"
            href="/signup"
          >
            sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
