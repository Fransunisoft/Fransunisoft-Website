import { workWithAudiences } from "@/app/components/fsx-consulting/consulting-data";

export default function WhoWeWorkWith() {
  const repeatedAudiences = [...workWithAudiences, ...workWithAudiences];

  return (
    <section className="section-layout overflow-hidden bg-background">
      <div className="space-y-5 lg:space-y-8">
        <div className="flex items-center gap-4">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary-600">
            Who We Work With
          </p>
          <div className="h-px flex-1 bg-neutral-card-border" />
        </div>

        <h2 className="text-2xl font-semibold text-neutral-primary lg:text-[40px]">
          Who We Work With
        </h2>

        <div className="relative -mx-5 overflow-hidden sm:-mx-[50px] lg:-mx-[100px]">
          <div className="marquee-track flex w-max gap-4 px-4 sm:px-[40px] lg:gap-8 lg:px-[80px]">
            {repeatedAudiences.map((audience, index) => (
              <article
                key={`${audience}-${index}`}
                aria-hidden={index >= workWithAudiences.length}
                className="flex h-16 w-[170px] shrink-0 items-center justify-center rounded-card border border-neutral-card-border bg-white px-3 text-center shadow-sm md:w-[330px] lg:h-22 lg:w-[330px] lg:px-4"
              >
                <h5 className="text-xs font-semibold text-neutral-primary lg:text-xl">
                  {audience}
                </h5>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
