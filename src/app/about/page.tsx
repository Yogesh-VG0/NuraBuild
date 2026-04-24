import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description: "About NuraBuild Contracting — a fictional UAE contractor concept focused on renovation, fit-out, and project coordination.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="About NuraBuild Contracting"
        subtitle="Clarity, coordination, and professional project delivery for residential and commercial spaces across the UAE."
      />
      <Breadcrumbs items={[{ label: "About" }]} />
      <AboutContent />
    </>
  );
}
