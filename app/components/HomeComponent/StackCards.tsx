"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Stack1 from "./images/stack1.png";
import Stack2 from "./images/stack2.png";
import Stack3 from "./images/stack3.png";
import Stack4 from "./images/stack4.png";
import Stack5 from "./images/stack5.png";
import Stack6 from "./images/stack6.png";

gsap.registerPlugin(ScrollTrigger);

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
    <section ref={sectionRef} className="relative mx-auto max-w-7xl px-6">
      {StackCardDetails.map((stack, index) => (
        <div
          key={index}
          ref={(el) => {
            cardsRef.current[index] = el;
          }}
          style={{
            zIndex: index + 1,
            top: `${100 + index * 15}px`,
          }}
          className={`sticky mb-6 flex items-center  gap-8 rounded-2xl p-6 shadow-xl ${stack.bg}`}
        >
          {/* Image */}
          <div className="w-1/2">
            <Image
              src={stack.imgsrc}
              alt={stack.title}
              className="h-full w-full rounded-xl object-cover"
            />
          </div>

          {/* Text */}
          <div className="w-1/2">
            <h2
              className={`text-xl font-bold leading-tight lg:text-2xl ${stack.textColor}`}
            >
              {stack.title}
            </h2>

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
              <h3 className={`text-sm font-semibold ${stack.idealForColor}`}>
                Ideal For
              </h3>

              <p
                className={`mt-2 text-sm leading-6 lg:text-base lg:leading-7 ${stack.textColor}`}
              >
                {stack.idealFor}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Spacer so the last card fully settles before the section ends */}
      <div className="h-[50vh]" aria-hidden />
    </section>
  );
}
