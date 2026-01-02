import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-border mx-auto mt-16 w-11/12 max-w-7xl border-t pt-8 pb-6">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* project section */}
        <div className="space-y-3">
          <p className="text-foreground text-2xl font-semibold">shelter</p>
          <div className="text-muted-foreground space-y-1 text-sm">
            <p>© 2025-{new Date().getFullYear()} shelter</p>
            <p>all rights reserved</p>
          </div>
        </div>

        {/* shelter section */}
        <div className="space-y-3">
          <p className="text-foreground text-sm font-semibold tracking-wider uppercase">
            Product
          </p>
          {/* TODO: add links */}
          <nav className="flex flex-col space-y-2">
            <Link
              href=""
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              about us
            </Link>
            <Link
              href=""
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              cloud
            </Link>
            <Link
              href=""
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              self-host
            </Link>
          </nav>
        </div>

        {/* legal section */}
        <div className="space-y-3">
          <p className="text-foreground text-sm font-semibold tracking-wider uppercase">
            Legal
          </p>
          <nav className="flex flex-col space-y-2">
            <Link
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              href="/privacy"
            >
              privacy policy
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              href="/terms"
            >
              terms of service
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              href="/cookies"
            >
              cookie policy
            </Link>
          </nav>
        </div>

        {/* contact section */}
        <div className="space-y-3">
          <p className="text-foreground text-sm font-semibold tracking-wider uppercase">
            Contact
          </p>
          <nav className="flex flex-col space-y-2">
            {/* <Link
              // TODO: add discord
              href=""
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              discord
            </Link> */}
            <Link
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              href="https://github.com/Stageddat/shelter"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              href="mailto:hello@stageddat.dev"
            >
              hello@stageddat.dev
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
