import { workWithAudiences } from "@/app/components/fsx-consulting/consulting-data";

export default function WhoWeWorkWith() {
  const repeatedAudiences = [...workWithAudiences, ...workWithAudiences];

  return (
    <section className="section-layout overflow-hidden bg-background">
      <div className="space-y-8">
        <h2 className=" font-semibold text-neutral-primary">
          Who We Work With
        </h2>

        <div className="relative -mx-5 overflow-hidden sm:-mx-[50px] lg:-mx-[100px]">
          <div className="marquee-track flex w-max gap-8 px-4 sm:px-[40px] lg:px-[80px]">
            {repeatedAudiences.map((audience, index) => (
              <article
                key={`${audience}-${index}`}
                aria-hidden={index >= workWithAudiences.length}
                className="flex h-22 w-[260px] shrink-0 items-center justify-center rounded-card border border-neutral-card-border bg-white px-4 text-center shadow-sm md:w-[330px]"
              >
                <h5 className=" font-semibold text-neutral-primary">
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
