import ConnectAudienceSection from "@/app/components/fsx-connect/ConnectAudienceSection";
import PreFooter from "@/app/components/layout/PreFooter";
import HeroSection from "@/app/components/shared/HeroSection";

export default function ConnectPage() {
  return (
    <main className="bg-background text-neutral-primary">
      <HeroSection
        title={
          <>
            The <span className="font-bold text-primary font-semibold! text-3xl! sm:text-5xl!">Network</span> That
                        Makes <span className="text-primary font-semibold! text-3xl! sm:text-5xl!">Transformation</span>
            <br />
            Possible.
          </>
        }
        description="FSX Connect is the ecosystem layer that connects the entire Fransunisoft network - bringing mentors, investors, institutional partners, and domain experts together in service of every organization, founder, and builder we work with."
        image={{
          src: "/connect-hero.webp",
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
          variant: "outline",
          trailingArrow: true,
        }}
      />

      <div className="section-layout">
        <div className="flex items-center gap-4 ">
          <p className=" uppercase whitespace-nowrap text-primary-600">
            01-Who we serve
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
