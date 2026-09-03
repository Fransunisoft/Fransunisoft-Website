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
  { name: "FSX Academy - AI Workforce Development", href: "/academy" },
  { name: "FSX Labs - AI Products & Venture Studio", href: "#" },
  { name: "FSX Tech - Implementation & Infrastructure", href: "#" },
  { name: "FSX Events - Innovation Programs", href: "/events" },
  { name: "FSX Connect - Network & Partnerships", href: "/connect" },
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-primary-700 text-white">
      {/* Background World Map */}
      <Image
        src={map}
        alt=""
        fill
        priority
        className="pointer-events-none absolute inset-0 z-0 object-cover opacity-30"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-8 lg:px-12 lg:py-16">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:gap-12 xl:grid-cols-[1.3fr_1.2fr_0.8fr_1.3fr]">
          {/* Company */}
          <div className="space-y-4 lg:space-y-6">
            <Logo />

            <p className="max-w-sm text-xs leading-5 text-white/80 lg:text-sm lg:leading-7">
              Fransunisoft — AI Transformation, Talent & Technology for Africa.
            </p>

            <p className="max-w-sm text-xs leading-5 text-white/80 lg:text-sm lg:leading-7">
              We help organizations adopt AI, build future-ready talent, and
              implement technology solutions that drive lasting growth.
            </p>

            <div className="flex flex-wrap gap-2 lg:gap-3">
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
            <h5 className="mb-3 text-base font-semibold text-secondary lg:mb-6 lg:text-2xl">FSX Ecosystem</h5>

            <ul className="space-y-2 lg:space-y-4">
              {ecosystemLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs leading-5 text-white/80 transition hover:text-white lg:text-sm lg:leading-6"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="mb-3 text-base font-semibold text-secondary lg:mb-6 lg:text-2xl">Quick Links</h5>

            <ul className="space-y-2 lg:space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs text-white/80 transition hover:text-white lg:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="mb-3 text-base font-semibold text-secondary lg:mb-6 lg:text-2xl">Newsletter</h5>

            <p className="mb-4 text-xs leading-5 text-white/80 lg:mb-6 lg:text-sm lg:leading-7">
              Stay ahead of AI adoption in Africa. Subscribe to FSX Insights —
              our newsletter on AI, innovation, and technology for African
              organizations.
            </p>

            <form className="flex flex-col items-start gap-3 sm:flex-row lg:gap-4">
              <input
                type="email"
                placeholder="Email: johndoe@email.com"
                className="h-9 w-full rounded-full border border-transparent bg-white px-4 text-xs text-neutral-primary placeholder:text-neutral-muted outline-none focus:border-secondary sm:flex-1 lg:h-12 lg:px-5 lg:text-sm"
              />

              <Button variant="accent" className="h-9 rounded-full px-5 text-xs lg:h-12 lg:px-6 lg:text-sm">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-white/20 pt-5 lg:mt-14 lg:pt-6">
          <p className="text-center text-xs leading-5 text-white/70 lg:text-sm">
            © 2026 Fransunisoft. All Rights Reserved. | AI Transformation,
            Talent & Technology for Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
