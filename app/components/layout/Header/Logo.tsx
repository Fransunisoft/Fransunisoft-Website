import Link from "next/link";
import Image from "next/image";
import logo from "@/public/favicon.png";
export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 lg:gap-3">
      <Image
        src={logo}
        alt="Fransunisoft Logo"
        width={44}
        height={68}
        className="h-8 w-6 object-contain lg:h-11 lg:w-8"
        priority
      />
      <span className="text-sm font-black tracking-tight text-primary-800 lg:uppercase lg:tracking-[0.18em]">
        Fransunisoft
      </span>
    </Link>
  );
}
