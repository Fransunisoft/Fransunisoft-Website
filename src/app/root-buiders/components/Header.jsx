import styles from "../root-builders.module.css"
export default function Header(){
    return(
        <header className={styles.headerContainer}>
                        <h1 className={styles.titleHeaders}>Root Builders</h1>
                        <section className={styles.navBarContainer}>
                            <ul className={styles.navList}>
                                <li className={styles.navItem}>Why Root Builders</li>
                                <li className={styles.navItem}>Tracks</li>
                                <li className={styles.navItem}>FAQs</li>
                            </ul>
                            <button className={styles.joinRootBtn}>Join Root Builders</button>
                        </section>
                    </header>
    )
}