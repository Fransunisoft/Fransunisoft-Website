import Image from "next/image";
import styles from "../root-builders.module.css";
export default function WhoCanApply() {
  const whoCanText = [
    {
      title: "All Experience Levels",
      subTitle: "Beginners, intermediate, and advanced builders are welcome",
    },
     {
      title: "Career Switchers",
      subTitle: "Transitioning into tech with practical experience.",
    },
    {
      title: "Students & NYSC",
      subTitle: "Build while studying or during service year.",
    },
    {
      title: "Working Professionals",
      subTitle: "Upskilling while maintaining your current role",
    },
   
  ];

  const whoCanDetailsText = [
    {
      imgSrc: "/age.png",
      title: "Age",
      subTitle: "18–35 years",
      text: "Exceptional students (16–17) with strong skills and maturity (with consent where required",
    },
    {
      imgSrc: "/mapping.png",
      title: "Location",
      subTitle: "Africa-Focused",
      text: "Root Builders focuses on Africa-centric problems, with Nigeria as a key starting point.",
    },
    {
      imgSrc: "/commitment.png",
      title: "Commitment",
      text: "Ready to dedicate 20+ hours per week for 3–6 months, building real products with real teams and delivering real results.",
    },
  ];

  // const whyRootMap = whyRootBuilders.map(root => {
  //     if(root) return root;
  // })
  return (
    <div  className={styles.whoCanApplyCon}>
      <section className={styles.whoCanApplyContainer}>
        <h2 className={styles.whoCanTitle}>Who Can Apply?</h2>
        <p className={styles.whoCanSubTitle}>
          Root Builders is open to diverse talents across Africa
        </p>
        <div className={styles.whoCanBody}>
          <div className={styles.personality}>
            <div className={styles.personalityBody}>
              {whoCanText.map((text, index) => {
                return (
                  <div key={index} className={styles.personalityConBody}>
                    <h5>{text.title}</h5>
                    <p>{text.subTitle}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            {whoCanDetailsText.map((text,index) => {
              return (
                <div className={styles.whoCanDetails} key={index}>
                  <Image
                    src={text.imgSrc}
                    alt="aaaaaa"
                    width={50}
                    height={50}
                    className={styles.whoCanApplyImg}
                  />
                  <div>
                    <h6>{text.title}</h6>
                    {text.subTitle && <p>{text.subTitle}</p>}
                    <p>{text.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
