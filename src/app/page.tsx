import { Hero } from "@/components/home/Hero";
import { StatsSection } from "@/components/home/StatsSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <FeaturedProjects />
    </>
  );
}
