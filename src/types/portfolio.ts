import { z } from "zod";

// Project Category
export const projectCategorySchema = z.enum([
  "AX",
  "PROJECT_MANAGEMENT",
  "NLP",
  "COMPUTER_VISION",
  "EDGE_AI",
  "WEB",
]);

export type ProjectCategory = z.infer<typeof projectCategorySchema>;

// Skill Category
export const skillCategorySchema = z.enum([
  "AI",
  "AX",
  "PM",
  "FRONTEND",
  "INFRASTRUCTURE",
]);

export type SkillCategory = z.infer<typeof skillCategorySchema>;

// Visibility
export const visibilitySchema = z.enum(["PUBLIC", "SUMMARY_ONLY", "HIDDEN"]);

export type Visibility = z.infer<typeof visibilitySchema>;

// Project Schema
export const projectSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  title: z.string().min(1),
  subtitle: z.string(),
  summary: z.string().min(1),
  categories: z.array(projectCategorySchema).min(1),
  role: z.array(z.string()).min(1),
  company: z.string().optional(),
  problem: z.string().min(1),
  solution: z.string().min(1),
  responsibilities: z.array(z.string()),
  achievements: z.array(z.string()),
  isSolo: z.boolean().optional(),
  lessonsLearned: z.string().optional(),
  techStack: z.array(z.string()).min(1),
  architectureImage: z.string().optional(),
  thumbnailImage: z.string().optional(),
  galleryTitle: z.string().optional(),
  gallery: z.array(z.object({
    src: z.string(),
    caption: z.string().optional(),
    fit: z.enum(["cover", "contain"]).optional(),
  })).optional(),
  externalUrl: z.string().url().optional(),
  repositoryUrl: z.string().url().optional(),
  isFeatured: z.boolean(),
  displayOrder: z.number().int().positive(),
  visibility: visibilitySchema,
});

export type Project = z.infer<typeof projectSchema>;

// Career Role Responsibilities Schema
export const careerRoleSchema = z.object({
  role: z.string().min(1),
  responsibilities: z.array(z.string()).min(1),
});

export type CareerRole = z.infer<typeof careerRoleSchema>;

// Career Schema
export const careerSchema = z.object({
  id: z.string().min(1),
  company: z.string().min(1),
  position: z.string().min(1),
  startDate: z.string().min(1),
  endDate: z.string().optional(),
  isCurrent: z.boolean(),
  summary: z.string().min(1),
  roles: z.array(careerRoleSchema).min(1),
  achievements: z.array(z.string()),
  techStack: z.array(z.string()),
  projectIds: z.array(z.string()),
});

export type Career = z.infer<typeof careerSchema>;

// Skill Schema
export const skillSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  category: skillCategorySchema,
  description: z.string().optional(),
  relatedProjectIds: z.array(z.string()),
});

export type Skill = z.infer<typeof skillSchema>;

// Profile Schema
export const profileSchema = z.object({
  name: z.object({
    english: z.string().min(1),
    korean: z.string().min(1),
  }),
  positions: z.array(z.string()).min(1),
  tagline: z.string().min(1),
  bio: z.string().min(1),
  contact: z.object({
    email: z.string().email(),
    phone: z.string().optional(),
    github: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    resume: z.string().optional(),
  }),
  profileImage: z.string().optional(),
  profileImageMobile: z.string().optional(),
  ogImage: z.string().optional(),
});

export type Profile = z.infer<typeof profileSchema>;

// Contact Request Schema
export const contactRequestSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(1),
  website: z.string().optional(), // Honeypot field
});

export type ContactRequest = z.infer<typeof contactRequestSchema>;

// Contact Response Schema
export const contactResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});

export type ContactResponse = z.infer<typeof contactResponseSchema>;

// Source Category
export const sourceCategorySchema = z.enum([
  "PROFILE",
  "PROJECT",
  "TOOL",
  "DOCUMENT",
]);

export type SourceCategory = z.infer<typeof sourceCategorySchema>;

// Source Item Schema (individual image/file in a source)
export const sourceItemSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().optional(),
  imagePath: z.string().min(1),
  displayOrder: z.number().int().positive(),
});

export type SourceItem = z.infer<typeof sourceItemSchema>;

// Source Schema
export const sourceSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  category: sourceCategorySchema,
  items: z.array(sourceItemSchema).min(1),
  relatedProjectIds: z.array(z.string()).optional(),
  displayOrder: z.number().int().positive(),
  visibility: visibilitySchema,
});

export type Source = z.infer<typeof sourceSchema>;

// Validation helpers
export function validateProject(data: unknown): Project {
  return projectSchema.parse(data);
}

export function validateProjects(data: unknown[]): Project[] {
  return data.map((item) => projectSchema.parse(item));
}

export function validateCareer(data: unknown): Career {
  return careerSchema.parse(data);
}

export function validateCareers(data: unknown[]): Career[] {
  return data.map((item) => careerSchema.parse(item));
}

export function validateProfile(data: unknown): Profile {
  return profileSchema.parse(data);
}

export function validateSource(data: unknown): Source {
  return sourceSchema.parse(data);
}

export function validateSources(data: unknown[]): Source[] {
  return data.map((item) => sourceSchema.parse(item));
}
