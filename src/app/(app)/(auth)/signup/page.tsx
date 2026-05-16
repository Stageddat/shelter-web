"use client";

import { useSignup } from "@/hooks/signup/useSignup";
import { formFields } from "@/data/signup/formFields";
import FormField from "@/components/signup/FormField";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Signup() {
  const { formData, error, isLoading, handleChange, handleSubmit } =
    useSignup();

  return (
    <main className="flex min-h-screen items-center justify-center px-8 py-16">
      <div className="w-full max-w-2xl">
        <div className="border-border bg-card rounded-xl border shadow-lg lg:px-12 lg:py-8 lg:pb-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* cabecera */}
            <h1 className="text-foreground mb-8 text-center text-4xl font-bold lg:text-5xl">
              welcome to shelter!
            </h1>

            {/* formulario */}
            <div className="space-y-4">
              {formFields.map((field) => (
                <FormField
                  key={field.id}
                  field={field}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              ))}
            </div>

            {/* error escondido */}
            {error && (
              <p className="text-destructive text-sm font-medium">{error}</p>
            )}

            {/* botones */}
            <Button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/85 w-full text-lg tracking-wide"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? "creating your diary..." : "create my diary"}
            </Button>
          </form>

          <p className="text-muted-foreground text-md mt-4 text-center">
            already have a diary?{" "}
            <Link
              className="text-primary-dark hover:text-primary font-medium underline transition-colors"
              href="/restore"
            >
              restore
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
