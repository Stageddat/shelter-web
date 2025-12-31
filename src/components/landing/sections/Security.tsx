import Lock from "@/assets/landing/lock.png";
import Image from "next/image";

const securityFeatures = [
  {
    title: "your thoughts are yours",
    text: "shelter stores notes privately on your browser, so you can access them quickly, even offline. no one else can read them, not even us.",
  },
  {
    title: "end to end encrypted",
    text: "your entries are end-to-end encrypted and stored offline first, so only you can read them. not us, not anyone else.\nwe never read, scan, or sell your data.",
  },
  {
    title: "0 trackers & 0 ads",
    text: "we strictly never collect personal data. there are no trackers, no ads, and no hidden analytics following you around. shelter is built to stay out of your business.",
  },
];

export default function Security() {
  return (
    <section className="px-8 py-20 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* title */}
        <h2 className="text-foreground mb-16 text-center text-5xl font-bold tracking-tight lg:text-6xl">
          your shelter, fully protected
        </h2>

        {/* content */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* lock img */}
          <div className="flex w-full justify-center lg:w-1/2">
            <Image
              src={Lock}
              alt="security lock illustration"
              className="w-2/3 max-w-sm drop-shadow-xl"
            />
          </div>

          {/* features */}
          <div className="w-full space-y-8 lg:w-1/2">
            {securityFeatures.map((feature) => (
              <article key={feature.title} className="space-y-3">
                <h3 className="border-primary text-primary-foreground border-b-2 pb-2 text-2xl font-bold lg:text-3xl">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed text-pretty whitespace-pre-line">
                  {feature.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
