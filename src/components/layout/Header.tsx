"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { ui } from "@/i18n/ui";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/career", label: "Career" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = ui[language].nav;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isCurrentPage = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-700">
      {/* 메인 콘텐츠로 건너뛰기 */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white dark:focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-gray-900 dark:focus:text-slate-100"
      >
        {t.skipToMain}
      </a>

      <nav aria-label={t.label} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <Link
            href="/"
            className="text-xl font-bold text-gray-900 dark:text-slate-100 hover:text-gray-700 dark:hover:text-slate-300 transition-colors"
            onClick={closeMenu}
          >
            Luke Hwangbo
          </Link>

          {/* 데스크탑 네비게이션 */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 transition-colors font-medium border-b-2 ${
                  isCurrentPage(link.href)
                    ? "text-gray-900 dark:text-slate-100 border-blue-600 dark:border-blue-400"
                    : "text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100 border-transparent"
                }`}
                aria-current={isCurrentPage(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}

            {/* 다크모드 토글 */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={theme === "light" ? "다크 모드로 전환" : "라이트 모드로 전환"}
            >
              {theme === "light" ? (
                /* 달 아이콘 (라이트 → 다크) */
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                /* 태양 아이콘 (다크 → 라이트) */
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            {/* 언어 토글 */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="px-3 py-1 text-sm font-medium rounded-md border border-gray-300 dark:border-slate-600 text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100 hover:border-gray-400 dark:hover:border-slate-400 transition-colors"
              aria-label={t.langToggle}
            >
              {language === "ko" ? "EN" : "KO"}
            </button>
          </div>

          {/* 모바일 우측: 다크모드 + 언어 + 햄버거 */}
          <div className="md:hidden flex items-center gap-1">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={theme === "light" ? "다크 모드로 전환" : "라이트 모드로 전환"}
            >
              {theme === "light" ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            <button
              type="button"
              onClick={toggleLanguage}
              className="px-2.5 py-1 text-xs font-medium rounded border border-gray-300 dark:border-slate-600 text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100 hover:border-gray-400 dark:hover:border-slate-400 transition-colors"
              aria-label={t.langToggle}
            >
              {language === "ko" ? "EN" : "KO"}
            </button>

            <button
              type="button"
              className="p-2 rounded-md text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? t.menuClose : t.menuOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* 모바일 네비게이션 - 슬라이드 애니메이션 */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-gray-100 dark:border-slate-700">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors font-medium px-3 py-2 rounded-md ${
                    isCurrentPage(link.href)
                      ? "text-gray-900 dark:text-slate-100 bg-blue-50 dark:bg-blue-950/40"
                      : "text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100 hover:bg-gray-50 dark:hover:bg-slate-800"
                  }`}
                  onClick={closeMenu}
                  aria-current={isCurrentPage(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
