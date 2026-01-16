"use client";

import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import CountUp from "react-countup";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ButtonGroup from "./components/ButtonGroup";

export default function HomePage() {
  useEffect(() => {
    setTimeout(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, 100);
  }, []);

  // Scroll to Brand Family section
  const scrollToBrandFamily = (e) => {
    e.preventDefault();
    const section = document.getElementById("brand-family");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to Contact section
  const scrollToContact = (e) => {
    e.preventDefault();
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      {/* === HERO === */}
      <div className={styles.heroBackground}>
        <div className={styles.heroMain} data-aos="fade-up">
          <div className={styles.overlay}>
            <h1 className={styles.typewriter}>
              Building Africa's Next Generation of Startups
            </h1>

            <p className={styles.description}>
            Fransunisoft builds startups by pairing high-potential African talent with real problems,
             structured execution, and shared ownership. We don&apost just build MVPs. We build founders, teams, 
             and investable companies.
            </p>

            <div className={styles.container}>
   
      <div className={styles.sections}>
        <p className={styles.item}>Venture Studio </p>
        <p className={styles.dot}>●</p>
        <p className={styles.item}>Talent Accelerator</p>
        <span className={styles.dot}>●</span>
        <p className={styles.item}>Build-for-Equity Partner</p>
      </div>
    </div>

            <ButtonGroup
              filterKeys={["discover", "start"]}
              onClickHandlers={{
                discover: scrollToContact,
                start: scrollToBrandFamily,
              }}
            />
          </div>
        </div>
      </div>

      {/* === WHAT MAKES US DIFFERENT === */}
      <section data-aos="fade-up">
        <div className="">
          
            <div className="sectionHead">
              <h2>What Makes Us Different</h2>
              
            <h6>
              Beyond traditional boundaries – we integrate, execute, and
              transform
            </h6>
          </div>
        </div>

        <div className={styles.fsxRow}>
          <div className={styles.fsxContent}>
            <h3>The FSX Advantage</h3>
            <p>
              Unlike traditional consulting firms or tech companies that focus
              on one area,
              <span style={{ color: "#0D519A", fontWeight: "bold" }}>
                {" "}
                Fransunisoft{" "}
              </span>
              integrates strategy, technology, learning, community, and
              industries under one ecosystem (FSX).
              <br />
              We deliver holistic solutions on short and long-term execution,
              focusing on outcomes for individuals, communities, businesses, and
              industries.
            </p>

            <h3>How We Deliver Results</h3>
            <ul className={styles.fsxList}>
              <li>
                Integrated ecosystem – strategy, tech, training, and community
                partnerships with continuous support
              </li>
              <li>End-to-end execution with hands-on implementation</li>
              <li>Long-term partnerships with continuous support</li>
              <li>Outcome-driven execution with measurable value</li>
              <li>Deep African market expertise with global standards</li>
            </ul>
            <a href="/about" className={styles.fsxButton}>
              Learn More About Our Journey
            </a>
          </div>

          <div className={styles.fsxImage}>
            <Image
              src="/F_What.png"
              alt="FSX Advantage"
              width={700}
              height={700}
              
              
            />
          </div>
        </div>
      {/*   </section> */}

{/*     <section data-aos="fade-up"> */}
        <div className={styles.fsxStats}>
          <div className={styles.stat}>
            <h2 className={styles.countBlock}>
              <CountUp
                end={6}
                duration={2}
                separator=","
                enableScrollSpy
                className={styles.plus}
              />
              +
            </h2>
            <h6 className={styles.label}>Startups Built</h6>
          </div>

          <div className={styles.stat}>
            < h2 className={styles.countBlock}>
              <CountUp
                end={300}
                duration={2.5}
                separator=","
                enableScrollSpy
                className={styles.plus}
              />
              +
            </h2>
            <h6 className={styles.label}>Talents Trained</h6>
          </div>

         <div className={styles.stat}>
  <h2 className={styles.countBlock}>
    ₦15M
  </h2>
  <h6 className={styles.label}>Capital Raised</h6>
</div>

<div className={styles.stat}>
  <h2 className={styles.countBlock}>
    <CountUp
      end={3}
      duration={2}
      separator=","
      enableScrollSpy
      className={styles.plus}
    />
    +
  </h2>
  <h6 className={styles.label}>Active Mentors</h6>
</div>

        </div>
      
      </section>

      {/* === BRAND FAMILY SECTION === */}
    
<section id="brand-family">
  <div
        className={styles.brandFamily}
        data-aos="fade-up"
      >
        <div className={styles.intro}>
          <h2 className={styles.ecosystemBanner}>Our Ecosystem Services</h2>
        </div>
        <div className="sectionHead">
          <h2>How Fransunisoft Works</h2>

          <h6>
            Fransunisoft is more than one company <br />
            it’s a family of solutions tailored to help businesses and
            individuals succeed.
          </h6>
        </div>
         </div>

        <div className="grid">

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>FSX Academy</h3>
            <p className={styles.cardTagline}>For Talents - Learn. Build. Earn. Own.</p>
            <p >
             We work with developers, designers, product managers, 
             and growth talents who want real startup experience.
            </p>
              <ul className={styles.fsxListb}>
              <li>
             Hands-on work on real startups
              </li>
              <li>Mentorship from industry leaders</li>
              <li>Pathways to jobs, founding roles, or equity</li>
              <li>Exposure to investors and startup teams</li>
             
            </ul>
            <Link href="/academy" className="button2">
              Learn More
            </Link>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>FSX Labs</h3>
            <p className={styles.cardTagline}>
             For Startups - From idea to investable MVP.
            </p>
            <p >
             We work with  Idea-Stage & Pre-Funding Startups, Funded Startups & SMEs
            </p>
             <ul className={styles.fsxListb}>
              <li>
           MVP or product built fast, Access to vetted talent teams 
              </li>
              <li>Co-ownership and long-term partnership</li>
              <li>Fast, disciplined product execution, Pre-trained, startup-ready taelnt</li>
              <li>Optional equity partnership </li>
             
            </ul>
            <Link href="/labs" className="button2">
              Learn More
            </Link>
          </div>

          <div className= {styles.card}>
            <h3 className={styles.cardTitle}>FSX Consulting</h3>
            <p className={styles.cardTagline}>
              <em></em> The Engine - Structure that makes everything work.
            </p>
            <p >
              We provide the infrastructure that ensures execution and ownership alignment
            </p>

             <ul className={styles.fsxListb}>
              <li>
           Talent recruitment & management
              </li>
              <li>MVP scoping & delivery governance</li>
              <li>IP ownership during build phase</li>
              <li>Equity structuring & advisory, Fundraising & post-MVP support </li>
             
            </ul>
            <Link href="/consulting" className="button2">
              Learn More
            </Link>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>FSX Connect</h3>
            <p className={styles.cardTagline}>
              Mentors & Community.
            </p>
            <p >
              Mentors at Fransunisoft don’t just advise, they help build companies
            </p>
             <ul className={styles.fsxListb}>
              <li>
Product, engineering & architecture reviews
              </li>
              <li>Founder mindset coaching</li>
              <li>Investor readiness & GTM guidance</li>
              <li>Exposure to investors and startup teams
 </li>
             
            </ul>
            <Link href="/connect" className="button2">
             Explore FSXConnect
            </Link>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>FSX Tech</h3>
            <p className={styles.cardTagline}>Engineering Enablement.</p>
            <p  >
            Infrastructure that keeps startups running. This 
            ensures every product built within FSX is stable, secure, and ready to scale, not just fast.
            </p>
             <ul className={styles.fsxListb}>
              <li>
         Product, engineering & architecture reviews
              </li>
              <li>Founder mindset coaching</li>
              <li>Investor readiness & GTM guidance </li>
              
            </ul>
            <Link href="/tech" className="button2">
             Explore FSX Tech
            </Link>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>FSX Events</h3>
            <p className={styles.cardTagline}>Exposure & Ecosystem Growth.</p>
            <p >
             Where products meet people, partners, and capital.
              Ensures that startups don’t just get built, they get seen, tested, and connected.
            </p>
             <ul className={styles.fsxListb}>
              <li>
         Demo days & product showcases
              </li>
              <li>Founder, talent & ecosystem programs
</li>
              <li>Industry partnerships & community events
</li>
              <li>Visibility for FSX-built startups and products
 </li>
             
            </ul>
            <Link href="/events" className="button2">
            Explore FSX Events
            </Link>
          </div>
        </div>
            
      </section>


  {/* MODEL WORKS */} 
<section > 
  <div className="sectionHead">
  <h2 >Why This Model Works</h2>
  <h6 >Built for real execution, shared ownership, and long-term value creation</h6>
   <div className={styles.gridw}> 
    {/* Talents Section */} 
   
    <div className="wrapperw" > 
    <h3 className={styles.cardTitlew}>For Talents</h3>
      <Image src="/young-manager.png" 
       alt="For Talents" 
       width={400} 
       height={280} 
       className={styles.imagew} /> 
        <ul className={styles.modelList}>
         <li>Real products </li>
       <li>Real equity</li>
        <li>Real career outcomes</li>
        </ul>
        
        </div> {/* Startups Section */} 
        <div >
                       <h3 className={styles.cardTitlew}>For Startups</h3>
           <Image src="/corporate-team.png" 
           alt="For Startup" 
           width={400} 
           height={280} 
           className={styles.imagew} /> 
        <ul className={styles.modelList}>
         <li>MVPs without burning cash</li>
             <li>Ready-made teams</li>
             <li>Reduced hiring risk</li>
        </ul>
             </div> {/* Investors Section */} 
             <div >
                       <h3 className={styles.cardTitlew}>For Investors</h3>  
              <Image src="/startup-team.png" 
              alt="For Investor" 
              width={400} 
              height={280} 
              className={styles.imagew} /> 
            
             <ul className={styles.modelList}>
         <li>De-risked ventures</li> 
               <li>Execution-first teams</li>
                <li>African problems, validated solutions</li>
        </ul>
               </div> 
               </div> 
               </div>
               </section>




    

{/* === PARTNERS === */}
      <section className={styles.partnersSection} data-aos="fade-up">
        <div className={styles.partnersIntro}>
          <h2 className={styles.partnersHeading}>Our Partners</h2>

          <div className="sectionHead">
            <h2 className={styles.partnersSubText}>
              Join Brands and Organisations <br /> That Partner With Us
            </h2>
          </div>
        </div>

        <div className={styles.logoScroller}>
          <div className={styles.logoTrack}>
            <div className={styles.logoItem}>
              <Image
                src="/F_3MTT Landscape_Logo.png"
                alt="3MTT"
                width={200}
                height={60}
              />
            </div>
            <div className={styles.logoItem}>
              <Image
                src="/F_trevauty 1.png"
                alt="Travauty"
                width={200}
                height={60}
              />
            </div>
            <div className={styles.logoItem}>
              <Image src="/F_GDG.png" 
              alt="GDG" 
              width={200} 
              height={150} />
            </div>
            <div className={styles.logoItem}>
              <Image
                src="/F_andela3.png"
                alt="Andela"
                width={200}
                height={100}
              />
            </div>
            <div className={styles.logoItem}>
              <Image
                src="/F_Subtract 2.png"
                alt="Subtract"
                width={100}
                height={100}
              />
            </div>
                <div className={styles.logoItem}>
              <Image
                src="/F_DBN.png"
                alt="DBN"
                width={100}
                height={100}
              />
            </div>

            <div className={styles.logoItem}>
              <Image
                src="/F_3MTT Landscape_Logo.png"
                alt="3MTT"
                width={200}
                height={60}
              />
            </div>
            <div className={styles.logoItem}>
              <Image
                src="/F_trevauty 1.png"
                alt="Travauty"
                width={200}
                height={60}
              />
            </div>
            <div className={styles.logoItem}>
              <Image src="/F_GDG.png" 
              alt="GDG" 
              width={200} 
              height={150} />
            </div>
            <div className={styles.logoItem}>
              <Image
                src="/F_andela3.png"
                alt="Andela"
                width={200}
                height={100}
              />
            </div>
            <div className={styles.logoItem}>
              <Image
                src="/F_Subtract 2.png"
                alt="Subtract"
                width={100}
                height={100}
              />
            </div>
              <div className={styles.logoItem}>
              <Image
                src="/F_DBN.png"
                alt="DBN"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
