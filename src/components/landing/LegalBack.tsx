import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// link to go back root
export default function LegalBack() {
  return (
    <Link
      href="/"
      className="text-primary-dark flex flex-row items-center underline-offset-4 hover:underline"
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      go back to home
    </Link>
  );
}
