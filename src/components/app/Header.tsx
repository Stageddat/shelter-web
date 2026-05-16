"use client";

import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Settings } from "lucide-react";
import Link from "next/link";
import { useHeaderBreadcrumb } from "@/hooks/app/useHeaderBreadcrumb";
import avatarPlaceholder from "@/assets/app/avatar-placeholder.webp";

function HeaderComponent() {
  const breadcrumb = useHeaderBreadcrumb();

  return (
    <header className="flex h-20 items-center justify-between border-b border-transparent px-12">
      {/* breadcrumb */}
      <div className="flex items-center gap-2">
        <Link
          className="hover:text-primary text-muted-foreground text-sm font-medium lowercase transition-colors"
          href="/app"
        >
          {breadcrumb.section}
        </Link>
        {breadcrumb.current && (
          <>
            <span className="text-muted-foreground/30 text-sm">/</span>
            <span className="text-sm font-semibold lowercase">
              {breadcrumb.current}
            </span>
          </>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <div className="bg-card/40 flex rounded-xl p-1">
          <Button variant="ghost" size="icon" className="rounded-lg">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-lg">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
        <Avatar className="border-card h-10 w-10 border-2">
          <AvatarImage src={avatarPlaceholder.src} alt="User profile" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

// Memoizar el Header pero permitir cambios en el pathname
export const Header = memo(HeaderComponent);
