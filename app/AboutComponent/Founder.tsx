import React from "react";
import ceo from "./images/ceo.png";
import Image from "next/image";
import github from "./images/githab.png";
import linkedin from "./images/linkedin.png";
import x from "./images/X.png";
import instagram from "./images/instagram.png";
import styles from "./AboutMobile.module.css";
export default function Founder() {
  return (
    <div id="founder" className={`section-layout ${styles.founder}`}>
      <div className="flex items-center gap-4">
        <p className="font-body whitespace-nowrap text-primary-500">
          04 - FOUNDER & CEO
        </p>

        <hr className="h-px flex-1 border-0 bg-neutral-border" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="p-4">
          <Image src={ceo} alt="founder and ceo image" />
        </div>
        <div>
          <h2>Oluwaseyi Francis Ayodele</h2>
          <p className="text-[#20A89F] font-body">
            Founder & Chief Executive Officer, Fransunisoft
          </p><br />
          <div>
            <p className="text-justify">
              Oluwaseyi Francis Ayodele is a software engineer, ecosystem
              builder, and the founder of Fransunisoft — Africa&apos;s AI
              Transformation, Talent & Technology Company.
            </p> <br />

            <p className="text-justify ">
              With over a decade of experience spanning software development,
              fintech, consulting, innovation programs, and community building,
              Oluwaseyi has mentored thousands of young African professionals
              and led programs that engaged over 150,000 youths across the
              continent.
            </p><br />

            <div>
              <div className="border-l-[5px] border-[#FF5A1F] pl-7">
                <h4 className="text-justify">
                  He founded Fransunisoft with a conviction that Africa&apos;s most
                  pressing problem is not lack of ideas or talent — but lack of
                  execution infrastructure. Under his leadership, Fransunisoft
                  has evolved from a venture and talent studio into an
                  integrated AI transformation engine serving organizations
                  across Nigeria and Africa.
                </h4> <br />
              </div>
            </div>

            <p className="text-justify">
              He is building Fransunisoft to become the organization Africa
              turns to when it needs transformation done right.
            </p> <br />   
          </div>
          <div className="flex gap-2">
            <Image src={github} alt="GitHub" />
            <a href="https://www.linkedin.com/in/oluwaseyiayodele/" target="_blank" rel="noopener noreferrer" aria-label="Founder on LinkedIn">
              <Image src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://x.com/seyifayodele" target="_blank" rel="noopener noreferrer" aria-label="Founder on X">
              <Image src={x} alt="X" />
            </a>
            <a href="https://www.instagram.com/seyifayodele/" target="_blank" rel="noopener noreferrer" aria-label="Founder on Instagram">
              <Image src={instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
