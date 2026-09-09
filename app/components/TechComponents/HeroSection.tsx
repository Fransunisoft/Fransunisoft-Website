"use client";
import Image from "next/image";
import collaboration from "./images/tech.png";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="p-8 mt-9">
      <div className="flex justify-between">
        <div>
          <div className="hero-item">
            <div className="flex items-center gap-2">
              <h2 className="font-heading font-bold leading-[1.05]">
                Technology That
              </h2>
            </div>
            <h2>Works. Infrastructure</h2>
            <div>
              <h2>That Scales.</h2>
            </div>
          </div>

          <p className="mt-5 text-sm">
            FSX Tech is the engineering and implementation arm of <br />
            Fransunisoft — ensuring every product, system, and AI <br />
            solution we build is stable, secure, performant, and ready to <br />
            scale in the African market.
          </p>

          <div className="hero-item mt-5 flex gap-4">
            <Button
              variant="primary"
              className="flex items-center rounded-full gap-2"
              size="lg"
              icon={<ArrowRight size={18} />}
            >
              Talk to FSX Tech
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="bg-accent-500 w-138 h-95 relative left-5 bottom-5 rounded-[10px]" />
          <div className="bg-[#125c57] absolute -top-8 w-138.25  p-4 mb-10 rounded-[10px]">
            <Image src={collaboration} alt="hero picture" />
          </div>
        </div>
      </div>
    </section>
  );
}
