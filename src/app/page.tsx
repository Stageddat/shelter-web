import Hero from "@/components/landing/sections/Hero";
import Features from "@/components/landing/sections/Features";
import Security from "@/components/landing/sections/Security";
import Start from "@/components/landing/sections/Start";
import Footer from "@/components/landing/sections/Footer";
import Faqs from "@/components/landing/sections/Faqs";
import Navbar from "@/components/landing/sections/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[linear-gradient(165deg,#f5ebe0_0%,#e8f4f8_30%,#ffffff_70%,#f8f8f8_100%)]">
      <Navbar />
      <Hero />
      <Features />
      <Security />
      <Faqs />
      <Start />
      <Footer />
    </div>
  );
}
