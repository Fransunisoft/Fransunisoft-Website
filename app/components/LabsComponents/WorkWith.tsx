"use client";

import { useEffect, useRef, useState } from "react";
import EachLab from "./EachLab";
import ideaStage from "./images/idea-stage.png";
import organization from "./images/organization.png";
import preseed from "./images/pre-seed.png";
import lastscreen from "./images/lastscreen.png";

export default function WorkWith() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    const carousel = carouselRef.current;
    const track = carousel?.firstElementChild;
    if (!carousel || !track) return;

    const updateProgress = () => {
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;
      const firstCardProgress = 100 / track.children.length;
      const scrollFraction =
        maxScroll > 0
          ? Math.min(1, Math.max(0, carousel.scrollLeft / maxScroll))
          : 1;

      setProgress(firstCardProgress + scrollFraction * (100 - firstCardProgress));
    };

    const observer = new ResizeObserver(updateProgress);
    observer.observe(carousel);
    observer.observe(track);
    carousel.addEventListener("scroll", updateProgress, { passive: true });

    return () => {
      observer.disconnect();
      carousel.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div>
      <div className="section-layout">
        <div className="flex items-center gap-4">
          <p className="font-body whitespace-nowrap text-primary-500">
            02-WHO WE WORK WITH
          </p>

          <hr className="h-px flex-1 border-0 bg-neutral-border" />
        </div>
        <h2>
          We work with founders &<br />
          Organization of all Stages
        </h2>
      </div>

      <div className="mt-4 mb-10 section-layout">
        <div
          ref={carouselRef}
          tabIndex={0}
          role="region"
          aria-label="Who we work with carousel"
          className="overflow-x-auto rounded-[35px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary-700 [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex w-max gap-8">
            <div className="w-72 shrink-0 sm:w-80">
              <EachLab image={ideaStage} title="Idea-Stage Founder" />
            </div>

            <div className="w-72 shrink-0 sm:w-80">
              <EachLab image={preseed} title="Pre-Seed & Seed Startups" />
            </div>

            <div className="w-72 shrink-0 sm:w-80">
              <EachLab
                image={organization}
                title="Organizations Launching New Digital Products"
              />
            </div>

            <div className="w-72 shrink-0 sm:w-80">
              <EachLab
                image={lastscreen}
                title="Enterprises Building Internal Innovation Products"
              />
            </div>
          </div>
        </div>
        <div
          role="progressbar"
          aria-label="Carousel progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
          className="mt-6 h-2 w-full overflow-hidden rounded-full bg-neutral-border"
        >
          <div
            className="h-full rounded-full bg-secondary-700"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
