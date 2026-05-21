interface Props {
  id: string;
  title: string;
  caption?: string;
}

export function YouTubeEmbed({ id, title, caption }: Props) {
  return (
    <figure className="my-8">
      <div className="relative w-full overflow-hidden rounded-sm border border-border" style={{ paddingTop: "56.25%" }}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-xs text-muted-foreground italic">{caption}</figcaption>
      )}
    </figure>
  );
}
