"use client";

import Link from "next/link";
import { projects } from "@/content/projects";
import { getFeaturedProjects } from "@/lib/utils";
import { ProjectCard } from "@/components/project/ProjectCard";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/i18n/ui";

export function FeaturedProjects() {
  const { language } = useLanguage();
  const t = ui[language].home;
  const featuredProjects = getFeaturedProjects(projects);

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-slate-100">
              {t.featuredProjects}
            </h2>
            <Link
              href="/projects"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
            >
              {t.viewAll}
            </Link>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
