import { Card } from "@/components/ui/Card";

export function StatCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail?: string;
}) {
  return (
    <Card className="p-5">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink.soft">
        {label}
      </p>
      <p className="mt-2 text-xl font-semibold tracking-tight text-ink">
        {value}
      </p>
      {detail ? (
        <p className="mt-1 text-xs leading-relaxed text-ink.soft">{detail}</p>
      ) : null}
    </Card>
  );
}

