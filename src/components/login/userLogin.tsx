import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Lock } from "lucide-react";

interface UserLoginProps {
  loginFormData: {
    email: string;
    password: string;
  };
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
  error: string;
  username: string;
}

// Login pero solo con contraseña
export default function UserLogin({
  loginFormData,
  handleSubmit,
  handleChange,
  isLoading,
  error,
  username,
}: UserLoginProps) {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-primary text-2xl font-bold">
          welcome back, {username}
        </h2>

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
