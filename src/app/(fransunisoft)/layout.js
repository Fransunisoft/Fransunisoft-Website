import Navbar from "@/components/NavBars";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function SiteLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}