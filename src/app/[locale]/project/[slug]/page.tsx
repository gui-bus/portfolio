import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getNextProject,
  projectsData,
} from "@/lib/projectsData";
import { ProjectPageClient } from "@/components/sections/projectPageClient";
import { getTranslations } from "next-intl/server";
import { MainClientLayout } from "@/components/common/mainClientLayout";

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
  const t = await getTranslations("Projects");

  if (!project) {
    return { title: "Project Not Found" };
  }

  const title = t(`${project.slug}.title`);
  const description = t(`${project.slug}.description`);

  return {
    title: `${title} | Case Study`,
    description: description,
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
    <MainClientLayout>
      <ProjectPageClient project={project} nextProject={nextProject} />
    </MainClientLayout>
  );
}
