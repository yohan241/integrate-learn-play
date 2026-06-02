import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";

export const Route = createFileRoute("/financial-institutions")({
  head: () => ({
    meta: [
      { title: "International Financial Institutions — World Bank & IMF" },
      { name: "description", content: "The World Bank, the IMF, the five World Bank organizations, and how exchange rates and currencies work." },
      { property: "og:title", content: "Global Financial Institutions" },
    ],
  }),
  component: FIPage,
});

const wbOrgs = [
  { abbr: "IBRD", name: "International Bank for Reconstruction and Development", body: "Lends to governments of middle-income and creditworthy low-income countries." },
  { abbr: "IDA", name: "International Development Association", body: "Provides interest-free loans and grants to the governments of the poorest countries." },
  { abbr: "IFC", name: "International Finance Corporation", body: "Focused only on the private sector — financing business in developing economies." },
  { abbr: "MIGA", name: "Multilateral Investment Guarantee Agency", body: "Promotes foreign direct investment into developing countries to support growth, reduce poverty, and improve lives." },
  { abbr: "ICSID", name: "International Centre for Settlement of Investment Disputes", body: "Provides international facilities for conciliation and arbitration of investment disputes." },
];

const imfMission = [
  { title: "Surveillance", body: "Oversees the international monetary system and monitors the economic and financial policies of member countries." },
  { title: "Lending", body: "A core responsibility of the IMF — providing loans to member countries experiencing actual or potential balance-of-payments problems." },
  { title: "Capacity Development", body: "Technical assistance and training that helps member countries design and implement strong economic policies and institutions." },
];

function FIPage() {
  return (
    <article>
      <PageHeader
        eyebrow="Chapter 04"
        title="International Financial Institutions"
        lede="The institutions that fund, stabilize and supervise the global economy — from the World Bank's reconstruction loans to the IMF's currency surveillance."
      />
      <div className="container-prose py-16 space-y-20">
        <section className="ink-card p-8">
          <h2 className="font-serif text-3xl">What is an IFI?</h2>
          <p className="mt-4 text-foreground/85 leading-relaxed max-w-3xl">
            International financial institutions provide financial support — through grants and loans — for
            economic and social development activities in developing countries. They also extend loans to
            private businesses investing in those countries, and play a significant role in the privatization
            and regulation of public utilities and natural resources.
          </p>
        </section>

        {/* World Bank */}
        <section>
          <p className="eyebrow">Section 4.1</p>
          <h2 className="font-serif text-5xl mt-2">The World Bank</h2>
          <div className="mt-6 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4 text-foreground/85 leading-relaxed">
              <p>The World Bank is the world's largest development institution. It has worked with more than 100 developing countries, and was founded in 1944 under its original name — the <em>International Bank for Reconstruction and Development</em>.</p>
              <p>Its goals are clear: to <strong>end extreme poverty</strong>, and to <strong>promote shared prosperity</strong> by raising the incomes of the poorest 40% of every country's population.</p>
            </div>
            <aside className="navy-panel p-6 rounded-sm">
              <p className="eyebrow text-primary-foreground/60">Quick facts</p>
              <dl className="mt-4 space-y-3 text-sm">
                <div><dt className="text-primary-foreground/60">Founded</dt><dd className="font-serif text-2xl">1944</dd></div>
                <div><dt className="text-primary-foreground/60">Countries served</dt><dd className="font-serif text-2xl">100+</dd></div>
                <div><dt className="text-primary-foreground/60">Original name</dt><dd className="text-accent">IBRD</dd></div>
              </dl>
            </aside>
          </div>

          <YouTubeEmbed id="iEw0z7d1kS8" title="Poverty, Prosperity and Planet: Where We Stand and How To Move the Dial" caption="World Bank Group context on poverty reduction and shared prosperity." />

          <h3 className="font-serif text-2xl mt-4">The five World Bank organizations</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {wbOrgs.map((o) => (
              <article key={o.abbr} className="ink-card p-6">
                <p className="font-serif text-accent text-xl">{o.abbr}</p>
                <h4 className="font-serif text-xl mt-1">{o.name}</h4>
                <p className="mt-2 text-sm text-foreground/80 leading-relaxed">{o.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* IMF */}
        <section>
          <p className="eyebrow">Section 4.2</p>
          <h2 className="font-serif text-5xl mt-2">International Monetary Fund</h2>
          <p className="mt-4 text-foreground/85 leading-relaxed max-w-3xl">
            The IMF is an international organization of <strong>189 member countries</strong>, working to foster global
            monetary cooperation, secure financial stability, facilitate international trade, promote high
            employment and sustainable economic growth, and reduce poverty around the world. It was created
            at the UN Conference in Bretton Woods, New Hampshire, in July 1944.
          </p>
          <p className="mt-4 italic text-muted-foreground max-w-3xl">
            The IMF's primary purpose is to ensure the stability of the international monetary system — the
            system of exchange rates and international payments.
          </p>

          <YouTubeEmbed id="bnagSbIX2E8" title="What is IMF and why does it matter?" caption="An accessible explainer on the International Monetary Fund's role." />

          <h3 className="font-serif text-2xl mt-4">Mission of the IMF</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {imfMission.map((m, i) => (
              <article key={m.title} className="ink-card p-6">
                <p className="font-serif text-accent text-2xl">0{i + 1}</p>
                <h4 className="font-serif text-xl mt-1">{m.title}</h4>
                <p className="mt-2 text-sm text-foreground/80 leading-relaxed">{m.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Exchange Rates */}
        <section className="ink-card p-8">
          <p className="eyebrow">Section 4.3</p>
          <h2 className="font-serif text-4xl mt-2">How exchange rates work</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif text-2xl text-accent">Floating exchange rate</h3>
              <p className="mt-3 text-foreground/85 leading-relaxed">
                The value of a currency is set by the open market — driven by <strong>supply and demand</strong>.
                If demand rises, value rises. If demand falls, value falls. No government intervention dictates
                the rate.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-accent">Fixed exchange rate</h3>
              <p className="mt-3 text-foreground/85 leading-relaxed">
                The government manipulates the exchange rate — often anchored to <strong>gold reserves</strong> or
                a stable foreign currency — instead of letting the market dictate the value of its currency.
              </p>
            </div>
          </div>
        </section>

        {/* Funding */}
        <section>
          <p className="eyebrow">Section 4.4</p>
          <h2 className="font-serif text-4xl mt-2">Where the IMF gets its money</h2>
          <ol className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              { n: "01", title: "Member quotas", body: "Most resources for IMF loans come from member countries, primarily through their payment of quotas." },
              { n: "02", title: "Borrowing", body: "Multilateral and bilateral borrowing arrangements supplement the fund's lending capacity." },
              { n: "03", title: "Temporary supplements", body: "Additional resources that act as a temporary supplement to quota-based funding." },
            ].map((s) => (
              <li key={s.n} className="ink-card p-6">
                <p className="font-serif text-accent text-2xl">{s.n}</p>
                <h3 className="font-serif text-xl mt-1">{s.title}</h3>
                <p className="mt-2 text-sm text-foreground/80 leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-muted-foreground text-sm">
            <strong className="text-foreground">Lending capacity:</strong> the IMF can use its quota-funded holdings of currencies from financially
            strong economies to finance lending. Transactions are selected by the executive board.
          </p>
        </section>
      </div>
    </article>
  );
}
