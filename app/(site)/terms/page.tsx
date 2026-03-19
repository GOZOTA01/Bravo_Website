import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for Bravo Laser.",
};

export default function TermsPage() {
  return (
    <>
      <section className="border-b border-brand-stroke bg-brand-bg">
        <div className="container-base py-14">
          <SectionHeader
            eyebrow="Legal"
            title="Terms & Conditions"
            subtitle="Placeholder policy text. Replace with finalized legal content."
          />
        </div>
      </section>
      <section className="container-base py-16 text-sm text-ink.soft">
        <div className="glass rounded-3xl p-8 shadow-sm">
          <p>
            Bravo Laser will publish terms for site use, disclaimers, and
            lead-submission consent language here.
          </p>
        </div>
      </section>
    </>
  );
}

