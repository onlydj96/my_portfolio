"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal } from "@/components/common/ScrollReveal";

const stats = [
  {
    value: "4+",
    labelKo: "년 AI 경력",
    labelEn: "Yrs in AI",
  },
  {
    value: "8",
    labelKo: "개 프로젝트",
    labelEn: "Projects",
  },
  {
    value: "3",
    labelKo: "개 도메인",
    labelEn: "AI Domains",
  },
  {
    value: "30+",
    labelKo: "기술 스택",
    labelEn: "Tech Stack",
  },
];

export function StatsSection() {
  const { language } = useLanguage();

  return (
    <section className="py-10 border-y border-gray-100 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.value + stat.labelKo} delay={index * 80}>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-slate-400 font-medium">
                  {language === "ko" ? stat.labelKo : stat.labelEn}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
