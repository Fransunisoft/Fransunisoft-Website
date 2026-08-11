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
    <section className=" p-8 grid grid-cols-3">
      {PartnersDetails.map((partner, index) => {
        const isHover = hoveredIndex === index;
        return (
          <div key={index} className="p-8 ">
            <div
              onMouseEnter={() => {
                setHoveredIndex(index);
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
              }}
              className={`${
                isHover
                  ? "bg-[#0D519A] text-white p-8 relative rounded-[20px]"
                  : "bg-[#E1E6EB]  p-8 relative rounded-[20px] h-75 cursor-pointer"
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
                  isHover ? "bottom-10 right-10" : "bottom-5 right-10"
                }`}
              />
              {isHover && (
                <p className="font-body text-[16px]">{partner.details}</p>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
}
