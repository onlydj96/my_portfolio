import Image from "next/image";
import type { Project } from "@/types/portfolio";
import { CategoryBadge } from "@/components/common/CategoryBadge";
import { TechTag } from "@/components/common/TechTag";
import { ExternalLink } from "@/components/common/ExternalLink";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <article className="max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.categories.map((category) => (
            <CategoryBadge key={category} category={category} />
          ))}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          {project.title}
        </h1>
        <p className="text-xl text-gray-600 mb-4">{project.subtitle}</p>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          {project.company && (
            <span>
              <span className="font-medium">소속:</span> {project.company}
            </span>
          )}
          <span>
            <span className="font-medium">역할:</span> {project.role.join(", ")}
          </span>
        </div>
      </header>

      {/* Thumbnail Image */}
      {project.thumbnailImage && (
        <div className="mb-10">
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
            <Image
              src={project.thumbnailImage}
              alt={`${project.title} 대표 이미지`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </div>
      )}

      {/* Content Sections */}
      <div className="space-y-10">
        {/* Summary */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">프로젝트 개요</h2>
          <p className="text-gray-700 leading-relaxed">{project.summary}</p>
        </section>

        {/* Problem */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">문제 정의</h2>
          <p className="text-gray-700 leading-relaxed">{project.problem}</p>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">해결 접근</h2>
          <p className="text-gray-700 leading-relaxed">{project.solution}</p>
        </section>

        {/* Gallery — placed after solution to show the result in context */}
        {project.gallery && project.gallery.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">주요 화면</h2>
            <div className="grid grid-cols-1 gap-6">
              {project.gallery.map((image, index) => (
                <figure key={index}>
                  <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                    <Image
                      src={image.src}
                      alt={image.caption ?? `${project.title} 화면 ${index + 1}`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 896px"
                    />
                  </div>
                  {image.caption && (
                    <figcaption className="mt-2 text-sm text-gray-500 text-center">
                      {image.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Architecture Image */}
        {project.architectureImage && (
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">시스템 아키텍처</h2>
            <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
              <Image
                src={project.architectureImage}
                alt={`${project.title} 시스템 아키텍처`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          </section>
        )}

        {/* Responsibilities */}
        {project.responsibilities.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              {project.isSolo ? "수행 내용" : "담당 역할"}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {project.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Achievements */}
        {project.achievements.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">성과 및 기여</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {project.achievements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Lessons Learned */}
        {project.lessonsLearned && (
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">회고 (Lessons Learned)</h2>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {project.lessonsLearned}
            </div>
          </section>
        )}

        {/* Tech Stack */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">기술 스택</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <TechTag key={tech} name={tech} />
            ))}
          </div>
        </section>

        {/* External Links */}
        {(project.externalUrl || project.repositoryUrl) && (
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">관련 링크</h2>
            <div className="flex flex-wrap gap-4">
              {project.externalUrl && (
                <ExternalLink
                  href={project.externalUrl}
                  title="서비스 바로가기"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  서비스 바로가기
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </ExternalLink>
              )}
              {project.repositoryUrl && (
                <ExternalLink
                  href={project.repositoryUrl}
                  title="GitHub 저장소"
                  className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  GitHub
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </ExternalLink>
              )}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
