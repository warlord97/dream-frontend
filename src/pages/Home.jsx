import BestConsultantSection from "../components/BestConsultantSection";
import DevelopersCarousel from "../components/DevelopersCarousel";
import ExploreLocations from "../components/ExploreLocations";
import HeroCarousel from "../components/HeroCarousel";
import ProjectsSection from "../components/ProjectsSection";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import WhyOnlyMoneyTree from "../components/WhyOnlyMoneyTree";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <BestConsultantSection />
      <ProjectsSection />
      <WhyOnlyMoneyTree />
      <ExploreLocations />
      <TestimonialsCarousel />
      <DevelopersCarousel />
      {/* Other sections */}
    </>
  );
}
