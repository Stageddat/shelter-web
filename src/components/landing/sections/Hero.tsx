import Image from "next/image";
import heroImage from "@/assets/landing/hero-image.png";

export default function Hero() {
  return (
    <section className="bg-background relative flex min-h-screen w-full items-center justify-center overflow-hidden px-8">
      <div className="bg-secondary/40 h-150600px] absolute top-[-5%] left-[-5%] -z-10 rounded-full blur-[130px]" />
      <div className="bg-accent/20 absolute right-[5%] bottom-[5%] -z-10 h-125 w-125 rounded-full blur-[110px]" />

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 pt-32 pb-20 lg:flex-row lg:pt-0 lg:pb-0">
        {/* text left */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <div className="space-y-8">
            <h1 className="font-display text-foreground tracking-[ -0.05em] text-8xl leading-[0.8] font-normal sm:text-9xl lg:text-[13rem]">
              shelter
            </h1>
            <p className="font-primary text-muted-foreground mx-auto max-w-md text-xl leading-relaxed lg:mx-0 lg:text-3xl">
              a secure place where your thoughts can breathe
            </p>
          </div>
        </div>

        {/* img */}
        <div className="flex flex-1 items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-112.5 sm:max-w-150 lg:max-w-175">
            <Image
              src={heroImage}
              alt="shelter mascot"
              width={900}
              height={900}
              className="h-auto w-full object-contain brightness-[1.02] transition-all duration-1000"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
