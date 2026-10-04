"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import cv1 from "@/public/cv1.webp";
import cv2 from "@/public/cv2.webp";
import cv3 from "@/public/cv3.webp";
import cv4 from "@/public/cv4.webp";
import cv5 from "@/public/cv5.webp";
import cv6 from "@/public/cv6.webp";
import arrow from "./images/arrow.png";
import { ChevronRight } from "lucide-react";
import styles from "./AboutMobile.module.css";

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
      imgDiff: cv1,
      details:
        "We design bold, Africa-first solutions to real organizational problems. We do not copy global models — we build what the African context requires.",
    },
    {
      menuTitle: "Executive Excellence",
      detailsH3: "Executive Excellence",
      imgDiff: cv2,
      details:
        "We value results over plans, outcomes over outputs, and delivery over discussion. Execution is not a department — it is our culture.",
    },
    {
      menuTitle: "Collaboration",
      detailsH3: "Collaboration",
      imgDiff: cv5,
      details:
        "We work with people and organizations to create meaningful solutions that deliver real impact.",
    },
    {
      menuTitle: "Impact",
      detailsH3: "Impact",
      imgDiff: cv4,
      details:
        "We focus on creating solutions that produce measurable and lasting value.",
    },
    {
      menuTitle: "Integrity",
      detailsH3: "Integrity",
      imgDiff: cv3,
      details:
        "We operate with honesty, transparency, and accountability in everything we do.",
    },
    {
      menuTitle: "Growth",
      detailsH3: "Growth",
      imgDiff: cv6,
      details:
        "We continuously learn, adapt, and improve to create better outcomes for the people and organizations we serve.",
    },
  ];

  // Keeps track of which menu item is selected
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openMobileIndex, setOpenMobileIndex] = useState<number | null>(0);
  const mobileValues = [
    CoreValueProp[0],
    { ...CoreValueProp[1], menuTitle: "Execution Excellence", detailsH3: "Execution Excellence" },
    CoreValueProp[4],
    { ...CoreValueProp[3], menuTitle: "Shared Ownership", detailsH3: "Shared Ownership" },
    { ...CoreValueProp[2], menuTitle: "Community", detailsH3: "Community" },
    CoreValueProp[5],
  ];

  // Get the currently selected item
  const selectedValue = CoreValueProp[selectedIndex];

  return (
    <>
    <div className={`mt-3 rounded-[20px] bg-[#0C4A8C] ${styles.desktopValues}`}>
      <div className="grid grid-cols-[0.8fr_1.2fr] gap-6 lg:gap-10">
        {/* SIDEBAR */}
        <div className="flex flex-col p-6">
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
        <div className="flex flex-col bg-[#0D519A] p-6 lg:p-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
            <Image
              src={selectedValue.imgDiff}
              alt={selectedValue.detailsH3}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>

          <div className="mt-6 lg:mt-8">
            <h3 className="mb-3 font-heading text-2xl font-bold text-accent-500">
              {selectedValue.detailsH3}
            </h3>

            <p className="text-sm leading-6 text-white/90 lg:text-base lg:leading-7">{selectedValue.details}</p>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.mobileValues}>
      {mobileValues.map((value, index) => {
        const expanded = openMobileIndex === index;
        return (
          <article key={value.menuTitle} className={styles.valueItem} data-open={expanded}>
            <h4>
              <button type="button" id={`about-value-${index}`} aria-expanded={expanded} aria-controls={`about-value-panel-${index}`} onClick={() => setOpenMobileIndex(expanded ? null : index)}>
                {value.menuTitle}
                {expanded ? <Image src={arrow} alt="" width={50} height={20} /> : <ChevronRight size={28} strokeWidth={4} aria-hidden="true" />}
              </button>
            </h4>
            <div id={`about-value-panel-${index}`} role="region" aria-labelledby={`about-value-${index}`} hidden={!expanded} className={styles.valuePanel}>
              <Image src={value.imgDiff} alt={`${value.detailsH3} at Fransunisoft`} sizes="(max-width: 1023px) 90vw, 1px" />
              <h4>{value.detailsH3}</h4>
              <p>{value.details}</p>
            </div>
          </article>
        );
      })}
    </div>
    </>
  );
}
