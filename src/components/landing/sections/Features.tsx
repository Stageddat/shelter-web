import { FeatureCard } from "@/components/landing/FeatureCard";
import { features } from "@/data/landing/features";

export default function Features() {
  return (
    <section className="px-8 py-20 lg:px-16 lg:py-32" id="features">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-foreground mb-12 text-center text-5xl font-bold tracking-tight text-balance lg:text-6xl">
          a safe place for your thoughts
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
