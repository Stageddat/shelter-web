"use client";

import { Button } from "@/components/ui/button";
import {
  PlusCircle,
  House,
  BookOpen,
  Calendar,
  BarChart2,
  Search,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/app", label: "home", icon: House },
  { href: "/app/entries", label: "entries", icon: BookOpen },
  { href: "/app/calendar", label: "calendar", icon: Calendar },
  { href: "/app/stats", label: "stats", icon: BarChart2 },
  { href: "/app/search", label: "search", icon: Search },
  { href: "/app/settings", label: "settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="bg-card/50 flex h-screen w-72 flex-col border-r backdrop-blur-md">
      <div className="flex h-full flex-col overflow-hidden px-8">
        {/* logo */}
        <div className="py-8">
          <h1 className="text-4xl font-semibold tracking-wide lowercase">
            shelter
          </h1>
          <p className="text-muted-foreground text-lg tracking-widest">
            private space
          </p>
        </div>

        {/* links */}
        <nav className="flex flex-col gap-1">
          {links.map(({ href, label, icon: Icon }) => (
            <Button
              key={href}
              asChild
              variant={pathname === href ? "secondary" : "ghost"}
              className="w-full justify-start gap-3 py-6 text-lg tracking-wider"
            >
              <Link href={href}>
                <Icon className="h-7! w-7!" />
                <span>{label}</span>
              </Link>
            </Button>
          ))}
        </nav>

        {/* new entry */}
        <div className="mt-auto pt-4 pb-2">
          <Button asChild className="w-full gap-2 py-6 lowercase shadow-sm">
            <Link href="/app/new">
              <PlusCircle className="h-5 w-5" />
              <span className="text-lg tracking-wide">new entry</span>
            </Link>
          </Button>
        </div>
      </div>
    </aside>
  );
}
