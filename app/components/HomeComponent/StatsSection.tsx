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
    <section className="w-full p-8">
      <div className="flex items-center gap-4 mb-5">
        <p className="font-body whitespace-nowrap text-primary-500">
          04 - OUR TRACK RECORD
        </p>

        <hr className="h-px flex-1 border-0 bg-neutral-border" />
      </div>
      <div className="mb-20">
        <h1 className="text-left">
          Execution is What We do, <br />
          Here is Evidence
        </h1>
        </div>
      <div className="mx-auto flex max-w-6xl items-stretch rounded-2xl border border-neutral-200 bg-white">
        {stats.map((stat, index) => {
          const isRaised = index === 1;
          const isWhite = index === 1 || index === 3;

          return (
           
            <div
              key={stat.title}
              className={`
                relative flex w-1/4 flex-col items-center text-center
                px-6
                ${isWhite ? "bg-white" : "bg-[#E8EDF1]"}
                ${isRaised
                  ? "z-10 -my-5 min-h-55 rounded-sm py-7 shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
                  : "min-h-47.5 py-5"
                }
                ${index !== 0 ? "border-l border-[#20A89F]" : ""}
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