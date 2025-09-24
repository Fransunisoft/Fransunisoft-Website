'use client';

import styles from './Contact.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className={styles.contactSection} data-aos="fade-up">
      <div className={styles.intro}>
        <h2 className={styles.mainHeading}>Let’s Build Smarter, Together.</h2>
        <p className={styles.introText}>
          Whether you are planning an unforgettable event, scaling your business, simplifying your tech, or expanding your network—FSX is here to help.
        </p>
      </div>

      <div className={styles.contactGrid}>
        {/* Left Column: Contact Information */}
        <div className={styles.contactInfoBox}>
          <h3 className={styles.heading}>Contact Information</h3>
<p className={styles.hparagraph}>
          We`d love to hear from you! Please fill out the contact form and we`ll reply soon` </p>
          <div className={styles.infoItem}>
  <div className={styles.labelRow}>
    <Image src="/contact email.png" alt="Email icon" width={40} height={40} />
    <p className={styles.paragraph}><strong>Email</strong></p>
  </div>
  <p className={styles.subText}>Contact us by email, and we’ll respond shortly</p>
 <p className={styles.detail}>hello@fransunisoft.com</p>
</div>

<div className={styles.infoItem}>
  <div className={styles.labelRow}>
    <Image src="/Phone icon.png" alt="Phone icon" width={40} height={40} />
    <p className={styles.paragraph}><strong>Phone</strong></p>
  </div>
  <p className={styles.subText}>Call us on (Weekdays 9AM - 5PM)</p>
  <p className={styles.detail}>0800 234 567 89</p>
</div>

<div className={styles.infoItem}>
  <div className={styles.labelRow}>
    <Image src="/contact location.png" alt="Location icon" width={40} height={40} />
    <p className={styles.paragraph}><strong>Location</strong></p>
  </div>
  <p className={styles.subText}>Where we are located</p>
  <p className={styles.detail}>Lagos, Nigeria</p>
</div>
        </div>

        {/* Right Column: Get In Touch */}
        <div className={styles.contactActionBox}>
          <h3 className={styles.heading}>Get In Touch</h3>
          <p className={styles.paragraph}>
            Contact fransunisoft (FSX) today for event management, consulting, technology solutions, training, and networking opportunities in Nigeria.
          </p>

          <Link href="/contact/form" className={styles.contactBtn}>
            Open Contact Form
          </Link>

          <p className={styles.tagline}><span>Or send us a mail</span></p>
 <div className="emailWrapper">
          <a href="mailto:hello@fransunisoft.com" className={styles.emailLink}>
            <Image src="/Gmail.png" alt="Gmail logo" width={80} height={80} />
          
          </a>
        </div>
         </div>
      </div>
    </section>
  );
}
