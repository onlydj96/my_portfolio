import type { Career } from "@/types/portfolio";

export const mockCareers: Career[] = [
  {
    id: "1",
    company: "Test Company 1",
    position: "Senior Engineer",
    startDate: "2022-01-01",
    isCurrent: true,
    summary: "Current position summary",
    roles: [
      {
        role: "Senior Engineer",
        responsibilities: ["Responsibility 1", "Responsibility 2"],
      },
    ],
    achievements: ["Achievement 1", "Achievement 2"],
    techStack: ["React", "TypeScript"],
    projectIds: ["1", "2"],
  },
  {
    id: "2",
    company: "Test Company 2",
    position: "Junior Engineer",
    startDate: "2020-03-01",
    endDate: "2021-12-31",
    isCurrent: false,
    summary: "Previous position summary",
    roles: [
      {
        role: "Junior Engineer",
        responsibilities: ["Previous responsibility"],
      },
    ],
    achievements: ["Previous achievement"],
    techStack: ["Python", "PyTorch"],
    projectIds: ["3"],
  },
  {
    id: "3",
    company: "Test Company 3",
    position: "Intern",
    startDate: "2019-06-01",
    endDate: "2020-02-28",
    isCurrent: false,
    summary: "Internship summary",
    roles: [
      {
        role: "Intern",
        responsibilities: ["Intern responsibility"],
      },
    ],
    achievements: [],
    techStack: ["JavaScript"],
    projectIds: [],
  },
];
