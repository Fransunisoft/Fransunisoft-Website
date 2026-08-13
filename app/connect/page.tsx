import ConnectAudienceSection from "@/app/components/fsx-connect/ConnectAudienceSection";
import PreFooter from "@/app/components/layout/PreFooter";
import HeroSection from "@/app/components/shared/HeroSection";

export default function ConnectPage() {
  return (
    <main className="bg-background text-neutral-primary">
      <HeroSection
        title={
          <>
            The <span className="text-[48px]! font-bold text-primary-700">Network</span> That
            <br />
            Makes
            <br />
            <span className="text-[48px]! text-primary-700">Transformation</span>
            <br />
            Possible.
          </>
        }
        description="FSX Connect is the ecosystem layer that connects the entire Fransunisoft network - bringing mentors, investors, institutional partners, and domain experts together in service of every organization, founder, and builder we work with."
        image={{
          src: "/connect-hero.png",
          alt: "FSX Connect professional network in a modern office",
          width: 2680,
          height: 1864,
        }}
        primaryAction={{
          label: "Join FSX Connect",
          href: "#who-we-serve",
          variant: "primary",
        }}
        secondaryAction={{
          label: "Partner With FSX",
          href: "#who-we-serve",
          variant: "transparent",
        }}
      />

      <div className="section-layout py-0">
        <div className="flex items-center gap-4 ">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary-600">
            Who we serve
          </p>
          <div className="h-px flex-1 bg-neutral-card-border" />
        </div>
      </div>

      <div id="who-we-serve">
        <ConnectAudienceSection />
      </div>

      <PreFooter />
    </main>
  );
}
