"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./claude-accelerator.module.css";

const GOOGLE_FORM_URL = "https://bit.ly/ClaudeAIArchitectAcceleratorNG";

const OUTCOMES = [
  "Claude Certified Associate – Fundamentals (CCA-F) credential",
  "Hands-on Claude API, agents, MCP & RAG skills",
  "A portfolio of real, deployed AI projects",
  "Access to the Fransunisoft & Biz Boosters associate engineer network",
  "Project placement opportunities via Fransunisoft",
  "Confidence to build & sell AI — from zero",
];

const LEVELS = [
  {
    num: "1",
    title: "AI Foundations",
    duration: "4 weeks · No coding",
    desc: "For anyone. Understand AI & Claude, prompt writing, and real business use cases. Start using AI confidently.",
    color: "#0D519A",
  },
  {
    num: "2",
    title: "Business AI Practitioner",
    duration: "4 weeks · No coding",
    desc: "Apply AI to your work — advanced prompting, workflow design, AI strategy. Prepares for certification.",
    color: "#0D519A",
  },
  {
    num: "3",
    title: "Claude Certified Architect",
    duration: "6 weeks · Coding taught",
    desc: "Full CCA-F exam prep. Claude API, agents, MCP, RAG — hands-on. Exam fee included.",
    color: "#FF6B35",
  },
];

const PRICING = [
  { id: "1", name: "Registration + Materials", amount: "₦150,000", note: "Self-paced · Full programme access" },
  { id: "2", name: "Materials + Tutorials", amount: "₦200,000", note: "Live tutorial sessions included" },
  { id: "3", name: "Materials + Certification Track", amount: "₦350,000", note: "CCA-F exam preparation" },
  { id: "4", name: "Full Package — Everything", amount: "₦500,000", note: "Most complete · Exam fee included", highlight: true },
];

const WHY_ITEMS = [
  {
    icon: "🤝",
    title: "Authorised Anthropic Claude Partner Programme",
    desc: "Fransunisoft is the official Biz Boosters partner for Nigeria. The CCA-F exam is partner-gated — enrolling here is your direct route to it.",
  },
  {
    icon: "🇳🇬",
    title: "Built for Nigerian Professionals",
    desc: "Weekend cohorts, NGN pricing with instalment plans, and a community led by Fransunisoft — Africa's talent & innovation studio.",
  },
  {
    icon: "🏗️",
    title: "Engineers Who Deploy Claude Daily",
    desc: "Sessions are taught by practitioners who build real AI products — TalkWeb, GrantsCopilot, TaxMasta — not just online instructors.",
  },
  {
    icon: "📜",
    title: "Globally Recognised Certification",
    desc: "The Anthropic CCA-F credential is the only official Claude AI certification. It signals real technical capability to employers worldwide.",
  },
];

