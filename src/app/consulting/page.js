'use client'

import { useEffect } from "react"
import React from "react";
import styles from "./consulting.module.css";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import ButtonGroup from "@/app/components/ButtonGroup";



const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    closeMobileMenu();
  };

  const scrollToConsultingService = (e) => {
    e.preventDefault();
    const section = document.getElementById('consulting-service');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


const Consulting = () => {
  useEffect(() => {
      setTimeout(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, 100); 
    }, []);


  return (
    <div className={styles.consulting}>
      {/* Hero Section */}
      <div className="hero" data-aos="fade-up">
        <div className="heroText">
          <h1>FSX Consulting</h1>
          <h6>Strategy, Structure & Execution for Scalable Growth</h6>
          <p>
            Businesses don&apos;t just need advice — they need execution that
            work. FSX Consulting is the strategy and governance arm of
            Fransunisoft (FSX). We help startups, founders, and enterprises move
            from ideas to execution, and from execution to scale, with clarity,
            discipline, and measurable outcomes.
          </p>
          <div>
            <ButtonGroup
              filterKeys={["fsxConsulting1", "ExploreConsulting"]}
              onClickHandlers={{
                fsxConsulting1: scrollToContact,
                ExploreConsulting: scrollToConsultingService,
              }}
            />
          </div>
          <div className={styles.customers}>
            <Image
              src="/socialproof.png"
              alt="customers image"
              width={153}
              height={48}
              className={styles.responsiveImage}
            />
            <p className={styles.subNote}>
              <span className="">1,000+ </span>founders, startups, and
              organizations supported across Africa
            </p>
          </div>
        </div>
        <div className={styles.heroImg}>
          <Image
            src="/heroConsulting.png"
            alt="error 404 image"
            width={600}
            height={400}
          />
        </div>
      </div>

      {/* Services */}
      <section id="consulting-service" data-aos="fade-up">
        <div className="sectionHead">
          <h2>What We Do</h2>
          <h6>
            FSX Consulting bridges business strategy, technology delivery, and
            talent execution.
          </h6>
        </div>

        <div className="grid">
          <div className="card1">
            <h4 className={styles.card1head}>Business & Venture Strategy</h4>
            <p>
              We help you define what to build, why it matters, and how it
              scales.
            </p>
            <ul>
              <li>Market Analysis & Problem Validation</li>
              <li>Business Models & Revenue Strategy</li>
              <li>Growth Planning & Roadmaps</li>
              <li>Startup & Venture Structuring</li>
            </ul>
          </div>
          <div className="card1">
            <h4 className={styles.card1head}>
              Digital Transformation & Technology Strategy
            </h4>
            <p>We don’t sell tools, we design systems that work.</p>
            <ul>
              <li>Technology Roadmaps</li>
              <li>System Architecture Planning</li>
              <li>Automation & Process Optimization</li>
              <li>Enterprise & Startup Tech Advisory</li>
            </ul>
          </div>
          <div className="card1">
            <h4 className={styles.card1head}>
              Venture Governance & Delivery Oversight
            </h4>
            <p>This is where FSX Consulting is different.</p>
            <ul>
              <li>Project scoping & milestone definition</li>
              <li>MVP governance </li>
              <li>Weekly reporting & delivery reviews</li>
              <li>Risk management & execution accountability</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section data-aos="fade-up">
        <div className="sectionHead">
          <h2>Our Consulting Approach</h2>
          <h6>We don’t guess. We structure.</h6>
        </div>

        <div className={styles.approachStages}>
          <div className={styles.approachStagesCardContainer}>
            <div className="card2">
              <p className={styles.approachStagesCount}>1</p>
              <h4>Strategic Analysis</h4>
              <p>Understand the problem, the market, and the opportunity. </p>
            </div>
            <div className="card2">
              <p className={styles.approachStagesCount}>2</p>
              <h4>Solution Design</h4>
              <p>Define the strategy, execution model, and success metrics.</p>
            </div>
            <div className="card2">
              <p className={styles.approachStagesCount}>3</p>
              <h4>Execution</h4>
              <p>Coordinate talent, technology, and delivery teams.</p>
            </div>
            <div className="card2">
              <p className={styles.approachStagesCount}>4</p>
              <h4>Optimization</h4>
              <p>Track outcomes, refine execution, and prepare for growth.</p>
            </div>
          </div>

          <div className={styles.approachImage}>
            <Image
              src="/approachConsulting.png"
              alt="consulting approach image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section data-aos="fade-up">
        <div className="sectionHead">
          <h2>Our Mission</h2>
          <h6>Structure Ideas. Enable Execution. Scale Impact.</h6>
        </div>
        <div className={styles.coreMission}>
          <Image
            src="/missionConsulting.png"
            alt="consulting approach image"
            width={650}
            height={350}
            className={styles.responsiveImage}
          />

          <div className={styles.coreMissionContainer}>
            <div className={styles.consultMissionAbout}>
              <Image
                src="/consultingMissionIcon.png"
                alt="consulting coremission icon"
                width={16}
                height={16}
                className={styles.coreMissionPic}
              />
              <p>About us</p>
            </div>

            <div className={styles.coreMissionText}>
              <h3>
                The Mission Behind  
                  <span> Consulting</span>
              </h3>
              <p>
                FSX Consulting exists to equip startups and enterprises with
                smart strategies and execution frameworks that help them build
                smarter, scale faster, and grow sustainably.
              </p>
            </div>
            <Link href="/about">
              <div className="button2">Learn More</div>
            </Link>
          </div>
        </div>

        <div className={styles.stats}>
          <div>
            <h3>12+</h3>
            <h6>Years in Business</h6>
            <span className={styles.statp}>
              Experience driving technology and business execution
            </span>
          </div>
          <div>
            <h3>30+</h3>
            <h6>Projects Delivered</h6>
            <span className={styles.statp}>
              Real-world solution that achieved measurable results
            </span>
          </div>
          <div>
            <h3>95%</h3>
            <h6>Client Retention</h6>
            <span className={styles.statp}>
              Because execution matters
            </span>
          </div>
          <div>
            <h3>50+</h3>
            <h6>Businesses Impacted</h6>
            <span className={styles.statp}>
              Multiple Businesses Impacted Across Nigeria and Africa
            </span>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section data-aos="fade-up">
        <div className="sectionHead">
          <h2>Why FSX Consulting Works</h2>
          <h6>
            Empowering businesses with expert insights to thrive, adapt, and grow.
          </h6>
        </div>

        <div className={styles.whyGrid}>
          <div className="card3">
            <Image
              src="/cExperience.png"
              alt="consulting approach image"
              width={60}
              height={60}
              className={styles.responsiveImage}
            />
            <h3>Experience</h3>
            <p>Decade-long insight that fuels smarter decisions.</p>
          </div>

          <div className="card3">
            <Image
              src="/cData.png"
              alt="consulting approach image"
              width={60}
              height={60}
              className={styles.responsiveImage}
            />
            <h3>Data Driven Thinking</h3>
            <p>Strategy backed by research, metrics, and validation.</p>
          </div>

          <div className="card3">
            <Image
              src="/cClient.png"
              alt="consulting approach image"
              width={60}
              height={60}
              className={styles.responsiveImage}
            />
            <h3>Client Approach</h3>
            <p>We think like builders, not slide-makers.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consulting;
