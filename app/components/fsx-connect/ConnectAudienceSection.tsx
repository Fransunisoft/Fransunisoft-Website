"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import styles from "./ConnectAudienceSection.module.css";
import { buttonVariants } from "@/app/components/ui/Button";
import { cn } from "@/app/lib/utils";
import {
  connectAudiences,
  type ConnectAudienceId,
} from "@/app/components/fsx-connect/connect-data";

export default function ConnectAudienceSection() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeModalId, setActiveModalId] = useState<ConnectAudienceId | null>(
    null
  );

  const activeAudience = connectAudiences.find(
    (audience) => audience.id === activeModalId
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!activeModalId || !dialog) return;

    const trigger = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (trigger instanceof HTMLElement) trigger.focus({ preventScroll: true });
    };
  }, [activeModalId]);

  return (
    <section className="bg-secondary-900 text-white lg:mb-20">
      <div className="section-layout py-7 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-white lg:text-5xl">
            Who fsx connect is for
          </h2>
          <p className="mt-3 text-xs leading-5 text-white/75 lg:mt-5 lg:text-base lg:leading-7">
            FSX Connect bringing together senior mentors, strategic advisors,
            institutional partners, and investors to{" "}
            <strong className="font-semibold text-white">
              support transformation across the FSX ecosystem.
            </strong>
          </p>
        </div>

        <div className="mt-8 space-y-9 lg:mt-12 lg:space-y-14">
          {connectAudiences.map((audience, index) => (
            <article
              key={audience.id}
              className={cn(
                "grid items-center gap-5 lg:grid-cols-2 lg:gap-12",
                index % 2 === 1 && "lg:[&>*:first-child]:order-2",
                index % 2 === 1 && "lg:[&>*:last-child]:order-1"
              )}
            >
              <button
                type="button"
                onClick={() => setActiveModalId(audience.id)}
                className="group block w-full overflow-hidden rounded-card text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-900"
                aria-label={`Open details for ${audience.title}`}
                aria-haspopup="dialog"
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

              <div className="max-w-xl">
                <h3 className="text-lg font-semibold text-white lg:text-3xl">
                  {audience.title}
                </h3>
                <p className="mt-3 text-sm font-bold text-white lg:mt-5 lg:text-lg">
                  {audience.subtitle}
                </p>
                <p className="mt-2 text-xs leading-5 text-white/72 lg:mt-4 lg:text-base lg:leading-7">
                  {audience.description}
                </p>
                <button
                  type="button"
                  onClick={() => setActiveModalId(audience.id)}
                  aria-haspopup="dialog"
                  className={cn(
                    buttonVariants({ variant: "transparent", size: "md" }),
                    "mt-4 h-9 rounded-full border-white/70 px-4 text-xs font-bold text-white hover:bg-white/10 lg:mt-6 lg:h-11 lg:px-6 lg:text-sm"
                  )}
                >
                  Learn More
                  <span aria-hidden="true">{"->"}</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeAudience && (
        <dialog
          ref={dialogRef}
          className={styles.dialog}
          aria-modal="true"
          aria-labelledby="connect-modal-title"
          onCancel={() => setActiveModalId(null)}
          onKeyDown={(event) => {
            if (event.key !== "Tab") return;
            const targets = event.currentTarget.querySelectorAll<HTMLElement>(
              'button, [tabindex="0"]'
            );
            const first = targets[0];
            const last = targets[targets.length - 1];
            if (event.shiftKey && document.activeElement === first) {
              event.preventDefault();
              last?.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
              event.preventDefault();
              first?.focus();
            }
          }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setActiveModalId(null);
            }
          }}
        >
          <button
            type="button"
            onClick={() => setActiveModalId(null)}
            className={styles.closeButton}
            aria-label="Close modal"
            autoFocus
          >
            <X size={32} aria-hidden="true" />
          </button>

          <div
            className={styles.scroller}
            tabIndex={0}
            role="region"
            aria-label={`${activeAudience.modal.title} details`}
          >
            <div className={styles.content}>
              <h2
                id="connect-modal-title"
                className={styles.title}
              >
                {activeAudience.modal.title}
              </h2>
              <ul className={styles.bullets}>
                {activeAudience.modal.bullets.map((bullet) => (
                  <li key={bullet}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.image}>
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
        </dialog>
      )}
    </section>
  );
}
