import { describe, it, expect } from "vitest";
import { projectSchema } from "@/types/portfolio";

describe("Project Schema", () => {
  describe("UT-001: 필수 필드 검증", () => {
    it("모든 필수 필드가 있으면 검증 통과", () => {
      const validProject = {
        id: "1",
        slug: "test-project",
        title: "Test Project",
        subtitle: "Test Subtitle",
        summary: "Test summary",
        categories: ["AX"],
        role: ["Role 1"],
        problem: "Test problem",
        solution: "Test solution",
        responsibilities: [],
        achievements: [],
        techStack: ["React"],
        isFeatured: true,
        displayOrder: 1,
        visibility: "PUBLIC",
      };

      const result = projectSchema.safeParse(validProject);
      expect(result.success).toBe(true);
    });

    it("title 누락 시 검증 실패", () => {
      const invalidProject = {
        id: "1",
        slug: "test-project",
        // title missing
        subtitle: "Test Subtitle",
        summary: "Test summary",
        categories: ["AX"],
        role: ["Role 1"],
        problem: "Test problem",
        solution: "Test solution",
        responsibilities: [],
        achievements: [],
        techStack: ["React"],
        isFeatured: true,
        displayOrder: 1,
        visibility: "PUBLIC",
      };

      const result = projectSchema.safeParse(invalidProject);
      expect(result.success).toBe(false);
    });

    it("slug 누락 시 검증 실패", () => {
      const invalidProject = {
        id: "1",
        // slug missing
        title: "Test Project",
        subtitle: "Test Subtitle",
        summary: "Test summary",
        categories: ["AX"],
        role: ["Role 1"],
        problem: "Test problem",
        solution: "Test solution",
        responsibilities: [],
        achievements: [],
        techStack: ["React"],
        isFeatured: true,
        displayOrder: 1,
        visibility: "PUBLIC",
      };

      const result = projectSchema.safeParse(invalidProject);
      expect(result.success).toBe(false);
    });

    it("summary 누락 시 검증 실패", () => {
      const invalidProject = {
        id: "1",
        slug: "test-project",
        title: "Test Project",
        subtitle: "Test Subtitle",
        // summary missing
        categories: ["AX"],
        role: ["Role 1"],
        problem: "Test problem",
        solution: "Test solution",
        responsibilities: [],
        achievements: [],
        techStack: ["React"],
        isFeatured: true,
        displayOrder: 1,
        visibility: "PUBLIC",
      };

      const result = projectSchema.safeParse(invalidProject);
      expect(result.success).toBe(false);
    });

    it("role 배열이 비어있으면 검증 실패", () => {
      const invalidProject = {
        id: "1",
        slug: "test-project",
        title: "Test Project",
        subtitle: "Test Subtitle",
        summary: "Test summary",
        categories: ["AX"],
        role: [], // empty array
        problem: "Test problem",
        solution: "Test solution",
        responsibilities: [],
        achievements: [],
        techStack: ["React"],
        isFeatured: true,
        displayOrder: 1,
        visibility: "PUBLIC",
      };

      const result = projectSchema.safeParse(invalidProject);
      expect(result.success).toBe(false);
    });

    it("techStack 배열이 비어있으면 검증 실패", () => {
      const invalidProject = {
        id: "1",
        slug: "test-project",
        title: "Test Project",
        subtitle: "Test Subtitle",
        summary: "Test summary",
        categories: ["AX"],
        role: ["Role 1"],
        problem: "Test problem",
        solution: "Test solution",
        responsibilities: [],
        achievements: [],
        techStack: [], // empty array
        isFeatured: true,
        displayOrder: 1,
        visibility: "PUBLIC",
      };

      const result = projectSchema.safeParse(invalidProject);
      expect(result.success).toBe(false);
    });
  });

  describe("UT-002: URL 형식 검증", () => {
    it("유효한 externalUrl 통과", () => {
      const project = {
        id: "1",
        slug: "test-project",
        title: "Test Project",
        subtitle: "Test Subtitle",
        summary: "Test summary",
        categories: ["AX"],
        role: ["Role 1"],
        problem: "Test problem",
        solution: "Test solution",
        responsibilities: [],
        achievements: [],
        techStack: ["React"],
        externalUrl: "https://example.com",
        isFeatured: true,
        displayOrder: 1,
        visibility: "PUBLIC",
      };

      const result = projectSchema.safeParse(project);
      expect(result.success).toBe(true);
    });

    it("무효한 externalUrl 검증 실패", () => {
      const project = {
        id: "1",
        slug: "test-project",
        title: "Test Project",
        subtitle: "Test Subtitle",
        summary: "Test summary",
        categories: ["AX"],
        role: ["Role 1"],
        problem: "Test problem",
        solution: "Test solution",
        responsibilities: [],
        achievements: [],
        techStack: ["React"],
        externalUrl: "not-a-valid-url",
        isFeatured: true,
        displayOrder: 1,
        visibility: "PUBLIC",
      };

      const result = projectSchema.safeParse(project);
      expect(result.success).toBe(false);
    });

    it("externalUrl 없이도 검증 통과", () => {
      const project = {
        id: "1",
        slug: "test-project",
        title: "Test Project",
        subtitle: "Test Subtitle",
        summary: "Test summary",
        categories: ["AX"],
        role: ["Role 1"],
        problem: "Test problem",
        solution: "Test solution",
        responsibilities: [],
        achievements: [],
        techStack: ["React"],
        isFeatured: true,
        displayOrder: 1,
        visibility: "PUBLIC",
      };

      const result = projectSchema.safeParse(project);
      expect(result.success).toBe(true);
    });
  });
});
