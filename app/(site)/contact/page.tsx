import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";
import { PatientLeadForm } from "@/components/forms/PatientLeadForm";
import { ProviderLeadForm } from "@/components/forms/ProviderLeadForm";

export const metadata = {
  title: "Contact",
  description:
    "Contact Bravo Laser for patient support and provider inquiries. Built to support separate B2C and B2B conversion flows.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-brand-stroke bg-brand-bg">
        <div className="container-base py-14">
          <SectionHeader
            eyebrow="Get in touch"
            title="Contact Bravo Laser"
            subtitle="Choose the path that matches your goals—patient consultation or provider inquiry."
          />
        </div>
      </section>

      <section className="container-base py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-3xl p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-ink">Patients</h3>
            <p className="mt-2 text-xs leading-relaxed text-ink.soft">
              Request a consult, ask questions about what to expect, or get help
              finding the right clinic.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <ButtonLink href="/contact?type=patient" variant="primary" size="sm">
                Consultation request
              </ButtonLink>
              <ButtonLink href="/find-a-provider" variant="outline" size="sm">
                Find a provider
              </ButtonLink>
            </div>
          </div>

          <div className="glass rounded-3xl p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-ink">Providers</h3>
            <p className="mt-2 text-xs leading-relaxed text-ink.soft">
              Learn about adding Bravo Laser to your practice, integration
              requirements, and available support.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <ButtonLink
                href="/contact?type=provider"
                variant="primary"
                size="sm"
              >
                Provider inquiry
              </ButtonLink>
              <ButtonLink href="/provider-benefits" variant="outline" size="sm">
                Provider benefits
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="glass rounded-3xl p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-ink">
              Patient consultation request
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink.soft">
              Send a request and we’ll connect you with the next best step—either
              a local provider or a guidance call to map your plan.
            </p>
            <div className="mt-6">
              <PatientLeadForm />
            </div>
          </div>

          <div className="glass rounded-3xl p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-ink">Provider inquiry</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink.soft">
              Interested in offering Bravo Laser? Share your practice details and
              we’ll follow up with next steps.
            </p>
            <div className="mt-6">
              <ProviderLeadForm />
            </div>

            <div className="my-10 h-px bg-brand-stroke/60" />

            <h2 className="text-lg font-semibold text-ink">Direct contact</h2>
            <dl className="mt-4 space-y-4 text-sm text-ink.soft">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink">
                  Support
                </dt>
                <dd className="mt-1">support@bravolaser.com</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink">
                  Sales
                </dt>
                <dd className="mt-1">sales@bravolaser.com</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink">
                  Phone
                </dt>
                <dd className="mt-1">(555) 012-3456</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink">
                  Headquarters
                </dt>
                <dd className="mt-1">United States</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}

