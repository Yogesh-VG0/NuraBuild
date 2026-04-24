import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/siteData";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectDetailContent from "@/components/pages/ProjectDetailContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: `${project.description} — Fictional concept project by NuraBuild Contracting.`,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <div className="pt-16 md:pt-[72px]">
        <Breadcrumbs
          items={[
            { label: "Projects", href: "/projects" },
            { label: project.title },
          ]}
        />
      </div>
      <ProjectDetailContent project={project} />
    </>
  );
}
