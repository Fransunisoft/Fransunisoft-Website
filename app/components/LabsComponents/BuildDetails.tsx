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
    <section>
      {/* Menu */}
      <div className="flex flex-wrap gap-4">
        {eachBuildMenu.map((menu, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={menu.menuDetails}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`group mt-9 flex h-20 w-70 items-center justify-center rounded-full p-4 shadow-2xl transition-all duration-300 ${
                isActive
                  ? "bg-primary-500"
                  : "bg-white hover:bg-primary-500"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Image
                  src={frame}
                  alt=""
                  className={`transition-all duration-300 ${
                    isActive
                      ? "brightness-0 invert"
                      : "group-hover:brightness-0 group-hover:invert"
                  }`}
                />

                <p
                  className={`transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-neutral-primary group-hover:text-white"
                  }`}
                >
                  {menu.menuDetails}
                </p>
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