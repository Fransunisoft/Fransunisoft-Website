'use client';

import styles from './about.module.css';
import Image from 'next/image';
import Contact from '@/components/Contact';
import NavBars from '@/components/NavBars';

export default function AboutPage() {
  return (
    <main className={styles.aboutMain}>
      <NavBars />

      <section className={styles.hero}>
        <h1>About Fransunisoft (FSX)</h1>
        <p>
          Fransunisoft is a Nigeria-based ecosystem designed to fuel innovation, empower brands, and connect communities.
          With six dynamic branches—FSX Events, FSX Consulting, FSX Tech, FSX Academy, FSX Labs, and FSX Connect—we help businesses and individuals thrive in today’s fast-changing world.
        </p>
      </section>

      <section className={styles.advantage}>
        <h2>What Makes Us Different</h2>
        <p>
          We integrate strategy, technology, learning, and community under one ecosystem. FSX delivers holistic solutions with measurable outcomes for individuals, businesses, and industries.
        </p>
      </section>

      <section className={styles.values}>
        <h2>Core Values</h2>
        <ul>
          <li><strong>Innovation</strong> – Creativity and forward-thinking.</li>
          <li><strong>Excellence</strong> – High standards and continuous improvement.</li>
          <li><strong>Integrity</strong> – Honesty and transparency.</li>
          <li><strong>Growth</strong> – Personal and professional development.</li>
          <li><strong>Collaboration</strong> – Teamwork and shared success.</li>
        </ul>
      </section>

      <section className={styles.ceo}>
        <h2>Meet Our CEO</h2>
        <div className={styles.ceoImage}>
          <Image
            src="/CEO Profile Photo 1.png"
            alt="Alexander Francis Adebisi"
            width={1000}
            height={1000}
            style={{ width: '100%', height: 'auto' }}
            className={styles.fsxImage}
          />
        </div>
        <p>
          Francis leads FSX with a vision rooted in innovation, execution, and impact. His experience spans software engineering, business strategy, and community development.
        </p>
      </section>

      
        
      </main>
  );
}
