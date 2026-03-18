import { type ComponentProps } from "react";

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export function Card({
  className,
  ...props
}: ComponentProps<"div"> & { className?: string }) {
  return (
    <div
      className={cx(
        "rounded-3xl border border-slate-200 bg-white shadow-sm",
        className
      )}
      {...props}
    />
  );
}

