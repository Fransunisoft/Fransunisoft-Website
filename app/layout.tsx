import type { Metadata } from "next";
import "./globals.css";
import SiteChrome from "@/app/components/layout/SiteChrome";

export const metadata: Metadata = {
  title: "Fransunisoft Official Website",
  description:
    "Fransunisoft — an AI venture & AI talent studio building Africa’s next generation of startups.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
