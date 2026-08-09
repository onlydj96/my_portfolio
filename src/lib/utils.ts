import type { Project, ProjectCategory, Source, SourceCategory } from "@/types/portfolio";

/**
 * Filter projects by category
 * "All" returns all public projects, specific category filters by category
 */
export function filterProjectsByCategory(
  projects: Project[],
  category: ProjectCategory | "All"
): Project[] {
  const publicProjects = projects.filter((p) => p.visibility !== "HIDDEN");

  if (category === "All") {
    return publicProjects;
  }

  return publicProjects.filter((p) => p.categories.includes(category));
}

/**
 * Sort projects by displayOrder ascending
 */
export function sortProjectsByDisplayOrder(projects: Project[]): Project[] {
  return [...projects].sort((a, b) => a.displayOrder - b.displayOrder);
}

/**
 * Get featured projects (isFeatured === true), limited to max 4
 */
export function getFeaturedProjects(projects: Project[]): Project[] {
  return projects
    .filter((p) => p.isFeatured && p.visibility !== "HIDDEN")
    .sort((a, b) => a.displayOrder - b.displayOrder)
    .slice(0, 4);
}

/**
 * Find project by slug
 */
export function getProjectBySlug(
  projects: Project[],
  slug: string
): Project | undefined {
  return projects.find((p) => p.slug === slug && p.visibility !== "HIDDEN");
}

/**
 * Sort careers by startDate descending (newest first)
 */
export function sortCareersByDate<
  T extends { startDate: string; isCurrent?: boolean }
>(careers: T[]): T[] {
  return [...careers].sort((a, b) => {
    // Current jobs always come first
    if (a.isCurrent && !b.isCurrent) return -1;
    if (!a.isCurrent && b.isCurrent) return 1;

    // Then sort by startDate descending
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });
}

/**
 * Format date range for career display
 */
export function formatDateRange(
  startDate: string,
  endDate?: string,
  isCurrent?: boolean
): string {
  const start = formatDate(startDate);
  if (isCurrent) {
    return `${start} - 현재`;
  }
  if (endDate) {
    return `${start} - ${formatDate(endDate)}`;
  }
  return start;
}

/**
 * Format date to YYYY.MM
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}.${month}`;
}

/**
 * Category display names
 */
export const categoryDisplayNames: Record<ProjectCategory | "All", string> = {
  All: "All",
  AX: "AX Engineering",
  PROJECT_MANAGEMENT: "Project Management",
  NLP: "NLP",
  COMPUTER_VISION: "Computer Vision",
  EDGE_AI: "Edge AI",
  WEB: "Web Service",
};

/**
 * Get category display name
 */
export function getCategoryDisplayName(category: ProjectCategory | "All"): string {
  return categoryDisplayNames[category];
}

/**
 * Check if URL is external
 */
export function isExternalUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

/**
 * Generate aria-label for external link
 */
export function getExternalLinkAriaLabel(title: string): string {
  return `${title} (새 탭에서 열림)`;
}

/**
 * Source category display names
 */
export const sourceCategoryDisplayNames: Record<SourceCategory | "All", string> = {
  All: "전체",
  PROFILE: "프로필",
  PROJECT: "프로젝트",
  TOOL: "도구",
  DOCUMENT: "문서",
};

/**
 * Get source category display name
 */
export function getSourceCategoryDisplayName(category: SourceCategory | "All"): string {
  return sourceCategoryDisplayNames[category];
}

/**
 * Filter sources by category
 */
export function filterSourcesByCategory(
  sources: Source[],
  category: SourceCategory | "All"
): Source[] {
  const publicSources = sources.filter((s) => s.visibility !== "HIDDEN");

  if (category === "All") {
    return publicSources;
  }

  return publicSources.filter((s) => s.category === category);
}

/**
 * Sort sources by displayOrder ascending
 */
export function sortSourcesByDisplayOrder(sources: Source[]): Source[] {
  return [...sources].sort((a, b) => a.displayOrder - b.displayOrder);
}

/**
 * Find source by slug
 */
export function getSourceBySlug(
  sources: Source[],
  slug: string
): Source | undefined {
  return sources.find((s) => s.slug === slug && s.visibility !== "HIDDEN");
}
