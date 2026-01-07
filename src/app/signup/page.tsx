"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { User, Mail, CircleQuestionMark, Info } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Signup() {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Name:", name);
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-8 py-16">
      <div className="w-full max-w-2xl space-y-8">
        {/* Header */}
        <div className="space-y-2 text-center">
          <h1 className="text-foreground text-4xl font-bold tracking-tight lg:text-5xl">
            welcome!
          </h1>
          <p className="text-muted-foreground text-xl text-pretty">
            before starting your journey, we need to ask you some questions
          </p>
        </div>

        {/* Form Card */}
        <div className="border-border bg-card rounded-xl border p-8 shadow-lg lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              {/* ask username */}
              <Label htmlFor="search">
                what would you like us to call you?
              </Label>
              <InputGroup>
                <InputGroupInput
                  type="text"
                  id="username"
                  name="username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
              <Label htmlFor="search">email</Label>
              <InputGroup>
                <InputGroupInput
                  placeholder="enter your email"
                  id="mail"
                  name="mail"
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

              <Label htmlFor="search">date of birth</Label>
              <InputGroup>
                <InputGroupInput placeholder="mail" type="date" />
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
                      we only use this date to estimate your age for legal
                      purposes.
                    </TooltipContent>
                  </Tooltip>
                </InputGroupAddon>
              </InputGroup>

              <Button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary-dark hover:text-background hover:shadow-primary/20 w-full hover:shadow-lg"
                size="lg"
              >
                continue
              </Button>
            </div>
          </form>
        </div>

        {/* Footer text */}
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
