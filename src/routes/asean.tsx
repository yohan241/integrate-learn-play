import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";

export const Route = createFileRoute("/asean")({
  head: () => ({
    meta: [
      { title: "ASEAN, the AEC & AFTA — Southeast Asian Integration" },
      { name: "description", content: "The Association of Southeast Asian Nations, the AEC Blueprint 2025, the ASEAN Free Trade Agreement and the four pillars of regional integration." },
      { property: "og:title", content: "ASEAN & the AEC" },
    ],
  }),
  component: ASEANPage,
});

const founders = [
  { name: "Adam Malik", country: "Indonesia" },
  { name: "Narciso R. Ramos", country: "Philippines" },
  { name: "Tun Abdul Razak", country: "Malaysia" },
  { name: "S. Rajaratnam", country: "Singapore" },
  { name: "Thanat Khoman", country: "Thailand" },
];

const joiners = [
  { country: "Brunei Darussalam", when: "January 1984" },
  { country: "Vietnam", when: "July 1995" },
  { country: "Laos & Myanmar", when: "July 1997" },
  { country: "Cambodia", when: "April 1999" },
];

const pillars = [
  { n: "01", title: "Single Market & Production Base", body: "Free flow of goods, services, investment, capital and skilled labor across the region." },
  { n: "02", title: "Competitive Economic Region", body: "Competition policy, consumer protection, intellectual property rights and infrastructure development." },
  { n: "03", title: "Equitable Economic Development", body: "SME development and initiatives that help narrow the development gap among ASEAN members." },
  { n: "04", title: "Integration into the Global Economy", body: "A coherent approach toward external economic relations and participation in global supply networks." },
];

const blueprint = [
  "A highly integrated and cohesive economy",
  "A competitive and dynamic ASEAN",
  "Enhanced connectivity and sectoral cooperation",
  "A resilient, inclusive, people-oriented and people-centered ASEAN",
  "A global ASEAN",
];

function ASEANPage() {
  return (
    <article>
      <PageHeader
        eyebrow="Chapter 03"
        title="ASEAN & the Economic Community"
        lede="Ten nations, half a century of cooperation, and a roadmap toward a single Southeast Asian market."
      />
      <div className="container-prose py-16 space-y-20">
        <section className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <p className="eyebrow">Section 3.1 · Origins</p>
            <h2 className="font-serif text-4xl mt-2">Founded August 8, 1967</h2>
            <p className="mt-4 text-foreground/85 leading-relaxed">
              The Association of Southeast Asian Nations was created by five foreign ministers from
              <strong> Indonesia, Malaysia, the Philippines, Singapore</strong> and <strong>Thailand</strong>.
              They are remembered as the Five Founding Fathers of ASEAN.
            </p>
            <ul className="mt-6 ink-card divide-y divide-border">
              {founders.map((f) => (
                <li key={f.name} className="flex justify-between px-5 py-3">
                  <span className="font-serif text-lg">{f.name}</span>
                  <span className="text-muted-foreground text-sm">{f.country}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="lg:col-span-2 navy-panel p-6 rounded-sm">
            <p className="eyebrow text-primary-foreground/60">Later joiners</p>
            <ul className="mt-4 space-y-3 text-sm">
              {joiners.map((j) => (
                <li key={j.country} className="flex justify-between border-b border-primary-foreground/15 pb-2">
                  <span>{j.country}</span>
                  <span className="text-accent">{j.when}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-primary-foreground/70 text-xs">Together with the founders, these accessions form today's ASEAN 10.</p>
          </aside>
        </section>

        <YouTubeEmbed id="WAnfj8v5acM" title="ASEAN explained in 5 minutes" caption="A concise overview of the Association of Southeast Asian Nations." />

        <section>
          <p className="eyebrow">Section 3.2</p>
          <h2 className="font-serif text-4xl mt-2">AEC Blueprint 2025</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            The AEC Blueprint provides broad strategic direction for the ASEAN Economic Community from
            2016 to 2025 — anchored on five defining characteristics.
          </p>
          <div className="mt-8 grid md:grid-cols-2 gap-px bg-border ink-card">
            {blueprint.map((b, i) => (
              <div key={b} className="bg-background p-6">
                <p className="font-serif text-accent text-2xl">0{i + 1}</p>
                <p className="mt-2 text-foreground/85">{b}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="ink-card p-8">
          <p className="eyebrow">Section 3.3</p>
          <h2 className="font-serif text-4xl mt-2">ASEAN Free Trade Agreement (AFTA)</h2>
          <p className="mt-4 text-foreground/85 leading-relaxed">
            ASEAN members have made significant progress in lowering intra-regional tariffs through the
            <strong> Common Effective Preferential Tariff (CEPT)</strong>. Products under CEPT have been brought
            down to the 0–5% tariff range. An inclusion list determines which goods qualify, though not every
            member is able to follow the agreement to the letter. CEPT was designed, above all, to improve
            the flow of trade between ASEAN members.
          </p>
        </section>

        <section>
          <p className="eyebrow">Section 3.4</p>
          <h2 className="font-serif text-4xl mt-2">Four pillars of the AEC</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">Sometimes called the "Rise of ASEAN," these four pillars structure the region's economic ambitions.</p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <article key={p.n} className="ink-card p-6">
                <p className="font-serif text-accent text-2xl">{p.n}</p>
                <h3 className="font-serif text-2xl mt-1">{p.title}</h3>
                <p className="mt-2 text-foreground/80 text-sm leading-relaxed">{p.body}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
