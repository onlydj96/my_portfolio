import type { Project, Career } from "@/types/portfolio";
import type { Language } from "@/context/LanguageContext";
import { projectTranslationsEn } from "@/i18n/en/projects";
import { careerTranslationsEn } from "@/i18n/en/careers";

export function getTranslatedProject(project: Project, language: Language): Project {
  if (language === "ko") return project;
  const t = projectTranslationsEn[project.slug];
  if (!t) return project;
  return {
    ...project,
    title: t.title ?? project.title,
    subtitle: t.subtitle ?? project.subtitle,
    summary: t.summary ?? project.summary,
    role: t.role ?? project.role,
    problem: t.problem ?? project.problem,
    solution: t.solution ?? project.solution,
    responsibilities: t.responsibilities ?? project.responsibilities,
    achievements: t.achievements ?? project.achievements,
    lessonsLearned: t.lessonsLearned ?? project.lessonsLearned,
    galleryTitle: t.galleryTitle ?? project.galleryTitle,
    gallery: project.gallery?.map((img, i) => ({
      ...img,
      caption: t.gallery?.[i]?.caption ?? img.caption,
    })),
  };
}

export function getTranslatedCareer(career: Career, language: Language): Career {
  if (language === "ko") return career;
  const t = careerTranslationsEn[career.id];
  if (!t) return career;
  return {
    ...career,
    position: t.position ?? career.position,
    summary: t.summary ?? career.summary,
    roles: career.roles.map((r, i) => ({
      role: t.roles[i]?.role ?? r.role,
      responsibilities: t.roles[i]?.responsibilities ?? r.responsibilities,
    })),
    achievements: t.achievements ?? career.achievements,
  };
}
