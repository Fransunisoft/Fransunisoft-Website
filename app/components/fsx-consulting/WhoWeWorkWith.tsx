import { workWithAudiences } from "@/app/components/fsx-consulting/consulting-data";

export default function WhoWeWorkWith() {
  const repeatedAudiences = [...workWithAudiences, ...workWithAudiences];

  return (
    <section className="section-layout overflow-hidden bg-background">
      <div className="space-y-5 lg:space-y-8">
        <div className="flex items-center gap-4">
          <p className="text-xs font-extrabold uppercase whitespace-nowrap text-primary-600">
           02-Who We Work With
          </p>
          <div className="h-px flex-1 bg-neutral-card-border" />
        </div>

        <h2 className="text-2xl font-semibold text-neutral-primary lg:text-[40px]">
          Who We Work With
        </h2>

        <div className="relative -mx-5 overflow-hidden sm:-mx-12.5 lg:-mx-25 ">
          <div className="marquee-track flex w-max gap-4 px-4 sm:px-10  lg:gap-8 lg:px-20">
            {repeatedAudiences.map((audience, index) => (
              <article
                key={`${audience}-${index}`}
                aria-hidden={index >= workWithAudiences.length}
                className="group flex h-16 w-42.5 shrink-0 items-center justify-center rounded-card border border-neutral-card-border bg-white px-3 text-center shadow-sm transition-colors hover:bg-primary-500 md:w-82.5 lg:h-22 lg:w-82.5 lg:px-4"
              >
                <h5 className="text-xs font-semibold text-neutral-primary transition-colors group-hover:text-white lg:text-xl">
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
