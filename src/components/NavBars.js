'use client';
import Link from 'next/link';
import Image from 'next/image'; // ✅ Import Image component
import { useState } from 'react';
import styles from '@/components/Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
         <Image
  src="/fransunisoft-logo.png"
  alt="Fransunisoft Logo"
  width={160}
  height={25}
  priority
/>

        </Link>
      </div>

      <button
        className={styles.menuToggle}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
<ul className={`${styles.navLinks} ${menuOpen ? `${styles.mobile} ${styles.active}` : ''}`}>

        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li
          className={styles.dropdown}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span>FSX Brands ▾</span>
          {showDropdown && (
            <ul className={styles.dropdownMenu}>
              <li><Link href="/fsx page/consulting">FSX Consulting</Link></li>
              <li><Link href="/fsx page/tech">FSX Tech</Link></li>
              <li><Link href="/fsx page/labs">FSX Labs</Link></li>
              <li><Link href="/fsx page/events">FSX Events</Link></li>
              <li><Link href="/fsx page/connect">FSX Connect</Link></li>
              <li><Link href="/fsx page/academy">FSX Academy</Link></li>
            </ul>
          )}
        </li>
        <li><Link href="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
}
