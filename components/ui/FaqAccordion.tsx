export type FaqItem = { question: string; answer: string };

export function FaqAccordion({
  items,
}: {
  items: Array<FaqItem>;
}) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-2xl border border-slate-200 bg-white px-5 py-4"
        >
          <summary className="cursor-pointer list-none text-sm font-semibold text-ink">
            <span className="flex items-center justify-between gap-4">
              {item.question}
              <span className="text-ink.soft transition group-open:rotate-45">
                +
              </span>
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-ink.soft">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}

