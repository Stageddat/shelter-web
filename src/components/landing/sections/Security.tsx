import Lock from "@/assets/landing/lock.png";
import Image from "next/image";

const securityFeatures = [
  {
    title: "your thoughts are yours",
    text: "shelter stores notes privately on your browser, so you can access them quickly, even offline. No one else can read them, not even",
  },
  {
    title: "end to end encrypted",
    text: "your entries are end-to-end encrypted and stored offline first, so only you can read them — not us, not anyone else.\nwe never read, scan, or sell your data.",
  },
  {
    title: "0 trackers & 0 ads",
    text: "we strictly never collect personal data",
  },
];

export default function Security() {
  return (
    <main className="flex flex-col gap-x-16 px-36 py-20">
      {/* section title */}
      <h2 className="mb-8 text-6xl">your shelter, fully protected</h2>

      {/* section content */}
      <section className="mx-auto flex items-center gap-12">
        {/* lock img */}
        <div className="flex w-1/2 justify-center">
          <Image src={Lock} alt="shelter" className="w-2/3" />
        </div>

        {/* security features */}
        <div className="flex w-1/2 flex-col justify-center">
          {securityFeatures.map((feature) => (
            <article key={feature.title} className="mb-6">
              <h3 className="text-primary-foreground border-primary mt-2 border-b-2 text-3xl font-bold">
                {feature.title}
              </h3>
              <p className="text-foreground mt-2 text-xl whitespace-pre-line">
                {feature.text}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
