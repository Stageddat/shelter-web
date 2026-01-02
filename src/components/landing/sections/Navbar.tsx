"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Hamburger icon component with animation
const HamburgerIcon = ({
  className,
  ...props
}: React.SVGAttributes<SVGElement>) => (
  <svg
    className={cn("pointer-events-none", className)}
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    {...(props as any)}
  >
    <path
      d="M4 12L20 12"
      className="origin-center -translate-y-1.75 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-315"
    />
    <path
      d="M4 12H20"
      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
    />
    <path
      d="M4 12H20"
      className="origin-center translate-y-1.75 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-135"
    />
  </svg>
);

// Navigation link type
interface NavLink {
  href: string;
  label: string;
  active?: boolean;
  external?: boolean;
}

// Navigation links for shelter
const navigationLinks: NavLink[] = [
  { href: "/#features", label: "features" },
  { href: "/#security", label: "security" },
  { href: "/#faqs", label: "faqs" },
  // {
  //   href: "https://github.com/Stageddat/shelter",
  //   label: "github",
  //   external: true,
  // },
];

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setIsMobile(width < 768);
      }
    };

    checkWidth();

    const resizeObserver = new ResizeObserver(checkWidth);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <header
      ref={containerRef}
      className={cn(
        "border-border/40 bg-background/80 supports-backdrop-filter:bg-background/60 fixed top-0 z-50 w-full border-b px-4 backdrop-blur-md md:px-6",
      )}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  className="group hover:bg-accent hover:text-accent-foreground h-9 w-9"
                  variant="ghost"
                  size="icon"
                >
                  <HamburgerIcon />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-2/4">
                <div className="mx-6 mt-8 flex flex-col gap-6">
                  {navigationLinks.map((link, index) => (
                    <SheetClose asChild key={index}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className={cn(
                          "hover:text-primary-dark text-base font-medium no-underline transition-colors",
                          link.active
                            ? "text-primary-dark"
                            : "text-muted-foreground",
                        )}
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                  <div className="mt-4 flex flex-col gap-3">
                    {/* <SheetClose asChild>
                      <Button
                        variant="ghost"
                        asChild
                        className="hover:bg-accent hover:text-primary-dark justify-start p-0 text-sm font-medium"
                      >
                        <Link href="/login">sign in</Link>
                      </Button>
                    </SheetClose> */}
                    <SheetClose asChild>
                      <Button
                        asChild
                        className="bg-primary text-primary-foreground hover:bg-primary-dark hover:text-background p-0"
                      >
                        <Link href="/signup">app</Link>
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}

          {/* Logo and Desktop Navigation */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="group flex items-center space-x-2 transition-colors"
            >
              <span className="text-foreground group-hover:text-primary-dark text-2xl font-bold tracking-tight lg:text-3xl">
                shelter
              </span>
            </Link>

            {/* Desktop Navigation menu */}
            {!isMobile && (
              <NavigationMenu className="flex">
                <NavigationMenuList className="gap-1">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className={cn(
                          "group hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground inline-flex h-9 w-max cursor-pointer items-center justify-center rounded-md px-4 py-2 text-sm font-medium no-underline transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                          link.active
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:text-primary-dark",
                        )}
                      >
                        {link.label}
                      </a>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            )}
          </div>
        </div>

        {/* Right side - CTA buttons */}
        <div className="flex items-center gap-3">
          {/* <Button
            variant="ghost"
            size="sm"
            asChild
            className="hover:bg-accent hover:text-primary-dark hidden text-sm font-medium sm:inline-flex"
          >
            <Link href="/login">sign in</Link>
          </Button> */}
          <Button
            size="sm"
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary-dark hover:text-background hover:shadow-primary/20 h-9 rounded-md px-4 text-sm font-medium shadow-sm hover:shadow-lg"
          >
            <Link href="/signup">get started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
