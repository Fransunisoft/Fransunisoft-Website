import AcademyCapabilitySection from "@/app/components/fsx-academy/AcademyCapabilitySection";
import AcademyTracks from "@/app/components/fsx-academy/AcademyTracks";
import PreFooter from "@/app/components/layout/PreFooter";
import HeroSection from "@/app/components/shared/HeroSection";

export default function AcademyPage() {
  return (
    <main className="bg-background text-neutral-primary">
      <HeroSection
        title={
          <>
            Workforce Ready For
            <br />
            AI. Built By
            <br />
            <span className="text-[48px]! text-primary-700">
              Fransunisoft.
            </span>
          </>
        }
        description="FSX Academy designs and delivers AI workforce transformation programs - for organizations upskilling their teams and for individual builders who want to build real capability, not just credentials."
        image={{
          src: "/academy-hero.png",
          alt: "FSX Academy workforce training session",
          width: 2670,
          height: 1865,
        }}
        primaryAction={{
          label: "Join Us",
          href: "#who-we-serve",
          variant: "primary",
        }}
        secondaryAction={{
          label: "Explore All Benefits",
          href: "#tracks",
          variant: "outline",
          trailingArrow: true,
        }}
      />

      <section id="who-we-serve" className="section-layout bg-background py-0">
        <div className="flex items-center gap-4">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary-600">
            Who we serve
          </p>
          <div className="h-px flex-1 bg-neutral-card-border" />
        </div>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-neutral-primary">
          Develop AI Capability Across
          <br />
          Your Organization
        </h2>
      </section>

      <AcademyCapabilitySection />

      <div id="tracks">
        <AcademyTracks />
      </div>

      <PreFooter />
    </main>
  );
}
