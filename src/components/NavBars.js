'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from '@/components/Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const closeAll = () => {
    setMenuOpen(false);
    setShowDropdown(false);
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
        <li><Link href="/" onClick={closeAll}>Home</Link></li>
        <li><Link href="/about" onClick={closeAll}>About</Link></li>
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
            <li><Link href="/fsx-page/consulting" onClick={closeAll}>FSX Consulting</Link></li>
            <li><Link href="/fsx-page/tech" onClick={closeAll}>FSX Tech</Link></li>
            <li><Link href="/fsx-page/labs" onClick={closeAll}>FSX Labs</Link></li>
            <li><Link href="/fsx-page/events" onClick={closeAll}>FSX Events</Link></li>
            <li><Link href="/fsx-page/connect" onClick={closeAll}>FSX Connect</Link></li>
            <li><Link href="/fsx-page/academy" onClick={closeAll}>FSX Academy</Link></li>
          </ul>
        </li>

        <li><Link href="/contact" onClick={closeAll}>Contact Us</Link></li>
      </ul>
    </nav>
  );
}
