import Link from "next/link";
import { projects } from "@/content/projects";
import { getFeaturedProjects } from "@/lib/utils";
import { ProjectCard } from "@/components/project/ProjectCard";

export function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects(projects);

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
