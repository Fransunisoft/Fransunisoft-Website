"use client";
import Image from "next/image";
import styles from "../styles/WhoBenefits.module.css";

// Data array for the benefit cards
const benefitCards = [
  {
    title: "Founders & Early-Stage Startups",
    description: 
      "Have an idea but no technical team? We help you go from idea → MVP → traction.",
    image: "/lab3.1.png",
  },
  {
    title: "Funded Startups & SMEs",
    description:
      "We help bring your ideas to live and walk the journey with you",
    image: "/lab3.2.png",
  },
  {
    title: "Enterprises & Institution",
    description:
      "We help organizations innovate, prototype and modernize through custom digital products",
    image: "/lab3.3.png",
  },

];


const WhoBenefits = () => {
  return (
    <section>
      <div className={styles.section}>
        <div className={styles.wrapper}>
          <div className="sectionHead">
            <h2>Who Benefits</h2>

            <h6>
              FSX Labs provides businesses and institutions with the tools they
              need to innovate, automate, grow and support
            </h6>
          </div>

          <div className="grid">
            {benefitCards.map((card, index) => (
              <div
                className="card2"
                key={index}
                
                viewport={{ once: true }}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={card.image}
                    alt={card.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoBenefits;
