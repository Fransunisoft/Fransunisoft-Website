"use client";
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import collaboration from "../LabsComponents/images/labsHero.png";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

export default function LabsHero() {
  return (
     <section className="p-8 mt-9">
      <div className="flex justify-between">
        <div>
          <div className="hero-item">
            <div className="flex items-center gap-2">
              <h2 className="font-heading font-bold leading-[1.05]">Where</h2>
              <h2 className="text-primary-400">AI Products</h2>
            </div>
            <h2>Are Built And</h2>
            <div className="flex items-center gap-2">
              <h2 className="font-heading text-primary-400 font-bold leading-[1.05]">
                Ventures
              </h2>
              <h2>Are Born.</h2>
            </div>
          </div>

          <p className="mt-5 text-sm">
            FSX Labs is the product and venture studio at the heart of <br />
            Fransunisoft — combining AI capability, execution <br />
            infrastructure, and shared ownership to build the next <br />
            generation of African technology companies
          </p>

          <div className="hero-item mt-5 flex gap-4">
            <Button
              variant="primary"
              className="flex items-center rounded-full gap-2"
              size="lg"
              icon={<ArrowRight size={18} />}
            >
              Talk to FSX Labs
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
  )
}
