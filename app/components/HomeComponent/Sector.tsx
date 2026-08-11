"use client";
import Image from "next/image";
import { StaticImageData } from "next/image";
import govt from "./images/govt.png";
import finacial from "./images/partners1.png";
import education from "./images/academia.png";
import health from "./images/health.png";
import sme from "./images/sme.png";
import plus from "./images/plus.png";
import arrowUp from "./images/arrowUp.png";
import arrowDown from "./images/arrowDown.png";
import { ReactNode, useState } from "react";
export default function Sector() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const PartnersDetails: {
    imgSrc: StaticImageData;
    partnersh3: string;
    details: ReactNode;
    optionalImage?: StaticImageData;
  }[] = [
    {
      imgSrc: finacial,
      partnersh3: "Government & Public Sector",
      details: (
        <>
          AI-driven public service delivery, digital <br />
          transformation, and workforce upskilling <br />
          for ministries, agencies, and state <br />
          governments
        </>
      ),
      optionalImage: govt,
    },
    {
      imgSrc: finacial,
      partnersh3: "Financial Services",
      details: (
        <>
          AI-driven public service delivery, digital <br />
          transformation, and workforce upskilling <br />
          for ministries, agencies, and state <br />
          governments
        </>
      ),
      optionalImage: govt,
    },
    {
      imgSrc: finacial,
      partnersh3: "Education & Academia",
      details: (
        <>
          AI-driven public service delivery, digital <br />
          transformation, and workforce upskilling <br />
          for ministries, agencies, and state <br />
          governments
        </>
      ),
      optionalImage: govt,
    },
    {
      imgSrc: finacial,
      partnersh3: "Healthcare & Life Sciences",
      details: (
        <>
          AI-driven public service delivery, digital <br />
          transformation, and workforce upskilling <br />
          for ministries, agencies, and state <br />
          governments
        </>
      ),
      optionalImage: govt,
    },
    {
      imgSrc: finacial,
      partnersh3: "SME & Growing Businesses",
      details: (
        <>
          AI-driven public service delivery, digital <br />
          transformation, and workforce upskilling <br />
          for ministries, agencies, and state <br />
          governments
        </>
      ),
      optionalImage: govt,
    },
    {
      imgSrc: finacial,
      partnersh3: "Startup & Founders",
      details: (
        <>
          AI-driven public service delivery, digital <br />
          transformation, and workforce upskilling <br />
          for ministries, agencies, and state <br />
          governments
        </>
      ),
      optionalImage: govt,
    },
    {
      imgSrc: finacial,
      partnersh3: "Development Organizations & NGOs",
      details: (
        <>
          AI-driven public service delivery, digital <br />
          transformation, and workforce upskilling <br />
          for ministries, agencies, and state <br />
          governments
        </>
      ),
      optionalImage: govt,
    },
    {
      imgSrc: finacial,
      partnersh3: "Financial Services",
      details: (
        <>
          AI-driven public service delivery, digital <br />
          transformation, and workforce upskilling <br />
          for ministries, agencies, and state <br />
          governments
        </>
      ),
      optionalImage: govt,
    },
    {
      imgSrc: plus,
      partnersh3: "Your Industry",
      details: <>Let's Talk</>,
    },
  ];

  return (
    <section className="grid grid-cols-1 p-4 sm:grid-cols-2 sm:p-6 lg:grid-cols-3 lg:p-8">
      {PartnersDetails.map((partner, index) => {
        const isHover = hoveredIndex === index;
        return (
          <div key={index} className="p-4 sm:p-6 lg:p-8">
            <div
              onMouseEnter={() => {
                setHoveredIndex(index);
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
              }}
              className={`${
                isHover
                  ? "bg-[#0D519A] text-white p-5 relative rounded-[20px] sm:p-6 lg:p-8"
                  : "bg-[#E1E6EB] p-5 relative rounded-[20px] min-h-56 cursor-pointer sm:p-6 sm:min-h-64 lg:p-8 lg:h-75"
              }`}
            >
              <Image
                src={
                  isHover
                    ? (partner.optionalImage ?? partner.imgSrc)
                    : partner.imgSrc
                }
                alt={partner.partnersh3}
              />
              {/* <Image src={partner.optionalImage} alt="optional image" /> */}
              {isHover ? (
                <h4>{partner.partnersh3}</h4>
              ) : (
                <h3>{partner.partnersh3}</h3>
              )}
              <Image
                src={isHover ? arrowUp : arrowDown}
                alt={isHover ? "arrow upwards" : "arrow downwards"}
                className={`absolute transition-all duration-300 ${
                  isHover
                    ? "bottom-6 right-6 sm:bottom-8 sm:right-8 lg:bottom-10 lg:right-10"
                    : "bottom-4 right-6 sm:bottom-5 sm:right-8 lg:right-10"
                }`}
              />
              {isHover && (
                <p className="font-body text-sm sm:text-base lg:text-[16px]">
                  {partner.details}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
}
