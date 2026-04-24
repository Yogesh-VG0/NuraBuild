import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectsListing from "@/components/pages/ProjectsListing";

export const metadata: Metadata = {
  title: "Projects",
  description: "Fictional concept project scopes for villa renovation, office fit-out, and warehouse upgrades in Dubai.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Project Concepts"
        title="Sample Project Presentations"
        subtitle="Fictional project scopes demonstrating how a contractor can present work clearly and professionally."
      />
      <Breadcrumbs items={[{ label: "Projects" }]} />
      <ProjectsListing />
    </>
  );
}
