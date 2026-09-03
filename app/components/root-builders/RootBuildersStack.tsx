"use client";

import Image from "next/image";
import { useState } from "react";
import { stackCards } from "./rootbuilders-data";
import { cn } from "@/app/lib/utils";

export default function RootBuildersStack() {
  const [activeId, setActiveId] = useState(stackCards[0].id);
  const activeCard = stackCards.find((card) => card.id === activeId) ?? stackCards[0];
  const orderedCards = [
    activeCard,
    ...stackCards.filter((card) => card.id !== activeCard.id),
  ];

  return (
    <div className="mt-8 flex min-h-[318px] w-full overflow-hidden rounded-[18px] sm:min-h-[360px]">
      {orderedCards.map((card, index) => {
        const isActive = index === 0;

        return (
          <button
            key={card.id}
            type="button"
            onClick={() => setActiveId(card.id)}
            className={cn(
              "relative overflow-hidden text-left text-white transition-all duration-500 ease-out focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400",
              isActive
                ? "min-w-0 flex-[1_1_47%] rounded-l-[18px]"
                : "min-w-[58px] flex-[0_0_17%] sm:min-w-[78px]"
            )}
            style={{ backgroundColor: card.color }}
            aria-pressed={isActive}
          >
            <div
              className={cn(
                "relative z-10 h-full p-4 sm:p-6",
                !isActive && "flex items-start justify-center"
              )}
            >
              <h3
                className={cn(
                  "font-heading font-bold leading-tight text-white",
                  isActive
                    ? "max-w-[230px] text-[20px] sm:text-[24px]"
                    : "origin-top-left text-[16px] sm:text-[19px]"
                )}
              >
                {card.title}
              </h3>
              {isActive && (
                <p className="mt-3 max-w-[270px] text-[12px] leading-5 text-white/90 sm:text-[13px]">
                  {card.description}
                </p>
              )}
            </div>

            {isActive && (
              <div className="absolute inset-x-0 bottom-0 h-[46%] overflow-hidden">
                {card.image ? (
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 350px, 45vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-[radial-gradient(circle_at_25%_30%,rgba(255,255,255,0.32),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.18),rgba(0,0,0,0.2))]" />
                )}
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
