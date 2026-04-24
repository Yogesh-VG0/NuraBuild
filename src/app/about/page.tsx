import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how NuraBuild Contracting approaches renovation, commercial fit-out, approvals, and site supervision across the UAE.",
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
