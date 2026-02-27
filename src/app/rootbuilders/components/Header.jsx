"use client";
import styles from "../root-builders.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    closeMenu();
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.navBarContainer}>
        {/* LOGO */}
        <Link href="/rootbuilders" className={styles.titleHeaders}>
          <img
            src="/rootbuilders_logo.png"
            alt="Root Builders Logo"
            width="150"
            height="50"
            className={styles.logo}
          />
        </Link>

        {/* DESKTOP NAV (Hidden on Mobile via CSS) */}
        <div className={styles.navbarContainer}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <button type="button" className={styles.navLinkButton} onClick={(e) => scrollToSection(e, "root-builders")}>
                Why Root Builders
              </button>
            </li>
            <li className={styles.navItem}>
              <button type="button" className={styles.navLinkButton} onClick={(e) => scrollToSection(e, "track")}>
                Tracks
              </button>
            </li>
            <li className={styles.navItem}>
              <button type="button" className={styles.navLinkButton} onClick={(e) => scrollToSection(e, "faq")}>
                FAQs
              </button>
            </li>
          </ul>
        

        {/* DESKTOP BUTTON (Hidden on Mobile via CSS) */}
        <button type="button" className={styles.joinRootBtn}>
           <a href="https://docs.google.com/forms/d/e/1FAIpQLSc07jkQrxzrXlAMuykYnvouWHBQfSv3Y8I1knfbfU2pfpSkXA/viewform?usp=preview" target="_blank" rel="noopener noreferrer">
              Join Root Builders
            </a>
        </button>
        </div>



        {/* HAMBURGER TOGGLE (Visible on Mobile via CSS) */}
        <button
          type="button"
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      {menuOpen && (
        <div className={styles.navToggle}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <button type="button" className={styles.navLinkButton} onClick={(e) => scrollToSection(e, "root-builders")}>
                Why Root Builders
              </button>
            </li>
            <li className={styles.navItem}>
              <button type="button" className={styles.navLinkButton} onClick={(e) => scrollToSection(e, "track")}>
                Tracks
              </button>
            </li>
            <li className={styles.navItem}>
              <button type="button" className={styles.navLinkButton} onClick={(e) => scrollToSection(e, "faq")}>
                FAQs
              </button>
            </li>
          </ul>

          <button type="button" className={styles.joinRootBtn}>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc07jkQrxzrXlAMuykYnvouWHBQfSv3Y8I1knfbfU2pfpSkXA/viewform?usp=preview" target="_blank" rel="noopener noreferrer">
              Join Root Builders
            </a>
          </button>
        </div>
      )}
    </div>
  );
}