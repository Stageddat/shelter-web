import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Lock } from "lucide-react";

interface PasswordFormProps {
  username: string;
  password: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  error: string;
}

export default function PasswordForm({
  username,
  password,
  handleChange,
  handleSubmit,
  isLoading,
  error,
}: PasswordFormProps) {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h1 className="text-foreground text-4xl font-bold tracking-tight">
        welcome back, {username}!
      </h1>

      <div className="space-y-2">
        <Label htmlFor="password">password</Label>
        <InputGroup>
          <InputGroupInput
            type="password"
            id="password"
            name="password"
            value={password}
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

      {error && <p className="text-destructive text-sm font-medium">{error}</p>}

      <Button
        type="submit"
        className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
        size="lg"
        disabled={isLoading}
      >
        {isLoading ? "logging in..." : "enter my shelter"}
      </Button>
    </form>
  );
}
