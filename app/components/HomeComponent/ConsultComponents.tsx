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
    <div className="flex items-start gap-20">
      {/* =========================
          SIDEBAR
      ========================== */}
      <section className="w-1/3">
        <div className="flex flex-col gap-5">
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
                <div className="flex items-center gap-3">
                  {/* Menu icon */}
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
                      isActive ? "bg-[#E9F6F5]" : "bg-[#E7EEF5]"
                    }`}
                  >
                    <Image
                      src={eachMenu.imgSrc}
                      alt={eachMenu.menu}
                      className="h-6 w-6 object-contain"
                    />
                  </div>

                  {/* Menu title */}
                  <h4
                    className={`font-heading text-2xl font-semibold transition-colors duration-300 ${
                      isActive ? "text-[#20A89F]" : "text-[#0D519A]"
                    }`}
                  >
                    {eachMenu.menu}
                  </h4>
                </div>

                {/* Repeated arrows */}
                <div className="flex items-center gap-1">
                  <Image
                    src={isActive ? activeArrowImage : inactiveArrowImage}
                    alt=""
                    className="h-5 w-5 object-contain"
                  />

                  <Image
                    src={isActive ? activeArrowImage : inactiveArrowImage}
                    alt=""
                    className="h-5 w-5 object-contain"
                  />

                  <Image
                    src={isActive ? activeArrowImage : inactiveArrowImage}
                    alt=""
                    className="h-5 w-5 object-contain"
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
          w-2/3
          overflow-hidden
          rounded-[20px]
          border
          border-neutral-border
          bg-white
          px-8
          py-7
          shadow-[0_4px_15px_rgba(0,0,0,0.06)]
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

        <h3 className="font-heading text-2xl font-bold text-primary-500">
          {boxDetailsh1}
        </h3>

        <p className="mt-2 font-body text-base font-medium text-neutral-secondary">
          {boxdetailssubHeading}
        </p>

        <p className="mt-6 max-w-5xl font-body text-base leading-7 text-neutral-primary">
          {details}
        </p>

        <div className="mt-8">
          <Button>{buttonDetails}</Button>
        </div>
      </section>
    </div>
  );
}
