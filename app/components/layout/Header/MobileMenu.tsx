import Link from "next/link";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "FSX Consulting", href: "/consulting" },
  { name: "FSX Connect", href: "/connect" },
  { name: "Contact", href: "/contact" },
];

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden py-6">
      <ul className="flex flex-col gap-5">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              onClick={onClose}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
