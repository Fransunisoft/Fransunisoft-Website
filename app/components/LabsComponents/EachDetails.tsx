// EachDetails.tsx
"use client";

import Image from "next/image";
import teachingDetails from "./images/poweredAiproduct.png";

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
      image: teachingDetails,
    },

    CoFounding: {
      title: "Co-Founding",
      description:
        "We partner with ambitious founders to build, validate, and scale innovative technology ventures from the ground up.",
      image: teachingDetails,
    },

    "Build-for-Equity": {
      title: "Build-for-Equity",
      description:
        "We build technology products in exchange for equity, helping promising ventures access the technical expertise they need to grow.",
      image: teachingDetails,
    },
  };

  const activeDetails = details[menu] ?? details["AI Products"];

  return (
    <section className="px-4 py-8 lg:px-8">
      <div className="mx-auto flex min-h-[435px] w-full max-w-[1400px] overflow-hidden rounded-3xl bg-[#e7eef5]">
        <div className="flex w-[42%] items-center justify-center px-8 py-12 lg:px-12">
          <div className="w-full max-w-[500px]">
            <h1 className="font-heading text-3xl font-bold leading-tight text-[#20a89f] lg:text-[30px]">
              {activeDetails.title}
            </h1>

            <p className="mt-5 font-body text-base leading-7 text-[#333333] lg:text-[16px]">
              {activeDetails.description}
            </p>
          </div>
        </div>

        <div className="relative min-h-[435px] w-[58%]">
          <Image
            src={activeDetails.image}
            alt={activeDetails.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}