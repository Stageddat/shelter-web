"use client";

import SignupForm from "@/components/signup/SignupForm";
import SignupHeader from "@/components/signup/SignupHeader";
import Link from "next/link";

export default function Signup() {
  return (
    <main className="flex min-h-screen items-center justify-center px-8 py-16">
      <div className="w-full max-w-2xl space-y-8">
        <SignupHeader />

        <div className="border-border bg-card rounded-xl border p-8 shadow-lg lg:p-12">
          <SignupForm />
        </div>

        <p className="text-muted-foreground text-center text-sm">
          already have an account?{" "}
          <Link
            className="text-primary-dark hover:text-primary font-medium underline transition-colors"
            href="/login"
          >
            log in
          </Link>
        </p>
      </div>
    </main>
  );
}
