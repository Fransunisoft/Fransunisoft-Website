import Image from "next/image";
import styles from "../root-builders.module.css";
export default function Modal() {
  return (
    <div className={styles.modalDiv}>
      <section className={styles.modalContainer}>
        <button className={styles.fsxAcademyInitBtn}>
          Fransunisoft - FSX Academy Initiative
        </button>
        <h1>
          <span>Build</span> Real Products.
        </h1>
        <h1>Gain Real Experience. with Real team</h1>
        <Image
          src="/shade.png"
          alt="aaaaaa"
          width={400}
          height={30}
          className={styles.modalImg}
        />
        <h5 className="">
          Root Builders is a hands-on program and summit where talents solve
          real problems by building sustainable products with real teams.
        </h5>

        <button className={styles.joinBtn}>Join Root builders</button>
        <div>
          <Image
          src="/curved-arrow.png"
          alt="aaaaaa"
          width={128}
          height={128}
          className={styles.curvedArrowImg}
        />

        <Image
          src="/graphic-designer.png"
          alt="aaaaaa"
          width={60}
          height={60}
          className={styles.graphicDesignerImg}
        />

        <Image
          src="/code.png"
          alt="aaaaaa"
          width={40}
          height={40}
          className={styles.codeImg}
        />
        </div>
      </section>
    </div>
  );
}
