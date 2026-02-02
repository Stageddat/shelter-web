"use client";

import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Settings } from "lucide-react";
import Link from "next/link";
import { useHeaderBreadcrumb } from "@/hooks/app/useHeaderBreadcrumb";

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
          <AvatarImage
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBRqLsJILDS7bdIZCg0OCPzgGovS3Xp8TJDmnQLREh_NCxM6B6-mgsOBRr3c8-xstMyB86zwlPRmp_bl5AMH0g3ktxY3A82GwdtJa9Sr_SDmomNRDP7LITQs6ISYBXtjz1nsBZTOQn_CwXwUoS1udRMALtsfPT8TXdKnsr6vowhpLnC-3ovuEfEFPzCsqugJ7sSU1rptv0mq1xo2BxQufxVGfhqCZ09tiMZJXvwmfIfu7_Zb2gMrWaUxWOYf6wJYiRPpWPhXPN3gA"
            alt="User profile"
          />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

// Memoizar el Header pero permitir cambios en el pathname
export const Header = memo(HeaderComponent);
