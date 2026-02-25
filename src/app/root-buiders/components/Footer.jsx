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
              <a href="https://www.facebook.com/fransunisoft" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Image
              src="/Facebook-f.png"
              alt="aaaaaa"
              width={40}
              height={40}
              className={styles.iconImg}
            />
            </a>
            </div>
            <div>
             <a href="https://twitter.com/fransunisoft" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Image
              src="/YouTube-X.png"
              alt="aaaaaa"
              width={40}
              height={40}
              className={styles.iconImg}
            />
            </a>
         
          </div>
          <div>
            <a href="https://www.instagram.com/fransunisoft" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Image
              src="/Instagram-f.png"
              alt="aaaaaa"
              width={40}
              height={40}
              className={styles.iconImg}
            />
            </a>
           
          </div>
          <div>
            <a href="https://www.linkedin.com/company/fransunisoft/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
               <Image
              src="/LinkedInf.png"
              alt="aaaaaa"
              width={40}
              height={40}
              className={styles.iconImg}
            />
            </a>
           
          </div>
          <div>
             <a href="https://www.youtube.com/@fransunisoft" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
               <Image
              src="/YouTube-1.png"
              alt="aaaaaa"
              width={40}
              height={40}
              className={styles.iconImg}
            />
            </a>
           
          </div>
          <div>
             <a href="https://www.tiktok.com/@fransunisoft" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
               <Image
              src="/YouTube-tik.png"
              alt="aaaaaa"
              width={40}
                height={40}
              className={styles.iconImg}
            />
            </a>
           
          </div>
        </section>
        <button className={styles.exploreBtn}><a href="/" >Explore Fransunisoft </a></button>
      </section>
      <div className={styles.copy}>
        &copy;  {new Date().getFullYear()} Root Builders by Fransunisoft. All Rights Reserved.
      </div>
    </div>
  );
}
