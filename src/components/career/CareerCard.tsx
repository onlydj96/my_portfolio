import Link from "next/link";
import type { Career } from "@/types/portfolio";
import { TechTag } from "@/components/common/TechTag";
import { formatDateRange } from "@/lib/utils";

interface CareerCardProps {
  career: Career;
}

export function CareerCard({ career }: CareerCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      {/* Timeline marker - decorative */}
      <div aria-hidden="true" className="hidden" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{career.company}</h3>
          <p className="text-gray-600">{career.position}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">
            {formatDateRange(career.startDate, career.endDate, career.isCurrent)}
          </span>
          {career.isCurrent && (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
              현재
            </span>
          )}
        </div>
      </div>

      {/* Summary */}
      <p className="text-gray-700 mb-4">{career.summary}</p>

      {/* Responsibilities by Role */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
          주요 업무
        </h4>
        <div className="space-y-3">
          {career.roles.map((roleData, roleIndex) => (
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
      {career.achievements.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
            핵심 성과
          </h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
            {career.achievements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech Stack */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
          기술 스택
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {career.techStack.map((tech) => (
            <TechTag key={tech} name={tech} />
          ))}
        </div>
      </div>

      {/* Related Projects */}
      {career.projectIds.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
            관련 프로젝트
          </h4>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/projects"
              className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
            >
              프로젝트 보기 →
            </Link>
          </div>
        </div>
      )}
    </article>
  );
}
