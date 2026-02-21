import Image from "next/image";
import styles from "../root-builders.module.css"
export default function RealSolutions() {
  return (
    <div className={styles.workOnContainer}>
      <div>
        <h3 className={styles.workOnTitle}>Ready to Build Real Solutions?</h3>
        <p className={styles.workOnSubTitle}>Join Root Builders and become part of Africa's next generation of problem-solvers.</p>
        <button>Join Root Builders</button>
      </div>
      <Image
              src="/academy-what-we-do-icon.png"
              alt="aaaaaa"
              width={320}
              height={199.13}
              className={styles.whyRootImg}
            />
    </div>
  );
}
