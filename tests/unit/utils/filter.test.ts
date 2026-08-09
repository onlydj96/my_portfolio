import { describe, it, expect } from "vitest";
import {
  filterProjectsByCategory,
  getFeaturedProjects,
  getProjectBySlug,
} from "@/lib/utils";
import { mockProjects } from "../../fixtures/projects";

describe("Filter Utils", () => {
  describe("UT-004: 프로젝트 카테고리 필터링", () => {
    it("All 선택 시 모든 공개 프로젝트 반환", () => {
      const result = filterProjectsByCategory(mockProjects, "All");

      // HIDDEN 프로젝트는 제외
      expect(result.length).toBe(4);
      expect(result.every((p) => p.visibility !== "HIDDEN")).toBe(true);
    });

    it("AX 카테고리 선택 시 AX 프로젝트만 반환", () => {
      const result = filterProjectsByCategory(mockProjects, "AX");

      expect(result.length).toBeGreaterThan(0);
      expect(result.every((p) => p.categories.includes("AX"))).toBe(true);
    });

    it("NLP 카테고리 선택 시 NLP 프로젝트만 반환", () => {
      const result = filterProjectsByCategory(mockProjects, "NLP");

      expect(result.length).toBe(1);
      expect(result[0].slug).toBe("test-project-2");
    });

    it("HIDDEN 프로젝트는 항상 제외", () => {
      const result = filterProjectsByCategory(mockProjects, "WEB");

      // hidden-project는 WEB 카테고리지만 제외되어야 함
      expect(result.every((p) => p.visibility !== "HIDDEN")).toBe(true);
    });
  });

  describe("UT-006: Featured 프로젝트 필터", () => {
    it("isFeatured가 true인 프로젝트만 반환", () => {
      const result = getFeaturedProjects(mockProjects);

      expect(result.every((p) => p.isFeatured)).toBe(true);
    });

    it("최대 4개만 반환", () => {
      const result = getFeaturedProjects(mockProjects);

      expect(result.length).toBeLessThanOrEqual(4);
    });

    it("HIDDEN 프로젝트는 제외", () => {
      const result = getFeaturedProjects(mockProjects);

      expect(result.every((p) => p.visibility !== "HIDDEN")).toBe(true);
    });

    it("displayOrder 순으로 정렬", () => {
      const result = getFeaturedProjects(mockProjects);

      for (let i = 1; i < result.length; i++) {
        expect(result[i].displayOrder).toBeGreaterThanOrEqual(
          result[i - 1].displayOrder
        );
      }
    });
  });

  describe("UT-007: 슬러그로 프로젝트 조회", () => {
    it("존재하는 slug로 프로젝트 반환", () => {
      const result = getProjectBySlug(mockProjects, "test-project-1");

      expect(result).toBeDefined();
      expect(result?.slug).toBe("test-project-1");
    });

    it("존재하지 않는 slug는 undefined 반환", () => {
      const result = getProjectBySlug(mockProjects, "non-existent-slug");

      expect(result).toBeUndefined();
    });

    it("HIDDEN 프로젝트는 조회 불가", () => {
      const result = getProjectBySlug(mockProjects, "hidden-project");

      expect(result).toBeUndefined();
    });
  });
});
