import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = {
  title: "Treatment",
  description:
    "Understand the Bravo Laser treatment experience—from consultation to sessions to results timeline—plus what to expect during and after each appointment.",
};

export default function TreatmentPage() {
  return (
    <>
      <section className="border-b border-brand-stroke bg-brand-bg">
        <div className="container-base py-14">
          <SectionHeader
            eyebrow="Comfortable. Structured. Clinical."
            title="The Bravo Laser treatment experience"
            subtitle="A provider-guided plan designed for real life—no surgery, no downtime, and a protocol built around consistency over time."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact?type=patient" variant="primary">
              Request a Consultation
            </ButtonLink>
            <ButtonLink href="/find-a-provider" variant="secondary">
              Find a Provider
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="container-base py-16">
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
                  designed to be consistent, structured, and clinic‑friendly.
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
                  medical weight management—it’s a targeted body contouring
                  option for stubborn areas.
                </p>
              </div>
            </div>
          </div>

          <aside className="glass rounded-3xl p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-ink">
              Quick answers
            </h3>
            <dl className="mt-4 space-y-4 text-xs text-ink.soft">
              <div>
                <dt className="font-semibold text-ink">Downtime</dt>
                <dd>None—return to normal activities immediately.</dd>
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
      </section>
    </>
  );
}

