"use client";

import styles from "./not-found.module.css";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className={styles.body}>
      <div>
        <Image
          src="/frans404.png"
          alt="error 404 image"
          width={380}
          height={300}
          className={styles.responsiveImage}
        />
      </div>
      <div className={styles.notFoundBody}>
        <h3>Sorry! Page not found</h3>
        <p>The page you are looking for does not exist or has been moved</p>
      </div>
      <Link href="/">
        <button className={styles.backToHomeBtn}>Back To Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
