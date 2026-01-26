import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Mail, Lock } from "lucide-react";

interface DefaultLoginProps {
  loginFormData: {
    email: string;
    password: string;
  };
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
  error: string;
}

export default function DefaultLogin({
  loginFormData,
  handleSubmit,
  handleChange,
  isLoading,
  error,
}: DefaultLoginProps) {
  return (
    <>
      <h1 className="text-foreground mb-1.5 text-4xl font-bold tracking-tight">
        welcome back!
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          {/* email field */}
          <div className="space-y-2">
            <Label htmlFor="email">email</Label>
            <InputGroup>
              <InputGroupInput
                type="email"
                id="email"
                name="email"
                value={loginFormData.email}
                onChange={handleChange}
                placeholder="enter your email"
                className="h-12 text-base"
                required
                disabled={isLoading}
              />
              <InputGroupAddon>
                <Mail />
              </InputGroupAddon>
            </InputGroup>
          </div>

          {/* password field */}
          <div className="space-y-2">
            <Label htmlFor="password">password</Label>
            <InputGroup>
              <InputGroupInput
                type="password"
                id="password"
                name="password"
                value={loginFormData.password}
                onChange={handleChange}
                placeholder="enter your password"
                className="h-12 text-base"
                required
                disabled={isLoading}
              />
              <InputGroupAddon>
                <Lock />
              </InputGroupAddon>
            </InputGroup>
          </div>

          {/* error */}
          {error && (
            <p className="text-destructive text-sm font-medium">{error}</p>
          )}

          <Button
            type="submit"
            className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4 w-full"
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? "logging in..." : "enter my shelter"}
          </Button>
        </div>
      </form>
    </>
  );
}
