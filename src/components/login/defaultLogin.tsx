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

// Login con mail y contraseña
export default function DefaultLogin({
  loginFormData,
  handleSubmit,
  handleChange,
  isLoading,
  error,
}: DefaultLoginProps) {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        {/* ask mail */}
        <Label htmlFor="email">email</Label>
        <InputGroup>
          <InputGroupInput
            type="email"
            placeholder="enter your email"
            id="email"
            name="email"
            value={loginFormData.email}
            onChange={handleChange}
            className="h-12 text-base"
            required
            disabled={isLoading}
          />
          <InputGroupAddon>
            <Mail />
          </InputGroupAddon>
        </InputGroup>

        {/* ask password */}
        <Label htmlFor="password">password</Label>
        <InputGroup>
          <InputGroupInput
            type="password"
            placeholder="set a password"
            id="password"
            name="password"
            value={loginFormData.password}
            onChange={handleChange}
            className="h-12 text-base"
            required
            disabled={isLoading}
          />
          <InputGroupAddon>
            <Lock />
          </InputGroupAddon>
        </InputGroup>

        {/* error message */}
        {error && (
          <p className="text-destructive text-sm font-medium">{error}</p>
        )}

        <Button
          type="submit"
          className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4 w-full"
          size="lg"
          disabled={isLoading}
        >
          {isLoading ? "logging in..." : "continue"}
        </Button>
      </div>
    </form>
  );
}
