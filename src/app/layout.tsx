import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luke-hwangbo.vercel.app"), // 배포 URL로 변경 필요
  title: "Luke Hwangbo | AX Engineer & Development PM",
  description:
    "AI 개발, 업무 자동화, AI Agent 도입 및 개발 프로젝트 관리 경험을 소개하는 황보동준의 커리어 포트폴리오입니다.",
  keywords: [
    "AX Engineer",
    "AI Agent",
    "Development PM",
    "AI 개발",
    "업무 자동화",
    "Computer Vision",
    "Edge AI",
    "NLP",
    "황보동준",
    "Luke Hwangbo",
  ],
  authors: [{ name: "Luke Hwangbo", url: "https://github.com/onlydj96" }],
  creator: "Luke Hwangbo",
  robots: {
    index: false, // 배포 시 true로 변경
    follow: false, // 배포 시 true로 변경
  },
  openGraph: {
    title: "Luke Hwangbo | AX Engineer & Development PM",
    description:
      "AI 개발, 업무 자동화, AI Agent 도입 및 개발 프로젝트 관리 경험을 소개하는 황보동준의 커리어 포트폴리오입니다.",
    type: "website",
    locale: "ko_KR",
    url: "https://luke-hwangbo.vercel.app", // 배포 URL로 변경 필요
    siteName: "Luke Hwangbo Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luke Hwangbo - AX Engineer & Development PM Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luke Hwangbo | AX Engineer & Development PM",
    description:
      "AI 개발, 업무 자동화, AI Agent 도입 및 개발 프로젝트 관리 경험을 소개하는 황보동준의 커리어 포트폴리오입니다.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <LanguageProvider>
          <Header />
          <main className="flex-1 pt-16" id="main-content">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
