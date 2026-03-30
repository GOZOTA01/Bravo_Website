import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Bravo Laser.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="section-charcoal border-b border-brand-stroke">
        <div className="container-base py-14">
          <SectionHeader
            eyebrow="Legal"
            title="Privacy Policy"
            subtitle="Placeholder policy text. Replace with finalized legal content."
          />
        </div>
      </section>
      <section className="container-base py-16 text-sm text-ink.soft">
        <div className="glass rounded-3xl p-8 shadow-sm">
          <p>
            Bravo Laser will publish its privacy policy here, including how we
            handle lead submissions, analytics, and third-party services.
          </p>
        </div>
      </section>
    </>
  );
}

