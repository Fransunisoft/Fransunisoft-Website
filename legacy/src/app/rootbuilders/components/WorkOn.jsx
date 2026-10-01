import Image from "next/image";
import styles from "../root-builders.module.css";
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
      <section className={styles.workOnContainer}>
        <h2 className={styles.workOnTitle}>What will participants work on?</h2>
        <p className={styles.workOnSubTitle}>
          Work on meaningful projects that solve actual problems
        </p>
        <div className={styles.workOnBodyContainer}>
          <div className={styles.workOnBodySection}>
            <div className={styles.workOnChallenges}>
              <h5>FSX Challenges</h5>
              <h3>Structured Practice Projects</h3>
              <p>
                Solve real problems through guided challenges designed to build
                your portfolio and sharpen your skills with practical and hands-on
                experience.
              </p>
              <div className={styles.workOnChallengeCon}>
                {fxBranchText.map((text,index) => {
                  return(
                       <div key={index}>
                    <div className={styles.ideaBody}>
                      <Image
                        src="/vectors.png"
                        alt="aaaaaa"
                        width={20}
                        height={20}
                        // className={styles.whyRootImg}
                      />
                      <p>{text.title}</p>
                    </div>
                  </div>
                  )
      
                })}
              </div>
            </div>
            <div className={styles.workOnIdeas}>
              <h5>Your Ideas</h5>
              <h3>Participant-Led Projects</h3>
              <p>
                Pitch your own product ideas and get mentorship to bring them to life. Build something meaningful that solves problems you care about.
              </p>
              <div className={styles.workOnChallengeCon}>
                {ideaText.map((text, index) => {
                  return(
                   
                    <div className={styles.ideaBody} key={index}>
                      <Image
                        src="/vectors.png"
                        alt="aaaaaa"
                        width={20}
                        height={20}
                        // className={styles.whyRootImg}
                      />
                      <p>{text.title}</p>
                    </div>
                
                  )
      
                })}
              </div>
            </div>
          </div>
          <Image
            src="/workOn_student-home.png"
            alt="aaaaaa"
            width={463}
            height={694}
            className={styles.workOnImg}
          />
        </div>
      </section>
    </div>
  );
}
