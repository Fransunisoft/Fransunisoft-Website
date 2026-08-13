export default function StatsCards() {
  const stats = [
    {
      number: "5",
      title: "5 Products Built",
      description:
        "Across healthcare, safety, property management, hospital management, and skill exchange.",
    },
    {
      number: "150,000+",
      title: "Youths Reached",
      description:
        "Through programs, community initiatives, and ecosystem engagement led by FSX.",
    },
    {
      number: "6",
      title: "Institutional Engagements",
      description:
        "Partnered with 3MTT, DBN, GDG, Andela, and other leading organizations across the ecosystem.",
    },
    {
      number: "1",
      title: "Pilot Cohort Completed",
      description:
        "RootBuilders Cohort 1 – 12 weeks, real problems, real teams, real products.",
    },
  ];

  return (
    <section className="w-full p-5 sm:p-6 lg:p-8">
      <div className="flex items-center gap-4 mb-5">
        <p className="font-body whitespace-nowrap text-primary-500">
          04 - OUR TRACK RECORD
        </p>

        <hr className="h-px flex-1 border-0 bg-neutral-border" />
      </div>
      <div className="mb-10 lg:mb-20">
        <h1 className="text-left">
          Execution is What We do, <br />
          Here is Evidence
        </h1>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-stretch rounded-2xl border border-neutral-200 bg-white lg:flex-row">
        {stats.map((stat, index) => {
          const isRaised = index === 1;
          const isWhite = index === 1 || index === 3;

          return (
            <div
              key={stat.title}
              className={`
                relative flex w-full flex-col items-center text-center
                px-6 py-6
                lg:w-1/4
                ${isWhite ? "bg-white" : "bg-[#E8EDF1]"}
                ${
                  isRaised
                    ? "lg:z-10 lg:-my-5 lg:min-h-55 lg:rounded-sm lg:py-7 lg:shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
                    : "lg:min-h-47.5 lg:py-5"
                }
                ${index !== 0 ? "border-t border-[#20A89F] lg:border-l lg:border-t-0" : ""}
              `}
            >
              {/* Number */}
              <h2 className="font-heading text-3xl font-bold leading-none text-[#FF7652]">
                {stat.number}
              </h2>

              {/* Title */}
              <h3 className="mt-3 font-heading text-sm font-bold text-[#333333]">
                {stat.title}
              </h3>

              {/* Description */}
              <p className="mt-4 max-w-55 font-body text-sm leading-6 text-[#444444]">
                {stat.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
