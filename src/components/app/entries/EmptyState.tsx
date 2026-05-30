import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EmptyState() {
  return (
    <div className="text-muted-foreground -mt-52 flex h-screen flex-col items-center justify-center">
      <p className="text-4xl lowercase">no entries yet</p>
      <p className="mt-2 mb-4 text-3xl">^▽^</p>
      <Button asChild className="p-5! text-xl! tracking-wide">
        <Link href="/app/new">begin the story</Link>
      </Button>
    </div>
  );
}
