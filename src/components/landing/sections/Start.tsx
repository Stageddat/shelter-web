import CtaButton from "../CtaButton";

export default function Start() {
  return (
    <section
      className="bg-background relative overflow-hidden px-8 py-32 lg:py-52"
      id="start"
    >
      {/* Decoración de fondo para cerrar con calidez */}
      <div className="bg-secondary/40 absolute inset-x-0 bottom-0 -z-10 h-full w-full rounded-t-[100px] opacity-50 blur-3xl" />

      <div className="mx-auto max-w-4xl text-center">
        <div className="space-y-6">
          <h2 className="font-display text-foreground text-6xl font-normal tracking-tighter sm:text-7xl lg:text-8xl">
            ready to rest?
          </h2>

          <p className="font-primary text-muted-foreground mx-auto max-w-md text-xl leading-relaxed lg:text-2xl">
            start your journey at your own pace.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-6">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
