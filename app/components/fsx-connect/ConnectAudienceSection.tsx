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
    <section className="bg-secondary-900 text-white">
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
                  Speak With Our Team
                  <span aria-hidden="true">{"->"}</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalId(audience.id)}
                className="group overflow-hidden rounded-card text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-900"
                aria-label={`Open details for ${audience.title}`}
              >
                <Image
                  src={audience.image.src}
                  alt={audience.image.alt}
                  width={2400}
                  height={2640}
                  sizes="(min-width: 1024px) 43vw, 100vw"
                  className="aspect-[1.5/1] w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                />
              </button>
            </article>
          ))}
        </div>
      </div>

      {activeAudience && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="connect-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setActiveModalId(null);
            }
          }}
        >
          <div className="relative grid max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[40px] bg-secondary-50 shadow-2xl lg:grid-cols-[0.85fr_1.15fr]">
            <button
              type="button"
              onClick={() => setActiveModalId(null)}
              className="absolute right-6 top-6 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white/80 text-neutral-primary transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Close modal"
            >
              <X size={32} aria-hidden="true" />
            </button>

            <div className="overflow-y-auto p-8 sm:p-12 lg:p-14">
              <h2
                id="connect-modal-title"
                className="text-4xl font-semibold text-secondary-900 lg:text-5xl"
              >
                {activeAudience.modal.title}
              </h2>
              <ul className="mt-8 space-y-6 pl-6 text-xl leading-9 text-neutral-primary">
                {activeAudience.modal.bullets.map((bullet) => (
                  <li key={bullet} className="list-disc pl-2">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            <Image
              src={activeAudience.modal.image.src}
              alt={activeAudience.modal.image.alt}
              width={2400}
              height={2640}
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="hidden h-full max-h-[92vh] w-full object-cover lg:block"
            />
          </div>
        </div>
      )}
    </section>
  );
}
