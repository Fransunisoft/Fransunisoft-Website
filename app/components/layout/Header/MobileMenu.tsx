"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Button from "@/app/components/ui/Button";
import { headerAction, navLinks, type NavigationItem } from "./navigation";
import styles from "./MobileMenu.module.css";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  id?: string;
  items?: NavigationItem[];
  action?: { name: string; href: string; target?: string; rel?: string };
};

export function MobileMenuToggle({
  isOpen,
  onToggle,
  menuId = "mobile-navigation",
  label = "menu",
}: {
  isOpen: boolean;
  onToggle: () => void;
  menuId?: string;
  label?: string;
}) {
  return (
    <button
      id={`${menuId}-toggle`}
      type="button"
      onClick={onToggle}
      className={styles.toggle}
      aria-label={`${isOpen ? "Close" : "Open"} ${label}`}
      aria-expanded={isOpen}
      aria-controls={menuId}
    >
      {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
    </button>
  );
}

export default function MobileMenu({
  isOpen,
  onClose,
  id = "mobile-navigation",
  items = navLinks,
  action = headerAction,
}: MobileMenuProps) {
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
  const [openDropdown, setOpenDropdown] = useState<string | null>(() =>
    items.find((item) => item.dropdown?.some((child) => isActive(child.href)))?.name ?? null
  );

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        document.getElementById(`${id}-toggle`)?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (desktop.matches) onClose(); };
    document.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeOnDesktop);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [isOpen, onClose, id]);

  return (
    <div id={id} className={styles.panel} data-open={isOpen} aria-hidden={!isOpen} inert={!isOpen}>
      <div className={styles.clip}>
        <nav className={styles.viewport} aria-label="Mobile navigation">
          <ul className={styles.list}>
            {items.map((item, index) => {
              const active = item.dropdown
                ? item.dropdown.some((child) => isActive(child.href))
                : isActive(item.href);
              const expanded = openDropdown === item.name;
              const dropdownId = `${id}-dropdown-${index}`;

              return (
                <li key={item.name}>
                  {item.dropdown ? (
                    <>
                      <button
                        type="button"
                        className={styles.link}
                        data-active={active}
                        aria-expanded={expanded}
                        aria-controls={dropdownId}
                        onClick={() => setOpenDropdown(expanded ? null : item.name)}
                      >
                        {item.name}
                        <ChevronDown size={20} className={styles.chevron} data-open={expanded} aria-hidden="true" />
                      </button>
                      <div id={dropdownId} className={styles.dropdown} data-open={expanded} aria-hidden={!expanded} inert={!expanded}>
                        <div className={styles.clip}>
                          <ul className={styles.sublist}>
                            {item.dropdown.map((child) => (
                              <li key={child.href}>
                                <Link href={child.href} onClick={onClose} className={styles.sublink} aria-current={isActive(child.href) ? "page" : undefined}>
                                  {child.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link href={item.href} onClick={onClose} className={styles.link} data-active={active} aria-current={active ? "page" : undefined}>
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          <Button href={action.href} target={action.target} rel={action.rel} onClick={onClose} className={styles.action}>{action.name}</Button>
        </nav>
      </div>
    </div>
  );
}
