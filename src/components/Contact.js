import styles from './Contact.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.intro}>
        <h2 className={styles.mainHeading}>Let’s Build Smarter, Together.</h2>
        <p className={styles.introText}>
          Whether you are planning an unforgettable event, scaling your business, simplifying your tech, or expanding your network—FSX is here to help.
        </p>
      </div>

      {/* Headings side-by-side */}
      <div className={styles.headingRow}>
        <h3 className={styles.heading}>Contact Information</h3>
        <h3 className={styles.heading}>Get In Touch</h3>
      </div>

      {/* Content blocks side-by-side */}
      <div className={styles.contentRow}>
        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            <Image src="/contact email.png" alt="Email icon" width={24} height={24} />
            <p className={styles.paragraph}><strong>Email:
                 <p className={styles.tagline}><span>Contact us by email, and we’ll respond shortly</span></p>
                </strong> hello@fransrussoft.com</p>
          </div>

          <div className={styles.infoItem}>
            <Image src="/icons/phone-icon.png" alt="Phone icon" width={24} height={24} />
            <p className={styles.paragraph}>
              <strong>Phone: 
                <br/>
              <span className={styles.subText}>Call us on (Weekdays 9AM - 5PM)</span>
               <br/> </strong> 0800 234 567 89 
            </p>
          </div>

          <div className={styles.infoItem}>
            <Image src="/contact location.png" alt="Location icon" width={24} height={24} />
            <p className={styles.paragraph}><strong>Location:
               
                    <br/>
              <span className={styles.subText}>Where we are located</span>
               <br/> </strong>Lagos, Nigeria
            </p>
          </div>
        </div>

        <div className={styles.contactAction}>
          <p className={styles.paragraph}>
            Contact FSX today for event management, consulting, technology solutions, training, and networking opportunities in Nigeria.
          </p>

          <Link href="/contact/form" className={styles.contactBtn}>Open Contact Form</Link>

          <p className={styles.tagline}><span>Or send us a mail</span></p>

          <a href="mailto:hello@fransrussoft.com" className={styles.emailLink}>
            <Image src="/Gmail.png" alt="Gmail logo" width={20} height={20} />
            <span>Or send us a mail</span>
          </a>
        </div>
      </div>
    </section>
  );
}
