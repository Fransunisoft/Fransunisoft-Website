'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation'; // ✅ Correct hook for App Router
import styles from '@/components/Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname(); // ✅ Get current path

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const closeAll = () => {
    setMenuOpen(false);
    setShowDropdown(false);
  };

 const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    closeAll?.(); // Close mobile menu if defined
  };


  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/" onClick={closeAll}>
          <Image
            src="/Fransunisoft Logo2.png"
            alt="Fransunisoft Logo"
            width={200}
            height={40}
            priority
          />
        </Link>
      </div>

      <button
        className={styles.menuToggle}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <ul className={`${styles.navLinks} ${menuOpen ? `${styles.mobile} ${styles.active}` : ''}`}>
        <li>
          <Link href="/" onClick={closeAll} className={pathname === '/' ? styles.activeLink : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={closeAll} className={pathname === '/about' ? styles.activeLink : ''}>
            About
          </Link>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/fransunisoft/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeAll}
          >
            Blog
          </a>
        </li>

        <li className={styles.dropdown}>
          <span onClick={toggleDropdown}>FSX Brands ▾</span>
          <ul className={`${styles.dropdownMenu} ${showDropdown ? styles.show : ''}`}>
            <li>
              <Link href="/fsx-page/consulting" onClick={closeAll} className={pathname === '/fsx-page/consulting' ? styles.activeLink : ''}>
                FSX Consulting
              </Link>
            </li>
            <li>
              <Link href="/fsx-page/tech" onClick={closeAll} className={pathname === '/fsx-page/tech' ? styles.activeLink : ''}>
                FSX Tech
              </Link>
            </li>
            <li>
              <Link href="/fsx-page/labs" onClick={closeAll} className={pathname === '/fsx-page/labs' ? styles.activeLink : ''}>
                FSX Labs
              </Link>
            </li>
            <li>
              <Link href="/fsx-page/events" onClick={closeAll} className={pathname === '/fsx-page/events' ? styles.activeLink : ''}>
                FSX Events
              </Link>
            </li>
            <li>
              <Link href="/fsx-page/connect" onClick={closeAll} className={pathname === '/fsx-page/connect' ? styles.activeLink : ''}>
                FSX Connect
              </Link>
            </li>
            <li>
              <Link href="/fsx-page/academy" onClick={closeAll} className={pathname === '/fsx-page/academy' ? styles.activeLink : ''}>
                FSX Academy
              </Link>
            </li>
          </ul>
        </li>

       <li>
          {/* ✅ Scroll instead of navigate */}
          <a
            href="#contact"
            onClick={scrollToContact}
            className={styles.navLink}
          >
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}
