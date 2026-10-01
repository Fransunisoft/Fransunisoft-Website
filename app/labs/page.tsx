import BuildDetails from "../components/LabsComponents/BuildDetails";
import BuildLabs from "../components/LabsComponents/BuildLabs";
import EachDetails from "../components/LabsComponents/EachDetails";
import LabsHero from "../components/LabsComponents/LabsHero";
import WorkWith from "../components/LabsComponents/WorkWith";
import PreFooter from "../components/layout/PreFooter";
export default function page() {
  return (
    <>
      <LabsHero />
      <BuildLabs />
      <BuildDetails />
      <WorkWith />
      <PreFooter />
    </>
  );
}
