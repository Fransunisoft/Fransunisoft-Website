'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './labs.module.css';
import Aboutus from './about';
import WhatWeDo from './whatwedo';
import ShapingAfrica from './shapingAfrica';
import HowWeDo from './HowWeDo';
import WhoBenefits from './WhoBenefits';


// Scroll to Contact section
const scrollToContact = (e) => {
  e.preventDefault();
  const section = document.getElementById('contact');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

  // Scroll to Brand Family section
  const scrollToBrandFamily = (e) => {
    e.preventDefault();
    const section = document.getElementById('brand-family');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

export default function Labs() {
  return (
    <>
      {/* ===== Hero Section ===== */}
      <section className={styles.hero}>
        {/* Hero Content */}
        <div className={styles.heroContent}>
          <h1>FSX Lab</h1>
          <p>
            Every great idea needs a space to grow. FSX Labs is where research,
            creativity, and technology meet. We help you transform ideas into
            prototypes, strategies, and innovations for the future.
          </p>

          <div className={styles.buttons}>
            <Link
              href="#contact"
              onClick={scrollToContact}
              className={styles.startBtn}
            >
              <button className={styles.primaryBtn}>Tell Us Your Idea</button>
            </Link>

            <Link
              href="#brand-family"
              onClick={scrollToBrandFamily}
              className={styles.startBtn}
            >
              <button className={styles.secondaryBtn}>
                Back to Brand Family
              </button>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className={styles.heroImage}>
          <Image
            src="/labs.png"
            alt="FSX Lab Team"
            fill={false}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }} // ✅ Keeps natural aspect ratio
            priority
          />
        </div>
      </section>

      {/* ===== About Us Section ===== */}
      <Aboutus />

      {/* ===== What we do Section ===== */}
      <WhatWeDo />

      {/* Shaping Africa Section */}
      <ShapingAfrica />

      {/* How We Do */}
      <HowWeDo />

      {/* Who Benefits */}
      <WhoBenefits />

    </>
  );
}
