import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ProjectFilter } from "@/components/project/ProjectFilter";

describe("ProjectFilter", () => {
  describe("CT-003: 프로젝트 필터 기본 렌더링", () => {
    it("모든 카테고리 버튼 표시", () => {
      const onFilterChange = vi.fn();
      render(
        <ProjectFilter
          selectedCategory="All"
          onFilterChange={onFilterChange}
        />
      );

      expect(screen.getByRole("button", { name: /all/i })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /ax/i })).toBeInTheDocument();
    });

    it("현재 선택된 카테고리 강조", () => {
      const onFilterChange = vi.fn();
      render(
        <ProjectFilter
          selectedCategory="AX"
          onFilterChange={onFilterChange}
        />
      );

      const axButton = screen.getByRole("button", { name: /ax/i });
      expect(axButton).toHaveAttribute("aria-pressed", "true");
    });
  });

  describe("CT-004: 필터 상호작용", () => {
    it("카테고리 클릭 시 onFilterChange 호출", () => {
      const onFilterChange = vi.fn();
      render(
        <ProjectFilter
          selectedCategory="All"
          onFilterChange={onFilterChange}
        />
      );

      const axButton = screen.getByRole("button", { name: /ax/i });
      fireEvent.click(axButton);

      expect(onFilterChange).toHaveBeenCalledWith("AX");
    });

    it("현재 선택된 카테고리 다시 클릭해도 콜백 호출", () => {
      const onFilterChange = vi.fn();
      render(
        <ProjectFilter
          selectedCategory="AX"
          onFilterChange={onFilterChange}
        />
      );

      const axButton = screen.getByRole("button", { name: /ax/i });
      fireEvent.click(axButton);

      expect(onFilterChange).toHaveBeenCalledWith("AX");
    });
  });

  describe("CT-005: 필터 접근성", () => {
    it("필터 그룹에 role 존재", () => {
      const onFilterChange = vi.fn();
      render(
        <ProjectFilter
          selectedCategory="All"
          onFilterChange={onFilterChange}
        />
      );

      expect(screen.getByRole("group")).toBeInTheDocument();
    });

    it("aria-label로 필터 설명 제공", () => {
      const onFilterChange = vi.fn();
      render(
        <ProjectFilter
          selectedCategory="All"
          onFilterChange={onFilterChange}
        />
      );

      const group = screen.getByRole("group");
      expect(group).toHaveAttribute("aria-label");
    });

    it("키보드로 필터 조작 가능", () => {
      const onFilterChange = vi.fn();
      render(
        <ProjectFilter
          selectedCategory="All"
          onFilterChange={onFilterChange}
        />
      );

      const axButton = screen.getByRole("button", { name: /ax/i });
      axButton.focus();
      fireEvent.keyDown(axButton, { key: "Enter" });

      expect(onFilterChange).toHaveBeenCalled();
    });
  });
});
