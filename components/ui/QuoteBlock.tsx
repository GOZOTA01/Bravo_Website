import { Card } from "@/components/ui/Card";

export function QuoteBlock({
  quote,
  name,
  title,
}: {
  quote: string;
  name: string;
  title?: string;
}) {
  return (
    <Card className="relative overflow-hidden p-6">
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-brand.emerald/10 blur-2xl" />
      <blockquote className="relative text-sm leading-relaxed text-ink">
        “{quote}”
      </blockquote>
      <div className="mt-4 text-xs text-ink.soft">
        <p className="font-semibold text-ink">{name}</p>
        {title ? <p>{title}</p> : null}
      </div>
    </Card>
  );
}

