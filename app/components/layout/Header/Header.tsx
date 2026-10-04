"use client";

import { useState } from "react";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu, { MobileMenuToggle } from "./MobileMenu";
import { headerAction } from "./navigation";
import Button from "@/app/components/ui/Button";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full  bg-white shadow-md ">
        <nav className="flex items-center section-layout section-layout--flush section-layout--mobile-header justify-between px-1 md:px-0">
          <Logo />

          <NavLinks />

          <div className="hidden lg:block">
            <Link href={headerAction.href}>
            <Button className="whitespace-nowrap hover:bg-accent-600 px-4 text-sm xl:px-6 xl:text-base">{headerAction.name}</Button>
            </Link>
            
          </div>

          <MobileMenuToggle isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
        </nav>

        <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </header>

      {/* Reserves space for the fixed header */}
      <div className="h-[60px] lg:h-22" />
    </>
  );
}
