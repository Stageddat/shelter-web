import Navbar from "@/components/landing/sections/Navbar";

export default function CookiePolicy() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-8 py-16 lg:py-24">
        <h1 className="text-foreground mb-8 text-6xl font-bold">
          cookie policy
        </h1>
        <p className="text-muted-foreground mb-12 text-lg">
          last updated: december 30, 2025
        </p>

        <div className="space-y-12">
          <section className="space-y-4">
            <h2 className="border-primary text-primary-foreground border-b-2 pb-2 text-3xl font-bold">
              what are cookies
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              cookies are small text files that websites store on your device to
              remember information about you. they&apos;re a standard part of
              how modern websites work.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-primary text-primary-foreground border-b-2 pb-2 text-3xl font-bold">
              our approach to cookies
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              we use the absolute minimum number of cookies necessary to make
              shelter work. we don&apos;t use tracking cookies, advertising
              cookies, or analytics cookies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-primary text-primary-foreground border-b-2 pb-2 text-3xl font-bold">
              essential cookies we use
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              these cookies are required for shelter to function properly:
            </p>
            <div className="ml-6 space-y-4">
              <div>
                <p className="text-foreground font-semibold">
                  • authentication cookies
                </p>
                <p className="text-muted-foreground">
                  keeps you logged in so you don&apos;t have to sign in every
                  time you visit shelter. without this cookie, you&apos;d need
                  to log in on every page.
                </p>
              </div>
              <div>
                <p className="text-foreground font-semibold">
                  • session cookies
                </p>
                <p className="text-muted-foreground">
                  remembers your preferences and settings during your visit,
                  like your theme choice or language preference.
                </p>
              </div>
              <div>
                <p className="text-foreground font-semibold">
                  • security cookies
                </p>
                <p className="text-muted-foreground">
                  helps protect your account from unauthorized access and
                  ensures secure communication between your browser and our
                  servers.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="border-primary text-primary-foreground border-b-2 pb-2 text-3xl font-bold">
              what we don&apos;t use
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              shelter does not use:
            </p>
            <ul className="text-muted-foreground ml-6 space-y-2">
              <li>• tracking cookies to monitor your behavior</li>
              <li>• advertising cookies to show you ads</li>
              <li>• analytics cookies to collect usage statistics</li>
              <li>• third-party cookies from social media or other services</li>
              <li>• cookies that identify you personally</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="border-primary text-primary-foreground border-b-2 pb-2 text-3xl font-bold">
              local storage
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              in addition to cookies, we use your browser&apos;s local storage
              to save your encrypted entries on your device. this is not the
              same as cookies and gives you offline access to your content.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              everything stored locally is encrypted and only accessible by you.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-primary text-primary-foreground border-b-2 pb-2 text-3xl font-bold">
              managing cookies
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              most browsers allow you to control cookies through their settings.
              you can set your browser to refuse cookies or alert you when
              cookies are being sent.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              however, if you disable our essential cookies, shelter won&apos;t
              work properly. you won&apos;t be able to stay logged in or save
              your preferences.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-primary text-primary-foreground border-b-2 pb-2 text-3xl font-bold">
              cookie lifetime
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              our authentication cookies last for 30 days or until you log out,
              whichever comes first. session cookies are deleted when you close
              your browser.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-primary text-primary-foreground border-b-2 pb-2 text-3xl font-bold">
              updates to this policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              if we ever need to add or change the cookies we use, we&apos;ll
              update this policy and let you know. we&apos;re committed to
              keeping cookie usage to the absolute minimum.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-primary text-primary-foreground border-b-2 pb-2 text-3xl font-bold">
              questions
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              if you have questions about how we use cookies, contact us at{" "}
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
