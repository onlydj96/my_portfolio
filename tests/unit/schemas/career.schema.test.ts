import { describe, it, expect } from "vitest";
import { careerSchema } from "@/types/portfolio";

describe("Career Schema", () => {
  describe("UT-003: Career 필수 필드 검증", () => {
    it("모든 필수 필드가 있으면 검증 통과", () => {
      const validCareer = {
        id: "1",
        company: "Test Company",
        position: "Engineer",
        startDate: "2022-01-01",
        isCurrent: true,
        summary: "Test summary",
        roles: [
          {
            role: "Engineer",
            responsibilities: ["Responsibility 1"],
          },
        ],
        achievements: [],
        techStack: [],
        projectIds: [],
      };

      const result = careerSchema.safeParse(validCareer);
      expect(result.success).toBe(true);
    });

    it("company 누락 시 검증 실패", () => {
      const invalidCareer = {
        id: "1",
        // company missing
        position: "Engineer",
        startDate: "2022-01-01",
        isCurrent: true,
        summary: "Test summary",
        roles: [
          {
            role: "Engineer",
            responsibilities: ["Responsibility 1"],
          },
        ],
        achievements: [],
        techStack: [],
        projectIds: [],
      };

      const result = careerSchema.safeParse(invalidCareer);
      expect(result.success).toBe(false);
    });

    it("position 누락 시 검증 실패", () => {
      const invalidCareer = {
        id: "1",
        company: "Test Company",
        // position missing
        startDate: "2022-01-01",
        isCurrent: true,
        summary: "Test summary",
        roles: [
          {
            role: "Engineer",
            responsibilities: ["Responsibility 1"],
          },
        ],
        achievements: [],
        techStack: [],
        projectIds: [],
      };

      const result = careerSchema.safeParse(invalidCareer);
      expect(result.success).toBe(false);
    });

    it("startDate 누락 시 검증 실패", () => {
      const invalidCareer = {
        id: "1",
        company: "Test Company",
        position: "Engineer",
        // startDate missing
        isCurrent: true,
        summary: "Test summary",
        roles: [
          {
            role: "Engineer",
            responsibilities: ["Responsibility 1"],
          },
        ],
        achievements: [],
        techStack: [],
        projectIds: [],
      };

      const result = careerSchema.safeParse(invalidCareer);
      expect(result.success).toBe(false);
    });

    it("summary 누락 시 검증 실패", () => {
      const invalidCareer = {
        id: "1",
        company: "Test Company",
        position: "Engineer",
        startDate: "2022-01-01",
        isCurrent: true,
        // summary missing
        roles: [
          {
            role: "Engineer",
            responsibilities: ["Responsibility 1"],
          },
        ],
        achievements: [],
        techStack: [],
        projectIds: [],
      };

      const result = careerSchema.safeParse(invalidCareer);
      expect(result.success).toBe(false);
    });

    it("roles 배열이 비어있으면 검증 실패", () => {
      const invalidCareer = {
        id: "1",
        company: "Test Company",
        position: "Engineer",
        startDate: "2022-01-01",
        isCurrent: true,
        summary: "Test summary",
        roles: [], // empty array
        achievements: [],
        techStack: [],
        projectIds: [],
      };

      const result = careerSchema.safeParse(invalidCareer);
      expect(result.success).toBe(false);
    });

    it("endDate는 선택적 필드", () => {
      const careerWithEndDate = {
        id: "1",
        company: "Test Company",
        position: "Engineer",
        startDate: "2022-01-01",
        endDate: "2023-12-31",
        isCurrent: false,
        summary: "Test summary",
        roles: [
          {
            role: "Engineer",
            responsibilities: ["Responsibility 1"],
          },
        ],
        achievements: [],
        techStack: [],
        projectIds: [],
      };

      const result = careerSchema.safeParse(careerWithEndDate);
      expect(result.success).toBe(true);
    });
  });
});
