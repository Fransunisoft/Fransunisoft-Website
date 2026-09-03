import Image from "next/image";
import { academyHighlights } from "@/app/components/fsx-academy/academy-data";

export default function AcademyCapabilitySection() {
  return (
    <section className="bg-secondary-900 text-white">
      <div className="section-layout py-10 lg:py-16">
        <div className="grid items-start gap-12 lg:grid-cols-[0.82fr_1fr] lg:gap-20">
          <div className="overflow-hidden rounded-[24px]">
            <Image
              src="/academy-organizations.png"
              alt="FSX Academy AI capability program presentation"
              width={2015}
              height={2415}
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="w-full object-cover"
            />
          </div>

          <div className="pt-4 lg:pt-5">
            <p className="font-heading text-lg font-bold leading-6 text-accent">
              For Organizations
            </p>
            <div className="mt-4 space-y-7">
              {academyHighlights.map((highlight) => (
                <div key={highlight.title}>
                  <h3 className="max-w-xl text-3xl font-semibold leading-tight text-white">
                    {highlight.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-white/75">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1fr_0.92fr] lg:gap-20">
          <div>
            <p className="font-heading text-lg font-bold leading-6 text-accent">
              For Individual Talent
            </p>
            <h3 className="mt-4 text-3xl font-semibold leading-tight text-white">
              Learn. Build. Deploy. Own.
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">
              FSX Academy gives individual builders the skills, experience, and
              ecosystem connections needed to build AI-powered solutions - and
              the opportunity to earn equity in the ventures they help create
            </p>
          </div>

          <div className="overflow-hidden rounded-[24px]">
            <Image
              src="/academy-rootbuilders.png"
              alt="RootBuilders team learning together at FSX Academy"
              width={2040}
              height={1340}
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="aspect-[1.52/1] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
