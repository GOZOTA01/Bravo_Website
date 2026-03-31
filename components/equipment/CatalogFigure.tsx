import Image, { type StaticImageData } from "next/image";

export function CatalogFigure({
  src,
  alt,
  caption,
  priority,
  className,
  /** When true, show the full image at intrinsic aspect ratio (no letterbox crop). */
  natural = false,
  /** With natural: cap height so tall/portrait assets don't dominate (e.g. carousels). */
  constrainNatural = false,
  /**
   * Fixed aspect frame + object-contain: identical slide dimensions in carousels;
   * full image visible (letterboxing as needed). Mutually exclusive with natural.
   */
  uniformFrame = false,
}: {
  src: StaticImageData;
  alt: string;
  caption?: string;
  priority?: boolean;
  className?: string;
  natural?: boolean;
  constrainNatural?: boolean;
  uniformFrame?: boolean;
}) {
  const sizes = "(max-width: 768px) 100vw, min(1100px, 96vw)";

  const naturalImgClass = constrainNatural
    ? "mx-auto h-auto max-h-[min(52vh,420px)] w-auto max-w-full object-contain sm:max-h-[min(56vh,480px)]"
    : "h-auto w-full";

  const frameBox = "relative aspect-[16/10] w-full sm:aspect-[16/9]";

  return (
    <figure
      className={`overflow-hidden rounded-2xl border border-brand-stroke/80 bg-brand-surfaceMuted/40 shadow-[0_24px_80px_rgba(0,0,0,0.35)] ${className ?? ""}`}
    >
      {uniformFrame ? (
        <div className={frameBox}>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain object-center"
            sizes={sizes}
            priority={priority}
          />
        </div>
      ) : natural ? (
        <Image
          src={src}
          alt={alt}
          width={src.width}
          height={src.height}
          className={naturalImgClass}
          sizes={sizes}
          priority={priority}
        />
      ) : (
        <div className={frameBox}>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-center"
            sizes={sizes}
            priority={priority}
          />
        </div>
      )}
      {caption ? (
        <figcaption className="border-t border-brand-stroke/60 px-4 py-3 text-xs leading-relaxed text-ink.soft">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
