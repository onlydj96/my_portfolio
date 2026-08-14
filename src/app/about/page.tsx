import { AboutContent } from "@/components/about/AboutContent";
import { profile } from "@/content/profile";

export const metadata = {
  title: "About | Luke Hwangbo",
  description: profile.bio,
};

export default function AboutPage() {
  return <AboutContent />;
}
