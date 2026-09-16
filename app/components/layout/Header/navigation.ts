export type NavigationItem =
  | { name: string; href: string; dropdown?: never }
  | { name: string; href?: never; dropdown: { name: string; href: string }[] };

export const navLinks: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "FSX Ecosystem",
    dropdown: [
      { name: "FSX Consulting -- AI Strategy & Advisory", href: "/consulting" },
      { name: "FSX Academy -- AI Workforce Development", href: "/academy" },
      { name: "FSX Labs - AI Products & Venture Studio", href: "/labs" },
      { name: "FSX Tech - Implementation & Infrastructure", href: "/Tech" },
      { name: "FSX Events - Innovation Programs", href: "/events" },
      { name: "FSX Connect - Network & Partnerships", href: "/connect" },
    ],
  },
  { name: "Root Builders", href: "/rootbuilders" },
  { name: "Claude Accelerator", href: "/claude-accelerator" },
  { name: "Contact", href: "/#contact" },
];

export const headerAction = { name: "Book an AI Session", href: "/#contact" };
