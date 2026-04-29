import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  text: string;
}

export function FeatureCard({ icon: Icon, title, text }: FeatureCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col p-8",
        "border-border rounded-xl border",
        "bg-secondary transition-colors duration-300 ease-in-out",
        "hover:bg-accent",
      )}
    >
      <div className="bg-background border-border/50 text-primary mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg border">
        <Icon className="h-6 w-6 stroke-[1.5]" />
      </div>

      <div className="space-y-3">
        <h3 className="font-display text-foreground text-3xl font-medium tracking-normal">
          {title.toLowerCase()}
        </h3>
        <p className="font-primary text-muted-foreground text-2xl leading-relaxed text-pretty">
          {text}
        </p>
      </div>
    </article>
  );
}
