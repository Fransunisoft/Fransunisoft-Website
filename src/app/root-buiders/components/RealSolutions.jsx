import Image from "next/image";
import styles from "../root-builders.module.css";
export default function RealSolutions() {
  return (
    <section className={styles.realSolutionContainer}>
      <div className={styles.realSolutionBody}>
        <h2 className={styles.realSolutionTitle}>Ready to Build Real Solutions?</h2>
        <p className={styles.realSolutionSubTitle}>
          Join Root Builders and become part of Africa's next generation of
          problem-solvers.
        </p>
        <button>Join Root Builders</button>
      </div>
      <Image
        src="/build_businessman-working.png"
        alt="aaaaaa"
        width={607}
        height={607}
        className={styles.realSolutionImg}
      />
    </section>
  );
}
