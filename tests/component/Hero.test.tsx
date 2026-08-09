import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/home/Hero";

// Mock next/link
vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string; [key: string]: unknown }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

// Mock next/image
vi.mock("next/image", () => ({
  default: ({ alt, ...props }: { alt: string; [key: string]: unknown }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} {...props} />
  ),
}));

describe("Hero", () => {
  describe("CT-012: Hero 섹션 렌더링", () => {
    it("메인 타이틀 표시", () => {
      render(<Hero />);

      expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    });

    it("서브타이틀/설명 표시", () => {
      render(<Hero />);

      // 황보성욱 (한국어 이름) 또는 Luke Hwangbo 텍스트 확인
      expect(screen.getByText(/황보성욱|Luke Hwangbo/)).toBeInTheDocument();
    });

    it("CTA 버튼 표시", () => {
      render(<Hero />);

      // Projects 또는 Contact로 이동하는 CTA
      const ctaLinks = screen.getAllByRole("link");
      expect(ctaLinks.length).toBeGreaterThan(0);
    });
  });

  describe("Hero 접근성", () => {
    it("제목 계층 구조 올바름", () => {
      render(<Hero />);

      const h1 = screen.getByRole("heading", { level: 1 });
      expect(h1).toBeInTheDocument();
    });

    it("링크에 접근 가능한 이름 존재", () => {
      render(<Hero />);

      const links = screen.getAllByRole("link");
      links.forEach((link) => {
        expect(link).toHaveAccessibleName();
      });
    });
  });
});
