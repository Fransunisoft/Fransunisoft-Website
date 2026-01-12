"use client";
import React, { useEffect } from "react";
import styles from "../styles/about.module.css";
import Image from "next/image";

const AboutSection = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.active);
          }
        });
      },
      { threshold: 0.2 }
    );

    animatedElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section >
      <div>
      <div className={styles.aboutContent}>
        {/* Left Column - Text */}
        <div className={styles.aboutText} data-animate="fade-in-left">
          <h3>About FSX Lab</h3>
          <p>
            
FSX Labs is not just a lab, it’s a startup factory.
We work with founders, startups, and organizations to:
 <br></br>

<ul className="{styles.aboutLi}">
  <li>Validate real problems</li>
  <li>Build functional MVPs</li>
  <li>Test products with real users</li>
  <li>Prepare startups for growth, funding, or market entry</li>
</ul><br></br>

Unlike traditional dev agencies, FSX Labs focuses on long-term value creation, often through build-for-equity and co-creation models.
This is where ideas stop being slides and start becoming companies.
          </p>

          <h5>What Makes Us Standout</h5>
          <p>
            Built for Speed, Ownership & Scale
FSX Labs is designed for founders who want more than code.
We:
<ul className="{styles.aboutLi}">
  <li>Analyze ideas in real market context</li>
  <li>Build MVPs with startup-ready talent</li>
  <li>Test early to reduce risk and waste</li>
  <li>Focus on scalability from day one</li>
</ul><br></br>
We don’t just ask “Can this be built?”
We ask “Should this be built and how does it win?”
          </p>
        </div>

        {/* Right Column - Image */}
        <div className={styles.aboutImage} data-animate="fade-in-right">
          <Image 
            src="/lab1.2.jpg"  
            alt="About FSX Lab" 
            className={styles.image} 
            width={435} 
            height={350} 
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutSection;
