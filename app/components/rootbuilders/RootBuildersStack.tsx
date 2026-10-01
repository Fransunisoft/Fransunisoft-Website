"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import { stackCards } from "./rootbuilders-data";
import styles from "./RootBuildersStack.module.css";

export default function RootBuildersStack() {
  const [activeId, setActiveId] = useState(stackCards[0].id);
  const activeIndex = stackCards.findIndex((card) => card.id === activeId);
  const slotWidth = 100 / stackCards.length;
  const activeWidth = slotWidth * 1.9;
  const activeLeft = Math.max(
    0,
    Math.min(
      activeIndex * slotWidth - (activeWidth - slotWidth) / 2,
      100 - activeWidth
    )
  );
  const activeRight = activeLeft + activeWidth;

  return (
    <div className={styles.stack}>
      {stackCards.map((card, index) => {
        const isActive = card.id === activeId;
        const isBeforeActive = index < activeIndex;
        // Divide the space around the open card into usable click targets.
        const visibleWidth = isActive
          ? activeWidth
          : isBeforeActive
            ? activeLeft / activeIndex
            : (100 - activeRight) / (stackCards.length - activeIndex - 1);
        const visibleLeft = isActive
          ? activeLeft
          : isBeforeActive
            ? index * visibleWidth
            : activeRight + (index - activeIndex - 1) * visibleWidth;
        const overlap = isActive ? 0 : 2;
        const width = visibleWidth + overlap;
        const left = visibleLeft - (!isActive && !isBeforeActive ? overlap : 0);

        return (
          <button
            key={card.id}
            type="button"
            onClick={() => setActiveId(card.id)}
            className={styles.card}
            data-active={isActive}
            aria-expanded={isActive}
            aria-controls={`rootbuilders-details-${card.id}`}
            style={{
              backgroundColor: card.color,
              "--card-left": `${left}%`,
              "--card-width": `${width}%`,
              "--card-z": isActive ? 20 : stackCards.length - Math.abs(index - activeIndex),
              "--content-width": `${(visibleWidth / width) * 100}%`,
              "--content-margin": !isActive && !isBeforeActive ? "auto" : "0",
            } as CSSProperties}
          >
            <div className={styles.content}>
              <h3 className={styles.title}>{card.title}</h3>
              <p
                id={`rootbuilders-details-${card.id}`}
                hidden={!isActive}
                className={styles.description}
              >
                {card.description}
              </p>
            </div>

            {isActive && (
              <div className={styles.image}>
                {card.image ? (
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
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
