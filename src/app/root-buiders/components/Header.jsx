import styles from "../root-builders.module.css";
export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <h2 className={styles.titleHeaders}>Root Builders</h2>
      <div className={styles.navBarContainer}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>Why Root Builders</li>
          <li className={styles.navItem}>Tracks</li>
          <li className={styles.navItem}>FAQs</li>
        </ul>
        <button className={styles.joinRootBtn}>Join Root Builders</button>
      </div>
    </div>
  );
}
