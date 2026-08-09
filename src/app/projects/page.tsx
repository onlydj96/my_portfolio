"use client";

import { Suspense, useState, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { projects } from "@/content/projects";
import { filterProjectsByCategory, sortProjectsByDisplayOrder } from "@/lib/utils";
import { ProjectFilter } from "@/components/project/ProjectFilter";
import { ProjectCard } from "@/components/project/ProjectCard";
import type { ProjectCategory } from "@/types/portfolio";

type FilterCategory = ProjectCategory | "All";

function ProjectsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const initialCategory = useMemo<FilterCategory>(
    () => (categoryParam as FilterCategory) || "All",
    [categoryParam]
  );

  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>(initialCategory);

  // Sync state with URL param when it changes externally
  if (categoryParam && categoryParam !== selectedCategory && categoryParam !== initialCategory) {
    setSelectedCategory(categoryParam as FilterCategory);
  }

  const handleFilterChange = (category: FilterCategory) => {
    setSelectedCategory(category);
    if (category === "All") {
      router.push("/projects");
    } else {
      router.push(`/projects?category=${category}`);
    }
  };

  const filteredProjects = sortProjectsByDisplayOrder(
    filterProjectsByCategory(projects, selectedCategory)
  );

  return (
    <>
      {/* Filter */}
      <div className="mb-8">
        <ProjectFilter
          selectedCategory={selectedCategory}
          onFilterChange={handleFilterChange}
        />
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">해당 카테고리의 프로젝트가 없습니다.</p>
        </div>
      )}
    </>
  );
}

export default function ProjectsPage() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Projects</h1>
        <Suspense
          fallback={
            <div className="text-center py-12">
              <p className="text-gray-500">로딩 중...</p>
            </div>
          }
        >
          <ProjectsContent />
        </Suspense>
      </div>
    </div>
  );
}
