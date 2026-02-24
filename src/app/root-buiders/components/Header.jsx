"use client";
import styles from "../root-builders.module.css";
import { useState } from "react";
import Link from "next/link";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("root-builders");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    closeMobileMenu();
  };

  const scrollToFaq = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("faq");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    closeMobileMenu();
  };

  const scrollToTrack = (e) => {
    e.preventDefault();
    const section = document.getElementById("track");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    closeMobileMenu();
  };
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.navBarContainer}>
          <Link href="/root-buiders" className={styles.titleHeaders}>
            <h2>Root Builders</h2>
          </Link>
          <div
            className={`${styles.navListContainer} ${
              menuOpen ? styles.open : ""
            }`}
          >
            <ul className={styles.navList}>
              <li className={styles.navItem} onClick={scrollToContact}>
                Why Root Builders
              </li>
              <li className={styles.navItem} onClick={scrollToTrack}>
                Tracks
              </li>
              <li className={styles.navItem} onClick={scrollToFaq}>
                FAQs
              </li>
            </ul>
          </div>
        </div>
      
        <button className={styles.joinRootBtn}>   <a href="https://docs.google.com/forms/d/e/1FAIpQLSc07jkQrxzrXlAMuykYnvouWHBQfSv3Y8I1knfbfU2pfpSkXA/viewform?usp=preview" target="_blank">Join Root Builders </a></button>
        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        > 
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>
      {menuOpen ? <div className={styles.navToggle}>
        <ul className={styles.navList}>
          <li className={`${styles.navItem}  ${styles.navItemLinks}`} onClick={scrollToContact}>
            <span>Why Root Builders</span>
          </li>
          <li className={`${styles.navItem}  ${styles.navItemLinks}`} onClick={scrollToTrack}>
            <span>Tracks</span>
          </li>
          <li className={`${styles.navItem}  ${styles.navItemLinks}`} onClick={scrollToFaq}>
            <span>FAQs</span>
          </li>
        </ul>
      </div> : ""
}
    </>
  );
}
