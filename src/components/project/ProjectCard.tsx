import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types/portfolio";
import { CategoryBadge } from "@/components/common/CategoryBadge";
import { TechTag } from "@/components/common/TechTag";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <Link
        href={`/projects/${project.slug}`}
        className="block"
        aria-label={`${project.title} 프로젝트 상세보기`}
      >
        {/* Thumbnail */}
        <div className="aspect-video bg-gray-100 relative">
          {project.thumbnailImage ? (
            <Image
              src={project.thumbnailImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <svg
                className="w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.categories.map((category) => (
              <CategoryBadge key={category} category={category} />
            ))}
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
            {project.title}
          </h3>

          {/* Summary */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.summary}</p>

          {/* Role */}
          <div className="mb-4">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">담당 역할</span>
            <p className="text-sm text-gray-700 mt-1 line-clamp-1">{project.role.join(", ")}</p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((tech) => (
              <TechTag key={tech} name={tech} />
            ))}
            {project.techStack.length > 4 && (
              <span className="text-xs text-gray-500 self-center">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
