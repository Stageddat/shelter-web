"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { User, Mail, CircleQuestionMark, Info, Cake, Lock } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RegisterValidation } from "../../lib/RegisterValidation";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    dateOfBirth: "",
    password: "",
    password2: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(""); // clear error when user type
  };

  // check if form data is valid
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await RegisterValidation(formData);

    // check if form data is valid
    if (!result.success) {
      const firstError =
        Object.values(result.errors ?? {}).flat()[0] ?? "invalid data";

      setError(firstError);
      return;
    }

    // TODO: generar registrador
    console.log("signup ok");
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-8 py-16">
      <div className="w-full max-w-2xl space-y-8">
        {/* header */}
        <div className="space-y-2 text-center">
          <h1 className="text-foreground text-4xl font-bold tracking-tight lg:text-5xl">
            welcome!
          </h1>
          <p className="text-muted-foreground text-xl text-pretty">
            before starting your journey, we need to ask you some questions
          </p>
        </div>

        {/* form card */}
        <div className="border-border bg-card rounded-xl border p-8 shadow-lg lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              {/* ask username */}
              <Label htmlFor="username">
                what would you like us to call you?
              </Label>
              <InputGroup>
                <InputGroupInput
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="enter your name"
                  className="h-12 text-base"
                  required
                />
                <InputGroupAddon>
                  <User />
                </InputGroupAddon>
                <InputGroupAddon align="inline-end">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <InputGroupButton className="rounded-full" size="icon-xs">
                        <Info />
                      </InputGroupButton>
                    </TooltipTrigger>
                    <TooltipContent>
                      this is how we will call you across the app,
                      <br /> you don&apos;t have to use your real name
                    </TooltipContent>
                  </Tooltip>
                </InputGroupAddon>
              </InputGroup>

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
                />
                <InputGroupAddon>
                  <Mail />
                </InputGroupAddon>
                <InputGroupAddon align="inline-end">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <InputGroupButton className="rounded-full" size="icon-xs">
                        <CircleQuestionMark />
                      </InputGroupButton>
                    </TooltipTrigger>
                    <TooltipContent>
                      we only use your email to send you important updates.
                    </TooltipContent>
                  </Tooltip>
                </InputGroupAddon>
              </InputGroup>

              {/* ask date of birth */}
              <Label htmlFor="dateOfBirth">date of birth</Label>
              <InputGroup>
                <InputGroupInput
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="h-12 text-base"
                  required
                />
                <InputGroupAddon>
                  <Cake />
                </InputGroupAddon>
                <InputGroupAddon align="inline-end">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <InputGroupButton className="rounded-full" size="icon-xs">
                        <CircleQuestionMark />
                      </InputGroupButton>
                    </TooltipTrigger>
                    <TooltipContent>
                      we only use this date to estimate your age for legal
                      purposes.
                    </TooltipContent>
                  </Tooltip>
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
                />
                <InputGroupAddon>
                  <Lock />
                </InputGroupAddon>
              </InputGroup>

              {/* repeat password */}
              <Label htmlFor="password2">repeat password</Label>
              <InputGroup>
                <InputGroupInput
                  type="password"
                  placeholder="repeat the password"
                  id="password2"
                  name="password2"
                  value={formData.password2}
                  onChange={handleChange}
                  className="h-12 text-base"
                  required
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
              >
                continue
              </Button>
            </div>
          </form>
        </div>

        {/* footer text */}
        <p className="text-muted-foreground text-center text-sm">
          already have an account?{" "}
          <a
            href="/login"
            className="text-primary-dark hover:text-primary font-medium underline transition-colors"
          >
            log in
          </a>
        </p>
      </div>
    </main>
  );
}
