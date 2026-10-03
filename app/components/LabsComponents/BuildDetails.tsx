// BuildDetails.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import frame from "./images/Frame 2147229011.png";
import EachDetails from "./EachDetails";

interface BuildMenu {
  menuDetails: string;
}

export default function BuildDetails() {
  const [activeIndex, setActiveIndex] = useState(0);

  const eachBuildMenu: BuildMenu[] = [
    {
      menuDetails: "AI Products",
    },
    {
      menuDetails: "MVPs Development",
    },
    {
      menuDetails: "Co-Founding",
    },
    {
      menuDetails: "Build-for-Equity",
    },
  ];

  const activeMenu = eachBuildMenu[activeIndex];

  return (
    <section className="section-layout">
      <h2 className="max-w-xl">What we build and who we build for</h2>
      {/* Menu */}
      <div className="no-scrollbar mt-6 flex w-full gap-3 overflow-x-auto pb-3 lg:flex-wrap lg:gap-4">
        {eachBuildMenu.map((menu, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={menu.menuDetails}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveIndex(index)}
              className={`group flex h-10 shrink-0 items-center justify-center whitespace-nowrap rounded-full px-5 shadow-sm transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 lg:h-15 lg:w-70 lg:p-4 ${
                isActive
                  ? "bg-primary-500"
                  : "bg-white hover:bg-primary-100  "
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Image
                  src={frame}
                  alt=""
                  className={`h-4 w-4 sm:h-5 w-5 shrink-0 object-contain transition-all duration-300 ${
                    isActive
                      ? "brightness-0 invert"
                      : "group-hover:brightness-100 "
                  }`}
                />

                <span
                  className={`font-heading! text-base! font-semibold! transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-primary-500 group-hover:text-primary"
                  }`}
                >
                  {menu.menuDetails}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active menu details */}
      <EachDetails menu={activeMenu.menuDetails} />
    </section>
  );
}
