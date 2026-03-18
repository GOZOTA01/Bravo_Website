import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProviderSearch } from "@/components/providers/ProviderSearch";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = {
  title: "Find a Provider",
  description:
    "Find a Bravo Laser provider near you. Search by ZIP, city, or state. Built to be powered by Supabase/PostgreSQL in the next phase.",
};

export default function FindAProviderPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="container-base py-14">
          <SectionHeader
            eyebrow="Locate a clinic"
            title="Find a Bravo Laser provider"
            subtitle="Search by ZIP, city, or state to connect with a local practice offering Bravo Laser treatments."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact?type=patient" variant="primary">
              Request a consultation
            </ButtonLink>
            <ButtonLink href="/treatment" variant="secondary">
              Understand the treatment
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="container-base py-16">
        <ProviderSearch />
      </section>
    </>
  );
}

