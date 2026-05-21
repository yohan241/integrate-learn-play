import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="container-prose py-12 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-xl">Market Integration</h3>
          <p className="text-sm text-muted-foreground mt-2 max-w-sm">
            An editorial study companion exploring how national economies merge into
            larger trade regions — from the EU and ASEAN to the World Bank and IMF.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-3">Explore</p>
          <ul className="space-y-1.5 text-sm">
            <li><Link to="/forms" className="hover:text-foreground text-foreground/75">Forms of Integration</Link></li>
            <li><Link to="/european-union" className="hover:text-foreground text-foreground/75">European Union</Link></li>
            <li><Link to="/asean" className="hover:text-foreground text-foreground/75">ASEAN</Link></li>
            <li><Link to="/financial-institutions" className="hover:text-foreground text-foreground/75">Financial Institutions</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-3">Engage</p>
          <ul className="space-y-1.5 text-sm">
            <li><Link to="/quiz" className="hover:text-foreground text-foreground/75">Take the Quiz</Link></li>
            <li><Link to="/about" className="hover:text-foreground text-foreground/75">About the Team</Link></li>
            <li><Link to="/help" className="hover:text-foreground text-foreground/75">Help & FAQ</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-prose py-5 text-xs text-muted-foreground flex justify-between">
          <span>© {new Date().getFullYear()} Market Integration Study</span>
          <span>For educational purposes</span>
        </div>
      </div>
    </footer>
  );
}
