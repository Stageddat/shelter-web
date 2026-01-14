import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faqs() {
  return (
    <section className="px-8 py-20 lg:px-16 lg:py-32" id="faqs">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-foreground mb-16 text-center text-5xl font-bold tracking-tight text-balance lg:text-6xl">
          frequently asked questions
        </h2>
        <Accordion type="single" collapsible className="flex flex-col gap-2">
          <AccordionItem
            value="item-0"
            className="border-border bg-card hover:border-primary/50 rounded-xl border px-6 py-2 transition-colors"
          >
            <AccordionTrigger className="text-foreground hover:text-primary-dark text-left text-lg font-semibold text-pretty hover:no-underline">
              what is shelter?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed text-pretty">
              shelter is a secure place where your thoughts can breathe.
              it&apos;s a secure journal web based app where you can write
              freely without judgment in your favorite browser.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-1"
            className="border-border bg-card hover:border-primary/50 rounded-xl border px-6 py-2 transition-colors"
          >
            <AccordionTrigger className="text-foreground hover:text-primary-dark text-left text-lg font-semibold text-pretty hover:no-underline">
              is it open source?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed text-pretty">
              yes! you can find the source code on{" "}
              <a
                href="https://github.com/Stageddat/shelter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-dark hover:text-primary text-pretty underline transition-colors"
              >
                github
              </a>{" "}
              and we accept contributions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="border-border bg-card hover:border-primary/50 rounded-xl border px-6 py-2 transition-colors"
          >
            <AccordionTrigger className="text-foreground hover:text-primary-dark text-left text-lg font-semibold text-pretty hover:no-underline">
              where is the data stored?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed text-pretty">
              all your entries are stored locally in your browser using
              encrypted storage by default, and synced to the cloud if you
              choose.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="border-border bg-card hover:border-primary/50 rounded-xl border px-6 py-2 transition-colors"
          >
            <AccordionTrigger className="text-foreground hover:text-primary-dark text-left text-lg font-semibold text-pretty hover:no-underline">
              what is this project inspired by?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed text-pretty">
              this project is inspired by the comment section of the song
              &quot;Shelter&quot; by Porter Robinson & Madeon on youtube. many
              people from around the internet write daily entries in the
              comments, describing how their day went, from ordinary moments to
              special events. reading these made us want to create a personal
              diary where users can save small slices of their lives, just like
              the commenters do. you can check out the original video{" "}
              <a
                href="https://www.youtube.com/watch?v=HQnC1UHBvWA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-dark hover:text-primary text-pretty underline transition-colors"
              >
                here
              </a>
              !
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="border-border bg-card hover:border-primary/50 rounded-xl border px-6 py-2 transition-colors"
          >
            <AccordionTrigger className="text-foreground hover:text-primary-dark text-left text-lg font-semibold text-pretty hover:no-underline">
              is it free?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed text-pretty">
              yes! shelter is free to use and open source.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-5"
            className="border-border bg-card hover:border-primary/50 rounded-xl border px-6 py-2 transition-colors"
          >
            <AccordionTrigger className="text-foreground hover:text-primary-dark text-left text-lg font-semibold text-pretty hover:no-underline">
              how is the data encrypted?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed text-pretty">
              the data is stored locally in your browser with strong encryption.
              you can learn more about how we keep your data safe in our{" "}
              <a
                href="/privacy"
                className="text-primary-dark hover:text-primary text-pretty underline transition-colors"
              >
                privacy policy
              </a>
              !
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-6"
            className="border-border bg-card hover:border-primary/50 rounded-xl border px-6 py-2 transition-colors"
          >
            <AccordionTrigger className="text-foreground hover:text-primary-dark text-left text-lg font-semibold text-pretty hover:no-underline">
              who can see my data?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed text-pretty">
              nobody! even we can&apos;t read it. we only have access to
              necessary data for the app to work, like your account email.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-7"
            className="border-border bg-card hover:border-primary/50 rounded-xl border px-6 py-2 transition-colors"
          >
            <AccordionTrigger className="text-foreground hover:text-primary-dark text-left text-lg font-semibold text-pretty hover:no-underline">
              is it secure?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed text-pretty">
              yes! we use end-to-end encryption to protect your data. you can
              learn more about how we keep your data safe in our{" "}
              <a
                href="/privacy"
                className="text-primary-dark hover:text-primary text-pretty underline transition-colors"
              >
                privacy policy
              </a>
              !
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
