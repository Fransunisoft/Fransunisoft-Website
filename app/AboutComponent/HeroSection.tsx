"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import handtohand from "./images/handtohand.png";
import Button from "../components/ui/Button";
import ellipse from "./images/bullet.png";

import { ArrowRight } from "lucide-react";
import Story from "./Story";
import LagosNigeria from "./LagosNigeria";
export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay: 0.6, // wait 0.6s after mounting
      });

      tl.fromTo(
        ".hero-item",
        {
          y: -70,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.25,
        },
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);
  return (
    <section className="p-8">
      <div className="flex justify-between">
        <div ref={heroRef}>
          <div className="hero-item">
            <h1 className="font-heading font-bold leading-[1.05]">
              We Are Africa's
              <br />
              AI Transformation,
              <br />
            </h1>

            <div className="flex items-center gap-2">
              <h1 className="text-primary-400 italic">Talent & Tech</h1>
              <h1>Company.</h1>
            </div>
          </div>

          <p className="hero-item mt-5">
            Building organizations that are ready for the future through AI{" "}
            <br />
            strategy, workforce development, technology implementation, and{" "}
            <br />
            venture building
          </p>

          <div className="hero-item mt-5 flex gap-4">
            <Button
              variant="primary"
              className="flex items-center gap-2"
              size="lg"
              icon={<ArrowRight size={18} />}
            >
              Build With Us
            </Button>

            <button className="h-12 rounded-full border border-[#333333] px-8 text-lg text-[#333333]">
              Meet the Founder
            </button>
          </div>

          <div className="hero-item mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
            <p className="font-body">AI TRANSFORMATION</p>

            <div className="flex items-center gap-3">
              <Image src={ellipse} alt="bulletpoint" />
              <p className="font-body">TALENT DEVELOPMENT</p>
            </div>

            <div className="flex items-center gap-3">
              <Image src={ellipse} alt="bulletpoint" />
              <p className="font-body">TECHNOLOGY IMPLEMENTATION</p>
            </div>

            <div className="flex items-center gap-3">
              <Image src={ellipse} alt="bulletpoint" />
              <p className="font-body">VENTURE BUILDING</p>
            </div>

            <div className="flex items-center gap-3">
              <Image src={ellipse} alt="bulletpoint" />
              <p className="font-body">INNOVATION PROGRAMS</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <LagosNigeria />
          <div className="bg-accent-500 w-138 h-148.75 relative left-5 bottom-5 rounded-[10px]" />
          <div className="bg-[#125c57] absolute -top-8 w-138.25 h-148.75 p-4 mb-10 rounded-[10px]">
            <Image src={handtohand} alt="hero picture" />
          </div>
        </div>
      </div>
      <Story />
    </section>
  );
}
