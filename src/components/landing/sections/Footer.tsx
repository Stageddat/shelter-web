import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-border/40 w-full border-t pt-16 pb-12">
      <div className="mx-auto w-11/12 max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <p className="font-display text-foreground text-3xl font-normal tracking-tighter">
              shelter
            </p>
            <div className="font-primary text-muted-foreground/60 space-y-1 text-sm leading-relaxed">
              <p>© 2025–{currentYear} shelter</p>
              <p>all rights reserved</p>
            </div>
          </div>

          {/* Product Section */}
          <div className="space-y-4">
            <p className="font-display text-foreground text-lg font-medium tracking-tight">
              product
            </p>
            <nav className="font-primary flex flex-col space-y-2.5">
              <FooterLink href="">about us</FooterLink>
              <FooterLink href="">cloud</FooterLink>
              <FooterLink href="">self-host</FooterLink>
            </nav>
          </div>

          <div className="space-y-4">
            <p className="font-display text-foreground text-lg font-medium tracking-tight">
              legal
            </p>
            <nav className="font-primary flex flex-col space-y-2.5">
              <FooterLink href="/privacy">privacy policy</FooterLink>
              <FooterLink href="/terms">terms of service</FooterLink>
              <FooterLink href="/cookies">cookie policy</FooterLink>
            </nav>
          </div>

          <div className="space-y-4">
            <p className="font-display text-foreground text-lg font-medium tracking-tight">
              contact
            </p>
            <nav className="font-primary flex flex-col space-y-2.5">
              <FooterLink
                href="https://github.com/Stageddat/shelter-web"
                external
              >
                github
              </FooterLink>
              <FooterLink href="mailto:hello@stageddat.dev">
                hello@stageddat.dev
              </FooterLink>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200 ease-in-out"
    >
      {children}
    </Link>
  );
}
