import Image from "next/image";
import heroImage from "@/assets/landing/hero-image.png";
import CtaButton from "@/components/landing/CtaButton";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center border-2 border-black px-8 py-16 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* text left */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-7xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
            shelter
          </h1>
          <p className="text-muted-foreground mt-6 text-xl text-pretty sm:text-2xl">
            a secure place where your thoughts can breathe
          </p>
          <div className="mt-8">
            <CtaButton />
          </div>
        </div>

        {/* img */}
        <div className="flex-1">
          <Image
            src={heroImage}
            alt="shelter mascot image"
            width={500}
            height={500}
            className="mx-auto w-full max-w-md drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
