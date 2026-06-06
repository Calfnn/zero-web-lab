import Hero from "@/components/home/Hero";
import Marquee from "@/components/Marquee";
import AboutStrip from "@/components/home/AboutStrip";
import ServicesPreview from "@/components/home/ServicesPreview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Testimonials from "@/components/home/Testimonials";
import CTAStrip from "@/components/home/CTAStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutStrip />
      <ServicesPreview />
      <FeaturedProjects />
      <Testimonials />
      <CTAStrip />
    </>
  );
}
