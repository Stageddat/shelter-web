export default function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-4xl px-8 py-16 lg:py-24">
      <h1 className="text-foreground mb-8 text-6xl font-bold">
        privacy policy
      </h1>
      <p className="text-muted-foreground mb-12 text-lg">
        last updated: december 30, 2025
      </p>

      <div className="space-y-12">
        <section className="space-y-4">
          <h2 className="border-primary text-primary-foreground border-b-2 pb-2 text-3xl font-bold">
            we don&apos;t collect your data
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            shelter is built on a simple principle: your thoughts are yours. we
            don&apos;t collect, store, or process any of your personal data on
            our servers. everything you write stays on your device.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="border-primary text-primary-foreground border-b-2 pb-2 text-3xl font-bold">
            how your data is stored
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            all your entries are stored locally in your browser using encrypted
            storage. this means:
          </p>
          <ul className="text-muted-foreground ml-6 space-y-2">
            <li>
              • your notes never leave your device unless you choose to sync
            </li>
            <li>• we cannot read your entries, even if we wanted to</li>
            <li>• your data is encrypted end-to-end</li>
            <li>• you have complete control over your information</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="border-primary text-primary-foreground border-b-2 pb-2 text-3xl font-bold">
            end-to-end encryption
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            when you opt in to sync your entries across devices, your data is
            encrypted on your device before it ever reaches our servers. we use
            industry-standard encryption, and only you hold the keys to decrypt
            your content.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="border-primary text-primary-foreground border-b-2 pb-2 text-3xl font-bold">
            no tracking or analytics
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            we don&apos;t use tracking pixels, analytics tools, or any
            third-party services that collect your personal information. we
            don&apos;t track your behavior, your location, or how you use
            shelter.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="border-primary text-primary-foreground border-b-2 pb-2 text-3xl font-bold">
            no ads, no selling data
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            we will never display ads or sell your data to third parties. ever.
            your privacy is not for sale.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="border-primary text-primary-foreground border-b-2 pb-2 text-3xl font-bold">
            cookies
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            we only use essential cookies necessary for the app to function
            properly, such as keeping you logged in. we don&apos;t use tracking
            cookies or advertising cookies. see our cookie policy for more
            details.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="border-primary text-primary-foreground border-b-2 pb-2 text-3xl font-bold">
            your rights
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            since we don&apos;t collect your data, there&apos;s nothing for us
            to delete or share. you have complete ownership and control of
            everything you create in shelter. you can export or delete your data
            at any time directly from your device.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="border-primary text-primary-foreground border-b-2 pb-2 text-3xl font-bold">
            changes to this policy
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            if we ever change this privacy policy, we&apos;ll notify you clearly
            and give you the option to review the changes. we&apos;ll never make
            changes that compromise your privacy without your knowledge.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="border-primary text-primary-foreground border-b-2 pb-2 text-3xl font-bold">
            contact us
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            if you have any questions about this privacy policy, please contact
            us at{" "}
            <a
              href="mailto:hello@stageddat.dev"
              className="text-primary hover:text-primary/80 underline transition-colors"
            >
              hello@stageddat.dev
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
