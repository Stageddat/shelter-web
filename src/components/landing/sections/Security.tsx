import Lock from "@/assets/landing/lock.png";
import Image from "next/image";

const securityFeatures = [
  {
    title: "your thoughts are yours",
    text: "shelter stores notes privately on your browser, so you can access them quickly, even offline. no one else can read them, not even us.",
  },
  {
    title: "end to end encrypted",
    text: "your entries are end-to-end encrypted and stored offline first. we never read, scan, or sell your data. period.",
  },
  {
    title: "0 trackers & 0 ads",
    text: "we strictly never collect personal data. there are no trackers, no ads, and no hidden analytics following you around.",
  },
];

export default function Security() {
  return (
    <section className="bg-background px-8 py-24 lg:py-40" id="security">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 space-y-4 text-center">
          <h2 className="font-display text-foreground text-4xl font-normal sm:text-6xl lg:text-7xl">
            fully protected
          </h2>
        </div>

        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">
          <div className="relative flex w-full justify-center lg:w-1/2">
            <div className="bg-secondary/40 absolute inset-0 -z-10 rounded-full blur-[100px]" />

            <Image
              src={Lock}
              alt="security lock illustration"
              className="w-full max-w-65 object-contain transition-all duration-1000 ease-in-out hover:scale-105 sm:max-w-sm"
            />
          </div>

          <div className="w-full space-y-6 lg:w-1/2">
            {securityFeatures.map((feature) => (
              <article key={feature.title} className="group space-y-3">
                <h3 className="font-display text-foreground text-3xl font-medium tracking-tight">
                  {feature.title.toLowerCase()}
                </h3>

                <div className="border-border/60 group-hover:border-primary relative border-l-2 pl-6 transition-colors">
                  <p className="font-primary text-muted-foreground text-2xl leading-relaxed text-pretty lg:text-2xl">
                    {feature.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
