import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = {
  title: "Patient Results",
  description:
    "Explore Bravo Laser before-and-after style results, patient stories, and what outcomes can look like with a consistent, provider-guided treatment plan.",
};

const placeholderResults = Array.from({ length: 9 }).map((_, i) => ({
  id: `result-${i + 1}`,
  title: `Transformation ${i + 1}`,
  detail: "Series-based plan • Gradual results • Provider-guided",
}));

export default function PatientResultsPage() {
  return (
    <>
      <section className="border-b border-brand-stroke bg-brand-bg">
        <div className="container-base py-14">
          <SectionHeader
            eyebrow="Confidence, backed by process"
            title="Patient results"
            subtitle="A visual, conversion-first overview of what Bravo Laser can look like over a structured treatment plan. Replace placeholders with real before/after assets when ready."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/find-a-provider" variant="primary">
              Find a Provider
            </ButtonLink>
            <ButtonLink href="/contact?type=patient" variant="secondary">
              See if you’re a candidate
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="container-base py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderResults.map((r) => (
            <div
              key={r.id}
              className="glass group overflow-hidden rounded-3xl shadow-sm"
            >
              <div className="h-44 bg-gradient-to-br from-brand-bg2/30 via-brand-bg to-brand-gold/15 transition group-hover:scale-[1.01]" />
              <div className="p-5">
                <h3 className="text-sm font-semibold text-ink">{r.title}</h3>
                <p className="mt-1 text-xs text-ink.soft">{r.detail}</p>
                <div className="mt-4 flex gap-3 text-[11px] text-ink.soft">
                  <span className="rounded-full bg-white/5 px-2 py-1 border border-brand-stroke">
                    Abdomen
                  </span>
                  <span className="rounded-full bg-white/5 px-2 py-1 border border-brand-stroke">
                    Waist
                  </span>
                  <span className="rounded-full bg-white/5 px-2 py-1 border border-brand-stroke">
                    Thighs
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-brand-stroke bg-brand-surface p-8 backdrop-blur">
          <h2 className="text-lg font-semibold text-ink">
            Expected outcomes (high level)
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink.soft">
            Bravo Laser is designed for circumference and contour change over
            time. Your provider will set expectations based on the areas being
            treated, the number of sessions, and your overall plan.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/contact?type=patient" variant="primary">
              Request a consult
            </ButtonLink>
            <ButtonLink href="/treatment" variant="outline">
              Understand the process
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

