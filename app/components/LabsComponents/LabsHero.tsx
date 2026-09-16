"use client";
import HeroSection from "../shared/HeroSection";

export default function LabsHero() {
  return (
  <HeroSection
          title={
            <>
              Where <span className="text-primary font-bold!  text-3xl! sm:text-5xl!">AI Products </span>
            Are Built And <span className="text-primary font-bold! text-3xl! sm:text-5xl!">Ventures</span> Are Born
            </>
          }
          description="FSX Consulting helps organizations define where AI fits, build practical adoption roadmaps, govern digital transformation, and execute strategy with the rigour of a world-class advisory firm - built for the African context."
          image={{
            src: "/fsxlabPhoto.png",
            alt: "FSX Consulting AI strategy advisory meeting",
            width: 1824,
            height: 1308,
          }}
          primaryAction={{
            label: "Talk to FSX Labs",
            href: "#contact",
            variant: "primary",
          }}
        />
    
  )
}
