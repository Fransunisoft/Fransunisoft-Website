'use client';

import styles from './Contact.module.css';
/* import Link from 'next/link'; */
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
/* import ContactForm from './ContactForm';  */

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
  <form className={styles.form}>
    <h3 className={styles.heading}>Get In Touch</h3>
    <p className={styles.paragraph}>
      Contact Fransunisoft (FSX) today for event management, consulting, technology solutions, training, and networking opportunities in Nigeria.
    </p>

    <div className={styles.row}>
      <input type="text" name="firstName" placeholder="First Name" required />
      <input type="text" name="lastName" placeholder="Last Name" required />
    </div>

    <div className={styles.row}>
      <input type="email" name="email" placeholder="Email Address" required />
      <input type="tel" name="phone" placeholder="+234 Phone Number" required />
    </div>

    <select name="serviceType" required>
      <option value="">Select FSX Brand</option>
      <option value="FSX Consulting">FSX Consulting</option>
      <option value="FSX Labs">FSX Labs</option>
      <option value="FSX Tech">FSX Tech</option>
      <option value="FSX Events">FSX Events</option>
      <option value="FSX Connect">FSX Connect</option>
      <option value="FSX Academy">FSX Academy</option>
    </select>

    <input type="text" name="company" placeholder="Company" />

    <textarea name="message" placeholder="How can we be of help?" rows={5} required />

    <input type="file" name="file" accept=".pdf,.doc,.docx,.jpg,.png" />

    <button type="submit" className={styles.contactBtn}>Contact Us</button>
  </form>
</div>


      </div>
    </section>
  );
}
