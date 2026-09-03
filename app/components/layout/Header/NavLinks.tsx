"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "FSX Ecosystem",
    href: "/services",
    dropdown: [
      {
        name: "FSX Consulting -- AI Strategy & Advisory",
        href: "/consulting",
      },
      {
        name: "FSX Academy -- AI Workforce Development",
        href: "/academy",
      },
      {
        name: "FSX Labs - AI Products & Venture Studio",
        href: "/services/fsx-academy",
      },
      {
        name: "FSX Tech - Implementation & Infrastructure",
        href: "/services/fsx-academy",
      },
      {
        name: "FSX Events - Innovation Programs",
        href: "/events",
      },
      {
        name: "FSX Connect - Network & Partnerships",
        href: "/connect",
      },
    ],
  },
  { name: "Root Builders", href: "/root-builders" },
  { name: "Contact", href: "/contact" },
];

export default function NavLinks() {
  return (
    <ul className="hidden lg:flex items-center gap-8">
      {navLinks.map((link) => (
        <li
          key={link.name}
          className={`relative group ${
            link.dropdown
              ? "after:absolute after:left-0 after:top-full after:h-3 after:w-full"
              : ""
          }`}
        >
          <div className="flex items-center">
            <Link
              href={link.href}
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              {link.name}

              {link.dropdown && (
                <ChevronDown
                  size={16}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
              )}
            </Link>
          </div>

          {link.dropdown && (
            <div
              className="
                absolute left-1/2 top-full z-50
                -translate-x-1/2
                pt-3
                opacity-0
                invisible
                translate-y-2
                pointer-events-none
                transition-all
                duration-200
                group-hover:opacity-100
                group-hover:visible
                group-hover:translate-y-0
                group-hover:pointer-events-auto
              "
            >
              <div className="w-[320px] rounded-lg bg-white p-2 shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
                {link.dropdown.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-4 py-3 text-[13px] font-normal text-[#333] transition-colors hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
