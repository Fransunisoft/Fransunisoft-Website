"use client";

import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

import Button from "../ui/Button";
import { MenuItem } from "./ConsultMenu";

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
  imageContainer,
  menutitle,
  boxDetailsh1,
  boxdetailssubHeading,
  details,
  buttonDetails,
}: ConsultComponentProp) {
  return (
    <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-20">
      <section className="w-full lg:w-1/3">
        <div className="flex flex-col gap-4 sm:gap-5">
          {menu.map((eachMenu, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={index}
                type="button"
                onClick={() => onMenuClick(index)}
                className="flex w-full items-center justify-between text-left"
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  {/* Menu icon */}
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-10 sm:w-10 ${
                      isActive ? "bg-[#E9F6F5]" : "bg-[#E7EEF5]"
                    }`}
                  >
                    <Image
                      src={eachMenu.imgSrc}
                      alt={eachMenu.menu}
                      className="h-5 w-5 object-contain sm:h-6 sm:w-6"
                    />
                  </div>

                  {/* Menu title */}
                  <h4
                    className={`font-heading text-lg font-semibold transition-colors duration-300 sm:text-xl lg:text-2xl ${
                      isActive ? "text-[#20A89F]" : "text-[#0D519A]"
                    }`}
                  >
                    {eachMenu.menu}
                  </h4>
                </div>

                {/* Repeated arrows */}
                <div className="flex shrink-0 items-center gap-1">
                  <Image
                    src={isActive ? activeArrowImage : inactiveArrowImage}
                    alt=""
                    className="hidden h-5 w-5 object-contain xs:block"
                  />

                  <Image
                    src={isActive ? activeArrowImage : inactiveArrowImage}
                    alt=""
                    className="h-4 w-4 object-contain sm:h-5 sm:w-5"
                  />

                  <Image
                    src={isActive ? activeArrowImage : inactiveArrowImage}
                    alt=""
                    className="h-4 w-4 object-contain sm:h-5 sm:w-5"
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

        <h3 className="font-heading text-xl font-bold text-primary-500 sm:text-2xl">
          {boxDetailsh1}
        </h3>

        <p className="mt-2 font-body text-sm font-medium text-neutral-secondary sm:text-base">
          {boxdetailssubHeading}
        </p>

        <p className="mt-4 max-w-5xl font-body text-sm leading-6 text-neutral-primary sm:mt-6 sm:text-base sm:leading-7">
          {details}
        </p>

        <div className="mt-6 sm:mt-8">
          <Button>{buttonDetails}</Button>
        </div>
      </section>
    </div>
  );
}
