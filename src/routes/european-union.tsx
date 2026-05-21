import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";

export const Route = createFileRoute("/european-union")({
  head: () => ({
    meta: [
      { title: "The European Union — Legal Basis & Member States" },
      { name: "description", content: "The 28 EU member states and the eight treaties that built the European Union, from the 1952 Coal and Steel Community to the 2007 Treaty of Lisbon." },
      { property: "og:title", content: "The European Union" },
    ],
  }),
  component: EUPage,
});

const members = [
  "Austria","Belgium","Bulgaria","Croatia","Cyprus","Czech Republic","Denmark","Estonia",
  "Finland","France","Germany","Greece","Hungary","Ireland","Italy","Latvia","Lithuania",
  "Luxembourg","Malta","Netherlands","Poland","Portugal","Romania","Slovakia","Slovenia",
  "Spain","Sweden","United Kingdom",
];

const timeline = [
  { year: "1952", title: "Treaty Establishing the European Coal and Steel Community", body: "The first supranational European treaty — pooling coal and steel production among six founding states to make war 'not merely unthinkable, but materially impossible.'" },
  { year: "March 25, 1957", title: "Treaties of Rome — EEC & EURATOM", body: "Created the European Economic Community and the European Atomic Energy Community, laying the foundation for a common market." },
  { year: "April 8, 1965", title: "Merger Treaty (Brussels Treaty)", body: "Merged the executive bodies of the three communities into a single Commission and a single Council." },
  { year: "February 17, 1986", title: "Single European Act", body: "First major revision of the Treaties of Rome — set the target of a single internal market by 1992." },
  { year: "February 7, 1992", title: "Treaty on European Union (Maastricht)", body: "Officially created the European Union and laid the groundwork for the single currency, the euro." },
  { year: "October 2, 1997", title: "Treaty of Amsterdam", body: "Reformed EU institutions in preparation for the arrival of new member countries." },
  { year: "February 26, 2001", title: "Treaty of Nice", body: "Further institutional reform to enable the EU to function effectively after its enlargement to 25 members." },
  { year: "December 13, 2007", title: "Treaty of Lisbon", body: "Streamlined decision-making, strengthened the European Parliament, and gave the EU a permanent President of the European Council." },
];

function EUPage() {
  return (
    <article>
      <PageHeader
        eyebrow="Chapter 02"
        title="The European Union"
        lede="The world's most ambitious experiment in economic integration — built treaty by treaty over more than half a century."
      />
      <div className="container-prose py-16 space-y-20">
        <YouTubeEmbed id="O37yJBFRrfg" title="What is the European Union?" caption="A primer on how and why the EU was formed." />

        <section>
          <p className="eyebrow">Section 2.1</p>
          <h2 className="font-serif text-4xl mt-2">28 member states</h2>
          <p className="text-muted-foreground mt-3 max-w-3xl">At its peak the European Union counted 28 member countries — a continent-wide common market spanning more than 500 million people.</p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-border ink-card">
            {members.map((m) => (
              <div key={m} className="bg-background px-4 py-3 text-sm text-foreground/85">{m}</div>
            ))}
          </div>
        </section>

        <section>
          <p className="eyebrow">Section 2.2</p>
          <h2 className="font-serif text-4xl mt-2">Legal basis — a timeline</h2>
          <p className="text-muted-foreground mt-3 max-w-3xl">Eight treaties trace the legal scaffolding of the Union — from a postwar steel pact to a modern political community.</p>
          <ol className="mt-10 relative border-l border-border ml-3">
            {timeline.map((t) => (
              <li key={t.year} className="ml-8 mb-10 last:mb-0">
                <span className="absolute -left-2.5 h-5 w-5 rounded-full bg-accent border-4 border-background" aria-hidden />
                <p className="eyebrow text-accent">{t.year}</p>
                <h3 className="font-serif text-2xl mt-1">{t.title}</h3>
                <p className="mt-2 text-foreground/80 leading-relaxed max-w-2xl">{t.body}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </article>
  );
}
