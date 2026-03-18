import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = {
  title: "Disclaimer",
  description: "Medical and marketing disclaimers for Bravo Laser.",
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="container-base py-14">
          <SectionHeader
            eyebrow="Legal"
            title="Disclaimer"
            subtitle="Placeholder disclaimer text. Replace with finalized medical/legal language."
          />
        </div>
      </section>
      <section className="container-base py-16 text-sm text-ink.soft">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <p>
            Bravo Laser information is for educational purposes and does not
            replace medical advice. Individual results vary. Consult a licensed
            provider to determine eligibility and appropriate treatment plans.
          </p>
        </div>
      </section>
    </>
  );
}

