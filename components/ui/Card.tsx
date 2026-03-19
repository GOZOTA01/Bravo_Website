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
        "glass rounded-3xl shadow-sm",
        className
      )}
      {...props}
    />
  );
}

