export default function Footer() {
  return (
    <main className="border-accent mx-12 mt-7 flex w-11/12 flex-row border-t-4 pt-2">
      <div className="w-1/4 border-2 border-black">
        <p className="text-xl font-bold">shelter</p>
        <p>© 2025 shelter</p>
        <p>all rights reserved</p>
      </div>
      <div className="w-1/4 border-2 border-black">
        <p className="block text-xl font-bold">product</p>
        <a className="text-accent-foreground block">about us</a>
        <a className="text-accent-foreground block">cloud</a>
        <a className="text-accent-foreground block">self-host</a>
      </div>
      <div className="w-1/4 border-2 border-black">
        <p className="text-xl font-bold">legal</p>
        <a className="text-accent-foreground block">privacy policy</a>
        <a className="text-accent-foreground block">terms of service</a>
        <a className="text-accent-foreground block">cookie policy</a>
      </div>
      <div className="w-1/4 border-2 border-black">
        <p className="text-xl font-bold">contact</p>
        <a className="text-accent-foreground block">discord</a>
        <a
          className="text-accent-foreground block"
          href="https://github.com/Stageddat/shelter"
          target="_blank"
        >
          github
        </a>
        <a
          className="text-accent-foreground block"
          href="mailto:hello@stageddat.dev"
        >
          hello@stageddat.dev
        </a>
      </div>
    </main>
  );
}
