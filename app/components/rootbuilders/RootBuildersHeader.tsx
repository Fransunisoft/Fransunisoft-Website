"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu, { MobileMenuToggle } from "@/app/components/layout/Header/MobileMenu";
import Button from "@/app/components/ui/Button";
import { rootBuildersApplicationUrl } from "@/app/components/rootbuilders/rootbuilders-data";

const links = [
  { name: "Why Root Builders", href: "#why" },
  { name: "Tracks", href: "#tracks" },
  { name: "FAQs", href: "#faq" },
];
const action = {
  name: "Join Root Builders",
  href: rootBuildersApplicationUrl,
  target: "_blank",
  rel: "noopener noreferrer",
};

export default function RootBuildersHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-3 border-[#e3e6e8] bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-16 section-layout section-layout--flush items-center justify-between lg:h-20">
        <Link href="/rootbuilders" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <Image
            src="/Rootbuilders.png"
            alt="RootBuilders"
            width={70}
            height={48}
            className="h-auto w-full object-cover"
          />
        </Link>

        <div className="hidden items-center gap-8 text-lg font-semibold text-[#333] lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 hover:text-primary-600 hover:font-bold focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-600"
            >
              {link.name}
            </a>
          ))}
        </div>

        <Button href={action.href} target={action.target} rel={action.rel} variant="primary" className="hidden h-10 px-6 text-sm font-bold lg:inline-flex">
          {action.name}
        </Button>

        <MobileMenuToggle isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} menuId="rootbuilders-mobile-navigation" label="RootBuilders menu" />
      </nav>
      <MobileMenu id="rootbuilders-mobile-navigation" isOpen={isOpen} onClose={() => setIsOpen(false)} items={links} action={action} />
    </header>
  );
}
