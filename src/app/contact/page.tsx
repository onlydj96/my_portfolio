import { profile } from "@/content/profile";

export const metadata = {
  title: "Contact | Luke Hwangbo",
  description: "황보동준에게 연락하기",
};

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Contact</h1>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
          <p className="text-gray-700 mb-8">
            채용 관련 문의나 협업 제안은 아래 연락처를 통해 연락해 주세요.
          </p>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="text-lg text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {profile.contact.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            {profile.contact.phone && (
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Tel.</p>
                  <a
                    href={`tel:${profile.contact.phone.replace(/-/g, "")}`}
                    className="text-lg text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    {profile.contact.phone}
                  </a>
                </div>
              </div>
            )}

            {/* Resume */}
            {profile.contact.resume && (
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Resume</p>
                  <a
                    href={profile.contact.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-blue-600 hover:text-blue-800 hover:underline"
                    aria-label="이력서 다운로드 (새 탭에서 열림)"
                  >
                    이력서 다운로드
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
