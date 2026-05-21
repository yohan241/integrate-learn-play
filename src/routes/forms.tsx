import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/forms")({
  head: () => ({
    meta: [
      { title: "Forms of Market Integration — Five Stages of Trade" },
      { name: "description", content: "The five forms of market integration: preferential trade agreement, free trade agreement, customs union, common market, and economic union." },
      { property: "og:title", content: "Forms of Market Integration" },
    ],
  }),
  component: FormsPage,
});

const forms = [
  { n: "I", name: "Preferential Trade Agreement", body: "Involves lower trade barriers between countries that have signed the agreement. The lightest form of integration — a handshake on tariffs.", depth: "Lowest depth" },
  { n: "II", name: "Free Trade Agreement", body: "Reduces barriers to trade among member countries to zero. Each member, however, still has full autonomy in deciding external tariffs with non-member countries.", depth: "Low depth" },
  { n: "III", name: "Customs Union", body: "Countries agree to abolish tariff and non-tariff barriers among themselves and adopt a common external tariff toward the rest of the world.", depth: "Moderate depth" },
  { n: "IV", name: "Common Market", body: "Builds on a customs union by allowing free movement of labor and capital within the union — people and money cross borders as easily as goods.", depth: "Deep" },
  { n: "V", name: "Economic Union", body: "The highest form of market and economic integration. Member countries also integrate monetary, fiscal, and other policies — moving toward a single economic identity.", depth: "Deepest" },
] as const;

function FormsPage() {
  return (
    <article>
      <PageHeader
        eyebrow="Chapter 01"
        title="The five forms of market integration"
        lede="Economic integration is not a single act — it is a ladder. Each rung surrenders a little more sovereignty in exchange for deeper economic ties."
      />
      <div className="container-prose py-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          {forms.map((f) => (
            <section key={f.n} className="ink-card p-8">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-serif text-3xl text-foreground">
                  <span className="text-accent mr-3">{f.n}.</span>{f.name}
                </h2>
                <span className="eyebrow whitespace-nowrap">{f.depth}</span>
              </div>
              <p className="mt-4 text-foreground/85 leading-relaxed">{f.body}</p>
            </section>
          ))}
        </div>
        <aside className="space-y-6">
          <div className="navy-panel p-6 rounded-sm">
            <p className="eyebrow text-primary-foreground/60">At a glance</p>
            <ol className="mt-4 space-y-2 text-sm">
              {forms.map((f) => (
                <li key={f.n} className="flex justify-between border-b border-primary-foreground/15 pb-2">
                  <span className="text-primary-foreground/85">{f.name}</span>
                  <span className="font-serif text-accent">{f.n}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="ink-card p-6">
            <p className="eyebrow">Key term</p>
            <h3 className="font-serif text-xl mt-2">Tariff</h3>
            <p className="text-sm text-muted-foreground mt-2">A government-imposed tax on imported goods, designed to raise revenue or protect domestic industries.</p>
          </div>
        </aside>
      </div>
    </article>
  );
}
