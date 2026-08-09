import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { getProjectBySlug } from "@/lib/utils";
import { ProjectDetail } from "@/components/project/ProjectDetail";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects
    .filter((p) => p.visibility !== "HIDDEN")
    .map((project) => ({
      slug: project.slug,
    }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(projects, slug);

  if (!project) {
    return {
      title: "프로젝트를 찾을 수 없습니다 | Luke Hwangbo",
    };
  }

  return {
    title: `${project.title} | Luke Hwangbo`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(projects, slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectDetail project={project} />
      </div>
    </div>
  );
}
