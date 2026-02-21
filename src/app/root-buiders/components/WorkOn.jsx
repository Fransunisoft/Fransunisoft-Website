import Image from "next/image";
import styles from "../root-builders.module.css"
export default function WorkOn() {
  const fxBranchText = [
    {
      title: "Curated real-world challenges",
    },
    {
      title: "Portfolio-ready projects",
    },
    {
      title: "Skill progression tracking",
    },
  ];

  const ideaText = [
    {
      title: " Bring your vision to life",
    },
    {
      title: "Expert mentorship support",
    },
    {
      title: "Team collaboration",
    },
  ];

  return (
    <div className={styles.workOnContainer}>
      <h3 className={styles.workOnTitle}>What will participants work on?</h3>
      <p className={styles.workOnSubTitle}>
        Work on meaningful projects that solve actual problems
      </p>
      <div className={styles.workOnBodyContainer}>
        <section className={styles.workOnBodySection}>
          <div className={styles.workOnChallenges}>
            <h4>FSX Challenges</h4>
            <h3>Structured Practice Projects</h3>
            <p>
              Solve real problems through guided challenges designed to build
              your portfolio and sharpen your skills with practical and hands-on
              experience.
            </p>
            <section>
              {fxBranchText.map((text) => {
                <>
                  <div>
           <Image
              src="/academy-what-we-do-icon.png"
              alt="aaaaaa"
              width={320}
              height={199.13}
              className={styles.whyRootImg}
            />
                    <p>{text.title}</p>
                  </div>
                </>;
              })}
            </section>
          </div>

          <div className={styles.workOnIdeas}>
            <h4>FSX Challenges</h4>
            <h3>Structured Practice Projects</h3>
            <p>
              Solve real problems through guided challenges designed to build
              your portfolio and sharpen your skills with practical and hands-on
              experience.
            </p>
            <section>
              {fxBranchText.map((text) => {
                <>
                  <div>
                 <Image
              src="/academy-what-we-do-icon.png"
              alt="aaaaaa"
              width={320}
              height={199.13}
              className={styles.whyRootImg}
            />
                    <p>{text.title}</p>
                  </div>
                </>;
              })}
            </section>
          </div>
        </section>


     <Image
              src="/academy-what-we-do-icon.png"
              alt="aaaaaa"
              width={320}
              height={199.13}
              className={styles.whyRootImg}
            />
      </div>
    </div>
  );
}
