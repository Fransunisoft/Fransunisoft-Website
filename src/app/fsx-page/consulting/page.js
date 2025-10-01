import React from "react";
import styles from "../styles/consulting.module.css";
import Image from "next/image";

const Consulting = () => {
  return (
    <div className={styles.consulting}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>FSX Consulting</h1>
          <p>
            Businesses don’t just need advice they need strategies that work. 
            FSX Consulting provides expert guidance for startups and established 
            enterprises, helping them overcome challenges and unlock growth opportunities 
            in Nigeria and across Africa.
          </p>
          <div className={styles.heroBtns}>
            <button className={styles.btnPrimary}>Book Consultation</button>
            <button className={styles.btnSecondary}>Back to Brand Family</button>
          </div>
          <p className={styles.subNote}>We have 6K+ Customers across Africa</p>
        </div>
        <div className={styles.heroImg}>
          <Image
          src="/heroConsulting.png"
          alt="error 404 image"
          width={380}
          height={300}
          className={styles.responsiveImage}
        />
        </div>
      </section>

      {/* Services */}
      <section className={styles.services}>
        <h2>Our Consulting Services</h2>
        <p>
          We bridge the gap between business strategy and technology execution,
          delivering comprehensive solutions that drive sustainable growth for Nigerian businesses.
        </p>
        <div className={styles.servicesGrid}>
          <div className={styles.card}>
            <h3>Business Consulting</h3>
            <ul>
              <li>Strategy & Development</li>
              <li>Market Analysis & Positioning</li>
              <li>Growth Planning & Roadmaps</li>
              <li>Competitive Intelligence</li>
            </ul>
          </div>
          <div className={styles.card}>
            <h3>Digital Transformation</h3>
            <ul>
              <li>Technology Strategy</li>
              <li>System Integration</li>
              <li>Enterprise Solutions</li>
              <li>Automation</li>
            </ul>
          </div>
          <div className={styles.card}>
            <h3>Community Programs</h3>
            <ul>
              <li>Community Strategy</li>
              <li>Engagement Planning</li>
              <li>Content & Programming</li>
              <li>Growth & Retention Tactics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className={styles.approach}>
        <h2>Our Proven Approach</h2>
        <div className={styles.approachSteps}>
          <div className={styles.step}>1. Strategic Analysis</div>
          <div className={styles.step}>2. Solution Design</div>
          <div className={styles.step}>3. Implementation</div>
          <div className={styles.step}>4. Optimization</div>
        </div>
      </section>

      {/* Mission */}
      <section className={styles.mission}>
        <h2>Our Mission</h2>
        <p>
          The Core Mission Behind all our work is to equip startups and enterprises 
          with smart strategies to build smarter and scale faster.
        </p>
        <div className={styles.stats}>
          <div><h3>12+</h3><p>Years in Business</p></div>
          <div><h3>100+</h3><p>Projects Delivered</p></div>
          <div><h3>95%</h3><p>Client Retention Rate</p></div>
          <div><h3>200+</h3><p>Businesses Impacted</p></div>
        </div>
      </section>

      {/* Why Us */}
      <section className={styles.whyUs}>
        <h2>Why Our Expertise Matters</h2>
        <div className={styles.whyGrid}>
          <div className={styles.card}>Experience</div>
          <div className={styles.card}>Data Driven Insights</div>
          <div className={styles.card}>Clients Approach</div>
        </div>
      </section>
    </div>
  );
};

export default Consulting;
