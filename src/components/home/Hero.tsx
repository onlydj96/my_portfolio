"use client";

import Link from "next/link";
import Image from "next/image";
import { profile } from "@/content/profile";
import { profileEn } from "@/i18n/en/profile";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/i18n/ui";

export function Hero() {
  const { language } = useLanguage();
  const t = ui[language].hero;
  const tagline = language === "en" ? profileEn.tagline : profile.tagline;

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* 배경 gradient */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50/60 via-transparent to-purple-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* 프로필 이미지 - gradient ring */}
          <div className="flex-shrink-0">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full p-[3px] bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-200 dark:bg-slate-700">
                {profile.profileImage ? (
                  <Image
                    src={profile.profileImage}
                    alt={`${profile.name.korean} profile photo`}
                    fill
                    className="object-cover scale-150 translate-y-[5%]"
                    priority
                    sizes="(max-width: 640px) 224px, 288px"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-slate-500">
                    <svg
                      className="w-24 h-24"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 콘텐츠 */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-slate-100 mb-2">
              {profile.name.english}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-500 dark:text-slate-400 mb-4">
              {profile.name.korean}
            </p>
            <p className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 font-medium mb-6">
              {profile.positions.join(" · ")}
            </p>
            <p className="text-gray-700 dark:text-slate-300 text-lg mb-8 max-w-2xl leading-relaxed">
              {tagline}
            </p>

            {/* CTA 버튼 - Primary + Secondary만 */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                href="/projects"
                className="px-7 py-3 bg-gray-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-lg font-semibold hover:bg-gray-700 dark:hover:bg-white transition-colors shadow-sm"
              >
                {t.viewProjects}
              </Link>
              {profile.contact.resume && (
                <a
                  href={profile.contact.resume}
                  download="Luke_Hwangbo_Resume.pdf"
                  className="px-7 py-3 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-300 rounded-lg font-semibold hover:border-gray-900 dark:hover:border-slate-100 hover:text-gray-900 dark:hover:text-slate-100 transition-colors"
                  aria-label={t.resumeLabel}
                >
                  {t.resume}
                </a>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
