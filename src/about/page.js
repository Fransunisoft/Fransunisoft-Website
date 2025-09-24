// src/app/about/page.js
import Contact from '@/components/Contact';
import NavBars from '@/components/NavBars';


export default function AboutPage() {
  return (
    <main>
   <>
      <NavBars />
    </>
      <h1>About Fransusnest</h1>
      <p>
        We are a consulting and development firm focused on innovation, excellence, and sustainable growth in Nigeria.
      </p>
       <>
      <Contact />
    </>
  );
    </main>
  );
}
