import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { CareerCard } from "@/components/career/CareerCard";
import { mockCareers } from "../fixtures/careers";

// Mock next/link
vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string; [key: string]: unknown }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

describe("CareerCard", () => {
  describe("CT-006: Career 카드 기본 렌더링", () => {
    it("회사명과 직책 표시", () => {
      const career = mockCareers[0];
      render(<CareerCard career={career} />);

      expect(screen.getByText(career.company)).toBeInTheDocument();
      // position은 여러 곳에 표시될 수 있으므로 getAllByText 사용
      const positions = screen.getAllByText(career.position);
      expect(positions.length).toBeGreaterThan(0);
    });

    it("기간 표시", () => {
      const career = mockCareers[0];
      render(<CareerCard career={career} />);

      // 현재 직장인 경우 "현재" 표시 (여러 곳에 표시될 수 있음)
      if (career.isCurrent) {
        const currentTexts = screen.getAllByText(/현재/);
        expect(currentTexts.length).toBeGreaterThan(0);
      }
    });

    it("요약 표시", () => {
      const career = mockCareers[0];
      render(<CareerCard career={career} />);

      expect(screen.getByText(career.summary)).toBeInTheDocument();
    });

    it("담당 업무 표시", () => {
      const career = mockCareers[0];
      render(<CareerCard career={career} />);

      // roles 구조로 변경되었으므로 각 role의 responsibilities 확인
      career.roles.forEach((roleData) => {
        roleData.responsibilities.forEach((resp) => {
          expect(screen.getByText(resp)).toBeInTheDocument();
        });
      });
    });

    it("기술 스택 표시", () => {
      const career = mockCareers[0];
      render(<CareerCard career={career} />);

      career.techStack.forEach((tech) => {
        expect(screen.getByText(tech)).toBeInTheDocument();
      });
    });
  });

  describe("CT-007: Career 카드 상태 표시", () => {
    it("현재 직장에 '현재' 뱃지 표시", () => {
      const currentCareer = mockCareers.find((c) => c.isCurrent);
      if (currentCareer) {
        render(<CareerCard career={currentCareer} />);
        const currentTexts = screen.getAllByText(/현재/);
        expect(currentTexts.length).toBeGreaterThan(0);
      }
    });

    it("이전 직장에는 'Current' 뱃지 없음", () => {
      const pastCareer = mockCareers.find((c) => !c.isCurrent);
      if (pastCareer) {
        render(<CareerCard career={pastCareer} />);
        // "현재" 텍스트가 뱃지로 표시되지 않는지 확인 (기간에 포함될 수 있음)
        const currentBadges = screen.queryAllByText(/^현재$/);
        // 이전 직장의 경우 뱃지 형태의 "현재"가 없어야 함
        expect(currentBadges.length).toBe(0);
      }
    });
  });

  describe("CT-008: Career 카드 접근성", () => {
    it("카드에 적절한 role 속성 존재", () => {
      const career = mockCareers[0];
      render(<CareerCard career={career} />);

      const article = screen.getByRole("article");
      expect(article).toBeInTheDocument();
    });

    it("타임라인 마커에 aria-hidden 적용", () => {
      const career = mockCareers[0];
      render(<CareerCard career={career} />);

      // 장식용 요소는 스크린 리더에서 숨김
      const decorativeElements = document.querySelectorAll('[aria-hidden="true"]');
      expect(decorativeElements.length).toBeGreaterThan(0);
    });
  });
});
