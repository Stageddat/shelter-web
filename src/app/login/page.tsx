"use client";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useState } from "react";
import { Mail, Lock } from "lucide-react";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
  };
  return (
    <div>
      <h1>login</h1>
      <div>
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
                value={formData.email}
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
                value={formData.password}
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
      </div>{" "}
    </div>
  );
}
