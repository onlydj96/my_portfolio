import { Hero } from "@/components/home/Hero";
import { CoreCompetencies } from "@/components/home/CoreCompetencies";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";

export default function Home() {
  return (
    <>
      <Hero />
      <CoreCompetencies />
      <FeaturedProjects />
    </>
  );
}
