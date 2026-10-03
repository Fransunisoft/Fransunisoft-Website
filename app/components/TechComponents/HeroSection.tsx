"use client";
import HeroSection from "../shared/HeroSection";

export default function LabsHero() {
  return (
    <HeroSection
      title={
        <>
          Technology That Works. Infrastructure That Scales.

        </>
      }
      description="FSX Tech is the engineering and implementation arm of Fransunisoft — ensuring every product, system, and AI solution we build is stable, secure, performant, and ready to scale in the African market.
"
      image={{
        src: "/fsxtechPhoto.webp",
        alt: "FSX Consulting AI strategy advisory meeting",
        width: 1824,
        height: 1308,
      }}
      primaryAction={{
        label: "Talk to FSX Tech",
        href: "#contact",
        variant: "primary",
      }}
    />

  )
}
