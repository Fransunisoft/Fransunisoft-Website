"use client";

import { usePathname } from "next/navigation";
import Footer from "@/app/components/layout/Footer/Footer";
import Header from "@/app/components/layout/Header/Header";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const usesMicrositeChrome = pathname === "/root-builders";

  if (usesMicrositeChrome) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
