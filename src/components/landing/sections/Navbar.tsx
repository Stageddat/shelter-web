import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "/#features", label: "features" },
  { href: "/#security", label: "security" },
  { href: "/#faqs", label: "faqs" },
];

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger className="border-border/40 bg-secondary/80 flex h-10 w-10 items-center justify-center rounded-2xl border transition-colors md:hidden">
        <Menu className="text-foreground h-5 w-5" />
      </SheetTrigger>

      <SheetContent
        side="left"
        className="border-border/20 bg-background w-80 border-r p-0"
      >
        <div className="flex h-full flex-col p-10">
          <p className="font-display text-foreground mb-12 text-3xl tracking-tighter">
            shelter
          </p>
          <nav className="flex flex-col gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <SheetClose asChild key={href}>
                <Link
                  href={href}
                  className="font-display text-muted-foreground hover:text-primary text-3xl tracking-tight transition-colors"
                >
                  {label}
                </Link>
              </SheetClose>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function DesktopNav() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="gap-1">
        {NAV_LINKS.map(({ href, label }) => (
          <NavigationMenuItem key={href}>
            <NavigationMenuLink
              asChild
              className={cn(
                navigationMenuTriggerStyle(),
                "hover:bg-secondary/80 text-muted-foreground hover:text-foreground font-primary rounded-full bg-transparent px-4 transition-colors",
              )}
            >
              <Link href={href}>{label}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default function Navbar() {
  return (
    <header className="border-border/20 bg-background/60 fixed top-0 z-50 w-full border-b backdrop-blur-xl transition-all duration-300">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <MobileMenu />
          <Link
            href="/"
            className="font-primary flex items-center text-2xl tracking-tighter transition-opacity hover:opacity-80 lg:text-3xl"
          >
            <span className="relative -top-px">shelter</span>
          </Link>
          <DesktopNav />
        </div>

        {/* CTA */}
        <Link
          href="/signup"
          className={cn(
            buttonVariants({ size: "sm" }),
            "bg-foreground text-background hover:bg-foreground/90 shadow-foreground/5 hidden h-10 rounded-full px-6 shadow-lg transition-all hover:-translate-y-0.5 sm:inline-flex",
          )}
        >
          get started
        </Link>
      </div>
    </header>
  );
}