export default function ClaudeAcceleratorPage() {
  useEffect(() => {
    setTimeout(() => {
      AOS.init({ duration: 900, once: true });
    }, 100);
  }, []);

  return (
    <main className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner} data-aos="fade-up">
          <div className={styles.partnerBadge}>
            <span className={styles.badgeDot} />
            Powered by Fransunisoft · Official Biz Boosters Partner for Nigeria
          </div>

          <div className={styles.heroProgrammeBadge}>AI ARCHITECT ACCELERATOR</div>

          <h1 className={styles.heroTitle}>
            Claude AI Architect<br />
            <span className={styles.heroAccent}>Accelerator</span>
          </h1>

          <p className={styles.heroSub}>
            A career &amp; business transformation programme — from zero technical skills to a
            Certified Claude AI Architect. Delivered in Nigeria by{" "}
            <strong>Fransunisoft</strong>.
          </p>

          <div className={styles.cohortPills}>
            <span className={styles.cohortPill}>
              <span className={styles.liveDot} />
              Cohort 1: 28 Jul – 3 Oct 2026
            </span>
            <span className={styles.cohortPill2}>
              Cohort 2: 3 Nov 2026 – 9 Jan 2027
            </span>
          </div>

          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroBtn}
          >
            Register Your Interest →
          </a>

          <p className={styles.heroNote}>
            No payment now — register interest and we&apos;ll confirm your spot &amp; pricing details.
          </p>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className={styles.statsBar} data-aos="fade-up">
        {[
          { val: "14 Weeks", label: "Full Pathway" },
          { val: "₦150k", label: "Starting from" },
          { val: "Live", label: "Weekend Sessions" },
          { val: "CCA-F", label: "Certification" },
        ].map((s) => (
          <div key={s.label} className={styles.statItem}>
            <span className={styles.statVal}>{s.val}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── THE PATHWAY ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel} data-aos="fade-up">THE PATHWAY</div>
          <h2 className={styles.sectionTitle} data-aos="fade-up">
            From zero technical skills to a{" "}
            <span className={styles.accent}>Certified Claude AI Architect</span>
          </h2>
          <p className={styles.sectionSub} data-aos="fade-up">
            Three progressive levels. Start anywhere — or take the Full Pathway and we&apos;ll take you all the way.
          </p>

          <div className={styles.levelsGrid}>
            {LEVELS.map((lv, i) => (
              <div key={lv.num} className={styles.levelCard} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className={styles.levelNum} style={{ background: lv.color }}>{lv.num}</div>
                <div className={styles.levelContent}>
                  <h3 className={styles.levelTitle}>{lv.title}</h3>
                  <span className={styles.levelDuration}>{lv.duration}</span>
                  <p className={styles.levelDesc}>{lv.desc}</p>
                </div>
              </div>
            ))}
            {/* Full Pathway */}
            <div className={styles.pathwayCard} data-aos="fade-up" data-aos-delay={300}>
              <span className={styles.starIcon}>★</span>
              <div>
                <div className={styles.pathwayTitle}>Full Pathway — all 3 levels</div>
                <p className={styles.pathwayDesc}>
                  The complete journey, zero to certified. Recommended if you&apos;re starting fresh and want the credential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU LEAVE WITH ── */}
      <section className={styles.outcomesSection}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel} data-aos="fade-up">WHAT YOU LEAVE WITH</div>
          <h2 className={styles.sectionTitle} data-aos="fade-up">Programme Outcomes</h2>
          <div className={styles.outcomesGrid}>
            {OUTCOMES.map((o, i) => (
              <div key={i} className={styles.outcomeItem} data-aos="fade-up" data-aos-delay={i * 60}>
                <span className={styles.checkIcon}>✓</span>
                <span>{o}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY LEARN WITH US ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel} data-aos="fade-up">WHY LEARN WITH US</div>
          <h2 className={styles.sectionTitle} data-aos="fade-up">Built for Real Outcomes</h2>
          <div className={styles.whyGrid}>
            {WHY_ITEMS.map((item, i) => (
              <div key={i} className={styles.whyCard} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className={styles.whyIcon}>{item.icon}</div>
                <h3 className={styles.whyTitle}>{item.title}</h3>
                <p className={styles.whyDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NIGERIA PRICING ── */}
      <section className={styles.pricingSection}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel} data-aos="fade-up">NIGERIA PRICING</div>
          <h2 className={styles.sectionTitle} data-aos="fade-up">Pick Your Package</h2>
          <p className={styles.sectionSub} data-aos="fade-up">
            Instalment plans available. Employer invoice on request.
          </p>
          <div className={styles.pricingGrid}>
            {PRICING.map((p, i) => (
              <div
                key={p.id}
                className={`${styles.pricingCard} ${p.highlight ? styles.pricingCardHL : ""}`}
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                {p.highlight && <div className={styles.popularBadge}>Most Complete</div>}
                <div className={styles.pricingAmount}>{p.amount}</div>
                <div className={styles.pricingName}>{p.name}</div>
                <div className={styles.pricingNote}>{p.note}</div>
              </div>
            ))}
          </div>
          <p className={styles.pricingDisclaimer} data-aos="fade-up">
            UK diaspora rate: £249. Early-bird discount (25% off) for the first 20 registrations.
            All prices subject to confirmation — register interest first.
          </p>
        </div>
      </section>

      {/* ── COHORT DATES ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel} data-aos="fade-up">COHORT SCHEDULE</div>
          <h2 className={styles.sectionTitle} data-aos="fade-up">Upcoming Cohorts</h2>
          <div className={styles.cohortGrid}>
            <div className={styles.cohortCard} data-aos="fade-left">
              <div className={styles.cohortNum}>Cohort 1</div>
              <div className={styles.cohortDates}>28 July – 3 October 2026</div>
              <div className={styles.cohortDetail}>Weekend sessions · Live on Zoom · WhatsApp community</div>
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className={styles.cohortBtn}>
                Register Interest →
              </a>
            </div>
            <div className={styles.cohortCard} data-aos="fade-right">
              <div className={styles.cohortNum}>Cohort 2</div>
              <div className={styles.cohortDates}>3 November 2026 – 9 January 2027</div>
              <div className={styles.cohortDetail}>Weekend sessions · Live on Zoom · WhatsApp community</div>
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className={styles.cohortBtn}>
                Join Waitlist →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className={styles.ctaSection} data-aos="fade-up">
        <div className={styles.ctaInner}>
          <div className={styles.partnerBadge} style={{ justifyContent: "center", marginBottom: "1.5rem" }}>
            <span className={styles.badgeDot} />
            Powered by Fransunisoft · Official Biz Boosters Partner for Nigeria
          </div>
          <h2 className={styles.ctaTitle}>
            Be among the first Certified<br />
            Claude AI Architects in Nigeria
          </h2>
          <p className={styles.ctaSub}>
            Places are limited. Register your interest now — no payment required at this stage.
            Fransunisoft will confirm your spot and share full details.
          </p>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            Register Your Interest Now →
          </a>
          <p className={styles.ctaContact}>
            Questions? Contact us at{" "}
            <a href="mailto:hello@fransunisoft.com" className={styles.ctaEmail}>
              hello@fransunisoft.com
            </a>
          </p>
        </div>
      </section>

    </main>
  );
}
