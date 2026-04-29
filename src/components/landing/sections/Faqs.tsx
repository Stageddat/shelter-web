import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "what is shelter?",
    answer:
      "shelter is a secure place where your thoughts can breathe. it's a secure journal web app where you can write freely without judgment in your favorite browser.",
  },
  {
    question: "is it open source?",
    answer: (
      <>
        yes! you can find the source code on{" "}
        <a
          href="https://github.com/Stageddat/shelter"
          target="_blank"
          className="text-primary underline hover:opacity-80"
        >
          github
        </a>{" "}
        and we welcome contributions.
      </>
    ),
  },
  {
    question: "where is the data stored?",
    answer:
      "all your entries are stored locally in your browser using encrypted storage by default, and synced to the cloud if you choose.",
  },
  {
    question: "what is this project inspired by?",
    answer: (
      <>
        this project is inspired by the comment section of the song
        &quot;shelter&quot; by porter robinson & madeon. many people write daily
        entries there, and we wanted to create a personal, private space for
        those small slices of life. you can see the video{" "}
        <a
          href="https://www.youtube.com/watch?v=HQnC1UHBvWA"
          target="_blank"
          className="text-primary underline hover:opacity-80"
        >
          here
        </a>
        !
      </>
    ),
  },
  {
    question: "is it free?",
    answer:
      "yes! shelter is free to use, ad-free, and open source. it's a labor of love.",
  },
  {
    question: "how is the data encrypted?",
    answer: (
      <>
        the data is stored locally with strong encryption. you can learn more
        about our security protocols in our{" "}
        <a href="/privacy" className="text-primary underline hover:opacity-80">
          privacy policy
        </a>
        .
      </>
    ),
  },
  {
    question: "who can see my data?",
    answer:
      "nobody! even we can't read it. your entries are encrypted with your own key before they ever leave your device.",
  },
  {
    question: "is it secure?",
    answer:
      "yes. we use end-to-end encryption and a 'privacy-first' architecture to ensure your shelter remains yours alone.",
  },
];

export default function Faqs() {
  return (
    <section className="bg-background px-8 py-24 lg:py-40" id="faqs">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <h2 className="font-display text-foreground text-5xl font-normal tracking-tighter sm:text-6xl">
            frequently asked questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-border bg-secondary/30 hover:bg-secondary/50 rounded-2xl border px-6 py-1 transition-all"
            >
              <AccordionTrigger className="font-display text-foreground hover:text-primary text-left text-xl font-medium tracking-tight hover:no-underline">
                {faq.question.toLowerCase()}
              </AccordionTrigger>
              <AccordionContent className="font-primary text-muted-foreground pb-4 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
