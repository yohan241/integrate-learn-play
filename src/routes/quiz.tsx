import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Market Integration Quiz — Test Your Knowledge" },
      { name: "description", content: "A 10-question interactive trivia game on market integration, the EU, ASEAN, the World Bank and the IMF." },
      { property: "og:title", content: "Market Integration Quiz" },
    ],
  }),
  component: QuizPage,
});

type Question = {
  q: string;
  options: string[];
  answer: number;
  explain: string;
};

const QUESTIONS: Question[] = [
  {
    q: "Which form of market integration is considered the highest?",
    options: ["Free Trade Agreement", "Customs Union", "Common Market", "Economic Union"],
    answer: 3,
    explain: "An Economic Union integrates monetary, fiscal and other policies — the deepest form of integration.",
  },
  {
    q: "What does CEPT stand for in the ASEAN context?",
    options: [
      "Common Economic Partnership Treaty",
      "Common Effective Preferential Tariff",
      "Central European Pricing Tariff",
      "Coordinated External Policy Tax",
    ],
    answer: 1,
    explain: "CEPT — the Common Effective Preferential Tariff — brings ASEAN intra-regional tariffs to 0–5%.",
  },
  {
    q: "ASEAN was founded on which date?",
    options: ["July 4, 1965", "August 8, 1967", "October 1, 1970", "January 1, 1984"],
    answer: 1,
    explain: "ASEAN was created on August 8, 1967 by the foreign ministers of Indonesia, Malaysia, the Philippines, Singapore and Thailand.",
  },
  {
    q: "Which treaty officially created the European Union?",
    options: ["Treaty of Rome", "Single European Act", "Treaty on European Union (Maastricht)", "Treaty of Lisbon"],
    answer: 2,
    explain: "The 1992 Treaty on European Union, signed at Maastricht, formally established the EU.",
  },
  {
    q: "How many member countries did the EU have at its peak (per this course)?",
    options: ["15", "20", "27", "28"],
    answer: 3,
    explain: "The course material lists 28 EU member states.",
  },
  {
    q: "Which World Bank organization focuses ONLY on the private sector?",
    options: ["IBRD", "IDA", "IFC", "MIGA"],
    answer: 2,
    explain: "The International Finance Corporation (IFC) focuses exclusively on private-sector financing.",
  },
  {
    q: "Where was the IMF founded?",
    options: ["Geneva, Switzerland", "Bretton Woods, New Hampshire", "Brussels, Belgium", "Washington, D.C."],
    answer: 1,
    explain: "The IMF was founded at the United Nations Conference in Bretton Woods, New Hampshire in July 1944.",
  },
  {
    q: "In a floating exchange rate, what determines a currency's value?",
    options: ["Government decree", "Gold reserves", "Supply and demand", "IMF quotas"],
    answer: 2,
    explain: "Floating rates are set by market supply and demand — no government intervention.",
  },
  {
    q: "Which of these is NOT one of the four pillars of the AEC?",
    options: [
      "Single Market & Production Base",
      "Competitive Economic Region",
      "Cultural Harmonization Pact",
      "Integration into the Global Economy",
    ],
    answer: 2,
    explain: "There is no 'Cultural Harmonization Pact' — the four pillars are economic in nature.",
  },
  {
    q: "Which form of integration allows free movement of labor and capital, but stops short of a shared monetary policy?",
    options: ["Free Trade Agreement", "Customs Union", "Common Market", "Preferential Trade Agreement"],
    answer: 2,
    explain: "A Common Market adds free movement of labor and capital — but does not integrate monetary policy.",
  },
];

function QuizPage() {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState<boolean[]>([]);
  const done = idx >= QUESTIONS.length;
  const q = QUESTIONS[idx];

  const progress = useMemo(() => Math.round((idx / QUESTIONS.length) * 100), [idx]);

  function choose(i: number) {
    if (picked !== null) return;
    setPicked(i);
    const correct = i === q.answer;
    if (correct) setScore((s) => s + 1);
    setHistory((h) => [...h, correct]);
  }

  function next() {
    setPicked(null);
    setIdx((i) => i + 1);
  }

  function restart() {
    setIdx(0); setPicked(null); setScore(0); setHistory([]);
  }

  return (
    <article>
      <PageHeader
        eyebrow="Interactive · Chapter V"
        title="Test what you've learned"
        lede="Ten questions covering every chapter of this study companion. No timer — take your time."
      />
      <div className="container-prose py-16 max-w-3xl">
        {!done && (
          <>
            <div className="flex items-center justify-between mb-4">
              <p className="eyebrow">Question {idx + 1} of {QUESTIONS.length}</p>
              <p className="eyebrow">Score: <span className="text-accent">{score}</span></p>
            </div>
            <div className="h-1 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-accent transition-all" style={{ width: `${progress}%` }} />
            </div>

            <section className="ink-card p-8 mt-8">
              <h2 className="font-serif text-2xl md:text-3xl leading-snug">{q.q}</h2>
              <div className="mt-6 grid gap-3">
                {q.options.map((opt, i) => {
                  const isPicked = picked === i;
                  const isAnswer = q.answer === i;
                  const showCorrect = picked !== null && isAnswer;
                  const showWrong = isPicked && !isAnswer;
                  return (
                    <button
                      key={opt}
                      onClick={() => choose(i)}
                      disabled={picked !== null}
                      className={[
                        "text-left px-5 py-4 rounded-sm border transition-all",
                        "flex items-center gap-4",
                        showCorrect ? "border-accent bg-accent/15" :
                        showWrong ? "border-destructive bg-destructive/10" :
                        picked !== null ? "border-border opacity-60" :
                        "border-border hover:border-accent hover:bg-surface",
                      ].join(" ")}
                    >
                      <span className="font-serif text-accent text-lg w-6">{String.fromCharCode(65 + i)}</span>
                      <span className="text-foreground/90">{opt}</span>
                    </button>
                  );
                })}
              </div>
              {picked !== null && (
                <div className="mt-6 p-4 border-l-2 border-accent bg-surface">
                  <p className="eyebrow text-accent">{picked === q.answer ? "Correct" : "Not quite"}</p>
                  <p className="mt-1 text-sm text-foreground/85">{q.explain}</p>
                </div>
              )}
              {picked !== null && (
                <button
                  onClick={next}
                  className="mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-sm text-sm"
                >
                  {idx === QUESTIONS.length - 1 ? "See results →" : "Next question →"}
                </button>
              )}
            </section>
          </>
        )}

        {done && (
          <section className="ink-card p-10 text-center">
            <p className="eyebrow">Quiz complete</p>
            <h2 className="font-serif text-5xl mt-3">
              {score} <span className="text-muted-foreground">/ {QUESTIONS.length}</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              {score === QUESTIONS.length ? "Flawless run. You know your treaties." :
               score >= 7 ? "Strong showing — the fundamentals are with you." :
               score >= 4 ? "A solid start. A second read of the chapters will sharpen things up." :
               "Worth revisiting the chapters — the material rewards a second pass."}
            </p>
            <div className="mt-6 flex justify-center gap-1.5">
              {history.map((h, i) => (
                <span key={i} className={`h-2 w-6 rounded-full ${h ? "bg-accent" : "bg-destructive/60"}`} />
              ))}
            </div>
            <button
              onClick={restart}
              className="mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-sm text-sm"
            >
              Restart quiz
            </button>
          </section>
        )}
      </div>
    </article>
  );
}
