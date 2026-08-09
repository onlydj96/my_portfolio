import { profile } from "@/content/profile";

export const metadata = {
  title: "About | Luke Hwangbo",
  description: profile.bio,
};

const careerPath = [
  {
    role: "AI 딥러닝 교육과정 수료",
    period: "2021.11 ~ 2022.05",
    company: "비트캠프 강남본원",
    description: "Python 기반 머신러닝 및 딥러닝, Computer Vision, NLP 학습"
  },
  {
    role: "NLP Engineer",
    period: "2022.06 ~ 2023.02",
    company: "포지큐브",
    description: "자연어처리 모델 개발"
  },
  {
    role: "CV & Edge AI Engineer · AI Solution Developer",
    period: "2024.05 ~ 2025.05",
    company: "KIOT",
    description: "영상 분석 솔루션 개발 및 현장 적용 AI 시스템 구축"
  },
  {
    role: "Development PM · Workflow Automation",
    period: "2025.05 ~ Present",
    company: "KIOT",
    description: "프로젝트 기획 및 관리, 업무 프로세스 자동화"
  },
  {
    role: "AI Agent & AX Engineer",
    period: "2025.05 ~ Present",
    company: "KIOT",
    description: "AI Agent 도입 및 활용 체계 설계, 업무 자동화"
  },
];

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">About</h1>

        {/* Bio */}
        <section className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">{profile.bio}</p>
        </section>

        {/* Career Path */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Career Path</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" aria-hidden="true" />

            <div className="space-y-8">
              {careerPath.map((item, index) => (
                <div key={item.role} className="relative pl-12">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-2 w-5 h-5 rounded-full border-2 ${
                      index === careerPath.length - 1
                        ? "bg-blue-600 border-blue-600"
                        : "bg-white border-gray-300"
                    }`}
                    style={{ top: "0.125rem" }}
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.role} <span className="text-sm text-gray-500 font-normal ml-2">{item.period}</span>
                  </h3>
                  <p className="text-sm font-medium text-gray-700 mb-1">{item.company}</p>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
