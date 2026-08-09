import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProjectCard } from "@/components/project/ProjectCard";
import { mockProjects } from "../fixtures/projects";

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

describe("ProjectCard", () => {
  describe("CT-001: 프로젝트 카드 기본 렌더링", () => {
    it("프로젝트 기본 정보를 모두 표시", () => {
      const project = mockProjects[0];
      render(<ProjectCard project={project} />);

      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.summary)).toBeInTheDocument();
    });

    it("카테고리 뱃지 표시", () => {
      const project = mockProjects[0];
      render(<ProjectCard project={project} />);

      // 카테고리가 displayName으로 표시됨 (AX -> "AX Engineering" 등)
      // 최소 1개의 카테고리 뱃지가 표시되면 통과
      const badges = screen.getAllByText(/AX Engineering|Project Management|NLP|Computer Vision|Edge AI|Web Service/);
      expect(badges.length).toBeGreaterThan(0);
    });

    it("역할 정보 표시", () => {
      const project = mockProjects[0];
      render(<ProjectCard project={project} />);

      // 역할이 쉼표로 연결되어 표시됨
      const roleText = project.role.join(", ");
      expect(screen.getByText(roleText)).toBeInTheDocument();
    });

    it("기술 스택 태그 표시 (최대 4개)", () => {
      const project = mockProjects[0];
      render(<ProjectCard project={project} />);

      // 처음 4개의 기술 스택만 표시
      const displayedTechs = project.techStack.slice(0, 4);
      displayedTechs.forEach((tech) => {
        expect(screen.getByText(tech)).toBeInTheDocument();
      });
    });
  });

  describe("CT-002: 프로젝트 카드 접근성", () => {
    it("카드에 적절한 role 속성 존재", () => {
      const project = mockProjects[0];
      render(<ProjectCard project={project} />);

      const article = screen.getByRole("article");
      expect(article).toBeInTheDocument();
    });

    it("링크에 접근 가능한 이름 존재", () => {
      const project = mockProjects[0];
      render(<ProjectCard project={project} />);

      const link = screen.getByRole("link");
      expect(link).toHaveAccessibleName();
    });
  });
});
