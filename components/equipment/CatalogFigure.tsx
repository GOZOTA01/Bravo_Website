import Image, { type StaticImageData } from "next/image";

export function CatalogFigure({
  src,
  alt,
  caption,
  priority,
  className,
}: {
  src: StaticImageData;
  alt: string;
  caption?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-2xl border border-brand-stroke/80 bg-brand-surfaceMuted/40 shadow-[0_24px_80px_rgba(0,0,0,0.35)] ${className ?? ""}`}
    >
      <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, min(1100px, 96vw)"
          priority={priority}
        />
      </div>
      {caption ? (
        <figcaption className="border-t border-brand-stroke/60 px-4 py-3 text-xs leading-relaxed text-ink.soft">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
