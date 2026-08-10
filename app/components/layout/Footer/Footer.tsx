import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";
import Button from "@/app/components/ui/Button";
import Logo from "../Header/Logo";
import map from "@/public/Dotted World Map.png";
import Image from "next/image";

const ecosystemLinks = [
  { name: "FSX Consulting - AI Strategy & Advisory", href: "/consulting" },
  { name: "FSX Academy - AI Workforce Development", href: "#" },
  { name: "FSX Labs - AI Products & Venture Studio", href: "#" },
  { name: "FSX Tech - Implementation & Infrastructure", href: "#" },
  { name: "FSX Events - Innovation Programs", href: "#" },
  { name: "FSX Connect - Network & Partnerships", href: "#" },
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-primary-900 text-white">
      {/* Background World Map */}
      <Image
        src={map}
        alt=""
        fill
        priority
        className="pointer-events-none absolute inset-0 z-0 object-cover opacity-30"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-[1.3fr_1.2fr_0.8fr_1.3fr]">
          {/* Company */}
          <div className="space-y-6">
            <Logo />

            <p className="max-w-sm text-sm leading-7 text-white/80">
              Fransunisoft — AI Transformation, Talent & Technology for Africa.
            </p>

            <p className="max-w-sm text-sm leading-7 text-white/80">
              We help organizations adopt AI, build future-ready talent, and
              implement technology solutions that drive lasting growth.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-md bg-white p-2 text-primary transition hover:scale-105"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="rounded-md bg-white p-2 text-primary transition hover:scale-105"
              >
                <FaXTwitter size={18} />
              </a>

              <a
                href="#"
                className="rounded-md bg-white p-2 text-primary transition hover:scale-105"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="rounded-md bg-white p-2 text-primary transition hover:scale-105"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="#"
                className="rounded-md bg-white p-2 text-primary transition hover:scale-105"
              >
                <FaYoutube size={18} />
              </a>

              <a
                href="#"
                className="rounded-md bg-white p-2 text-primary transition hover:scale-105"
              >
                <FaTiktok size={18} />
              </a>
            </div>
          </div>

          {/* Ecosystem */}
          <div>
            <h5 className="mb-6 font-semibold text-secondary">FSX Ecosystem</h5>

            <ul className="space-y-4">
              {ecosystemLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 text-white/80 transition hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="mb-6 font-semibold text-secondary">Quick Links</h5>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="mb-6 font-semibold text-secondary">Newsletter</h5>

            <p className="mb-6 text-sm leading-7 text-white/80">
              Stay ahead of AI adoption in Africa. Subscribe to FSX Insights —
              our newsletter on AI, innovation, and technology for African
              organizations.
            </p>

            <form className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Email: johndoe@email.com"
                className="h-12 flex-1 rounded-full border border-transparent bg-white px-5 text-sm text-neutral-primary placeholder:text-neutral-muted outline-none focus:border-secondary"
              />

              <Button variant="accent" className="h-12 whitespace-nowrap px-6">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-white/20 pt-6">
          <p className="text-center text-sm text-white/70">
            © 2026 Fransunisoft. All Rights Reserved. | AI Transformation,
            Talent & Technology for Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
