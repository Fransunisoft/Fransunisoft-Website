import EventTypesSection from "@/app/components/fsx-events/EventTypesSection";
import PreFooter from "@/app/components/layout/PreFooter";
import HeroSection from "@/app/components/shared/HeroSection";

export default function EventsPage() {
  return (
    <main className="bg-background text-neutral-primary">
      <HeroSection
        title={
          <>
            Where Ideas Meet
            <br />
            Execution. Where
            <br />
            Organizations Meet
            <br />
            Builders.
          </>
        }
        description="FSX Events is the activation and program delivery arm of Fransunisoft - designing and running the innovation summits, challenge programs, demo days, and ecosystem events that connect Africa's most important organizations with its best builders."
        image={{
          src: "/events-hero.png",
          alt: "FSX Events innovation ecosystem gathering",
          width: 2675,
          height: 1870,
        }}
        primaryAction={{
          label: "Partner With FSX Events",
          href: "#event-types",
          variant: "primary",
        }}
        secondaryAction={{
          label: "Submit an Innovation Challenge",
          href: "#event-types",
          variant: "outline",
          trailingArrow: true,
        }}
      />

      <div id="event-types">
        <EventTypesSection />
      </div>

      <PreFooter />
    </main>
  );
}
