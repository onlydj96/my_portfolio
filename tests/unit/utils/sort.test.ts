import { describe, it, expect } from "vitest";
import { sortProjectsByDisplayOrder, sortCareersByDate } from "@/lib/utils";
import { mockProjects } from "../../fixtures/projects";
import { mockCareers } from "../../fixtures/careers";

describe("Sort Utils", () => {
  describe("UT-005: 프로젝트 정렬 - displayOrder 기준", () => {
    it("displayOrder 오름차순으로 정렬", () => {
      const shuffled = [...mockProjects].sort(() => Math.random() - 0.5);
      const result = sortProjectsByDisplayOrder(shuffled);

      for (let i = 1; i < result.length; i++) {
        expect(result[i].displayOrder).toBeGreaterThanOrEqual(
          result[i - 1].displayOrder
        );
      }
    });

    it("원본 배열을 변경하지 않음", () => {
      const original = [...mockProjects];
      sortProjectsByDisplayOrder(mockProjects);

      expect(mockProjects).toEqual(original);
    });
  });

  describe("UT-008: Career 정렬 - 최신순", () => {
    it("현재 직장이 먼저 표시", () => {
      const result = sortCareersByDate(mockCareers);

      const currentIndex = result.findIndex((c) => c.isCurrent);
      expect(currentIndex).toBe(0);
    });

    it("startDate 내림차순으로 정렬 (현재 직장 제외)", () => {
      const result = sortCareersByDate(mockCareers);
      const pastCareers = result.filter((c) => !c.isCurrent);

      for (let i = 1; i < pastCareers.length; i++) {
        const prevDate = new Date(pastCareers[i - 1].startDate);
        const currDate = new Date(pastCareers[i].startDate);
        expect(prevDate.getTime()).toBeGreaterThanOrEqual(currDate.getTime());
      }
    });

    it("원본 배열을 변경하지 않음", () => {
      const original = [...mockCareers];
      sortCareersByDate(mockCareers);

      expect(mockCareers).toEqual(original);
    });
  });
});
