"use client";

import Image from "next/image";
import type { Project } from "@/types/portfolio";
import { CategoryBadge } from "@/components/common/CategoryBadge";
import { TechTag } from "@/components/common/TechTag";
import { ExternalLink } from "@/components/common/ExternalLink";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslatedProject } from "@/i18n/utils";
import { ui } from "@/i18n/ui";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const { language } = useLanguage();
  const t = ui[language].projectDetail;
  const p = getTranslatedProject(project, language);

  return (
    <article className="max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {p.categories.map((category) => (
            <CategoryBadge key={category} category={category} />
          ))}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-slate-100 mb-3">
          {p.title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-slate-400 mb-4">{p.subtitle}</p>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-slate-400">
          {p.company && (
            <span>
              <span className="font-medium text-gray-700 dark:text-slate-300">{t.company}:</span> {p.company}
            </span>
          )}
          <span>
            <span className="font-medium text-gray-700 dark:text-slate-300">{t.role}:</span> {p.role.join(", ")}
          </span>
        </div>
      </header>

      {/* Thumbnail Image */}
      {p.thumbnailImage && (
        <div className="mb-10">
          <div className="relative aspect-video bg-gray-100 dark:bg-slate-700 rounded-xl overflow-hidden border border-gray-200 dark:border-slate-600">
            <Image
              src={p.thumbnailImage}
              alt={p.title}
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
          <h2 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-3">{t.overview}</h2>
          <p className="text-gray-700 dark:text-slate-300 leading-relaxed">{p.summary}</p>
        </section>

        {/* Problem */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-3">{t.problem}</h2>
          <p className="text-gray-700 dark:text-slate-300 leading-relaxed">{p.problem}</p>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-3">{t.solution}</h2>
          <p className="text-gray-700 dark:text-slate-300 leading-relaxed">{p.solution}</p>
        </section>

        {/* Gallery */}
        {p.gallery && p.gallery.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-4">{p.galleryTitle ?? t.gallery}</h2>
            <div className="grid grid-cols-1 gap-6">
              {p.gallery.map((image, index) => (
                <figure key={index}>
                  <div className="relative aspect-video bg-gray-100 dark:bg-slate-700 rounded-xl overflow-hidden border border-gray-200 dark:border-slate-600">
                    <Image
                      src={image.src}
                      alt={image.caption ?? p.title}
                      fill
                      className={image.fit === "contain" ? "object-contain" : "object-cover object-top"}
                      sizes="(max-width: 768px) 100vw, 896px"
                    />
                  </div>
                  {image.caption && (
                    <figcaption className="mt-2 text-sm text-gray-500 dark:text-slate-400 text-center">
                      {image.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Architecture Image */}
        {p.architectureImage && (
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-3">{t.architecture}</h2>
            <div className="relative aspect-video bg-gray-100 dark:bg-slate-700 rounded-xl overflow-hidden border border-gray-200 dark:border-slate-600">
              <Image
                src={p.architectureImage}
                alt={p.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          </section>
        )}

        {/* Responsibilities */}
        {p.responsibilities.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-3">
              {p.isSolo ? t.performedBy : t.responsibilities}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-slate-300">
              {p.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Achievements */}
        {p.achievements.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-3">{t.achievements}</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-slate-300">
              {p.achievements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Lessons Learned */}
        {p.lessonsLearned && (
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-3">{t.lessonsLearned}</h2>
            <div className="text-gray-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
              {p.lessonsLearned}
            </div>
          </section>
        )}

        {/* Tech Stack */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-3">{t.techStack}</h2>
          <div className="flex flex-wrap gap-2">
            {p.techStack.map((tech) => (
              <TechTag key={tech} name={tech} />
            ))}
          </div>
        </section>

        {/* External Links */}
        {(p.externalUrl || p.repositoryUrl) && (
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-3">{t.links}</h2>
            <div className="flex flex-wrap gap-3">
              {p.externalUrl && (
                <ExternalLink
                  href={p.externalUrl}
                  title={t.visitSite}
                  className="group inline-flex items-center gap-2.5 px-4 py-2.5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg text-sm font-medium text-gray-700 dark:text-slate-200 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150"
                >
                  <svg className="w-4 h-4 text-gray-400 dark:text-slate-500 group-hover:text-blue-500 transition-colors duration-150 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  {t.visitSite}
                  <svg className="w-3.5 h-3.5 opacity-50 group-hover:translate-x-0.5 transition-transform duration-150 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </ExternalLink>
              )}
              {p.repositoryUrl && (
                <ExternalLink
                  href={p.repositoryUrl}
                  title={t.github}
                  className="group inline-flex items-center gap-2.5 px-4 py-2.5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg text-sm font-medium text-gray-700 dark:text-slate-200 hover:border-gray-400 dark:hover:border-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-150"
                >
                  <svg className="w-4 h-4 text-gray-400 dark:text-slate-500 group-hover:text-gray-700 dark:group-hover:text-slate-300 transition-colors duration-150 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  {t.github}
                  <svg className="w-3.5 h-3.5 opacity-50 group-hover:translate-x-0.5 transition-transform duration-150 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
