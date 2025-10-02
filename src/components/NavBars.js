'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from '@/components/Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setMenuOpen(false);
      setShowDropdown(false); // reset on resize only
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // ✅ Close menus only on mobile
  const closeMobileMenu = () => {
    if (window.innerWidth < 768) {
      setMenuOpen(false);
      setShowDropdown(false);
    } else {
      setMenuOpen(false);
    }
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    closeMobileMenu();
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/" onClick={closeMobileMenu}>
          <Image
            src="/Fransunisoft Logo2.png"
            alt="Fransunisoft Logo"
            width={200}
            height={40}
            priority
          />
        </Link>
      </div>

      {/* Mobile toggle button */}
      <button
        className={styles.menuToggle}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Nav Links */}
      <ul className={`${styles.navLinks} ${menuOpen ? `${styles.mobile} ${styles.active}` : ''}`}>
        <li className={styles.navItem}>
          <Link
            href="/"
            onClick={closeMobileMenu}
            className={pathname === '/' ? styles.activeLink : ''}
          >
            Home
          </Link>
        </li>

        <li className={styles.navItem}>
          <Link
            href="/about"
            onClick={closeMobileMenu}
            className={pathname === '/about' ? styles.activeLink : ''}
          >
            About
          </Link>
        </li>

        <li className={styles.navItem}>
          <a
            href="https://www.linkedin.com/company/fransunisoft/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
          >
            Blog
          </a>
        </li>

        {/* FSX Brands Dropdown */}
        <li
          className={`${styles.dropdown} ${showDropdown ? styles.open : ''}`}
          onClick={() => {
            if (window.innerWidth < 768) setShowDropdown(!showDropdown); // click toggle on mobile
          }}
          onMouseEnter={() => window.innerWidth >= 768 && setShowDropdown(true)}
          onMouseLeave={() => window.innerWidth >= 768 && setShowDropdown(false)}
        >
          <span>FSX Brands ▾</span>
          <ul className={`${styles.dropdownMenu} ${showDropdown ? styles.show : ''}`}>
            <li>
              <Link
                href="/fsx-page/consulting"
                onClick={closeMobileMenu}
                className={pathname === '/fsx-page/consulting' ? styles.activeLink : ''}
              >
                FSX Consulting
              </Link>
            </li>
            <li>
              <Link
                href="/fsx-page/tech"
                onClick={closeMobileMenu}
                className={pathname === '/fsx-page/tech' ? styles.activeLink : ''}
              >
                FSX Tech
              </Link>
            </li>
            <li>
              <Link
                href="/fsx-page/labs"
                onClick={closeMobileMenu}
                className={pathname === '/fsx-page/labs' ? styles.activeLink : ''}
              >
                FSX Labs
              </Link>
            </li>
            <li>
              <Link
                href="/fsx-page/events"
                onClick={closeMobileMenu}
                className={pathname === '/fsx-page/events' ? styles.activeLink : ''}
              >
                FSX Events
              </Link>
            </li>
            <li>
              <Link
                href="/fsx-page/connect"
                onClick={closeMobileMenu}
                className={pathname === '/fsx-page/connect' ? styles.activeLink : ''}
              >
                FSX Connect
              </Link>
            </li>
            <li>
              <Link
                href="/fsx-page/academy"
                onClick={closeMobileMenu}
                className={pathname === '/fsx-page/academy' ? styles.activeLink : ''}
              >
                FSX Academy
              </Link>
            </li>
          </ul>
        </li>

        <li className={styles.navItem}>
          <a href="#contact" onClick={scrollToContact}>
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}
