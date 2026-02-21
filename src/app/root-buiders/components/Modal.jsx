import Image from 'next/image';
import styles from "../root-builders.module.css"
export default function Modal() {
  return (
    <section className={styles.modalContainer}>
      <button className={styles.fsxAcademyInitBtn}>
        Fransunisoft - FSX Academy Initiative
      </button>
      <h2><span>Build</span> Real Products.</h2>
      <h2>Gain Real Experience. with Real team</h2>
        <Image
              src="/academy-what-we-do-icon.png"
              alt="aaaaaa"
              width={320}
              height={199.13}
              className={styles.whyRootImg}
            />
        <h4 className="">Root Builders is a hands-on program and summit where talents solve real problems by building sustainable products with real teams.</h4>

        <button>Join Root builders</button>
    </section>
  );
}
