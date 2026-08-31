import type { ProjectCategory } from "@/types/portfolio";
import { getCategoryDisplayName } from "@/lib/utils";

interface CategoryBadgeProps {
  category: ProjectCategory;
}

const categoryColors: Record<ProjectCategory, string> = {
  AX: "bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300",
  PROJECT_MANAGEMENT: "bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300",
  NLP: "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-300",
  COMPUTER_VISION: "bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300",
  EDGE_AI: "bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-300",
  WEB: "bg-cyan-100 dark:bg-cyan-900/40 text-cyan-800 dark:text-cyan-300",
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
