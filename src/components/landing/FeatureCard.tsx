import { LucideIcon } from "lucide-react";

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  text: string;
}

export function FeatureCard({ icon: Icon, title, text }: FeatureCardProps) {
  return (
    <article className="hover:border-accent border-border rounded-lg border-2 p-4 py-10 transition duration-300 hover:border-2">
      <Icon className="stroke-accent h-10 w-10" />
      <h3 className="text-primary-foreground mt-2 text-xl font-bold text-pretty">
        {title}
      </h3>
      <p className="text-foreground text-md mt-1 text-pretty whitespace-pre-line">
        {text}
      </p>
    </article>
  );
}
