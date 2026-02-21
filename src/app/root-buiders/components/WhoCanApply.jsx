import Image from "next/image";
import styles from "../root-builders.module.css"
export default function WhoCanApply() {
  const whoCanText = [
    {
      title: "All Experience Levels",
      subTitle: "Beginners, intermediate, and advanced builders are welcome",
    },
    {
      title: "Students & NYSC",
      subTitle: "Build while studying or during service year.",
    },
    {
      title: "Working Professionals",
      subTitle: "Upskilling while maintaining your current role",
    },
    {
      title: "Career Switchers",
      subTitle: "Transitioning into tech with practical experience.",
    },
  ];

  const whoCanDetailsText = [
    {
      imgSrc: "",
      title: "Age",
      subTitle: "18–35 years",
      text: "Exceptional students (16–17) with strong skills and maturity (with consent where required",
    },
    {
      imgSrc: "",
      title: "Location",
      subTitle: "Africa-Focused",
      text: "Root Builders focuses on Africa-centric problems, with Nigeria as a key starting point.Commitment",
    },
    {
      imgSrc: "",
      title: "Working Professionals",
      //   subTitle: "",
      text: "Ready to dedicate 20+ hours per week for 3–6 months, building real products with real teams and delivering real results.",
    },
  ];

  // const whyRootMap = whyRootBuilders.map(root => {
  //     if(root) return root;
  // })
  return (
    <div className={styles.whoCanApplyContainer}>
      <h3 className={styles.whoCanTitle}>Who Can Apply?</h3>
      <p className={styles.whoCanSubTitle}>
        Root Builders is open to diverse talents across Africa
      </p>
      <section className={styles.whoCanBody}>
        <section className={styles.personality}>
          <div className={styles.personalityBody}>
            {whoCanText.map((text) => {
              <>
                <h3>{text.title}</h3>
                <p>{text.subTitle}</p>
              </>;
            })}
          </div>
        </section>

        <section>
          {whoCanDetailsText.map((text) => {
            <div>
             <Image
              src="/academy-what-we-do-icon.png"
              alt="aaaaaa"
              width={320}
              height={199.13}
              className={styles.whyRootImg}
            />
              <section>
                <h4>{text.title}</h4>
                {text.subTitle && <p>{text.subTitle}</p>}
                <p>{text.text}</p>
              </section>
            </div>;
          })}
        </section>
      </section>
    </div>
  );
}
