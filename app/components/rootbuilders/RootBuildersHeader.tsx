"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu, { MobileMenuToggle } from "@/app/components/layout/Header/MobileMenu";

const links = [
  { name: "Why Root Builders", href: "#why" },
  { name: "Tracks", href: "#tracks" },
  { name: "FAQs", href: "#faq" },
];
const action = { name: "Join Root Builders", href: "#apply" };

export default function RootBuildersHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-3 border-[#e3e6e8] bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-16 section-layout items-center justify-between px-5 lg:h-20">
        <Link href="/rootbuilders" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <Image
            src="/Rootbuilders.png"
            alt="RootBuilders"
            width={62}
            height={48}
            className="h-auto w-full object-cover"
          />
        </Link>

        <div className="hidden items-center gap-8 text-lg font-semibold text-[#334155] lg:flex">
          {links.map((link) => <a key={link.href} href={link.href}>{link.name}</a>)}
        </div>

        <Link href={action.href} className="hidden h-10 items-center rounded-full bg-primary-600 px-6 text-sm font-bold text-white transition hover:bg-primary-700 lg:inline-flex">
          {action.name}
        </Link>

        <MobileMenuToggle isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} menuId="rootbuilders-mobile-navigation" label="RootBuilders menu" />
      </nav>
      <MobileMenu id="rootbuilders-mobile-navigation" isOpen={isOpen} onClose={() => setIsOpen(false)} items={links} action={action} />
    </header>
  );
}
