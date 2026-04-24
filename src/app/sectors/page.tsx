import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectorsContent from "@/components/pages/SectorsContent";

export const metadata: Metadata = {
  title: "Sectors",
  description: "Residential villas, apartments, offices, and warehouse sectors served by NuraBuild Contracting.",
};

export default function SectorsPage() {
  return (
    <>
      <PageHero
        label="Sectors"
        title="Spaces We Support"
        subtitle="From private villas to commercial offices and industrial warehouses."
      />
      <Breadcrumbs items={[{ label: "Sectors" }]} />
      <SectorsContent />
    </>
  );
}
