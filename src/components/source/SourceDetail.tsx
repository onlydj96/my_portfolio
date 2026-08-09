import Image from "next/image";
import Link from "next/link";
import type { Source, Project } from "@/types/portfolio";
import { getSourceCategoryDisplayName } from "@/lib/utils";

interface SourceDetailProps {
  source: Source;
  relatedProjects?: Project[];
}

export function SourceDetail({ source, relatedProjects }: SourceDetailProps) {
  return (
    <article className="max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-8">
        <div className="mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
            {getSourceCategoryDisplayName(source.category)}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          {source.title}
        </h1>
        <p className="text-lg text-gray-600">{source.description}</p>
      </header>

      {/* Items Gallery */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          자료 목록 ({source.items.length}장)
        </h2>
        <div className="space-y-6">
          {source.items
            .sort((a, b) => a.displayOrder - b.displayOrder)
            .map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                <div className="relative aspect-video bg-gray-100">
                  <Image
                    src={item.imagePath}
                    alt={item.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 896px"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-sm text-gray-600">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects && relatedProjects.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            관련 프로젝트
          </h2>
          <div className="space-y-3">
            {relatedProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 group-hover:text-blue-600">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {project.summary}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
