import Link from "next/link";
import { buttonVariants } from "../ui/button"; // Shadcn suele exportar esto

export default function CtaButton() {
  return (
    <Link
      href="/signup"
      className={
        buttonVariants({ variant: "outline" }) +
        " bg-primary hover:bg-accent rounded-xl px-12 py-8 text-xl font-bold transition duration-300"
      }
    >
      start my journey!
    </Link>
  );
}
