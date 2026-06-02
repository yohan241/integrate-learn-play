import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - The Market Integration Team" },
      { name: "description", content: "About the project and the team behind this Market Integration study companion." },
      { property: "og:title", content: "About the Team" },
    ],
  }),
  component: AboutPage,
});

const teamMembers = [
  { name: "Johan Czar P. Pagba", initials: "JP" },
  { name: "John Rich A. Alaya-ay", initials: "JA" },
  { name: "Dianna Jane Elizabeth Pacatang", initials: "DP" },
  { name: "Matthew David L. Cartagena", initials: "MC" },
  { name: "Carl Justin C. Peralta", initials: "CP" },
  { name: "Mellissa T. Ambeguia", initials: "MA" },
];

function AboutPage() {
  return (
    <article>
      <PageHeader
        eyebrow="Colophon"
        title="About this project"
        lede="A formal, editorial walkthrough of market integration - designed as a study companion for students, instructors and curious readers."
      />
      <div className="container-prose py-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6 text-foreground/85 leading-relaxed">
          <p>
            This site organizes the source material - a presentation on market integration covering the
            five forms of integration, the European Union, ASEAN, the World Bank, and the International
            Monetary Fund - into a quiet, readable digital companion.
          </p>
          <p>
            The intent is not to replace the underlying text but to present it well: navigable, paced, and
            paired with short video explainers from the organizations themselves. The included quiz turns
            passive reading into recall practice.
          </p>
          <h2 className="font-serif text-3xl pt-6">The team</h2>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="ink-card p-5 flex items-center gap-4">
                <div className="h-14 w-14 rounded-full navy-panel grid place-items-center font-serif text-xl">
                  {member.initials}
                </div>
                <div>
                  <p className="font-serif text-lg">{member.name}</p>
                  <p className="text-xs text-muted-foreground">Project team member</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <aside className="space-y-6">
          <div className="navy-panel p-6 rounded-sm">
            <p className="eyebrow text-primary-foreground/60">At a glance</p>
            <dl className="mt-4 space-y-3 text-sm">
              <div><dt className="text-primary-foreground/60">Topic</dt><dd className="font-serif text-xl">Market Integration</dd></div>
              <div><dt className="text-primary-foreground/60">Format</dt><dd>Editorial study companion</dd></div>
              <div><dt className="text-primary-foreground/60">Chapters</dt><dd>4 + interactive quiz</dd></div>
            </dl>
          </div>
          <div className="ink-card p-6">
            <p className="eyebrow">A note</p>
            <p className="mt-2 text-sm text-foreground/85">
              All content is summarized from the provided lecture material and intended strictly for educational
              use. External videos are embedded from their respective publishers.
            </p>
          </div>
        </aside>
      </div>
    </article>
  );
}
