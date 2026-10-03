"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StaticImageData } from "next/image";
import govt from "./images/govt.png";
import finacial from "./images/partners1.png";
import education from "./images/academia.png";
import health from "./images/health.png";
import sme from "./images/sme.png";
import startup from "./images/startup.png";
import development from "./images/development.png";
import plus from "./images/plus.png";
import arrowUp from "./images/arrowUp.png";
import arrowDown from "./images/arrowDown.png";
import { ReactNode, useState } from "react";

const mobileIcons = [govt, finacial, education, health, sme, startup, development];
const mobileTitles = [
  "Government & Public Sector",
  "Financial Services",
  "Education & Academia",
  "Healthcare & Life Sciences",
  "SMEs & Growing Businesses",
  "Startups & Founders",
  "Development Organizations & NGOs",
];
const mobileDescription =
  "AI-driven public service delivery, digital transformation, and workforce upskilling for ministries, agencies, and state governments";

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
      details: <>Let&apos;s Talk</>,
    },
  ];

  return (
    <section className="home-sector grid grid-cols-1 p-4 section-layout sm:grid-cols-2 sm:p-6 lg:grid-cols-3 lg:p-4">
      <style>{`
        .home-sector-mobile-card { display: none; }
        @media (max-width: 1023px) {
          .home-sector { grid-template-columns: minmax(0, 1fr); gap: 12px; }
          .home-sector-item { min-width: 0; padding: 0; }
          .home-sector-item[data-mobile-hidden="true"], .home-sector-desktop-card { display: none; }
          .home-sector-mobile-card { display: block; min-height: 267px; padding: 16px; border-radius: 20px; background: #0d519a; color: white; box-shadow: 0 2px 3px rgb(0 0 0 / 8%); }
          .home-sector-mobile-card img { width: 62px; height: 62px; margin: -6px; object-fit: contain; filter: brightness(0) invert(1); }
          .home-sector-mobile-card h3 { margin: 24px 0 0; font-size: 24px; font-weight: 700; line-height: 29px; color: white; }
          .home-sector-mobile-card p { margin-top: 12px; font-size: 18px; line-height: 30px; color: white; }
          .home-sector-mobile-card[data-sector="0"] { min-height: 219px; }
          .home-sector-mobile-card[data-sector="5"] { min-height: 243px; }
          .home-sector-mobile-card[data-sector="6"] { min-height: 296px; }
          .home-sector-mobile-card[data-sector="0"] p, .home-sector-mobile-card[data-sector="5"] p { font-size: 16px; line-height: 24px; }
          .home-sector-mobile-cta { display: flex; min-height: 238px; flex-direction: column; align-items: center; justify-content: center; gap: 16px; }
          .home-sector-mobile-cta > span { font-size: 12px; line-height: 16px; }
          .home-sector-mobile-cta p { margin: 0; font-size: 18px; line-height: 24px; }
          .home-sector-mobile-cta a { display: inline-flex; min-height: 44px; align-items: center; gap: 8px; font-size: 18px; line-height: 24px; }
          .home-sector-mobile-cta a:focus-visible { outline: 2px solid white; outline-offset: 4px; border-radius: 4px; }
        }
      `}</style>
      {PartnersDetails.map((partner, index) => {
        const isHover = hoveredIndex === index;
        return (
          <div key={index} className="home-sector-item sm:p-6" data-mobile-hidden={index === 7}>
            {index < mobileTitles.length && (
              <article className="home-sector-mobile-card" data-sector={index}>
                <Image src={mobileIcons[index]} alt="" />
                <h3>{mobileTitles[index]}</h3>
                <p>{index === 5
                  ? "AI-first product development, build-for-equity partnerships, and venture studio support for founders who need execution capacity, not just advice."
                  : mobileDescription}</p>
              </article>
            )}
            {index === 8 && (
              <div className="home-sector-mobile-card home-sector-mobile-cta">
                <span aria-hidden="true">+</span>
                <p>Your Industry</p>
                <Link href="/#contact">Let’s Talk <ArrowRight size={22} aria-hidden="true" /></Link>
              </div>
            )}
            <div
              onMouseEnter={() => {
                setHoveredIndex(index);
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
              }}
              className={`home-sector-desktop-card ${
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
