"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          오류가 발생했습니다
        </h1>
        <p className="text-gray-600 mb-8">
          페이지를 불러오는 중 문제가 발생했습니다. 다시 시도해 주세요.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={reset}
            className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            다시 시도
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            홈으로 이동
          </Link>
        </div>
      </div>
    </div>
  );
}
