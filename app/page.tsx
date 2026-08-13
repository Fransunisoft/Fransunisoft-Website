import HeroSection from "@/app/components/HomeComponent/HeroSection";
import Challenge from "@/app/components/HomeComponent/Challenge";
import Bridge from "./components/HomeComponent/Bridge";
import Services from "./components/HomeComponent/Services";
import StackCards from "./components/HomeComponent/StackCards";
import EcoSystem from "./components/HomeComponent/EcoSystem";
import ConsultMenu from "./components/HomeComponent/ConsultMenu";
import StatsSection from "./components/HomeComponent/StatsSection";
import SectorSection from "./components/HomeComponent/SectorSection";
import TrustedPartners from "./components/HomeComponent/TrustedPartners";
import PreFooter from "./components/layout/PreFooter";
// import Sector from "./components/HomeComponent/Sector";



export default function Home() {
  return (
    <main className="min-h-screen  bg-background ">
      <HeroSection />
      <Challenge />
      <Bridge />
      <Services />
      <StackCards />
      <EcoSystem />
      <ConsultMenu />
      <StatsSection />
      <SectorSection />
      <TrustedPartners />
      <PreFooter />
    </main>
  );
}
