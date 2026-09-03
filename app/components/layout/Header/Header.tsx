"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import Button from "@/app/components/ui/Button";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full bg-white px-3 py-2 lg:px-8 lg:py-6">
        <nav className="flex items-center justify-between">
          <Logo />

          <NavLinks />

          <div className="hidden lg:block">
            <Button>Book an AI Session</Button>
          </div>

          <Link href='#contact'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </Link>
        </nav>

        <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </header>

      {/* Reserves space for the fixed header */}
      <div className="h-13 lg:h-22" />
    </>
  );
}
