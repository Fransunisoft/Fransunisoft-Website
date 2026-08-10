import { workWithAudiences } from "@/app/components/fsx-consulting/consulting-data";

export default function WhoWeWorkWith() {
  const repeatedAudiences = [...workWithAudiences, ...workWithAudiences];

  return (
    <section className="section-layout overflow-hidden bg-background">
      <div className="space-y-8">
        <h2 className="text-4xl font-semibold text-neutral-primary lg:text-[40px]">
          Who We Work With
        </h2>

        <div className="relative -mx-5 overflow-hidden sm:-mx-[50px] lg:-mx-[100px]">
          <div className="marquee-track flex w-max gap-8 px-5 sm:px-[50px] lg:px-[100px]">
            {repeatedAudiences.map((audience, index) => (
              <article
                key={`${audience}-${index}`}
                aria-hidden={index >= workWithAudiences.length}
                className="flex h-24 w-[260px] shrink-0 items-center justify-center rounded-card border border-neutral-card-border bg-white px-8 text-center shadow-sm md:w-[330px]"
              >
                <h3 className="text-lg font-semibold text-neutral-primary">
                  {audience}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
