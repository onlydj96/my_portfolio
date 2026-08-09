import type { Profile } from "@/types/portfolio";

export const profile: Profile = {
  name: {
    english: "Luke Hwangbo",
    korean: "황보동준",
  },
  positions: ["AX Engineer", "AI Engineer", "Development PM"],
  tagline: "AI 기술과 개발 프로세스를 실제 조직과 서비스에 적용하는 AX Engineer이자 Development PM입니다.",
  bio: "자연어처리 모델 개발자로 커리어를 시작하여 Computer Vision과 Edge AI 솔루션 개발로 영역을 확장했습니다. 이후 프로젝트 기획, 요구사항 정의, 일정 관리와 고객사 커뮤니케이션을 담당하며 개발 PM 역할을 수행했습니다. 현재는 AI Agent와 업무 자동화를 실제 조직의 개발 및 운영 프로세스에 적용하는 AX Engineer로 역량을 확장하고 있습니다.",
  contact: {
    email: "onlydj96@gmail.com",
    phone: "010-2573-5402",
    github: "https://github.com/onlydj96",
    resume: "/resume/resume.pdf",
  },
  profileImage: "/images/profile.png",
  profileImageMobile: "/images/profile-mobile.jpg",
  ogImage: "/images/og-image.jpg",
};
