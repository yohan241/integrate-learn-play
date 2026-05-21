import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { useState } from "react";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "Help & FAQ — Market Integration Study Companion" },
      { name: "description", content: "How to navigate the site, take the quiz, and use the chapters effectively." },
      { property: "og:title", content: "Help & FAQ" },
    ],
  }),
  component: HelpPage,
});

const faqs = [
  { q: "How is this site organized?", a: "Four reading chapters (Forms, the EU, ASEAN, Financial Institutions), a five-question interactive quiz, plus About and Help pages. The order in the navigation reflects the reading order." },
  { q: "Where does the content come from?", a: "Everything is summarized from a single lecture presentation on Market Integration provided to us. Videos are embedded from their original publishers." },
  { q: "How does the quiz work?", a: "Ten multiple-choice questions, one at a time. You'll see immediate feedback and an explanation after each answer. There is no timer." },
  { q: "Can I share a specific chapter?", a: "Yes — every chapter has its own URL (e.g. /european-union, /asean). Each page also defines its own social-sharing metadata." },
  { q: "What if I spot an error?", a: "Use the Contact section on this page. Corrections to factual content are always welcome." },
  { q: "Is the site mobile-friendly?", a: "Yes. The layout adapts down to phones and the navigation collapses into a menu on smaller screens." },
];

function HelpPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <article>
      <PageHeader
        eyebrow="Support"
        title="Help & frequently asked questions"
        lede="Everything you need to navigate the site and get the most out of it."
      />
      <div className="container-prose py-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <ul className="ink-card divide-y divide-border">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full text-left p-6 flex items-start justify-between gap-6 hover:bg-surface"
                  >
                    <span className="font-serif text-xl text-foreground">{f.q}</span>
                    <span className={`font-serif text-2xl text-accent transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-foreground/80 leading-relaxed">{f.a}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <aside className="space-y-6">
          <div className="navy-panel p-6 rounded-sm">
            <p className="eyebrow text-primary-foreground/60">Quick links</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/forms" className="hover:text-accent">→ Forms of Integration</Link></li>
              <li><Link to="/european-union" className="hover:text-accent">→ European Union</Link></li>
              <li><Link to="/asean" className="hover:text-accent">→ ASEAN</Link></li>
              <li><Link to="/financial-institutions" className="hover:text-accent">→ Financial Institutions</Link></li>
              <li><Link to="/quiz" className="hover:text-accent">→ Take the quiz</Link></li>
            </ul>
          </div>
          <div className="ink-card p-6">
            <p className="eyebrow">Contact</p>
            <p className="mt-2 text-sm text-foreground/85">
              Have a correction or a question that isn't answered above? Reach out to the team — contact
              details will be added to the About page.
            </p>
          </div>
        </aside>
      </div>
    </article>
  );
}
