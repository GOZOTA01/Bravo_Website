import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";
import Link from "next/link";

export const metadata = {
  title: "About Us",
  description:
    "Bravo Laser offers FDA-approved Pico Laser Bravo and MaxMaster Slim platforms for non-invasive aesthetic laser and fat reduction care.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-brand-stroke bg-brand-bg">
        <div className="container-base py-14">
          <SectionHeader
            eyebrow="Bravo Laser"
            title="Premium aesthetics, built for real clinics"
            subtitle="We focus on FDA-approved, non-invasive laser and fat reduction: clear expectations, comfortable sessions, and tools providers can run day to day."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/equipment" variant="primary">
              View equipment
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              Contact
            </ButtonLink>
            <ButtonLink href="/provider-benefits" variant="secondary">
              For providers
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="container-base py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div className="space-y-3 text-sm leading-relaxed text-ink.soft sm:text-base">
              <h2 className="text-lg font-semibold text-ink">Who we are</h2>
              <p>
                Bravo Laser brings together professional-grade systems for
                practices that want a credible, modern aesthetics line:{" "}
                <Link
                  href="/equipment#pico-laser-bravo"
                  className="font-medium text-brand-gold underline-offset-4 hover:underline"
                >
                  Pico Laser Bravo
                </Link>{" "}
                for diode and picosecond laser work (including optional AI skin
                analysis), and{" "}
                <Link
                  href="/equipment#maxmaster-slim"
                  className="font-medium text-brand-gold underline-offset-4 hover:underline"
                >
                  MaxMaster Slim
                </Link>{" "}
                for contour-focused body protocols.
              </p>
              <p>
                Patients get straightforward education and a path to a local
                provider. Clinics get positioning, workflow-friendly messaging,
                and a clear story across both platforms.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ink">What we stand for</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Clarity",
                    body: "Honest copy and realistic outcomes, not hype.",
                  },
                  {
                    title: "Comfort",
                    body: "Sessions built to be well tolerated, with no downtime.",
                  },
                  {
                    title: "Consistency",
                    body: "Series-based plans and documentation-friendly workflows.",
                  },
                  {
                    title: "Partnership",
                    body: "Resources for practices adding or growing an aesthetics category.",
                  },
                ].map((v) => (
                  <div
                    key={v.title}
                    className="glass rounded-3xl p-6 shadow-sm"
                  >
                    <h3 className="text-sm font-semibold text-ink">{v.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink.soft">
                      {v.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="glass h-fit rounded-3xl p-6 lg:sticky lg:top-24">
            <h3 className="text-sm font-semibold text-ink">Explore Bravo</h3>
            <p className="mt-2 text-xs leading-relaxed text-ink.soft">
              Dig into how treatment fits together, read FAQs, or find a
              provider near you.
            </p>
            <div className="mt-4 grid gap-3">
              <ButtonLink href="/what-is-bravo-laser" variant="primary" size="sm">
                What is Bravo Laser
              </ButtonLink>
              <ButtonLink href="/treatment" variant="outline" size="sm">
                How treatment works
              </ButtonLink>
              <ButtonLink href="/find-a-provider" variant="outline" size="sm">
                Find a provider
              </ButtonLink>
              <ButtonLink href="/faq" variant="secondary" size="sm">
                FAQs
              </ButtonLink>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

