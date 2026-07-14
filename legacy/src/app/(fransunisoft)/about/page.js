"use client";

import styles from "./about.module.css";
import Image from "next/image";
import AOS from "aos";
import { useEffect } from "react";

const values = [
  {
    title: "Innovation",
    description: "We design bold solutions to real problems",
    icon: "/Core value section Icon.png",
  },
  {
    title: "Execution Excellence",
    description: "We value results over hype",
    icon: "/Core value section Icon (1).png",
  },
  {
    title: "Integrity",
    description: "We build with honesty, fairness, and transparency",
    icon: "/Core value section Icon (2).png",
  },
  {
    title: "Ownership",
    description: "We believe builders should share in the value they create",
    icon: "/Core value section Icon (3).png",
  },
  {
    title: "Community",
    description: "We grow through collaboration and mentorship",
    icon: "/Core value section Icon (4).png",
  },
  {
    title: "Growth",
    description:
      "We empower people, businesses, and communities to scale and thrive",
    icon: "/Core value section Icon (5).png",
  },
];

export default function AboutPage() {
  useEffect(() => {
    setTimeout(() => {
      AOS.init({ duration: 1000, once: true });
    }, 100);
  }, []);

  return (
    <main className={styles.aboutMain}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.imageWrapper}>
          <Image
            src="/About_hands.png"
            alt="FSX Hero Background"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.overlay}>
            <div className="sectionHead">
              <h1>About Fransunisoft (FSX)</h1>

              <div className={styles.container}>
                <div className={styles.sections}>
                  <p className={styles.item}>Building startups </p>
                  <p className={styles.dot}>●</p>
                  <p className={styles.item}>Developing talent</p>
                  <span className={styles.dot}>●</span>
                  <p className={styles.item}>Co-owning Africa's future</p>
                </div>
              </div>
              <p className={styles.heroDescription}>
                Fransunisoft is a Venture & Talent Studio focused on building
                investable startups by pairing high potential African talent
                with real problems structured execution and shared ownership
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Story, Vision, Mission Section */}
      <section data-aos="fade-up">
        <div className={styles.svmSection}>
          <div className={styles.textColumn}>
            <div className="sectionHeadm">
              <h2>Our Story</h2>
              <p>
                Fransunisoft was founded on a simple but powerful belief: Africa
                doesn’t just need more technology, it needs more builders,
                founders, and execution-first teams. Across Nigeria and Africa,
                brilliant talents struggle to gain real startup experience,
                while founders struggle to build MVPs without burning capital or
                assembling reliable teams. We built Fransunisoft to solve both
                problems at once. <br />
                <br />
                By combining talent development, venture building, and MVP
                execution, we created a system where:
              </p>
              <ul>
                <li>Talents learn by building real startups</li>
                <li>Founders get execution without prohibitive costs</li>
                <li>Products are built with ownership, not just invoices</li>
              </ul>{" "}
              <br />
              From humble beginnings, Fransunisoft has grown into a venture
              studio powering startups, talents, and innovation across Africa.
            </div>

            <div className="sectionHeadm">
              <h2>Our Vision</h2>
              <p>
                To become Africa’s leading venture and talent studio, building
                globally competitive startups and empowering the next generation
                of African founders and builders.
              </p>
            </div>

            <div className="sectionHeadm">
              <h2>Our Mission</h2>
              <p>
                To build startups by developing high-potential talent,
                engineering MVPs, and co-owning scalable solutions that solve
                real African problems.
              </p>
            </div>
          </div>

          <div className={styles.imageColumn}>
            <Image
              src="/mission_vision.png"
              alt="FSX Story, Vision, Mission"
              width={600}
              height={480}
              className={styles.responsiveImage}
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="" data-aos="fade-up">
        <div className={styles.coreSection}>
          <h2>Our Core Values</h2>
        </div>
        <div className={styles.grid}>
          {values.map((value, index) => (
            <div key={index} className="card2">
              <div className={styles.icon}>
                <Image
                  src={value.icon}
                  alt={`${value.title} icon`}
                  width={60}
                  height={60}
                />
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CEO Section */}
      <section className="" data-aos="fade-up ">
        <div className={styles.ceoSection}>
          <h2>Meet Our Founder & CEO</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <Image
              src="/CEO Profile_Photo.png"
              alt="Oluwaseyi Francis Ayodele"
              width={643}
              height={613}
              className={styles.ceoImage}
            />
          </div>

          <div className={styles.bio}>
            <p>
              <strong>Oluwaseyi Francis Ayodele</strong> is a software engineer,
              community builder, and venture studio founder passionate about
              creating real opportunities for African talent.{" "}
            </p>{" "}
            <br />
            {/*             <p>
              
Seyi has trained and mentored thousands of young talents, facilitated programs that have engaged over 150,000 youths across Nigeria and Africa, and supported startups from idea to launch. 
His leadership spans community-driven initiatives, corporate collaborations, and digital transformation strategies that enable organizations to scale smarter and faster.
            </p> <br/> */}
            <p>
              With over a decade of experience across software development,
              fintech, consulting, and ecosystem building, he has:
            </p>
            <ul>
              <li> Mentored thousands of young talents</li>
              <li>Led programs engaging over 150,000 youths</li>
              <li>Supported startups from idea to launch </li>
            </ul>
            <br />
            <p>
              As Founder & CEO of Fransunisoft, he leads the FSX ecosystem in
              building startups, developing talent, and creating sustainable
              impact across Africa.
            </p>
            {/* Social Icons */}
            <div className={styles.socialIcons}>
              <a
                href="https://x.com/seyifayodele"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Image
                  src="/X-Twitter.png"
                  alt="Twitter"
                  width={40}
                  height={40}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/oluwaseyiayodele/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Image
                  src="/Linkedin.png"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                />
              </a>
              <a
                href="https://www.instagram.com/seyifayodele/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Image
                  src="/Instagram.png"
                  alt="Instagram"
                  width={40}
                  height={40}
                />
              </a>
              {/*  <a href="https://www.youtube.com/@fransunisoft" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Image src="/Youtube.png" alt="YouTube" width={40} height={40} />
            </a> */}
              {/* <a href="https://www.tiktok.com/@fransunisoft" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <Image src="/tiktok.png" alt="TikTok" width={40} height={40} />
            </a> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
