"use client";

import { useState } from "react";
import styles from "../root-builders.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("root-builders");

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
    closeMenu();
  };

  const joinLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSc07jkQrxzrXlAMuykYnvouWHBQfSv3Y8I1knfbfU2pfpSkXA/viewform?usp=preview";

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        {/* Logo */}
        <a href="/rootbuilders" className={styles.brand} aria-label="RootBuilders home">
          <img
            src="/rootbuilders_logo.png"
            alt="Root Builders Logo"
            width="150"
            height="50"
            className={styles.logo}
          />
        </a>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          <a
            href="#root-builders"
            onClick={scrollToSection("root-builders")}
            className={`${styles.navLink} ${active === "root-builders" ? styles.active : ""}`}
          >
            Why Root Builders
          </a>

          <a
            href="#track"
            onClick={scrollToSection("track")}
            className={`${styles.navLink} ${active === "track" ? styles.active : ""}`}
          >
            Tracks
          </a>

          <a
            href="#faq"
            onClick={scrollToSection("faq")}
            className={`${styles.navLink} ${active === "faq" ? styles.active : ""}`}
          >
            FAQs
          </a>

          <a
            href={joinLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            Join Root Builders
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={styles.mobileMenuBtn}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className={styles.mobileOverlay}>
          <div className={styles.mobilePanel}>
            <button
              type="button"
              className={styles.mobileClose}
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ✖
            </button>

            <nav className={styles.mobileNav} aria-label="Mobile navigation">
              <a
                href="#root-builders"
                onClick={scrollToSection("root-builders")}
                className={`${styles.mobileLink} ${
                  active === "root-builders" ? styles.mobileActive : ""
                }`}
              >
                Why Root Builders
              </a>

              <a
                href="#track"
                onClick={scrollToSection("track")}
                className={`${styles.mobileLink} ${
                  active === "track" ? styles.mobileActive : ""
                }`}
              >
                Tracks
              </a>

              <a
                href="#faq"
                onClick={scrollToSection("faq")}
                className={`${styles.mobileLink} ${
                  active === "faq" ? styles.mobileActive : ""
                }`}
              >
                FAQs
              </a>
            </nav>

            <a
              className={styles.mobileCta}
              href={joinLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Join Root Builders
            </a>
          </div>
        </div>
      )}
    </header>
  );
}