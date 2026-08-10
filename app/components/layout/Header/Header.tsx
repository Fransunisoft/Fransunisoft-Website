"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import Button from "@/app/components/ui/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="section-layout relative z-20 flex flex-col bg-background">
      <nav className="flex items-center justify-between">
        <Logo />

        <NavLinks />

        <div className="hidden lg:block">
          <Button>Book an AI Session</Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </header>
  );
}
