import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Bravo Laser.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="container-base py-14">
          <SectionHeader
            eyebrow="Legal"
            title="Privacy Policy"
            subtitle="Placeholder policy text. Replace with finalized legal content."
          />
        </div>
      </section>
      <section className="container-base py-16 text-sm text-ink.soft">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <p>
            Bravo Laser will publish its privacy policy here, including how we
            handle lead submissions, analytics, and third‑party services.
          </p>
        </div>
      </section>
    </>
  );
}

