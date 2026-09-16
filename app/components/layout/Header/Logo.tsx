import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 lg:gap-3">
      <Image
        src={logo}
        alt="Fransunisoft Logo"
        width={120}
        height={68}
        sizes="(max-width: 1023px) 62vw, 160px"
        className="h-11 w-28 object-contain lg:h-11 lg:w-40"
        priority
      />
    </Link>
  );
}
