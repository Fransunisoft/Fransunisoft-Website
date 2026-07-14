import Image from "next/image";
import styles from "../root-builders.module.css"

export default function ApplicationProcess() {
  const applicationBtnText = [
    {
      title: "Apply Online",
      color: "#90AFD1",
      imgSrc: "/mem_arrows.png",
    },
    {
      title: "Application Review",
      color: "#98D7D3",
      imgSrc: "/mem_arrows.png",
    },
    {
      title: "Selection & Onboarding",
      color: "#FFBBA2",
    },
  ];


  return (
    <div className={styles.applicationCon}>
      <section className={styles.ApplicationContainer}>
        <h2>Application Process</h2>
        <div className={styles.applicationbody}>
          {applicationBtnText.map((text,index) => {
            return(
            <div key={index} className={styles.applicationList}>
              <button style={{backgroundColor: text.color, color: "black"}} >{text.title}</button>
              {text.imgSrc && <Image
                src={text.imgSrc}
                alt="appprocess arrow"
                width={50}
                height={50}
                className={styles.applicationImg1}
              />}
             </div>
          )
      
          })}
      
        </div>
      </section>
    </div>
  );
}
