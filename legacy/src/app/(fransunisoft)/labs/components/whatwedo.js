"use client";
import Image from "next/image";
import styles from "../styles/WhatWeDo.module.css";

const services = [
  {
    title: "Software Development",
    description: "Scalable web and mobile products built for real users and growth.",
    icon: "/whatwe2.1.png",
  },
  {
    title: "AI & Intelligent Tools",
    description: "Data-driven solutions that automate decisions and unlock insights.",
    icon: "/whatwe2.2.png",
  },
  {
    title: "Automation Systems",
    description: "Process automation to save time, reduce cost, and increase efficiency.",
    icon: "/whatwe2.3.png",
  },
  {
    title: " Ecosystem Products",
    description: "Marketplaces, SaaS platforms, and digital ecosystems designed to scale.",
    icon: "/whatwe11.png",
  },
  {
    title: "Design Thinking & UX",
    description: "Human-Centered approach from ideation to prototype.",
    icon: "/whatwe22.png",
  },
  {
    title: "DevSecOps",
    description:
      "Secure, reliable deployment with performance and safety built in.",
    icon: "/whatwe2.6.png",
  },
];

export default function WhatWeDo() {
  return (
    <section>
      <div id="whatwedo" className={styles.container}>
        <div className="sectionHead">
          <h2>What We Do at FSX Labs</h2>
          <h6>
            Startup & Product Building
          </h6>
        </div>

        <div className="grid">
          {services.map((service, index) => (
            <div key={index} className="card2">
              <Image
                src={service.icon}
                alt={service.title}
                width={64}
                height={64}
                className={styles.icon}
              />
              <h3>{service.title}</h3>
              <p >{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
