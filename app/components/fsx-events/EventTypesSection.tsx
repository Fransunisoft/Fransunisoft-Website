import Image from "next/image";
import { eventTypes } from "@/app/components/fsx-events/events-data";

export default function EventTypesSection() {
  return (
    <section className="section-layout bg-background py-10 lg:py-14">
      <div className="flex items-center gap-4">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary-600">
          Event Types
        </p>
        <div className="h-px flex-1 bg-neutral-card-border" />
      </div>

      <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-neutral-primary">
        Programs That Bring Africa&apos;s
        <br />
        AI Ecosystem Together.
      </h2>

      <div className="mt-8 grid items-start gap-12 lg:grid-cols-[0.82fr_1fr] lg:gap-20">
        <div className="overflow-hidden rounded-[24px] lg:sticky lg:top-32">
          <Image
            src="/events-programs.png"
            alt="FSX Events program types collage"
            width={2025}
            height={2215}
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="w-full object-cover"
          />
        </div>

        <div className="lg:pt-1">
          {eventTypes.map((event) => (
            <article
              key={event.title}
              className="border-b border-neutral-card-border pb-8 pt-8 first:pt-0 last:border-b-0 last:pb-0"
            >
              <h3 className="text-3xl font-semibold leading-tight text-primary-500">
                {event.title}
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-secondary">
                {event.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
