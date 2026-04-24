import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectsListing from "@/components/pages/ProjectsListing";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore representative villa, office, and warehouse scopes delivered by NuraBuild Contracting across Dubai and the UAE.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Projects"
        title="Featured work & case studies"
        subtitle="Representative scopes across residential, commercial, and light industrial environments."
      />
      <Breadcrumbs items={[{ label: "Projects" }]} />
      <ProjectsListing />
    </>
  );
}
