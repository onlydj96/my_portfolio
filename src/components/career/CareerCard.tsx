"use client";

import { useState } from "react";
import Link from "next/link";
import type { Career } from "@/types/portfolio";
import { TechTag } from "@/components/common/TechTag";
import { formatDateRange } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslatedCareer, getTranslatedProject } from "@/i18n/utils";
import { ui } from "@/i18n/ui";
import { projects } from "@/content/projects";

interface CareerCardProps {
  career: Career;
}

export function CareerCard({ career }: CareerCardProps) {
  const { language } = useLanguage();
  const t = ui[language].career;
  const c = getTranslatedCareer(career, language);

  const relatedProjects = projects
    .filter((p) => career.projectIds.includes(p.id))
    .map((p) => getTranslatedProject(p, language));

  const SHOW_COUNT = 2;
  const [isExpanded, setIsExpanded] = useState(false);
  const hasMore = relatedProjects.length > SHOW_COUNT;
  const visibleProjects = isExpanded ? relatedProjects : relatedProjects.slice(0, SHOW_COUNT);

  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      {/* Timeline marker - decorative */}
      <div aria-hidden="true" className="hidden" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{c.company}</h3>
          <p className="text-gray-600">{c.position}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">
            {formatDateRange(c.startDate, c.endDate, c.isCurrent)}
          </span>
          {c.isCurrent && (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
              {t.current}
            </span>
          )}
        </div>
      </div>

      {/* Summary */}
      <p className="text-gray-700 mb-4">{c.summary}</p>

      {/* Responsibilities by Role */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
          {t.keyResponsibilities}
        </h4>
        <div className="space-y-3">
          {c.roles.map((roleData, roleIndex) => (
            <div key={roleIndex}>
              <h5 className="text-sm font-semibold text-gray-800 mb-1">
                {roleData.role}
              </h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                {roleData.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      {c.achievements.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
            {t.keyAchievements}
          </h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
            {c.achievements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech Stack */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
          {t.techStack}
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {c.techStack.map((tech) => (
            <TechTag key={tech} name={tech} />
          ))}
        </div>
      </div>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
            {t.relatedProjects}
          </h4>
          <ul className="space-y-1">
            {visibleProjects.map((project) => (
              <li key={project.id}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {project.title} →
                </Link>
              </li>
            ))}
          </ul>
          {hasMore && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-1 text-sm text-gray-500 hover:text-gray-700"
            >
              {isExpanded
                ? t.showLessProjects
                : t.showMoreProjects.replace("{n}", String(relatedProjects.length - SHOW_COUNT))}
            </button>
          )}
        </div>
      )}
    </article>
  );
}
