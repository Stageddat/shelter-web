import Image from "next/image";
import heroImage from "@/assets/landing/hero-image.png";
import CtaButton from "@/components/landing/CtaButton";

export default function Hero() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-x-16 border-2 border-black">
      <section className="text-left">
        <h1 className="m-0 text-9xl">shelter</h1>
        <p className="m-0 mt-2 text-2xl">
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
