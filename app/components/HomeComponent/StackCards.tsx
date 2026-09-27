"use client";

import { useLayoutEffect, useRef, type CSSProperties } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./StackCards.module.css";

import Stack1 from "./images/strategy.png";
import Stack2 from "./images/aiworkforce.png";
import Stack3 from "./images/aisolutions.png";
import Stack4 from "./images/innovationprogram.png";
import Stack5 from "./images/venturebuilding.png";
import Stack6 from "./images/technology.png";

gsap.registerPlugin(ScrollTrigger);
const TOP_STEP = 16; // px — controls the peek visible at the TOP
const RIGHT_STEP = 14;
export default function StackCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

      cards.forEach((card, index) => {
        // the last card has nothing stacking on top of it, so it never shrinks
        if (index === cards.length - 1) return;

        gsap.to(card, {
          scale: 0.94,
          ease: "none",
          transformOrigin: "top center", // keep the top edge fixed so the peek strip stays clean
          scrollTrigger: {
            trigger: card,
            start: "top top+=90",
            // tie the end to when the NEXT card (or the last one) reaches the top,
            // so the shrink plays out over the full time this card is covered
            endTrigger: cards[index + 1],
            end: "top top+=90",
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const StackCardDetails = [
    {
      imgsrc: Stack1,
      title: "AI Strategy & Advisory",
      textColor: "text-white",
      bg: "bg-[#125C57]",
      description:
        "We help organizations understand where AI fits in their operations, define a practical adoption roadmap, identify high-impact use cases, and build the internal governance to move from pilot to deployment.",
      idealFor:
        "Enterprises, government agencies, financial institutions, and development organizations starting their AI journey.",
      idealForColor: "text-white",
    },
    {
      imgsrc: Stack2,
      title: "AI Workforce Transformation",
      textColor: "text-black",
      bg: "bg-accent-500",
      description:
        "We design and deliver targeted AI capability programs for organizations — upskilling leadership teams, technical staff, and operational workforce with the skills needed to work alongside AI systems.",
      idealFor:
        "Organizations scaling their internal AI capability without replacing their workforce.",
      idealForColor: "text-black",
    },
    {
      imgsrc: Stack3,
      title: "AI Solution Development",
      textColor: "text-white",
      bg: "bg-primary-500",
      description:
        "We build custom AI-powered tools, products, and platforms — from intelligent workflow automation to predictive analytics, NLP tools, and sector-specific AI applications built for African context.",
      idealFor:
        "Organizations needing bespoke AI solutions rather than off-the-shelf products.",
      idealForColor: "text-white",
    },
    {
      imgsrc: Stack4,
      title: "Innovation Programs",
      textColor: "text-black",
      bg: "bg-[#e9f6f5]",
      description:
        "We design and run structured innovation programs — challenge-based cohorts, problem-solving sprints, and institutional hackathons — that connect your organization's real problems with Africa's best builders and AI talent.",
      idealFor:
        "Governments, development organizations, and enterprises wanting to activate innovation at scale.",
      idealForColor: "text-[#20a89f]",
    },
    {
      imgsrc: Stack5,
      title: "Venture Building",
      textColor: "text-black",
      bg: "bg-[#FFF0eb]",
      description:
        "We co-found and build AI-first ventures from the ground up — applying our execution studio model to transform validated ideas into investable companies, with shared ownership and structured delivery.",
      idealFor:
        "Founders, institutional innovators, and organizations wanting to launch new digital or AI ventures.",
      idealForColor: "text-[#ff895D]",
    },
    {
      imgsrc: Stack6,
      title: "Technology Enablement",
      textColor: "text-black",
      bg: "bg-[#E7EEF5]",
      description:
        "We implement the technology infrastructure your organization needs to run — from cloud architecture and systems integration to data pipelines, product development, and ongoing engineering support.",
      idealFor:
        "Organizations modernizing their technology stack or building new digital infrastructure.",
      idealForColor: "text-[#0d519a]",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto max-w-7xl section-layout"
    >
      {StackCardDetails.map((stack, index) => (
        // OUTER wrapper: this is what's sticky, and its top offset per index
        // is what creates the peeking-strip effect from earlier cards
        <div
          key={index}
          className="sticky mb-16 sm:mb-28"
          style={{
            top: `${90 + index * TOP_STEP}px`,
            zIndex: index + 1,
            "--stack-top": `${90 + index * TOP_STEP}px`,
          } as CSSProperties}
        >
          {/* INNER wrapper: this is what GSAP scales, kept separate from the
              sticky element so scaling never fights with sticky positioning */}
          <div
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            tabIndex={0}
            role="region"
            aria-label={stack.title}
            className={`${styles.mobileCard} flex flex-col items-center gap-5 rounded-[20px] p-5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.25)] ring-1 ring-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 sm:rounded-[28px] sm:p-6 lg:flex-row lg:gap-8 ${stack.bg}`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <Image
                src={stack.imgsrc}
                alt={stack.title}
                className="w-full rounded-xl object-cover lg:rounded-2xl"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2">
              <h3
                className={`text-xl font-bold leading-tight lg:text-2xl ${stack.textColor}`}
              >
                {stack.title}
              </h3>

              <p
                className={`mt-3 text-sm leading-6 lg:text-base lg:leading-7 ${stack.textColor}`}
              >
                {stack.description}
              </p>

              <div
                className={`mt-5 border-t pt-4 ${
                  stack.textColor === "text-white"
                    ? "border-white/20"
                    : "border-neutral-300"
                }`}
              >
                <h4 className={`text-sm font-semibold ${stack.idealForColor}`}>
                  Ideal For
                </h4>

                <p
                  className={`mt-2 text-sm leading-6 lg:text-base lg:leading-7 ${stack.textColor}`}
                >
                  {stack.idealFor}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* spacer so the last card gets to fully settle before the section ends */}
      <div className="h-[50vh]" aria-hidden />
    </section>
  );
}
