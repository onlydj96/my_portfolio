"use client";

import type { ProjectCategory } from "@/types/portfolio";
import { categoryDisplayNames } from "@/lib/utils";

type FilterCategory = ProjectCategory | "All";

interface ProjectFilterProps {
  selectedCategory: FilterCategory;
  onFilterChange: (category: FilterCategory) => void;
}

const categories: FilterCategory[] = [
  "All",
  "AX",
  "PROJECT_MANAGEMENT",
  "NLP",
  "COMPUTER_VISION",
  "EDGE_AI",
  "WEB",
];

export function ProjectFilter({ selectedCategory, onFilterChange }: ProjectFilterProps) {
  return (
    <div
      role="group"
      aria-label="프로젝트 카테고리 필터"
      className="flex flex-wrap gap-2"
    >
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onFilterChange(category)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              onFilterChange(category);
            }
          }}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === category
              ? "bg-gray-900 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          aria-pressed={selectedCategory === category}
        >
          {categoryDisplayNames[category]}
        </button>
      ))}
    </div>
  );
}
