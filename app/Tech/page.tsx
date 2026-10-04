import Services from "../components/TechComponents/Services";
import PreFooter from "../components/layout/PreFooter";
import HeroSection from "../components/TechComponents/HeroSection";
import StaticTechnology from "../components/TechComponents/StaticTechnology";

export default function page() {
  return (
    <>
      <HeroSection />
      <Services />
      <StaticTechnology />
      <PreFooter />
    </>
  );
}
