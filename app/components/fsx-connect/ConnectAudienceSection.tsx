"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { KeyboardEvent, useEffect, useState } from "react";
import { buttonVariants } from "@/app/components/ui/Button";
import { cn } from "@/app/lib/utils";
import {
  connectAudiences,
  type ConnectAudience,
  type ConnectAudienceId,
} from "@/app/components/fsx-connect/connect-data";

export default function ConnectAudienceSection() {
  const [activeModalId, setActiveModalId] = useState<ConnectAudienceId | null>(
    null
  );

  const activeAudience = connectAudiences.find(
    (audience) => audience.id === activeModalId
  );

  useEffect(() => {
    if (!activeModalId) return;

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveModalId(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalId]);

  function handleCardKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    audience: ConnectAudience
  ) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveModalId(audience.id);
    }
  }

  return (
    <section className="bg-secondary-900 text-white lg:mb-20 ">
      <div className="section-layout py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold text-white lg:text-5xl">
            Who fsx connect is for
          </h2>
          <p className="mt-5 text-base leading-7 text-white/75">
            FSX Connect bringing together senior mentors, strategic advisors,
            institutional partners, and investors to{" "}
            <strong className="font-semibold text-white">
              support transformation across the FSX ecosystem.
            </strong>
          </p>
        </div>

        <div className="mt-12 space-y-14">
          {connectAudiences.map((audience, index) => (
            <article
              key={audience.id}
              className={cn(
                "grid items-center gap-8 lg:grid-cols-2 lg:gap-12",
                index % 2 === 1 && "lg:[&>*:first-child]:order-2"
              )}
            >
              <div className="max-w-xl">
                <h3 className="text-3xl font-semibold text-white">
                  {audience.title}
                </h3>
                <p className="mt-5 text-lg font-bold text-white">
                  {audience.subtitle}
                </p>
                <p className="mt-4 text-base leading-7 text-white/72">
                  {audience.description}
                </p>
                <button
                  type="button"
                  onClick={() => setActiveModalId(audience.id)}
                  onKeyDown={(event) => handleCardKeyDown(event, audience)}
                  className={cn(
                    buttonVariants({ variant: "transparent", size: "md" }),
                    "mt-6 rounded-full border-white/70 px-6 text-sm font-bold text-white hover:bg-white/10"
                  )}
                >
                  Learn More
                  <span aria-hidden="true">{"->"}</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalId(audience.id)}
                className="group block w-full overflow-hidden rounded-card text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-900"
                aria-label={`Open details for ${audience.title}`}
              >
                <span className="connect-audience-image-frame">
                  <Image
                    src={audience.image.src}
                    alt={audience.image.alt}
                    fill
                    sizes="(min-width: 1024px) 43vw, 100vw"
                    className="object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                  />
                </span>
              </button>
            </article>
          ))}
        </div>
      </div>

      {activeAudience && (
        <div
          className="no-scrollbar fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 p-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="connect-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setActiveModalId(null);
            }
          }}
        >
          <div className="relative grid w-full max-w-7xl overflow-hidden rounded-[40px] bg-secondary-50 shadow-2xl lg:min-h-[680px] lg:grid-cols-[45%_55%]">
            <button
              type="button"
              onClick={() => setActiveModalId(null)}
              className="absolute right-6 top-6 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white/80 text-neutral-primary transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Close modal"
            >
              <X size={32} aria-hidden="true" />
            </button>

            <div className="p-8 sm:p-12 lg:p-12">
              <h2
                id="connect-modal-title"
                className="text-4xl font-semibold text-secondary-900 lg:text-5xl"
              >
                {activeAudience.modal.title}
              </h2>
              <ul className="mt-7 space-y-5 pl-6 text-lg leading-8 text-neutral-primary">
                {activeAudience.modal.bullets.map((bullet) => (
                  <li key={bullet} className="list-disc pl-2">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-72 overflow-hidden border-t border-secondary-900/10 lg:h-auto lg:min-h-[680px] lg:border-l lg:border-t-0">
              <Image
                src={activeAudience.modal.image.src}
                alt={activeAudience.modal.image.alt}
                width={1352}
                height={1163}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-full w-full object-cover object-center"
                loading="eager"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
