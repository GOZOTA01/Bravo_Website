import Link from "next/link";
import { type ComponentProps } from "react";

type Variant = "primary" | "secondary" | "outline" | "link";
type Size = "sm" | "md";

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

const base =
  "inline-flex items-center justify-center rounded-pill font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand.emerald focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary: "bg-brand.emerald text-white shadow-sm hover:bg-emerald-600",
  secondary:
    "border border-slate-300 bg-white text-ink hover:border-brand.emerald hover:text-brand.emerald",
  outline:
    "border border-brand.emerald text-brand.emerald hover:bg-brand.light",
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

