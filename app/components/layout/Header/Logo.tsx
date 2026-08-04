import Link from "next/link";
import Image from "next/image";
import logo from "@/public/favicon.png";
export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src={logo}
        alt="Fransunisoft Logo"
        width={44}
        height={68}
        className="h-11 w-8 object-contain"
        priority
      />
      <span className="text-sm font-black uppercase tracking-[0.18em] text-primary-800">
        Fransunisoft
      </span>
    </Link>
  );
}
