import "@/app/globals.css";

export const metadata = {
  title: "Fransunisoft Official Website",
  description:
    "Fransunisoft — a venture & talent studio building Africa’s next generation of startups.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}