import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import QualitySafetyContent from "@/components/pages/QualitySafetyContent";

export const metadata: Metadata = {
  title: "Quality & Safety",
  description: "Quality assurance, safety coordination, and material-conscious planning at NuraBuild Contracting.",
};

export default function QualitySafetyPage() {
  return (
    <>
      <PageHero
        label="Quality & Safety"
        title="Built Around Coordination and Clear Delivery"
        subtitle="Safety-aware site management, structured quality reviews, and thoughtful material planning."
      />
      <Breadcrumbs items={[{ label: "Quality & Safety" }]} />
      <QualitySafetyContent />
    </>
  );
}
