import { academyTracks } from "@/app/components/fsx-academy/academy-data";

export default function AcademyTracks() {
  const rows = [
    academyTracks.slice(0, 3),
    academyTracks.slice(3, 5),
    academyTracks.slice(5, 8),
    academyTracks.slice(8, 10),
  ];

  return (
    <section className="section-layout bg-background py-12 lg:py-16">
      <h2 className="text-4xl font-semibold uppercase text-primary-900">
        Tracks
      </h2>

      <div className="mx-auto mt-8 max-w-6xl space-y-5 lg:space-y-6">
        {rows.map((row, rowIndex) => (
          <div
            key={row.join("-")}
            className="grid gap-5 md:grid-cols-2 lg:flex lg:justify-center lg:gap-6"
          >
            {row.map((track) => (
              <button
                key={track}
                type="button"
                className={[
                  "flex h-16 w-full items-center justify-center rounded-lg bg-primary px-8 text-center font-heading text-lg font-bold leading-tight text-white",
                  "shadow-[0_4px_10px_rgba(13,81,154,0.35)] transition hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                  row.length === 3 ? "lg:w-[31.5%]" : "lg:w-[31.5%]",
                  rowIndex === 3 && track.length > 30
                    ? "text-base xl:text-lg"
                    : "",
                ].join(" ")}
              >
                {track}
              </button>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
