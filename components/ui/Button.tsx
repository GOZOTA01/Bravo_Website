import Link from "next/link";
import { type ComponentProps } from "react";

type Variant = "primary" | "gold" | "secondary" | "outline" | "link";
type Size = "sm" | "md";

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

const base =
  "inline-flex items-center justify-center rounded-pill font-semibold transition will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-b from-brand-gold to-brand-gold2 text-brand-onGold shadow-glow hover:translate-y-[-1px] hover:shadow-glowHover",
  gold:
    "bg-gradient-to-b from-brand-gold to-brand-gold2 text-brand-onGold shadow-glow hover:translate-y-[-1px] hover:shadow-glowHover",
  secondary:
    "border border-brand-stroke bg-brand-surfaceMuted/90 text-ink backdrop-blur-sm hover:border-brand-gold/50 hover:text-brand-gold",
  outline:
    "border border-brand-gold/55 bg-transparent text-ink hover:border-brand-gold hover:bg-brand-gold hover:text-brand-onGold",
  link: "text-ink.soft underline-offset-4 hover:text-brand-gold hover:underline decoration-brand-gold/60",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-2.5 text-xs sm:text-sm",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ComponentProps<"button"> & { variant?: Variant; size?: Size }) {
  return (
    <button
      className={cx(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant; size?: Size }) {
  return (
    <Link
      className={cx(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
