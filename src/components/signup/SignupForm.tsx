import { Button } from "@/components/ui/button";
import { useSignupForm } from "@/hooks/signup/useSignupForm";
import { formFields } from "@/data/signup/formFields";
import FormField from "@/components/signup/FormField";

export default function SignupForm() {
  const { formData, error, isLoading, handleChange, handleSubmit } =
    useSignupForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        {formFields.map((field) => (
          <FormField
            key={field.id}
            field={field}
            value={formData[field.name as keyof typeof formData]}
            onChange={handleChange}
            disabled={isLoading}
          />
        ))}

        {error && (
          <p className="text-destructive text-sm font-medium">{error}</p>
        )}

        <Button
          type="submit"
          className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4 w-full"
          size="lg"
          disabled={isLoading}
        >
          {isLoading ? "creating account..." : "continue"}
        </Button>
      </div>
    </form>
  );
}
