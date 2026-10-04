export default function StatsCards() {
  const stats = [
    {
      number: "5",
      title: "Products Built",
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
    <section className="home-stats section-layout">
      <style>{`
        .home-stats-heading h2 span, .home-stats-card h3 span { font: inherit; }
        .home-stats-mobile-heading { display: none; }
        @media (max-width: 1023px) {
          .home-stats > div:first-of-type { margin-bottom: 16px; gap: 12px; }
          .home-stats > div:first-of-type p { font-size: 14px; line-height: 20px; }
        .home-stats-heading { margin-bottom: 24px; }
          .home-stats-heading h2 { width: 100%; font-size: 28px; line-height: 34px; color: #2c3e50; font-weight: 700; }
          .home-stats-heading h2 span, .home-stats-card h3 span { font: inherit; }
          .home-stats-mobile-heading { display: inline; }
          .home-stats-desktop-heading { display: none; }
          .home-stats-list { width: min(100%, 310px); margin: 0 auto; padding: 0; border: 0; border-radius: 0; box-shadow: 0 6px 10px rgb(0 0 0 / 18%); }
          .home-stats-card { min-height: 180px; padding: 16px; }
          .home-stats-card:nth-child(odd) { background: #e1e6eb; }
          .home-stats-card:nth-child(even) { min-height: 216px; background: white; }
          .home-stats-card:nth-child(3) { min-height: 192px; padding-bottom: 14px; }
          .home-stats-card h2 { font-size: 28px; line-height: 34px; font-weight: 700; color: #ff895d; }
          .home-stats-card h3 { margin-top: 8px; font-size: 16px; line-height: 20px; font-weight: 700; }
          .home-stats-card p { max-width: none; margin-top: 28px; font-size: 16px; line-height: 24px; color: #333; }
          .home-stats-card:first-child p { margin-top: 12px; }
          .home-stats-card:last-child p { max-width: 260px; }
        }
      `}</style>
      <div className="flex items-center gap-4 mb-5">
        <p className="font-body whitespace-nowrap text-primary-500">
          04 - OUR TRACK RECORD
        </p>

        <hr className="h-px flex-1 border-0 bg-neutral-border" />
      </div>
      <div className="home-stats-heading mb-10 lg:mb-6">
        <h2 className="text-left w-70 sm:w-full">
          <span className="home-stats-desktop-heading">Execution Is What We Do.<br />Here Is Evidence.</span>
          <span className="home-stats-mobile-heading">Execution Is What We Do.<br />Here Is Evidence.</span>
        </h2>
      </div>
      <div className="home-stats-list flex flex-col items-stretch rounded-2xl border border-neutral-200 bg-white lg:flex-row">
        {stats.map((stat, index) => {
          const isRaised = index === 1;
          const isWhite = index === 1 || index === 3;

          return (
            <div
              key={stat.title}
              className={`
                home-stats-card relative flex w-full flex-col items-center text-center
                px-6 py-6
                lg:w-1/4
                ${isWhite ? "bg-white" : "bg-[#E8EDF1]"}
                ${
                  isRaised
                    ? "lg:z-10 lg:mt-0 lg:-mb-5 lg:min-h-55 lg:rounded-sm lg:py-6 lg:shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
                    : "lg:min-h-47.5 lg:py-5"
                }
                ${index < stats.length - 1 ? "border-b-[3px] border-[#20A89F] lg:border-b-0" : ""}
                ${index > 0 ? "lg:border-l-[3px] lg:border-[#20A89F]" : ""}
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
