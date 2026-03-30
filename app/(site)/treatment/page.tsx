import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  treatmentAreasList,
  treatmentAreaDetails,
} from "@/lib/content/treatment-areas";

export const metadata = {
  title: "Treatment",
  description:
    "Understand the Bravo Laser treatment experience from consultation to sessions to results, plus body areas you can target with a provider-guided plan.",
};

export default function TreatmentPage() {
  return (
    <>
      <section className="section-charcoal border-b border-brand-stroke">
        <div className="container-base py-14">
          <SectionHeader
            eyebrow="Comfortable. Structured. Clinical."
            title="The Bravo Laser treatment experience"
            subtitle="A provider-guided plan designed for real life: no surgery, no downtime, and a protocol built around consistency over time."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact?type=patient" variant="primary">
              Request a Consultation
            </ButtonLink>
            <ButtonLink href="/find-a-provider" variant="secondary">
              Find a Provider
            </ButtonLink>
            <ButtonLink href="#treatment-areas" variant="outline">
              Browse treatment areas
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container-base py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="space-y-10 text-sm leading-relaxed text-ink.soft sm:text-base">
              <div>
                <h2 className="text-lg font-semibold text-ink">
                  1) Consultation
                </h2>
                <p className="mt-2">
                  Your provider reviews goals, health context, and the areas you
                  want to target. You’ll align on a plan that’s realistic and
                  measurable, with a session cadence that fits your schedule.
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-ink">
                  2) Treatment sessions
                </h2>
                <p className="mt-2">
                  Treatments are applied externally. Many patients describe the
                  experience as gentle and easy to tolerate. Sessions are
                  designed to be consistent, structured, and clinic-friendly.
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-ink">
                  3) Results over time
                </h2>
                <p className="mt-2">
                  Improvements are typically gradual. Your provider may track
                  circumference, photos, and fit changes to evaluate progress.
                  Lifestyle support can be used to reinforce outcomes.
                </p>
              </div>
              <div className="glass rounded-3xl p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-ink">
                  Realistic expectations
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ink.soft">
                  Results vary by individual, body area, and plan adherence.
                  Bravo Laser is not a substitute for overall health habits or
                  medical weight management. It is a targeted fat reduction
                  option for stubborn areas.
                </p>
              </div>
            </div>
          </div>

          <aside className="glass rounded-3xl p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-ink">Quick answers</h3>
            <dl className="mt-4 space-y-4 text-xs text-ink.soft">
              <div>
                <dt className="font-semibold text-ink">Downtime</dt>
                <dd>None. Return to normal activities immediately.</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Typical plan</dt>
                <dd>A structured series of sessions (often multiple).</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Best for</dt>
                <dd>Stubborn areas where diet/exercise aren’t enough.</dd>
              </div>
            </dl>
            <div className="mt-6 grid gap-3">
              <ButtonLink href="/patient-results" variant="outline" size="sm">
                Explore patient results
              </ButtonLink>
              <ButtonLink href="/faq#patients" variant="secondary" size="sm">
                Read FAQs
              </ButtonLink>
            </div>
          </aside>
        </div>
        </div>
      </section>

      <section
        id="treatment-areas"
        className="scroll-mt-24 border-y border-brand-stroke bg-gradient-to-b from-brand-bg2/25 to-brand-bg"
      >
        <div className="container-base py-16 sm:py-20">
          <SectionHeader
            eyebrow="Targeted, provider-guided"
            title="Treatment areas"
            subtitle="Each zone below includes what to expect, who it is often a fit for, and quick answers so you can jump to the area you care about."
            align="center"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {treatmentAreasList.map((a) => (
              <Card key={a.slug} className="glass p-6">
                <h3 className="text-sm font-semibold text-ink">{a.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink.soft">
                  {a.blurb}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <ButtonLink
                    href={`/treatment#${a.slug}`}
                    variant="outline"
                    size="sm"
                  >
                    Area details
                  </ButtonLink>
                  <ButtonLink href="/find-a-provider" variant="link" size="sm">
                    Find provider
                  </ButtonLink>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container-base py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-semibold tracking-[0.06em] text-ink sm:text-2xl">
            Area-by-area details
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink.soft">
            Jump to a section or read straight through. Your provider will
            personalize the plan for your goals.
          </p>
        </div>

        <div className="mt-14 space-y-0">
          {treatmentAreasList.map((a) => {
            const area = treatmentAreaDetails[a.slug];
            return (
              <article
                key={a.slug}
                id={a.slug}
                className="scroll-mt-24 border-b border-brand-stroke/80 py-14 last:border-b-0"
              >
                <div className="grid gap-10 lg:grid-cols-3">
                  <div className="space-y-6 text-sm leading-relaxed text-ink.soft sm:text-base lg:col-span-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                        {a.name}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-ink sm:text-xl">
                        {area.headline}
                      </h3>
                      <p className="mt-3">{area.commonWhy}</p>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-ink">
                        What to expect
                      </h4>
                      <p className="mt-2">{area.whatToExpect}</p>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-ink">
                        Ideal candidate
                      </h4>
                      <p className="mt-2">{area.idealCandidate}</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <ButtonLink href="/contact?type=patient" variant="primary">
                        Request a consultation
                      </ButtonLink>
                      <ButtonLink href="/find-a-provider" variant="outline">
                        Find a provider
                      </ButtonLink>
                    </div>
                  </div>

                  <aside className="glass h-fit rounded-3xl p-6 shadow-sm">
                    <h4 className="text-sm font-semibold text-ink">
                      Frequently asked questions
                    </h4>
                    <div className="mt-4 space-y-4 text-xs text-ink.soft">
                      {area.faqs.map((f) => (
                        <div key={f.q} className="glass rounded-2xl p-4">
                          <p className="font-semibold text-ink">{f.q}</p>
                          <p className="mt-2 leading-relaxed">{f.a}</p>
                        </div>
                      ))}
                    </div>
                  </aside>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
