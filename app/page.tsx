import HeroGeometric from "@/components/home/HeroGeometric";
import AboutStrip from "@/components/home/AboutStrip";
import ServicesPreview from "@/components/home/ServicesPreview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Testimonials from "@/components/home/Testimonials";
import CTAStrip from "@/components/home/CTAStrip";

export default function HomePage() {
  return (
    <>
      <HeroGeometric />
      <AboutStrip />
      <ServicesPreview />
      <FeaturedProjects />
      <Testimonials />
      <CTAStrip />
    </>
  );
}
