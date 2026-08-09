import type { ProjectCategory } from "@/types/portfolio";
import { getCategoryDisplayName } from "@/lib/utils";

interface CategoryBadgeProps {
  category: ProjectCategory;
}

const categoryColors: Record<ProjectCategory, string> = {
  AX: "bg-purple-100 text-purple-800",
  PROJECT_MANAGEMENT: "bg-green-100 text-green-800",
  NLP: "bg-yellow-100 text-yellow-800",
  COMPUTER_VISION: "bg-red-100 text-red-800",
  EDGE_AI: "bg-orange-100 text-orange-800",
  WEB: "bg-cyan-100 text-cyan-800",
};

export function CategoryBadge({ category }: CategoryBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColors[category]}`}
    >
      {getCategoryDisplayName(category)}
    </span>
  );
}
