"use client";
import styles from "./construction.module.css";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className={styles.body}>
      <div>
        <Image
          src="/cuate.png"
          alt="under constructionimage"
          width={380}
          height={300}
          className={styles.responsiveImage}
        />
      </div>
      <div className={styles.notFoundBody}>
        <h3>Sorry! Page not found</h3>
        <p>The page you are looking for is currently under construction <br /> pls check back soon</p>
      </div>
      <Link href="/">
        <button className={styles.backToHomeBtn}>Back To Home</button>
      </Link>
    </div>
  );
};

export default NotFound;

