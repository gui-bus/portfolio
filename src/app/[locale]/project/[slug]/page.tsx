import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getNextProject,
  projectsData,
} from "@/lib/projectsData";
import { ProjectPageClient } from "@/components/sections/projectPageClient";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);
  const nextProject = getNextProject(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <ProjectPageClient project={project} nextProject={nextProject} />
  );
}
