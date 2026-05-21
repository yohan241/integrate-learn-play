interface Props {
  eyebrow: string;
  title: string;
  lede?: string;
}

export function PageHeader({ eyebrow, title, lede }: Props) {
  return (
    <header className="pt-16 pb-10 border-b border-border">
      <div className="container-prose">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="font-serif text-5xl md:text-6xl mt-3 text-foreground leading-[1.05]">{title}</h1>
        {lede && <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">{lede}</p>}
        <div className="rule-gold mt-8 max-w-32" />
      </div>
    </header>
  );
}
