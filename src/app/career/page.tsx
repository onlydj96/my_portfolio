import { careers } from "@/content/careers";
import { sortCareersByDate } from "@/lib/utils";
import { CareerCard } from "@/components/career/CareerCard";

export const metadata = {
  title: "Career | Luke Hwangbo",
  description: "AX Engineer, AI Engineer, Development PM으로서의 경력을 소개합니다.",
};

export default function CareerPage() {
  const sortedCareers = sortCareersByDate(careers);

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Career</h1>

        <div className="space-y-6">
          {sortedCareers.map((career) => (
            <CareerCard key={career.id} career={career} />
          ))}
        </div>
      </div>
    </div>
  );
}
