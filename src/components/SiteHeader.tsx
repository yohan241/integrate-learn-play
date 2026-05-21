import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/forms", label: "Forms" },
  { to: "/european-union", label: "European Union" },
  { to: "/asean", label: "ASEAN" },
  { to: "/financial-institutions", label: "Financial Institutions" },
  { to: "/quiz", label: "Quiz" },
  { to: "/about", label: "About" },
  { to: "/help", label: "Help" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-border bg-background/85 backdrop-blur sticky top-0 z-40">
      <div className="container-prose flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="inline-block h-8 w-8 rounded-sm navy-panel grid place-items-center font-serif text-lg">M</span>
          <span className="leading-tight">
            <span className="block font-serif text-lg text-foreground">Market Integration</span>
            <span className="block eyebrow">A study companion</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 rounded-sm text-foreground/80 hover:text-foreground hover:bg-secondary transition-colors"
              activeProps={{ className: "px-3 py-2 rounded-sm text-foreground bg-secondary gold-underline" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          className="lg:hidden p-2 border border-border rounded-sm"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-px bg-foreground mb-1.5" />
          <span className="block w-5 h-px bg-foreground mb-1.5" />
          <span className="block w-5 h-px bg-foreground" />
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-prose py-3 grid gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-sm text-foreground/80 hover:bg-secondary"
                activeProps={{ className: "px-3 py-2 rounded-sm text-foreground bg-secondary" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
