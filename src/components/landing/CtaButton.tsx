import Link from "next/link";

export default function CtaButton() {
  return (
    <Link
      href="/signup"
      className="bg-primary font-primary text-primary-foreground inline-block min-w-60 rounded-2xl px-12 py-5 text-center text-2xl font-bold transition-all duration-200 hover:brightness-110 active:scale-95 active:brightness-90"
    >
      start my journey!
    </Link>
  );
}
