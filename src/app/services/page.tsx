import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServicesContent from "@/components/pages/ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description: "Contracting, fit-out, renovation, and approval support services for residential and commercial spaces in Dubai and Sharjah.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Contracting & Fit-Out Services"
        subtitle="From villa renovations to commercial fit-outs, approval coordination to site supervision."
      />
      <Breadcrumbs items={[{ label: "Services" }]} />
      <ServicesContent />
    </>
  );
}
