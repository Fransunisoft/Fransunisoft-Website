import Image from "next/image";

const focusAreas = [
  "AI venture building",
  "Talent acceleration",
  "Product strategy",
  "Startup operations",
];

const signals = [
  {
    value: "Venture Studio",
    label: "Building useful AI companies from insight to launch.",
  },
  {
    value: "Talent Studio",
    label: "Training ambitious builders for modern technical teams.",
  },
  {
    value: "Africa First",
    label: "Designed around local markets with global ambition.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-neutral-primary">
      <section className="relative min-h-screen border-b border-neutral-card-border bg-[radial-gradient(circle_at_top_left,#e9f6f5_0,#fafafa_32%,#ffffff_72%)]">
        <div className="section-layout flex min-h-screen flex-col">
          <header className="flex items-center justify-between gap-4">
            <a className="flex items-center gap-3" href="/" aria-label="Fransunisoft home">
              <Image
                src="/favicon.png"
                alt=""
                width={44}
                height={68}
                className="h-11 w-8 object-contain"
                priority
              />
              <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-primary-800">
                Fransunisoft
              </span>
            </a>

            <nav className="hidden items-center gap-8 text-sm font-semibold text-neutral-secondary md:flex">
              <a className="transition hover:text-primary-700" href="#focus">
                Focus
              </a>
              <a className="transition hover:text-primary-700" href="#studio">
                Studio
              </a>
              <a className="transition hover:text-primary-700" href="mailto:hello@fransunisoft.com">
                Contact
              </a>
            </nav>
          </header>

          <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-10">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex rounded-full border border-secondary-200 bg-white px-4 py-2 text-sm font-bold uppercase tracking-[0.14em] text-secondary-800 shadow-sm">
                Placeholder website
              </p>
              <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.02] text-primary-900 sm:text-6xl lg:text-7xl">
                Building AI ventures and talent for Africa&apos;s next chapter.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-secondary sm:text-xl">
                Fransunisoft partners with founders, operators, and emerging
                builders to turn strong ideas into useful AI products,
                companies, and careers.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:hello@fransunisoft.com"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary-700 px-6 text-base font-bold text-white shadow-sm transition hover:bg-primary-800"
                >
                  Start a conversation
                </a>
                <a
                  href="#focus"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-neutral-border bg-white px-6 text-base font-bold text-primary-800 transition hover:border-primary-300 hover:bg-primary-50"
                >
                  See the focus
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-accent-500/15" />
              <div className="absolute -right-8 bottom-8 h-36 w-36 rounded-full bg-secondary-500/15" />
              <div className="relative border border-neutral-card-border bg-white p-6 shadow-[0_24px_80px_rgba(5,34,65,0.12)]">
                <div className="flex min-h-[420px] flex-col justify-between overflow-hidden bg-primary-900 p-7 text-white">
                  <div className="flex items-start justify-between gap-6">
                    <Image
                      src="/favicon.png"
                      alt="Fransunisoft brand mark"
                      width={96}
                      height={148}
                      className="h-24 w-16 rounded-sm bg-white object-contain p-2"
                      priority
                    />
                    <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-secondary-100">
                      Coming soon
                    </span>
                  </div>

                  <div>
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-secondary-200">
                      AI venture & talent studio
                    </p>
                    <h2 className="max-w-sm text-4xl font-semibold leading-tight text-white">
                      Practical products. Prepared builders. Real markets.
                    </h2>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {focusAreas.map((area) => (
                      <div
                        key={area}
                        className="border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white"
                      >
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="focus" className="bg-white">
        <div className="section-layout grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent-700">
              Current direction
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold text-primary-900">
              A focused studio for the messy middle of building.
            </h2>
          </div>

          <div id="studio" className="grid gap-4 md:grid-cols-3">
            {signals.map((signal) => (
              <article
                key={signal.value}
                className="border border-neutral-card-border bg-background p-6"
              >
                <h3 className="text-2xl font-semibold text-primary-800">
                  {signal.value}
                </h3>
                <p className="mt-4 text-base leading-7 text-neutral-secondary">
                  {signal.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-card-border bg-primary-900 text-white">
        <div className="section-layout flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-primary-50">
            Fransunisoft official website is being shaped.
          </p>
          <a
            href="mailto:hello@fransunisoft.com"
            className="text-sm font-bold text-secondary-100 transition hover:text-white"
          >
            hello@fransunisoft.com
          </a>
        </div>
      </footer>
    </main>
  );
}
