"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

import { navLinks } from "./navigation";

export default function NavLinks() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <ul className="hidden lg:flex items-center gap-3 xl:gap-6">
      {navLinks.map((link) => (
        <li
          key={link.name}
          className={`relative group whitespace-nowrap text-sm xl:text-base ${link.dropdown
            ? "after:absolute after:left-0 after:top-full after:h-3 after:w-full"
            : ""
            }`}
        >
          <div className="flex items-center">
            {link.dropdown ? (
              <button
                type="button"
                className={`flex items-center gap-1 font-medium! hover:text-primary-500 hover:underline underline-offset-6 transition-colors ${link.dropdown.some((item) => isActive(item.href))
                  ? "text-primary-500 underline"
                  : ""
                  }`}
              >
                {link.name}
                <ChevronDown
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                />
              </button>
            ) : (
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`flex items-center gap-1 font-medium hover:text-primary-500 hover:underline underline-offset-6 transition-colors ${isActive(link.href) ? "text-primary-500 underline" : ""
                  }`}
              >
                {link.name}
              </Link>
            )}
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
                group-focus-within:opacity-100
                group-focus-within:visible
                group-focus-within:translate-y-0
                group-focus-within:pointer-events-auto
              "
            >
              <div className="w-[320px] rounded-lg bg-white p-2 shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
                {link.dropdown.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`block rounded-md px-4 py-3 text-[13px] font-semibold transition-colors hover:bg-gray-100 hover:underline underline-offset-6 ${isActive(item.href)
                      ? "bg-primary-50 text-primary-500 underline"
                      : "text-[#333]"
                      }`}
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
