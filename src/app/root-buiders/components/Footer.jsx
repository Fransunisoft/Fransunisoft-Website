import Image from "next/image";
import styles from "../root-builders.module.css"
export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <button>Our Parent Organization</button>
      <div>
        <h3>Powered by </h3>
       <Image
              src="/academy-what-we-do-icon.png"
              alt="aaaaaa"
              width={320}
              height={199.13}
              className={styles.whyRootImg}
            />
      </div>
      <p>
        Root Builders is an initiative of Fransunisoft, a venture studio
        building the next generation of African tech talent and products.
        Through FSX Academy and our portfolio of ventures, we're creating
        opportunities for builders across Africa.
      </p>
      <p>
        Follow us on social media to stay updated on opportunities, events, and
        tech insights.
      </p>
      <section className={styles.icon}>
        <div>
         <Image
              src="/academy-what-we-do-icon.png"
              alt="aaaaaa"
              width={320}
              height={199.13}
              className={styles.whyRootImg}
            />
        </div>
        <div>
          <Image
              src="/academy-what-we-do-icon.png"
              alt="aaaaaa"
              width={320}
              height={199.13}
              className={styles.whyRootImg}
            />
        </div>
        <div>
          <Image
              src="/academy-what-we-do-icon.png"
              alt="aaaaaa"
              width={320}
              height={199.13}
              className={styles.whyRootImg}
            />
        </div>
        <div>
         <Image
              src="/academy-what-we-do-icon.png"
              alt="aaaaaa"
              width={320}
              height={199.13}
              className={styles.whyRootImg}
            />
        </div>
        <div>
          <Image
              src="/academy-what-we-do-icon.png"
              alt="aaaaaa"
              width={320}
              height={199.13}
              className={styles.whyRootImg}
            />
        </div>
        <div>
          <Image
              src="/academy-what-we-do-icon.png"
              alt="aaaaaa"
              width={320}
              height={199.13}
              className={styles.whyRootImg}
            />
        </div>
      </section>

      <button>Explore Fransunisoft</button>
      <div>
        &copy; 2026 Root Builders by Fransunisoft. All Rights Reserved.
      </div>
    </div>
  );
}
