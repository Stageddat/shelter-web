import CtaButton from "../CtaButton";

export default function Start() {
  return (
    <section className="px-8 py-32 lg:py-40">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-foreground mb-6 text-6xl font-bold tracking-tight lg:text-8xl">
          feel ready?
        </h2>
        <p className="text-muted-foreground mb-10 text-xl lg:text-2xl">
          start your journey without pressure
        </p>
        <div className="flex justify-center">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
