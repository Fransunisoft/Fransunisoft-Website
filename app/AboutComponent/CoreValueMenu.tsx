"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import meetings from "./images/meeting.png";
import arrow from "./images/arrow.png";

type CoreValue = {
  menuTitle: string;
  detailsH3: string;
  imgDiff: StaticImageData;
  details: React.ReactNode;
};

export default function CoreValueMenu() {
  const CoreValueProp: CoreValue[] = [
    {
      menuTitle: "Innovation",
      detailsH3: "Innovation",
      imgDiff: meetings,
      details:
        "We design bold, Africa-first solutions to real organizational problems. We do not copy global models — we build what the African context requires.",
    },
    {
      menuTitle: "Executive Excellence",
      detailsH3: "Executive Excellence",
      imgDiff: meetings,
      details:
        "We value results over plans, outcomes over outputs, and delivery over discussion. Execution is not a department — it is our culture.",
    },
    {
      menuTitle: "Collaboration",
      detailsH3: "Collaboration",
      imgDiff: meetings,
      details:
        "We work with people and organizations to create meaningful solutions that deliver real impact.",
    },
    {
      menuTitle: "Impact",
      detailsH3: "Impact",
      imgDiff: meetings,
      details:
        "We focus on creating solutions that produce measurable and lasting value.",
    },
    {
      menuTitle: "Integrity",
      detailsH3: "Integrity",
      imgDiff: meetings,
      details:
        "We operate with honesty, transparency, and accountability in everything we do.",
    },
    {
      menuTitle: "Growth",
      detailsH3: "Growth",
      imgDiff: meetings,
      details:
        "We continuously learn, adapt, and improve to create better outcomes for the people and organizations we serve.",
    },
  ];

  // Keeps track of which menu item is selected
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Get the currently selected item
  const selectedValue = CoreValueProp[selectedIndex];

  return (
    <div className="rounded-[20px] border border-dashed mt-3 border-white/20 bg-[#0C4A8C] p-8">
      <div className="grid grid-cols-2 gap-10">
        {/* SIDEBAR */}
        <div className="flex flex-col">
          {CoreValueProp.map((eachValue, index) => (
            <button
              key={eachValue.menuTitle}
              onClick={() => setSelectedIndex(index)}
              className={`relative flex min-h-20 w-full items-center justify-between px-6 py-5 text-left transition ${
                selectedIndex === index
                  ? "border border-accent-500 text-accent-500"
                  : "text-white"
              }`}
            >
              <h4 className="font-heading font-bold">{eachValue.menuTitle}</h4>

              {selectedIndex === index && (
                <div className="flex items-center gap-1">
                  <Image src={arrow} alt="" />
                </div>
              )}

              {selectedIndex !== index && (
                <div className="absolute bottom-0 left-0 w-full">
                  <div className="h-px bg-white/40" />
                  <div className="mt-2 h-px bg-white/40" />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* DETAILS */}
        <div className="flex flex-col bg-[#0D519A] p-4">
          <Image
            src={selectedValue.imgDiff}
            alt={selectedValue.detailsH3}
            className="w-full rounded-2xl object-cover"
          />

          <div className="mt-6">
            <h3 className="mb-3 font-heading text-2xl font-bold text-accent-500">
              {selectedValue.detailsH3}
            </h3>

            <p className="text-white/80">{selectedValue.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
