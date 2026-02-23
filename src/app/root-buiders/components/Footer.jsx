import Image from "next/image";
import styles from "../root-builders.module.css";
export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <section className={styles.footerCon}>
        <button className={styles.parentOrgBtn}>Our Parent Organization</button>
        <div className={styles.poweredContainer}>
          <h2>Powered by </h2>
          <Image
            src="/Fransunisoft_Logo_footer.png"
            alt="aaaaaa"
            width={292}
            height={50}
            className={styles.fransunisoftImg}
          />
        </div>
        <p>
          Root Builders is an initiative of Fransunisoft, a venture studio
          building the next generation of African tech talent and products.
          Through FSX Academy and our portfolio of ventures, we're creating
          opportunities for builders across Africa.
        </p>
        <p className={styles.followSocialText}>
          Follow us on social media to stay updated on opportunities, events,
          and tech insights.
        </p>
        <section className={styles.icon}>
          <div>
            <Image
              src="/Facebook-f.png"
              alt="aaaaaa"
              width={40}
              height={40}
              className={styles.iconImg}
            />
          </div>
          <div>
            <Image
              src="/YouTube-X.png"
              alt="aaaaaa"
              width={40}
              height={40}
              className={styles.iconImg}
            />
          </div>
          <div>
            <Image
              src="/Instagram-f.png"
              alt="aaaaaa"
              width={40}
              height={40}
              className={styles.iconImg}
            />
          </div>
          <div>
            <Image
              src="/LinkedInf.png"
              alt="aaaaaa"
              width={40}
              height={40}
              className={styles.iconImg}
            />
          </div>
          <div>
            <Image
              src="/YouTube-1.png"
              alt="aaaaaa"
              width={40}
              height={40}
              className={styles.iconImg}
            />
          </div>
          <div>
            <Image
              src="/YouTube-tik.png"
              alt="aaaaaa"
              width={40}
                height={40}
              className={styles.iconImg}
            />
          </div>
        </section>
        <button className={styles.exploreBtn}>Explore Fransunisoft</button>
      </section>
      <div className={styles.copy}>
        &copy; 2026 Root Builders by Fransunisoft. All Rights Reserved.
      </div>
    </div>
  );
}
