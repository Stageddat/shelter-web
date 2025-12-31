export default function Footer() {
  return (
    <footer className="border-border mx-auto mt-16 w-11/12 max-w-7xl border-t pt-8 pb-6">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* project section */}
        <div className="space-y-3">
          <p className="text-foreground text-2xl font-semibold">shelter</p>
          <div className="text-muted-foreground space-y-1 text-sm">
            <p>© 2025 shelter</p>
            <p>all rights reserved</p>
          </div>
        </div>

        {/* shelter section */}
        <div className="space-y-3">
          <p className="text-foreground text-sm font-semibold tracking-wider uppercase">
            Product
          </p>
          <nav className="flex flex-col space-y-2">
            <a className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              about us
            </a>
            <a className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              cloud
            </a>
            <a className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              self-host
            </a>
          </nav>
        </div>

        {/* legal section */}
        <div className="space-y-3">
          <p className="text-foreground text-sm font-semibold tracking-wider uppercase">
            Legal
          </p>
          <nav className="flex flex-col space-y-2">
            <a
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              href="/privacy"
            >
              privacy policy
            </a>
            <a
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              href="/terms"
            >
              terms of service
            </a>
            <a
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              href="/cookies"
            >
              cookie policy
            </a>
          </nav>
        </div>

        {/* contact section */}
        <div className="space-y-3">
          <p className="text-foreground text-sm font-semibold tracking-wider uppercase">
            Contact
          </p>
          <nav className="flex flex-col space-y-2">
            <a className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              discord
            </a>
            <a
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              href="https://github.com/Stageddat/shelter"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <a
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              href="mailto:hello@stageddat.dev"
            >
              hello@stageddat.dev
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
