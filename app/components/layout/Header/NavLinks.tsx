import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "FSX Ecosystem", href: "/services" },
  { name: "Root Builders", href: "/contact" },
  { name: "Contact", href: "/contact" },
];

export default function NavLinks() {
  return (
    <ul className="hidden lg:flex items-center gap-8">
      {navLinks.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className="hover:text-primary transition-colors"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}