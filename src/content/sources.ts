import type { Source } from "@/types/portfolio";

export const sources: Source[] = [
  {
    id: "1",
    slug: "notion",
    title: "Notion 업무 협업 환경",
    description: "전사 업무 데이터베이스와 자동화 체계 구축을 위해 설계한 Notion 협업 환경 화면입니다.",
    category: "TOOL",
    items: [
      {
        id: "notion-1",
        title: "Notion 대시보드",
        description: "전사 업무 현황을 한눈에 파악할 수 있는 대시보드 화면",
        imagePath: "/source/notion/notion_dashboard.png",
        displayOrder: 1,
      },
      {
        id: "notion-2",
        title: "일정 관리",
        description: "프로젝트 및 업무 일정 관리 화면",
        imagePath: "/source/notion/notion_schedule.png",
        displayOrder: 2,
      },
    ],
    relatedProjectIds: ["1"],
    displayOrder: 1,
    visibility: "PUBLIC",
  },
  {
    id: "2",
    slug: "spacehong",
    title: "Spacehong 웹서비스",
    description: "공간대여 서비스 Spacehong 웹사이트 화면입니다.",
    category: "PROJECT",
    items: [
      {
        id: "spacehong-1",
        title: "홈페이지",
        description: "Spacehong 메인 홈페이지 화면",
        imagePath: "/source/spacehong/spacehong_homepage.png",
        displayOrder: 1,
      },
    ],
    relatedProjectIds: ["7"],
    displayOrder: 2,
    visibility: "PUBLIC",
  },
  {
    id: "3",
    slug: "profile",
    title: "프로필 이미지",
    description: "포트폴리오에 사용된 프로필 이미지입니다.",
    category: "PROFILE",
    items: [
      {
        id: "profile-1",
        title: "프로필 사진",
        description: "포트폴리오 메인 프로필 이미지",
        imagePath: "/source/profile/profile_image.png",
        displayOrder: 1,
      },
    ],
    displayOrder: 3,
    visibility: "PUBLIC",
  },
];
