"use client";
import styles from "../styles/shafrc.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

const data = [
  {
    title: "Innovation Hub - Nigeria, Africa",
    text: "FSX Labs operates as an innovation hub where African ideas are built for global relevance.",
    img: "/lab2.1.png",
  },
  {
    title: "Research and Development Africa",
    text: "We explore emerging technologies and apply them to real African problems.",
    img: "/lab2.2.png",
  },
  {
    title: "Prototype Testing",
    text: "Before launch, we test hard — so your product performs in the real world.",
    img: "/lab2.3.png",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ShapingAfrica = () => {
  return (
    <section>
      <div>
        <motion.div
          className={styles.heading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <div className="sectionHead">
            <h2>Innovation With Purpose</h2>
            <h6>
              From concept to prototype to market-ready product, FSX Labs is your partner in
innovation. Together, we’ll engineer the tools that shape Africa.
            </h6>
          </div>
        </motion.div>

        <div className={styles.grid}>
          {data.map((item, index) => (
            <div
              key={index}
              className={styles.card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className={styles.image}>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={500}
                  height={300}
                  className={styles.img}
                />
              </div>
              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShapingAfrica;
