"use client";

import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import {
  BriefcaseBusiness,
  CalendarDays,
  FlaskConical,
  GraduationCap,
  Microchip,
  Network,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

import Button from "../ui/Button";
import { MenuItem } from "./ConsultMenu";

const ecosystemIcons: Record<string, LucideIcon> = {
  Consulting: BriefcaseBusiness,
  Academy: GraduationCap,
  Labs: FlaskConical,
  Tech: Microchip,
  Events: CalendarDays,
  Connect: Network,
};

interface ConsultComponentProp {
  // Sidebar
  menu: MenuItem[];
  activeIndex: number;
  onMenuClick: (index: number) => void;

  // Arrow images
  activeArrowImage: StaticImageData;
  inactiveArrowImage: StaticImageData;

  // Active card
  imageContainer: StaticImageData;
  menutitle: string;
  boxDetailsh1: string;
  boxdetailssubHeading: string;
  details: ReactNode;
  buttonDetails: string;
}

export default function ConsultComponents({
  menu,
  activeIndex,
  onMenuClick,
  activeArrowImage,
  inactiveArrowImage,
  boxDetailsh1,
  boxdetailssubHeading,
  details,
  buttonDetails,
}: ConsultComponentProp) {
  return (
    <div className="home-consult flex flex-col items-start section-layout gap-8 lg:flex-row lg:gap-20">
      <style>{`
        .home-consult-tab h4 span { font: inherit; }
        .home-consult-mobile-label, .home-consult-cta-arrow { display: none; }
        @media (max-width: 1023px) {
          .home-consult { margin-inline: 12px; padding-block: 20px; gap: 32px; }
          .home-consult-tabs { flex-direction: row; gap: 20px; overflow-x: auto; padding: 0 18px 3px; scrollbar-width: none; }
          .home-consult-tabs::-webkit-scrollbar { display: none; }
          .home-consult-tab { width: auto; flex-shrink: 0; justify-content: center; }
          .home-consult-tab > div:first-child { flex-direction: column; gap: 4px; }
          .home-consult-tab > div:first-child > div { width: 32px; height: 32px; }
          .home-consult-tab svg { width: 22px; height: 22px; }
          .home-consult-tab h4 { font-size: 20px; line-height: 28px; border-bottom: 2px solid currentColor; white-space: nowrap; }
          .home-consult-tab h4 span { font: inherit; }
          .home-consult-mobile-label { display: inline; }
          .home-consult-desktop-label, .home-consult-arrows { display: none; }
          .home-consult-card { padding: 16px 18px; border: solid transparent; border-width: 0 0 2px 2px; border-radius: 24px;
            background: linear-gradient(white, white) padding-box, linear-gradient(145deg, #675a7f, #ff6b35 65%, #a8514b) border-box;
            box-shadow: 0 5px 12px rgb(0 0 0 / 8%); }
          .home-consult-border { display: none; }
          .home-consult-card h3 { font-size: 24px; line-height: 30px; }
          .home-consult-subtitle { margin-top: 8px; font-size: 16px; line-height: 24px; font-weight: 600; }
          .home-consult-description { margin-top: 16px; font-size: 16px; line-height: 24px; color: #2c3e50; }
          .home-consult-description br { display: none; }
          .home-consult-action { margin-top: 20px; }
          .home-consult-action button { min-height: 48px; height: auto; max-width: 100%; padding: 10px 24px; gap: 12px; font-size: 18px; font-weight: 600; line-height: 26px; box-shadow: 0 3px 6px rgb(0 0 0 / 10%); }
          .home-consult-cta-arrow { display: block; flex-shrink: 0; }
        }
      `}</style>
      <section className="w-full lg:w-1/3">
        <div className="home-consult-tabs flex flex-col gap-4 sm:gap-5">
          {menu.map((eachMenu, index) => {
            const isActive = activeIndex === index;
            const Icon = ecosystemIcons[eachMenu.menu];

            return (
              <button
                key={index}
                type="button"
                onClick={() => onMenuClick(index)}
                aria-pressed={isActive}
                className="home-consult-tab flex w-full items-center justify-between text-left"
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  {/* Menu icon */}
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-10 sm:w-10 ${
                      isActive
                        ? "bg-[#E9F6F5] text-[#20A89F]"
                        : "bg-[#E7EEF5] text-[#0D519A]"
                    }`}
                  >
                    {Icon ? (
                      <Icon aria-hidden="true" className="h-5 w-5 sm:h-6 sm:w-6" />
                    ) : (
                      <Image src={eachMenu.imgSrc} alt="" />
                    )}
                  </div>

                  {/* Menu title */}
                  <h4
                    className={` text-lg font-semibold! transition-colors duration-300 sm:text-xl lg:text-2xl ${
                      isActive ? "text-[#20A89F]" : "text-[#0D519A]"
                    }`}
                  >
                    <span className="home-consult-desktop-label">{eachMenu.menu}</span>
                    <span className="home-consult-mobile-label">{eachMenu.menu === "Consulting" ? "Consult" : eachMenu.menu}</span>
                  </h4>
                </div>

                {/* Repeated arrows */}
                <div className="home-consult-arrows flex shrink-0 items-center gap-1">
                  <Image
                    src={isActive ? activeArrowImage : inactiveArrowImage}
                    alt=""
                    className="hidden h-5 w-auto object-contain xs:block"
                  />

                  <Image
                    src={isActive ? activeArrowImage : inactiveArrowImage}
                    alt=""
                    className="h-4 w-auto object-contain sm:h-5"
                  />

                  <Image
                    src={isActive ? activeArrowImage : inactiveArrowImage}
                    alt=""
                    className="h-4 w-auto object-contain sm:h-5"
                  />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* =========================
          ACTIVE CONTENT CARD
      ========================== */}
      <section
        className="
          home-consult-card
          relative
          w-full
          overflow-hidden
          rounded-2xl
          border
          border-neutral-border
          bg-white
          px-5
          py-6
          shadow-[0_4px_15px_rgba(0,0,0,0.06)]
          sm:px-6
          lg:w-2/3
          lg:rounded-[20px]
          lg:px-8
          lg:py-7
        "
      >
        {/* Left gradient border */}
        <div
          className="
            home-consult-border
            absolute
            bottom-0
            left-0
            top-0
            w-0.5
            bg-linear-to-b
            from-primary-500
            via-accent-500
            to-accent-500
          "
        />

        {/* Bottom gradient border */}
        <div
          className="
            home-consult-border
            absolute
            bottom-0
            left-0
            h-0.5
            w-full
            bg-linear-to-r
            from-accent-500
            via-accent-500
            to-primary-500
          "
        />

        <h3 className="font-heading text-xl font-bold! text-[#20A89F] sm:text-2xl">
          {boxDetailsh1}
        </h3>

        <p className="home-consult-subtitle mt-2 font-body text-sm font-medium text-neutral-secondary sm:text-base">
          {boxdetailssubHeading === "AI strategy & Transformation" ? "AI Strategy & Transformation" : boxdetailssubHeading}
        </p>

        <p className="home-consult-description mt-4 max-w-5xl font-body text-sm leading-6 text-neutral-primary sm:mt-6 sm:text-base sm:leading-7">
          {details}
        </p>

        <div className="home-consult-action mt-6 sm:mt-8">
          <Button className=" hover:bg-accent-500">{buttonDetails}<ArrowRight className="home-consult-cta-arrow" size={24} aria-hidden="true" /></Button>
        </div>
      </section>
    </div>
  );
}
