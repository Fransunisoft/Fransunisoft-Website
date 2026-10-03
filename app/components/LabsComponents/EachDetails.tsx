// EachDetails.tsx
"use client";

import Image from "next/image";
import teachingDetails from "./images/poweredAiproduct.png";
import labbuildPhoto from "@/public/labbuildPhoto.webp";
import labbuildPhoto2 from "@/public/labbuildPhoto2.webp";
import labbuildPhoto3 from "@/public/labuildPhoto3.webp";

interface EachDetailsProps {
  menu: string;
}

export default function EachDetails({ menu }: EachDetailsProps) {
  const details: Record<
    string,
    {
      title: string;
      description: string;
      image: typeof teachingDetails;
    }
  > = {
    "AI Products": {
      title: "AI-Powered Products",
      description:
        "We design and build custom AI applications, platforms, and tools — for organizations with specific use cases and for the FSX venture portfolio.",
      image: teachingDetails,
    },

    "MVPs Development": {
      title: "MVP Development",
      description:
        "We turn ideas into functional MVPs that help startups and organizations validate their products quickly and efficiently.",
      image: labbuildPhoto,
    },

    "Co-Founding": {
      title: "Co-Founding",
      description:
        "We partner with ambitious founders to build, validate, and scale innovative technology ventures from the ground up.",
      image: labbuildPhoto2,
    },

    "Build-for-Equity": {
      title: "Build-for-Equity",
      description:
        "We build technology products in exchange for equity, helping promising ventures access the technical expertise they need to grow.",
      image: labbuildPhoto3,
    },
  };

  const activeDetails = details[menu] ?? details["AI Products"];

  return (
    <section className="section-layout">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col-reverse overflow-hidden rounded-3xl bg-[#e7eef5] p-6 lg:min-h-[435px] lg:flex-row lg:p-0">
        <div className="flex w-full min-w-0 items-center justify-center pt-7 lg:w-[42%] lg:px-12 lg:py-12">
          <div className="w-full max-w-[500px]">
            <h2 className="font-heading text-2xl! font-bold leading-tight text-[#20a89f] lg:text-[30px]!">
              {activeDetails.title}
            </h2>

            <p className="mt-3 font-body text-base! leading-7! text-[#333333] lg:mt-5">
              {activeDetails.description}
            </p>
          </div>
        </div>

        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl lg:aspect-auto lg:min-h-[435px] lg:w-[58%] lg:rounded-none">
          <Image
            src={activeDetails.image}
            alt={activeDetails.title}
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
