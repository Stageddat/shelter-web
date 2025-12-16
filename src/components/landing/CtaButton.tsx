import { Button } from "../ui/button";

export default function CtaButton() {
  return (
    <Button
      variant="outline"
      className="bg-primary hover:bg-accent rounded-xl px-12 py-8 text-xl font-bold transition duration-300"
    >
      start my journey!
    </Button>
  );
}
