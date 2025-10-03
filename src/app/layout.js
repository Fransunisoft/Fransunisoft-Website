import "@/app/globals.css";
import Navbar from "@/components/NavBars";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Fransunisoft Official Website  ",
  description:
    "Building Smarter, Scaling Faster, Engineering Experiences, and Empowering Growth.",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </body>
    </html>
  );
}
