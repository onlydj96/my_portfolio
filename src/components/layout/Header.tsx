"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
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
  const t = ui[language].nav;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isCurrentPage = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-gray-900"
      >
        {t.skipToMain}
      </a>

      <nav aria-label={t.label} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
            onClick={closeMenu}
          >
            Luke Hwangbo
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors font-medium ${
                  isCurrentPage(link.href)
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                aria-current={isCurrentPage(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}

            {/* Language Toggle */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="px-3 py-1 text-sm font-medium rounded-md border border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
              aria-label={t.langToggle}
            >
              {language === "ko" ? "EN" : "KO"}
            </button>
          </div>

          {/* Mobile right side: language toggle + menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLanguage}
              className="px-2.5 py-1 text-xs font-medium rounded border border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
              aria-label={t.langToggle}
            >
              {language === "ko" ? "EN" : "KO"}
            </button>

            <button
              type="button"
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors font-medium px-2 py-1 ${
                    isCurrentPage(link.href)
                      ? "text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={closeMenu}
                  aria-current={isCurrentPage(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
