import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "@/components/layout/Header";

// Mock next/link
vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string; [key: string]: unknown }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

// Mock next/navigation
vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("Header", () => {
  describe("CT-009: 네비게이션 기본 렌더링", () => {
    it("모든 네비게이션 링크 표시", () => {
      render(<Header />);

      expect(screen.getAllByRole("link", { name: /home/i }).length).toBeGreaterThan(0);
      expect(screen.getAllByRole("link", { name: /about/i }).length).toBeGreaterThan(0);
      expect(screen.getAllByRole("link", { name: /career/i }).length).toBeGreaterThan(0);
      expect(screen.getAllByRole("link", { name: /projects/i }).length).toBeGreaterThan(0);
      expect(screen.getAllByRole("link", { name: /contact/i }).length).toBeGreaterThan(0);
    });

    it("로고/사이트명 표시", () => {
      render(<Header />);

      expect(screen.getByText(/Luke Hwangbo/i)).toBeInTheDocument();
    });
  });

  describe("CT-010: 모바일 메뉴", () => {
    it("모바일에서 햄버거 버튼 표시", () => {
      render(<Header />);

      const menuButton = screen.getByRole("button", { name: /메뉴/i });
      expect(menuButton).toBeInTheDocument();
    });

    it("햄버거 버튼 클릭 시 메뉴 토글", () => {
      render(<Header />);

      const menuButton = screen.getByRole("button", { name: /메뉴/i });

      // 초기에는 모바일 메뉴가 닫혀 있음
      expect(menuButton).toHaveAttribute("aria-expanded", "false");

      // 클릭하면 열림
      fireEvent.click(menuButton);
      expect(menuButton).toHaveAttribute("aria-expanded", "true");

      // 다시 클릭하면 닫힘
      fireEvent.click(menuButton);
      expect(menuButton).toHaveAttribute("aria-expanded", "false");
    });
  });

  describe("CT-011: 네비게이션 접근성", () => {
    it("nav 요소에 aria-label 존재", () => {
      render(<Header />);

      const nav = screen.getByRole("navigation");
      expect(nav).toHaveAttribute("aria-label");
    });

    it("현재 페이지에 aria-current 표시", () => {
      render(<Header />);

      // 현재 경로가 "/"이므로 Home 링크에 aria-current 있어야 함
      const homeLinks = screen.getAllByRole("link", { name: /home/i });
      const hasAriaCurrentPage = homeLinks.some(link => link.getAttribute("aria-current") === "page");
      expect(hasAriaCurrentPage).toBe(true);
    });

    it("skip link 존재", () => {
      render(<Header />);

      const skipLink = screen.getByText(/skip to/i);
      expect(skipLink).toBeInTheDocument();
    });
  });
});
