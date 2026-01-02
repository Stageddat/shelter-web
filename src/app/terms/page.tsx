import Navbar from "@/components/landing/sections/Navbar";

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-8 py-16 lg:py-24">
        <h1 className="text-foreground mb-8 text-6xl font-bold">
          terms of service
        </h1>
        <p className="text-muted-foreground mb-12 text-lg">
          last updated: december 30, 2025
        </p>

        <div className="space-y-12">
          <section className="space-y-4">
            <h2 className="border-primary text-primary-foreground border-b-2 pb-2 text-3xl font-bold">
              welcome to shelter
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              by using shelter, you agree to these terms. we&apos;ve kept them
              simple and straightforward because we believe in transparency.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-primary text-primary-foreground border-b-2 pb-2 text-3xl font-bold">
              what shelter is
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              shelter is a private, encrypted space for your thoughts, notes,
              and reflections. it&apos;s designed to be a safe place where you
              can write freely without judgment or surveillance.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-primary text-primary-foreground border-b-2 pb-2 text-3xl font-bold">
              your account
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              you&apos;re responsible for keeping your account secure. choose a
              strong password and don&apos;t share it with anyone. if you
              believe your account has been compromised, contact us immediately.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-primary text-primary-foreground border-b-2 pb-2 text-3xl font-bold">
              your content
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              everything you write in shelter belongs to you. we don&apos;t
              claim any ownership over your content. because your data is
              encrypted, we can&apos;t access it anyway.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              you&apos;re responsible for the content you create. while we
              can&apos;t see your entries, we ask that you use shelter
              responsibly and legally.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-primary text-primary-foreground border-b-2 pb-2 text-3xl font-bold">
              acceptable use
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              you agree not to:
            </p>
            <ul className="text-muted-foreground ml-6 space-y-2">
              <li>• use shelter for any illegal activities</li>
              <li>
                • attempt to hack, break, or compromise the security of shelter
              </li>
              <li>• interfere with other users access to the service</li>
              <li>• use shelter to distribute malware or harmful software</li>
              <li>
                • violate anyone&apos;s intellectual property or privacy rights
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="border-primary text-primary-foreground border-b-2 pb-2 text-3xl font-bold">
              service availability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              we work hard to keep shelter running smoothly, but we can&apos;t
              guarantee it will be available 100% of the time. we may need to
              take the service down for maintenance or updates occasionally.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              since your data is stored locally on your device, you&apos;ll
              always have access to your entries even when shelter&apos;s sync
              service is down.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-primary text-primary-foreground border-b-2 pb-2 text-3xl font-bold">
              backups
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              while we take reasonable measures to keep your synced data safe,
              we recommend you regularly export your entries as a backup.
              you&apos;re responsible for maintaining your own backups of
              important content.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-primary text-primary-foreground border-b-2 pb-2 text-3xl font-bold">
              termination
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              you can stop using shelter at any time. if you want to delete your
              account, you can do so from your settings. this will remove any
              synced data from our servers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              we reserve the right to suspend or terminate accounts that violate
              these terms, though we&apos;ll always try to contact you first.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-primary text-primary-foreground border-b-2 pb-2 text-3xl font-bold">
              no warranty
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              shelter is provided &quot;as is&quot; without warranties of any
              kind. we do our best to make shelter reliable and secure, but we
              can&apos;t guarantee it will meet all your needs or be completely
              error-free.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-primary text-primary-foreground border-b-2 pb-2 text-3xl font-bold">
              limitation of liability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              we&apos;re not liable for any damages that result from using or
              being unable to use shelter. this includes data loss, even though
              we work hard to prevent it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-primary text-primary-foreground border-b-2 pb-2 text-3xl font-bold">
              changes to these terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              we may update these terms from time to time. if we make
              significant changes, we&apos;ll notify you clearly and give you
              time to review them. continuing to use shelter after changes means
              you accept the new terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-primary text-primary-foreground border-b-2 pb-2 text-3xl font-bold">
              contact us
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              if you have questions about these terms, reach out to us at{" "}
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
    </>
  );
}
