import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      
      <div className={styles.topSection}>
        <div className={styles.branding}>
         
          <h2 className={styles.logo}>
        <Link href="/">
         <Image
  src="/fransunisoft-logo.png"
  alt="Fransunisoft Logo"
  width={160}
  height={25}
  priority
/>

        </Link>
      </h2>
          <p className={styles.tagline}>
            Engineering innovation and impact across Africa and beyond through the FSX ecosystem
          </p>
          <div className={styles.socialIcons}>
            <Image src="/Facebook.png" alt="Facebook" width={24} height={24} />
            <Image src="/X-Twitter.png" alt="Twitter" width={24} height={24} />
            <Image src="/Linkedin.png" alt="LinkedIn" width={24} height={24} />
            <Image src="/Instagram.png" alt="Instagram" width={24} height={24} />
            <Image src="/Youtube.png" alt="YouTube" width={24} height={24} />
          </div>
        </div>

        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <h4>FSX Ecosystem</h4>
            <Link href="/fsx/consulting">FSX Consulting</Link>
            <Link href="/fsx/labs">FSX Labs</Link>
             <Link href="/fsx/connect">FSX Tech</Link>
            <Link href="/fsx/connect">FSX Connect</Link>
            <Link href="/fsx/events">FSX Events</Link>
             <Link href="/fsx/connect">FSX Academy</Link>
          </div>

          <div className={styles.linkGroup}>
            <h4>Quick Links</h4>
            <Link href="/about">About Us</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div className={styles.newsletter}>
          <h4>Newsletter</h4>
          <p>
            Be the first to hear about our latest innovations, research insights, and product updates.
            Sign up for our newsletter and join a community shaping the future of technology in Africa.
          </p>
          <form className={styles.form}>
            <input type="email" placeholder="Email: johndoe@email.com" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className={styles.bottomNote}>
        © 2025 Fransunisoft. All rights reserved. | Engineering Innovation & Impact
      </div>
    </footer>
  );
}
