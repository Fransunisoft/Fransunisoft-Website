"use client";

import Image from "next/image";
import styles from "../styles/HowWeDo.module.css";

const services = [
  {
    title: "Discovery & Research",
    description: "We validate the problem, users, and opportunity.",
    icon: "/hw11.png",
  },
  {
    title: "Ideation & Design",
    description: "User journeys, wireframes, and MVP definition.",
    icon: "/hw1.png",
  },
  {
    title: " MVP Development",
    description: "Fast, clean builds using modern frameworks",
    icon: "/hw2.png",
  },
  {
    title: "Testing & Iteration",
    description: "Prototype testing, feedback loops, and refinement.",
    icon: "/hw4.png",
  },
  {
    title: "Launch & Scale",
    description: "Deploy, onboard users, and prepare for growth or funding.",
    icon: "/hw5.png",
  },
  {
    title: "Ongoing Support",
    description: "Product improvement, scaling, and post-MVP execution",
    icon: "/hw6.png",
  },
];

export default function HowWeDo() {
  return (
    <section>
      <div className="sectionHead">
        <h2>From Idea to Market — Our Build Process</h2>
        <h6>
          We follow a venture-first, UX-driven process designed for startups.
        </h6>
      </div>
      <div>
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
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
