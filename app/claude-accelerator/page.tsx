import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArrowRight, Check, Star } from "lucide-react";
import HeroSection from "@/app/components/shared/HeroSection";
import ContactSection from "@/app/components/layout/ContactSection";
import { buttonVariants } from "@/app/components/ui/Button";
import { cn } from "@/app/lib/utils";
import { cohorts, levels, outcomes, packages, reasons, registrationUrl } from "./content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Claude AI Architect Accelerator | Fransunisoft",
  description: "A career & business transformation programme — from zero technical skills to a Certified Claude AI Architect. Delivered in Nigeria by Fransunisoft.",
};

function RegisterLink({ children = "Register your Interest", accent = false }: { children?: ReactNode; accent?: boolean }) {
  return <a href={registrationUrl} className={cn(buttonVariants({ variant: accent ? "accent" : "primary" }), styles.button, accent && styles.accentButton)}>{children}<ArrowRight size={20} aria-hidden="true" /></a>;
}

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className={styles.eyebrow}>{children}</p>;
}

export default function ClaudeAcceleratorPage() {
  return (
    <main>
      <div className={styles.page}>
        <HeroSection
          className={styles.hero}
          eyebrow={<p className={styles.partner}><span aria-hidden="true" />Powered by Fransunisoft · Official <strong>Biz Boosters</strong> Partner for Nigeria</p>}
          title={<>Claude AI Architect<br /><span>Accelerator</span></>}
          description={<>A career &amp; business transformation programme — from zero technical skills to a Certified Claude AI Architect. Delivered in Nigeria by <strong>Fransunisoft.</strong></>}
          image={{ src: "/claude-accelerator-hero.webp", alt: "Professionals discussing AI workflows together around a laptop", width: 1348, height: 1008 }}
          primaryAction={{ label: "Register Your Interest", href: registrationUrl }}
          secondaryAction={{ label: "Explore the Programme", href: "#pathway", variant: "outline" }}
          afterActions={<p className={styles.heroNote}>No payment now — register interest and we will confirm your spot &amp; pricing details.</p>}
        />
        <dl className={cn("section-layout", styles.stats)} aria-label="Programme at a glance">
          {[['14 Weeks', 'Full Pathway'], ['₦150k', 'Starting from'], ['Live', 'Weekend Sessions'], ['CCA-F', 'Certification']].map(([value, label]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>
        <section id="pathway" className="section-layout" aria-labelledby="pathway-title">
          <SectionLabel>The Pathway</SectionLabel>
          <h2 id="pathway-title">From zero technical skills to a<br />Certified Claude AI Architect</h2>
          <p className={styles.sectionIntro}>Three progressive levels. Start anywhere — or take the Full<br className={styles.desktopBreak} /> Pathway and we&apos;ll take you all the way.</p>
          <div className={styles.pathwayGrid}>
            {levels.map(level => <article key={level.title} className={styles.level}><h3>{level.title}</h3><p className={styles.tag}>{level.duration}</p><p className={styles.levelDescription}>{level.description}</p><RegisterLink /></article>)}
            <article className={styles.level}>
              <span className={styles.recommended}><Star size={16} fill="currentColor" aria-hidden="true" />Recommended</span>
              <h3>Full Pathway — all 3 levels</h3><p className={styles.tag}>14 weeks</p><p className={styles.levelDescription}>The complete journey, zero to certified. Recommended if you&apos;re starting fresh and want the credential.</p><RegisterLink />
            </article>
          </div>
        </section>
        <section className="section-layout" aria-labelledby="outcomes-title">
          <SectionLabel>What You Leave With</SectionLabel><h2 id="outcomes-title">Programme Outcomes</h2>
          <ul className={styles.outcomeList}>{outcomes.map(outcome => <li key={outcome}><Check size={18} aria-hidden="true" /><span>{outcome}</span></li>)}</ul>
        </section>
        <section className="section-layout" aria-labelledby="why-title">
          <SectionLabel>WHY LEARN WITH US</SectionLabel><h2 id="why-title">Built for Real Outcomes</h2>
          <div className={styles.reasonGrid}>{reasons.map(reason => <article key={reason.title} className={styles.reason}><h3>{reason.title}</h3><p>{reason.description}</p></article>)}</div>
        </section>
        <section id="pricing" className="section-layout" aria-labelledby="pricing-title">
          <SectionLabel>NIGERIA PRICING</SectionLabel><h2 id="pricing-title">Pick Your Package</h2><p className={styles.sectionIntro}>Instalment plans available. Employer invoice on request.</p>
          <div className={styles.pricingPanel}>
            <div className={styles.priceGrid}>{packages.map((item, index) => <article key={item.title} className={cn(styles.priceCard, index === 3 && styles.featuredPrice)}>{index === 3 && <span className={styles.featuredLabel}>Most Complete</span>}<p className={styles.price}>{item.price}</p><h3>{item.title}</h3><p className={styles.packageDetail}>{item.detail}</p></article>)}</div>
            <p className={styles.pricingNote}>UK diaspora rate: £249. Early-bird discount (25% off) for the first 20 registrations. All prices subject to confirmation — register interest first.</p>
          </div>
        </section>
        <section id="cohorts" className="section-layout" aria-labelledby="cohorts-title">
          <SectionLabel>COHORT SCHEDULE</SectionLabel><h2 id="cohorts-title">Upcoming Cohorts</h2>
          <div className={styles.cohortGrid}>{cohorts.map(cohort => <article key={cohort.name} className={styles.cohort}><p className={styles.cohortName}>{cohort.name}</p><h3>{cohort.dates}</h3><p className={styles.cohortDetail}>Weekend sessions · Live on Zoom · WhatsApp community</p><RegisterLink>{cohort.action}</RegisterLink></article>)}</div>
        </section>
        <section className={styles.finalCta} aria-labelledby="register-title">
          <div className={cn("section-layout", styles.finalInner)}>
            <div><h2 id="register-title">Be Among The First Certified<br />Claude <span>AI Architects In Nigeria</span></h2><p>Places are limited. Register your interest now — no payment required at this stage.<br /> Fransunisoft will confirm your spot and share full details.</p><p>Questions? Contact us at <a href="mailto:hello@fransunisoft.com">hello@fransunisoft.com</a></p></div>
            <RegisterLink accent>Register Your Interest Now</RegisterLink>
          </div>
        </section>
      </div>
      <ContactSection />
    </main>
  );
}
