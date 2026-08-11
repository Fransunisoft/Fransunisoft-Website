"use client";

import { useState } from "react";
import { ReactNode } from "react";
import { StaticImageData } from "next/image";

import consult from "@/app/components/HomeComponent/images/consult.png";
import academy from "@/app/components/HomeComponent/images/Academy.png";
import labs from "@/app/components/HomeComponent/images/labs.png";
import tech from "@/app/components/HomeComponent/images/Tech.png";
import events from "@/app/components/HomeComponent/images/Event.png";
import connect from "@/app/components/HomeComponent/images/connect.png";

import arrowImage from "@/app/components/HomeComponent/images/offActive.png";
import activeArrow from "@/app/components/HomeComponent/images/active.png";

import ConsultComponents from "./ConsultComponents";

export interface MenuItem {
  imgSrc: StaticImageData;
  menu: string;
  headingCard: string;
  subheading: string;
  message: ReactNode;
  buttonDetails: string;
}

export default function ConsultMenu() {
  // First menu is active by default
  const [activeIndex, setActiveIndex] = useState(0);

  const menu: MenuItem[] = [
    {
      imgSrc: consult,
      menu: "Consulting",
      headingCard: "FSX Consulting",
      subheading: "AI strategy & Transformation",
      message: (
        <>
          Our advisory and strategy arm. We work with organizations to define
          AI vision, build <br />
          transformation roadmaps, structure governance, and oversee execution
          from strategy to <br />
          outcome.
        </>
      ),
      buttonDetails: "Explore FSX Consulting",
    },

    {
      imgSrc: academy,
      menu: "Academy",
      headingCard: "FSX Academy",
      subheading: "AI Talent & Workforce Development",
      message: (
        <>
          Our learning and talent development arm. We design and deliver AI
          literacy programs, <br />
          technical upskilling initiatives, and workforce transformation
          cohorts for organizations and <br />
          individual builders.
        </>
      ),
      buttonDetails: "Explore FSX Academy",
    },

    {
      imgSrc: labs,
      menu: "Labs",
      headingCard: "FSX Labs",
      subheading: "AI Products & Venture Studio",
      message: (
        <>
          Our product and venture-building arm. We build AI-powered products,
          MVPs, and venture <br />
          backed companies — combining FSX talent, execution infrastructure,
          and shared <br />
          ownership to take ideas from concept to launch.
        </>
      ),
      buttonDetails: "Explore FSX Labs",
    },

    {
      imgSrc: tech,
      menu: "Tech",
      headingCard: "FSX Tech",
      subheading: "Implementation & Infrastructure",
      message: (
        <>
          Our engineering and implementation arm. We deploy, integrate, and
          maintain the <br />
          technology infrastructure that organizations need to run modern,
          AI-ready operations at <br />
          scale.
        </>
      ),
      buttonDetails: "Explore FSX Tech",
    },

    {
      imgSrc: events,
      menu: "Events",
      headingCard: "FSX Events",
      subheading: "Innovation Programs & Ecosystem",
      message: (
        <>
          Our activation and program delivery arm. We design and run innovation
          summits, demo <br />
          days, challenge programs, and ecosystem events that connect
          organizations, builders <br />
          investors, and government.
        </>
      ),
      buttonDetails: "Explore FSX Events",
    },

    {
      imgSrc: connect,
      menu: "Connect",
      headingCard: "FSX Connect",
      subheading: "Network, Mentors & Partnership",
      message: (
        <>
          Our ecosystem and network arm. We bring together senior mentors,
          strategic advisors, <br />
          institutional partners, and investors to support the organizations,
          founders, and talent <br />
          inside the FSX ecosystem.
        </>
      ),
      buttonDetails: "Explore FSX Connect",
    },
  ];

  const activeMenu = menu[activeIndex];

  return (
    <div>
      <section className="p-8">
        <ConsultComponents
          menu={menu}
          activeIndex={activeIndex}
          onMenuClick={setActiveIndex}
          activeArrowImage={activeArrow}
          inactiveArrowImage={arrowImage}
          imageContainer={activeMenu.imgSrc}
          menutitle={activeMenu.menu}
          boxDetailsh1={activeMenu.headingCard}
          boxdetailssubHeading={activeMenu.subheading}
          details={activeMenu.message}
          buttonDetails={activeMenu.buttonDetails}
        />
      </section>
    </div>
  );
}