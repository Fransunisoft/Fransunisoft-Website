import ConsultingServices from "@/app/components/fsx-consulting/ConsultingServices";
import WhoWeWorkWith from "@/app/components/fsx-consulting/WhoWeWorkWith";
import PreFooter from "@/app/components/layout/PreFooter";
import HeroSection from "@/app/components/shared/HeroSection";

export default function ConsultingPage() {
  return (
    <main className="bg-background text-neutral-primary">
      <HeroSection
        title={
          <>
            AI Strategy.
            <br />
            Transformation
            <br />
            Advisory.{" "}
            <span className="text-primary-700">Measurable Outcomes.</span>
          </>
        }
        description="FSX Consulting helps organizations define where AI fits, build practical adoption roadmaps, govern digital transformation, and execute strategy with the rigour of a world-class advisory firm - built for the African context."
        image={{
          src: "/consulting-hero.png",
          alt: "FSX Consulting AI strategy advisory meeting",
          width: 1824,
          height: 1308,
        }}
        primaryAction={{
          label: "Book a Session",
          href: "#contact",
          variant: "primary",
        }}
      />

      <ConsultingServices />
      <WhoWeWorkWith />
      <PreFooter />
    </main>
  );
}
