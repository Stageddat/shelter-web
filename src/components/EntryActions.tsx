import React from "react";
import { Button } from "@/components/ui/button";
import { Share2, Edit, Download } from "lucide-react";

export function EntryActions() {
  return (
    <div className="mt-8 flex items-center justify-between px-4">
      {/* Action Buttons */}
      <div className="flex gap-2">
        <Button
          variant="outline"
          className="bg-card/50 gap-2 rounded-xl lowercase shadow-sm"
        >
          <Share2 className="h-4 w-4" />
          <span className="text-xs font-medium">share</span>
        </Button>
        <Button
          variant="outline"
          className="bg-card/50 gap-2 rounded-xl lowercase shadow-sm"
        >
          <Edit className="h-4 w-4" />
          <span className="text-xs font-medium">edit entry</span>
        </Button>
      </div>

      {/* Export Link */}
      <Button
        variant="link"
        className="hover:text-primary text-muted-foreground h-auto gap-1 p-0 text-xs font-medium lowercase underline underline-offset-4"
      >
        <Download className="h-3 w-3" />
        export to markdown
      </Button>
    </div>
  );
}
