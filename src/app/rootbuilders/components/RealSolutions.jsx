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
        <button>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSc07jkQrxzrXlAMuykYnvouWHBQfSv3Y8I1knfbfU2pfpSkXA/viewform?usp=preview" target="_blank">Join Root Builders </a>
          </button>
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
