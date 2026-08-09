import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          페이지를 찾을 수 없습니다
        </h2>
        <p className="text-gray-600 mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            홈으로 이동
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            프로젝트 보기
          </Link>
        </div>
      </div>
    </div>
  );
}
