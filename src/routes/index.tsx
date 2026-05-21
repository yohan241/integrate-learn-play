import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Market Integration — A Study Companion" },
      { name: "description", content: "Understand how economies integrate: trade agreements, the EU, ASEAN, the World Bank and the IMF — explained clearly." },
      { property: "og:title", content: "Market Integration — A Study Companion" },
      { property: "og:description", content: "Editorial study companion on market integration." },
    ],
  }),
  component: Index,
});

const sections = [
  { to: "/forms", n: "01", title: "Forms of Market Integration", blurb: "From preferential trade agreements to full economic union — the five-step ladder of integration." },
  { to: "/european-union", n: "02", title: "The European Union", blurb: "28 member states, eight founding treaties, and one of the world's deepest integration projects." },
  { to: "/asean", n: "03", title: "ASEAN & the AEC", blurb: "Ten Southeast Asian nations, four pillars, and the path toward a single market." },
  { to: "/financial-institutions", n: "04", title: "Global Financial Institutions", blurb: "Inside the World Bank, the IMF and how exchange rates shape the world economy." },
] as const;

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="container-prose pt-20 pb-24 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow">Vol. I · Global Economics</p>
            <h1 className="font-serif text-6xl md:text-8xl leading-[0.95] mt-4 text-foreground">
              When markets <em className="text-accent not-italic">become</em> one.
            </h1>
            <p className="mt-8 text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Market integration is the slow, deliberate stitching together of national economies — through
              trade agreements, shared currencies, and global institutions. This is a guided tour through
              that process.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/forms" className="px-6 py-3 bg-primary text-primary-foreground text-sm tracking-wide rounded-sm hover:opacity-90">
                Start reading
              </Link>
              <Link to="/quiz" className="px-6 py-3 border border-foreground/20 text-foreground text-sm tracking-wide rounded-sm hover:bg-secondary">
                Test yourself
              </Link>
            </div>
          </div>
          <aside className="lg:col-span-4 ink-card p-6">
            <p className="eyebrow">In this issue</p>
            <ul className="mt-4 space-y-3 text-sm">
              {sections.map((s) => (
                <li key={s.to} className="flex gap-3">
                  <span className="font-serif text-accent text-base w-6">{s.n}</span>
                  <Link to={s.to} className="text-foreground/85 hover:text-foreground hover:gold-underline">{s.title}</Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Definition pullquote */}
      <section className="navy-panel">
        <div className="container-prose py-20">
          <p className="eyebrow text-primary-foreground/60">Defining the term</p>
          <p className="font-serif text-3xl md:text-4xl mt-4 leading-snug max-w-4xl">
            "Market integration is a phenomenon in which markets of goods and services become related to one
            another — experiencing similar patterns of price movement across a defined geographical area."
          </p>
          <p className="mt-6 text-primary-foreground/70 text-sm">It is also the process of combining separate national economies into larger economic regions.</p>
        </div>
      </section>

      {/* Sections grid */}
      <section className="container-prose py-24">
        <div className="flex items-end justify-between border-b border-border pb-4 mb-10">
          <h2 className="font-serif text-3xl">The four chapters</h2>
          <span className="eyebrow hidden md:block">Read in order</span>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {sections.map((s) => (
            <Link key={s.to} to={s.to} className="group bg-background p-8 hover:bg-surface transition-colors">
              <p className="font-serif text-accent text-2xl">{s.n}</p>
              <h3 className="font-serif text-2xl mt-2 text-foreground group-hover:gold-underline inline-block">{s.title}</h3>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{s.blurb}</p>
              <p className="mt-5 eyebrow text-accent">Read chapter →</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
