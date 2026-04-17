import Image from "next/image";
import heroImage from "@/assets/landing/hero-image.png";
import CtaButton from "../CtaButton";

export default function Hero() {
  return (
    <section className="bg-background font-primary relative flex min-h-[90vh] items-center justify-center overflow-hidden px-8 py-20">
      <div className="bg-secondary absolute top-[-5%] left-[-5%] -z-10 h-72 w-72 rounded-full opacity-50 blur-[100px]" />
      <div className="bg-accent absolute right-[10%] bottom-[10%] -z-10 h-32 w-32 rounded-full opacity-30 blur-3xl" />

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 lg:flex-row">
        {/* text left */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h1 className="text-foreground text-8xl leading-[0.8] font-normal tracking-tight sm:text-9xl">
            shelter
          </h1>

          <p className="text-muted-foreground mx-auto max-w-md text-2xl leading-tight lg:mx-0">
            a secure place where your thoughts can breathe
          </p>

          <div className="pt-6">
            <CtaButton />
          </div>
        </div>

        {/* img */}
        <div className="flex flex-1 justify-center">
          <div className="relative p-2">
            <div className="border-border bg-secondary/50 absolute inset-0 -z-10 rotate-2 rounded-2xl border shadow-sm" />

            <Image
              src={heroImage}
              alt="shelter mascot"
              width={400}
              height={400}
              className="h-auto w-full max-w-[320px] -rotate-1 brightness-[1.02] contrast-[0.95] transition-transform duration-500 hover:rotate-0"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
