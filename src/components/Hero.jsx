'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>FSX Tech</h1>
          <p className={styles.description}>
            Technology should simplify, not complicate. At FSX Tech, we design and deliver IT and digital solutions both hardware and software that help businesses in Nigeria and beyond run smoother, faster, and smarter.
          </p>
          <div className={styles.buttons}>
            <button className={styles.primaryButton}>Get Started</button>
            <button className={styles.secondaryButton}>Back To Brand Family</button>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="https://via.placeholder.com/400x300/007bff/ffffff?text=Hero+Image+(Person+at+Desk)"
            alt="FSX Tech team member working on digital solutions"
            fill
            className={styles.heroImage}
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;