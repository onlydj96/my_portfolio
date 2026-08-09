import Link from "next/link";
import Image from "next/image";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden bg-gray-200">
              {profile.profileImage ? (
                <Image
                  src={profile.profileImage}
                  alt={`${profile.name.korean} 프로필 사진`}
                  fill
                  className="object-cover scale-150 translate-y-[5%]"
                  priority
                  sizes="(max-width: 640px) 224px, 288px"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
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

          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
              {profile.name.english}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-4">
              {profile.name.korean}
            </p>
            <p className="text-lg sm:text-xl text-blue-600 font-medium mb-6">
              {profile.positions.join(" · ")}
            </p>
            <p className="text-gray-700 text-lg mb-8 max-w-2xl">
              {profile.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                href="/projects"
                className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                View Projects
              </Link>
              <Link
                href="/career"
                className="px-6 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                View Career
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Contact
              </Link>
              {profile.contact.resume && (
                <a
                  href={profile.contact.resume}
                  download="Luke_Hwangbo_Resume.pdf"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  aria-label="이력서 다운로드"
                >
                  Resume
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
