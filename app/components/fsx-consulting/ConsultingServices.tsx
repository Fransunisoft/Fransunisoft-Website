"use client";

import Image from "next/image";
import { KeyboardEvent, useMemo, useState } from "react";
import { cn } from "@/app/lib/utils";
import {
  consultingServices,
  type ConsultingService,
} from "@/app/components/fsx-consulting/consulting-data";

export default function ConsultingServices() {
  const [activeId, setActiveId] =
    useState<ConsultingService["id"]>("assessment");

  const activeIndex = consultingServices.findIndex(
    (service) => service.id === activeId
  );
  const activeService = useMemo(
    () =>
      consultingServices.find((service) => service.id === activeId) ??
      consultingServices[0],
    [activeId]
  );

  function focusTab(index: number) {
    const next = consultingServices[index];
    setActiveId(next.id);
    document.getElementById(`tab-${next.id}`)?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      focusTab((activeIndex + 1) % consultingServices.length);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      focusTab(
        (activeIndex - 1 + consultingServices.length) %
          consultingServices.length
      );
    }

    if (event.key === "Home") {
      event.preventDefault();
      focusTab(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      focusTab(consultingServices.length - 1);
    }
  }

  return (
    <section id="consulting-service" className="section-layout bg-background">
      <div className="space-y-8 lg:space-y-10">
        <h2 className="text-4xl font-semibold text-neutral-primary lg:text-[40px]">
          What FSX Consulting Does
        </h2>

        <div
          role="tablist"
          aria-label="FSX Consulting services"
          className="no-scrollbar flex gap-4 overflow-x-auto pb-2 lg:justify-center lg:gap-6"
        >
          {consultingServices.map((service) => {
            const isActive = service.id === activeId;

            return (
              <button
                key={service.id}
                id={`tab-${service.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${service.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveId(service.id)}
                onKeyDown={handleKeyDown}
                className={cn(
                  "h-14 shrink-0 rounded-full border px-7 text-base font-extrabold shadow-sm transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                  isActive
                    ? "border-primary-700 bg-primary-700 text-white"
                    : "border-neutral-card-border bg-white text-neutral-primary hover:border-primary-200 hover:text-primary-800"
                )}
              >
                {service.label}
              </button>
            );
          })}
        </div>

        <div
          key={activeService.id}
          id={`panel-${activeService.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeService.id}`}
          className="consulting-tab-panel grid items-center gap-9 rounded-section bg-primary-50 p-6 md:p-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14 lg:p-14"
        >
          <div className="overflow-hidden rounded-card">
            <Image
              src={activeService.image.src}
              alt={activeService.image.alt}
              width={899}
              height={599}
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="aspect-[1.5/1] w-full object-cover"
            />
          </div>

          <div className="max-w-md">
            <h3 className="text-3xl font-semibold leading-tight text-secondary-500 lg:text-[34px]">
              {activeService.title}
            </h3>
            <p className="mt-5 text-base leading-7 text-neutral-secondary">
              {activeService.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
