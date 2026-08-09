import Link from "next/link";
import Image from "next/image";
import type { Source } from "@/types/portfolio";
import { getSourceCategoryDisplayName } from "@/lib/utils";

interface SourceCardProps {
  source: Source;
}

export function SourceCard({ source }: SourceCardProps) {
  const firstItem = source.items[0];

  return (
    <article className="group bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <Link
        href={`/source/${source.slug}`}
        className="block"
        aria-label={`${source.title} 상세보기`}
      >
        {/* Thumbnail */}
        <div className="aspect-video bg-gray-100 relative">
          {firstItem?.imagePath ? (
            <Image
              src={firstItem.imagePath}
              alt={source.title}
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
          {/* Item count badge */}
          {source.items.length > 1 && (
            <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
              {source.items.length}장
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {/* Category */}
          <div className="mb-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
              {getSourceCategoryDisplayName(source.category)}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
            {source.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm line-clamp-2">{source.description}</p>
        </div>
      </Link>
    </article>
  );
}
