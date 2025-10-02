'use client';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './component.module.css'; // CSS Module

const processSteps = [
  {
    title: "Research & Discovery",
    description: "We dive deep into your brand, objectives, and audience to develop a comprehensive event strategy that aligns with your goals.",
    imageSrc: "/sec3.1.jpg" 
  },
  {
    title: "Creative Development",
    description: "Our creative team develops innovative concepts that bring your vision to life while ensuring maximum impact and engagement.",
    imageSrc: "/sec3.2.png"
  },
  {
    title: "Strategic Planning",
    description: "Detailed planning phase where we map out every aspect of your event, from logistics to creative elements and tech integration.",
    imageSrc: "/sec3.3.jpg"
  },
  {
    title: "Production Setup",
    description: "Our experienced production team handles all technical aspects, vendor coordination, and venue preparation with precision.",
    imageSrc: "/sec3.4.jpg" 
  },
  {
    title: "Event Execution",
    description: "Flawless execution of your event with real-time coordination, problem-solving, and ensuring everything runs according to plan.",
    imageSrc: "/sec3.5.jpg" 
  },
  {
    title: "Performance Analysis",
    description: "Comprehensive post-event analysis, reporting, and recommendations to measure success and improve future events.",
    imageSrc: "/sec3.6.jpg" 
  }
];

const OurProcess = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const card = carousel.querySelector(`.${styles.card}`);
    if (!card) return;

    const cardWidth = card.offsetWidth + 6; // includes margin-right
    const index = Math.round(carousel.scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.addEventListener('scroll', handleScroll);
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Our Process</h2>
        <p className={styles.subtitle}>
          A proven methodology that ensures every event exceeds expectations
        </p>
      </div>

      <div className={styles.carousel} ref={carouselRef}>
        {processSteps.map((step, index) => (
          <div className={styles.card} key={index}>
            {step.imageSrc && (
              <Image
                src={step.imageSrc}
                alt={step.title}
                width={384}
                height={163}
                className={styles.cardImage}
              />
            )}
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.carouselIndicators}>
        {processSteps.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === activeIndex ? styles.active : ''}`}
          />
        ))}
      </div>
    </section>
  );
};

export default OurProcess;
