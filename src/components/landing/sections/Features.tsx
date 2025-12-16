import {
  Database,
  Shield,
  CloudSync,
  EyeOff,
  Bird,
  PencilLine,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "top-level security",
    text: "your entries are encrypted and protected at all times.",
  },
  {
    icon: Database,
    title: "local storage & offline-first",
    text: "keep your journals safe on your own device.",
  },
  {
    icon: CloudSync,
    title: "cloud sync (coming soon)",
    text: "soon you'll be able to access your thoughts anywhere.",
  },
  {
    icon: EyeOff,
    title: "100% personal & private",
    text: "your journal is for your eyes only. \nwe respect your privacy.",
  },
  {
    icon: Bird,
    title: "designed for calm",
    text: "a distraction-free interface to help you focus.",
  },
  {
    icon: PencilLine,
    title: "write at your own pace",
    text: "there are no deadlines or pressures. just you and your thoughts.",
  },
];

export default function Features() {
  return (
    <main className="flex flex-col gap-x-16 border-2 border-black px-72 py-24">
      <h2 className="m-0 mb-8 w-full text-6xl">
        a safe place for your thoughts
      </h2>

      <section className="grid grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <article
              key={index}
              className="hover:border-accent border-border rounded-lg border-2 p-4 transition hover:border-2"
            >
              <Icon className="stroke-accent h-10 w-10" />
              <h3 className="text-primary-foreground mt-2 text-xl font-semibold">
                {feature.title}
              </h3>
              <p className="text-foreground text-md mt-1 whitespace-pre-line">
                {feature.text}
              </p>
            </article>
          );
        })}
      </section>
    </main>
  );
}
