import Link from "next/link";
import { type ComponentProps } from "react";

type Variant = "primary" | "gold" | "secondary" | "outline" | "link";
type Size = "sm" | "md";

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

const base =
  "inline-flex items-center justify-center rounded-pill font-semibold transition will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-b from-brand-emerald to-brand-emerald2 text-white shadow-glow hover:translate-y-[-1px] hover:shadow-[0_0_0_1px_rgba(13,163,143,0.30),0_18px_90px_rgba(13,163,143,0.18)]",
  gold: "bg-gradient-to-b from-brand-gold to-brand-gold2 text-brand-bg shadow-gold hover:translate-y-[-1px] hover:shadow-[0_0_0_1px_rgba(214,179,106,0.28),0_18px_90px_rgba(214,179,106,0.16)]",
  secondary:
    "glass text-ink hover:border-[rgba(214,179,106,0.25)] hover:text-brand-mint",
  outline:
    "border border-brand-stroke bg-transparent text-ink hover:border-brand-gold/40 hover:text-brand-gold",
  link: "text-ink.soft underline-offset-4 hover:text-ink hover:underline",
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

