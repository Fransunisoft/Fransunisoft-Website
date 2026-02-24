'use client'
import "@/app/globals.css";

import Navbar from "@/components/NavBars";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import RootBuilders from "./rootbuilders/page";
import { usePathname } from "next/navigation";



export default function RootLayout({ children }) {
const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        {pathname === "/rootbuilders" ? <RootBuilders />
        : 
        <>
        <Navbar />
        {children}
        <section id="contact">
          <Contact />
        </section>
        <Footer />
        </>
        }
      </body>
    </html>
  );
}
