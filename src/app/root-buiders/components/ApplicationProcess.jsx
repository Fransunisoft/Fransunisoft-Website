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
      // imgSrc:
    },
  ];

  // const whyRootMap = whyRootBuilders.map(root => {
  //     if(root) return root;
  // })
  return (
    <div className={styles.applicationCon}>
      <section className={styles.ApplicationContainer}>
        <h2>Application Process</h2>
        <div className={styles.applicationbody}>
          {applicationBtnText.map((text,index) => {
            return(
            // <div key={index} className={styles.applicationList}>
              <button >{text.title}</button>
            // </div>
          )
      
          })}
          <div>
               <Image
                src="/mem_arrows.png"
                alt="aaaaaa"
                width={50}
                height={50}
                className={styles.applicationImg1}
              />
              <Image
                src="/mem_arrows.png"
                alt="aaaaaa"
                width={50}
                height={50}
                className={styles.applicationImg2}
              />
          </div>
      
        </div>
      </section>
    </div>
  );
}
