import Image from "next/image";
import heroImage from "@/assets/landing/hero-image.png";
import CtaButton from "@/components/landing/CtaButton";

export default function Hero() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-x-16 border-2 border-black px-16">
      <section className="text-left">
        <h1 className="text-primary-foreground m-0 text-9xl font-extrabold">
          shelter
        </h1>
        <p className="text-foreground m-0 mt-2 text-2xl">
          a secure place where your thoughts can breathe
        </p>
        <div className="mt-4">
          <CtaButton />
        </div>
      </section>

      <Image src={heroImage} alt="shelter" width={500} height={500} />
    </main>
  );
}
