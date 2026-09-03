import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Code2,
  MapPin,
  Sparkles,
  Target,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import RootBuildersStack from "@/app/components/root-builders/RootBuildersStack";
import {
  eligibilityCards,
  faqs,
  requirements,
  tracks,
} from "@/app/components/root-builders/rootbuilders-data";
import { cn } from "@/app/lib/utils";

const processSteps = [
  "Submit your problem brief via the RootBuilders portal.",
  "Fransunisoft reviews and scopes the challenge for suitability.",
  "A dedicated talent team is assigned and briefed.",
  "Teams build and iterate over 8-10 weeks under FSX supervision.",
  "You review the solution at Demo Day and decide on deployment.",
];

export default function RootBuildersPage() {
  return (
    <main className="bg-[#fbfbfb] text-[#2f3438]">
      <RootBuildersHeader />
      <Hero />
      <WhyRootBuilders />
      <SummitBand />
      <ChallengeBand />
      <Eligibility />
      <Tracks />
      <Projects />
      <Faq />
      <BottomCta />
      <RootBuildersFooter />
    </main>
  );
}

function RootBuildersHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-3 border-[#e3e6e8] bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-16 section-layout items-center justify-between px-5 lg:h-20">
        <Link href="/root-builders" className="flex items-center gap-2">
          <Image
            src="/Rootbuilders.png"
            alt="RootBuilders Summit audience session"
            width={150}
            height={48}
            className="h-auto w-full object-cover"
          />
        </Link>

        <div className="hidden items-center gap-8 text-sm font-semibold text-[#334155] lg:flex">
          <a href="#why">Why Root Builders</a>
          <a href="#tracks">Tracks</a>
          <a href="#faq">FAQs</a>
        </div>

        <Link
          href="#apply"
          className="hidden h-10 items-center rounded-full bg-primary-600 px-6 text-sm font-bold text-white transition hover:bg-primary-700 lg:inline-flex"
        >
          Join Root Builders
        </Link>

        <button className="lg:hidden" aria-label="Open RootBuilders menu">
          <ChevronDown className="h-5 w-5" />
        </button>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[linear-gradient(#eef2f5_1px,transparent_1px),linear-gradient(90deg,#eef2f5_1px,transparent_1px)] bg-[size:48px_48px] opacity-80" />
      <div className="relative mx-auto grid min-h-[420px] section-layout place-items-center px-5 py-14 text-center lg:min-h-[560px]">
        <div className="relative max-w-[760px]">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border  bg-white px-4 py-3 text-sm font-semibold shadow-sm text-[#333333] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-accent-500" />
            A FSX Academy initiative by Fransunisoft
          </div>

          <div className="pointer-events-none absolute -left-28 top-4 hidden h-24 w-24 rounded-full border-2 border-dashed border-[#9aa7b1] lg:block" />
          <Sparkles className="pointer-events-none absolute -left-40 bottom-16 hidden h-9 w-9 text-accent-500 lg:block" />
          <Code2 className="pointer-events-none absolute -right-36 top-8 hidden h-12 w-12 rounded-full bg-primary-600 p-2 text-white lg:block" />

          <h1 className="text-[38px] font-black leading-[1.02] sm:text-5xl lg:text-[62px]">
            Solve <span className="text-primary-600">Real Problems.</span>
            <br />
            Build With <span className="text-accent-500">AI.</span> Create
            Real Impact.
          </h1>
          <p className="mx-auto mt-5 max-w-[650px] text-sm leading-7 ">
            RootBuilders is Fransunisoft&apos;s flagship execution program - where
            African talent teams use AI and technology to solve real problems
            submitted by organizations, governments, and institutions.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="#apply"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary-600 px-7 text-sm font-bold text-white shadow-sm transition hover:bg-primary-700"
            >
              Apply to RootBuilders
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#challenge"
              className="inline-flex h-11 items-center justify-center rounded-full border border-[#aeb8c2] bg-white px-7 text-sm font-bold text-[#333]"
            >
              Submit Organizational Challenge
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionEyebrow({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <p className="text-[11px] font-black uppercase tracking-[0.2em] text-primary-500">
        {number}
      </p>
      <p className="text-[11px] font-black uppercase tracking-[0.2em] text-primary-500">
        {label}
      </p>
      <div className="h-px flex-1 bg-[#dde5eb]" />
    </div>
  );
}

function WhyRootBuilders() {
  return (
    <section id="why" className=" section-layout">
      <SectionEyebrow number="01" label="Why RootBuilders" />
      <h2 className="mt-6 max-w-[960px] font-black leading-tight text-[#333] lg:text-[42px]">
        From learning to execution.
        <br />
        From talent to transformation.
      </h2>
      <p className="mt-3 max-w-[540px] text-sm font-bold leading-6 lg:text-base">
        RootBuilders is designed to give builders, founders, and creators access
        to the support they need to grow, from idea stage to real-world impact.
      </p>
      <RootBuildersStack />
    </section>
  );
}

function SummitBand() {
  return (
    <section className="bg-primary-800">
      <div className="mx-auto grid section-layout items-center gap-8 px-5 py-14 lg:grid-cols-[1fr_0.8fr] lg:py-20">
        <div>
          <h2 className="text-[30px] font-black text-accent-500 lg:text-[40px]">
            RootBuilders Summit
          </h2>
          <p className="mt-4 max-w-[520px] text-sm leading-7 text-white/78">
            An annual convergence of builders, AI practitioners, founders,
            institutional partners, and ecosystem leaders - showcasing solutions
            built during RootBuilders cohorts and exploring the future of
            AI-driven problem solving across Africa.
          </p>
          <Link
            href="/events"
            className="mt-7 inline-flex h-10 items-center gap-2 rounded-full border border-white/70 px-5 text-sm font-bold text-white"
          >
            Explore FSX Event
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="relative mx-auto w-full max-w-[340px] rotate-[-3deg] ">
          <Image
            src="/summitband.png"
            alt="RootBuilders Summit audience session"
            width={1540}
            height={1640}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function ChallengeBand() {
  return (
    <section id="challenge" className="bg-primary-800 mt-5 lg:mt-20">
      <div className="mx-auto grid section-layout gap-10 border-t border-white/10 px-5 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
        <div>
          <p className="mb-5 text-xs font-black tracking-[0.15em] text-accent-400">
            Partner With RootBuilders
          </p>
          <h2 className="text-[32px] font-black leading-tight text-white lg:text-[42px]">
            Have a real problem?
            <br />
            Submit it to
            <br />
            RootBuilders.
          </h2>
          <p className="mt-5 max-w-[460px] text-sm leading-7 text-white/75">
            Organizations, government agencies, enterprises, SMEs, and
            development institutions can submit real operational challenges to
            RootBuilders. A supervised team of AI-trained builders will work to
            design and develop a solution during the cohort cycle.
          </p>
          <Link
            href="#apply"
            className="mt-7 inline-flex h-10 items-center gap-2 rounded-full bg-accent-500 px-5 text-sm font-bold text-white"
          >
            Submit Organizational Challenge
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <ol className="space-y-0">
          {processSteps.map((step, index) => (
            <li
              key={step}
              className="grid grid-cols-[58px_1fr] border-y border-white/16 py-5"
            >
              <span className="font-heading! text-4xl! font-black leading-none text-accent-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm font-bold leading-6 text-white/68">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Eligibility() {
  return (
    <section className=" section-layout">
      <SectionEyebrow number="02" label="Who Can Apply (Talent)" />
      <h2 className="mt-5 text-[32px]  leading-tight text-[#333] ">
        Built for builders
        <br />
        at every stage.
      </h2>

      <div className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-start">
        <div className="space-y-3">
          {eligibilityCards.map((card, index) => (
            <div
              key={card.title}
              className={cn(
                "rounded-[15px] border-l-4 border-r-4 bg-[#edf6fb] p-4 shadow-md",
                index === 0 && "border-accent-500",
                index === 1 && "border-secondary-500",
                index === 2 && "border-primary-500",
                index === 3 && "border-[#333]"
              )}
            >
              <h5 className=" ">{card.title}</h5>
              <p className="mt-1  leading-5">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-1 lg:pt-8">
          {requirements.map(([title, text], index) => (
            <div key={title} className="flex gap-3">
              <span
                className={cn(
                  "mt-1 grid h-12 w-12 shrink-0 place-items-center rounded-full text-white",
                  index === 0 && "bg-primary-100 text-primary-700",
                  index === 1 && "bg-secondary-100 text-secondary-700",
                  index === 2 && "bg-accent-100 text-accent-700"
                )}
              >
                {index === 0 && <Calendar className="h-5 w-5" />}
                {index === 1 && <MapPin className="h-5 w-5" />}
                {index === 2 && <Target className="h-5 w-5" />}
              </span>
              <div>
                <h5 className="text-base">{title}</h5>
                <p className="mt-1  leading-5 ">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tracks() {
  return (
    <section id="tracks" className="section-layout">
      <SectionEyebrow number="03" label="Tracks" />
      <h2 className="mt-8 max-w-[1120px] font-black leading-[1.08] text-[#333] sm:text-[44px] lg:text-[64px]">
        Choose Your Track. Build with AI
        <br />
        Across Every Discipline.
      </h2>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-x-10 lg:gap-y-9">
        {tracks.map(([track, caption]) => (
          <div
            key={track}
            className="grid min-h-[118px] place-items-center rounded-[18px] bg-secondary-800 px-5 py-6 text-center shadow-[0_8px_18px_rgba(0,0,0,0.18)] lg:min-h-[176px] lg:rounded-[20px] lg:px-8"
          >
            <h3 className="font-black leading-tight text-white lg:text-[39px]">
              {track}
            </h3>
            <p className="mt-2 text-base font-semibold leading-tight text-white/90 lg:text-[27px]">
              {caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const blocks = [
    {
      label: "FSX Challenges",
      title: "Structured Practice Projects",
      text: "Solve real problems through guided challenges designed to build your portfolio and sharpen your skills with practical and hands-on experience.",
      bullets: [
        "Curated real-world challenges",
        "Portfolio-grade projects",
        "Skill progression tracking",
      ],
    },
    {
      label: "Your Ideas",
      title: "Participant-Led Projects",
      text: "Pitch your own product ideas and get mentorship to bring them to life. Build something meaningful that solves problems you care about.",
      bullets: [
        "Bring your vision to life",
        "Expert mentorship support",
        "Team collaboration",
      ],
    },
  ];

  return (
    <section className="section-layout grid gap-10 bg-[#fbfbfb] py-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-start lg:py-20">
      <div>
        <SectionEyebrow number="04" label="Projects" />
        <h2 className="mt-7 text-[34px] font-black leading-tight text-[#333] lg:text-[48px]">
          What will participants work on?
        </h2>
        <div className="mt-14 space-y-12">
          {blocks.map((block) => (
            <div key={block.title}>
              <p className="font-black leading-tight text-accent-500">
                {block.label}
              </p>
              <h3 className="mt-5 text-[30px] font-black leading-tight text-[#333] lg:text-[40px]">
                {block.title}
              </h3>
              <p className="mt-4 max-w-[720px] text-lg leading-8 text-[#42474d] lg:text-[22px] lg:leading-9">
                {block.text}
              </p>
              <ul className="mt-5 space-y-4">
                {block.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-4 text-lg leading-6 text-[#45494d] lg:text-[22px]"
                  >
                    <CheckCircle2 className="h-7 w-7 shrink-0 fill-primary-600 text-white" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Image
        src="/projectRoot.png"
        alt="RootBuilders participant working on a laptop"
        width={1820}
        height={3650}
        className="mx-auto h-auto w-full max-w-[560px] rounded-[22px] object-cover lg:mt-28"
      />
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="mx-auto grid section-layout gap-10 px-5 py-14 lg:grid-cols-[0.52fr_1fr] lg:items-center lg:py-20">
      <Image
        src="/faqRoot.png"
        alt="Person raising a hand during a RootBuilders session"
        width={1500}
        height={2300}
        className="mx-auto hidden h-auto max-h-[530px] w-full max-w-[400px] rounded-[12px] object-cover grayscale lg:block"
      />
      <div>
        <h2 className="text-center text-[30px] font-black text-primary-800 lg:text-[38px]">
          You&apos;ve Got Questions?
        </h2>
        <p className="text-center text-sm leading-6 text-[#74808a]">
          We&apos;ve got you covered on any of your doubts
        </p>
        <div className="mt-7 space-y-3">
          {faqs.map((question) => (
            <details
              key={question}
              className="group rounded-[6px] bg-[#e7f1f8] px-5 py-3"
            >
              <summary className="flex list-none items-center justify-between gap-4 text-sm font-bold text-[#44515c]">
                {question}
                <span className="text-lg font-black text-primary-600 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-[#5c6872]">
                Applications, timelines, and project details are shared during
                each cohort intake.
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function BottomCta() {
  return (
    <section id="apply" className="mx-auto grid section-layout gap-5 px-5 py-10 lg:grid-cols-2">
      <div className="relative overflow-hidden items-center text-center rounded-[10px] bg-primary-600 p-8 text-white lg:p-10">
        <div className="absolute -bottom-12 -left-10 h-32 w-32 rotate-45 bg-primary-800/45" />
        <div className="absolute -bottom-12 -right-10 h-32 w-32 rotate-45 bg-primary-800/45" />
        <h2 className="relative text-[30px] font-black leading-tight lg:text-[42px]">
          Ready to Build Solutions
          <br />
          That Matter for Africa?
        </h2>
        <p className="relative mt-4 max-w-[460px] -center text-sm leading-6 text-white/80">
          Join RootBuilders and become part of a generation of African builders
          using AI to solve real problems. Applications for the next cohort are
          open now.
        </p>
        <div className="relative items-center mt-7 flex flex-col gap-3">
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center w-fit gap-2 rounded-full bg-accent-500 px-6 text-sm font-bold text-white"
          >
            Apply to RootBuilders
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="#challenge"
            className="inline-flex h-10 items-center justify-center  w-fit gap-2 rounded-full border border-white/70 px-6 text-sm font-bold text-white"
          >
            Submit Your Organization Challenge
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <Image
        src="/rootbuilders-cta.png"
        alt="Builder joining a remote cohort session"
        width={2400}
        height={2400}
        className="h-full min-h-[300px] w-full rounded-[10px] object-cover"
      />
    </section>
  );
}

function RootBuildersFooter() {
  return (
    <footer className="bg-[#e8f2f8] text-center">
      <div className="mx-auto max-w-[860px] px-5 py-10">
        <p className="text-sm font-bold text-[#8b98a5]">Our Parent Organization</p>
        <div className="mt-2 flex items-center justify-center gap-3">
          <span className="font-heading text-[30px] font-black text-primary-700">
            Powered by
          </span>
          <span className="text-accent-500">/</span>
          <span className="text-[30px] font-black text-primary-600">
            Fransunisoft
          </span>
        </div>
        <p className="mx-auto mt-4 max-w-[720px] text-sm leading-7 text-[#5e6872]">
          Root Builders is an initiative of Fransunisoft - a venture studio
          building the next generation of African tech talent and products.
          Through FSX Academy and our portfolio of ventures, we&apos;re creating
          opportunities for builders across Africa.
        </p>
        <p className="mt-4 text-sm font-bold text-[#58636d]">
          Follow us on social media to stay updated on opportunities, events,
          and tech insights.
        </p>
        <div className="mt-5 flex justify-center gap-3 text-primary-700">
          {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, BookOpen].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="grid h-8 w-8 place-items-center rounded bg-white shadow-sm"
              aria-label="Social link"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        <Link
          href="/"
          className="mt-7 inline-flex h-10 items-center rounded-full bg-primary-600 px-6 text-sm font-bold text-white"
        >
          Explore Fransunisoft
        </Link>
      </div>
      <div className="bg-primary-600 px-5 py-4">
        <p className="text-xs font-semibold text-white/85">
          2026 Root Builders by Fransunisoft. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
