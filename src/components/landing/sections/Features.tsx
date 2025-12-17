import { FeatureCard } from "@/components/landing/FeatureCard";
import { features } from "@/data/landing/features";

export default function Features() {
  return (
    <main className="flex flex-col gap-x-16 px-72 py-40">
      <h2 className="mb-8 text-6xl">a safe place for your thoughts</h2>
      <section className="grid grid-cols-3 gap-6">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </section>
    </main>
  );
}
