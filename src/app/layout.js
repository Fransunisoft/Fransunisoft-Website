// src/app/layout.js
import '@/app/globals.css';
import Navbar from '@/components/NavBars';
import Footer from '@/components/Footer';
import Contact from '@/components/contact';

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
