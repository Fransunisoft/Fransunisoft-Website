import Image from "next/image";
import styles from "../root-builders.module.css";
export default function WhyRoot() {
  const whyRootBuilders = [
    {
      title: "Root Builders Summit",
      subTitle:
        "Convergence of builders, founders, operators, and partners focused on shaping Africa’s next generation of problem-solvers through technology, execution, and collaboration.",
    },
    {
      title: "Root Builders connects talent to real opportunities",
      subTitle:
        "Join a builder community and venture pipeline, gaining access to mentors, teams, startups, and future opportunities beyond the program or summit.",
    },
    {
      title: "Real African & Business Problems",
      subTitle:
        "Projects are centered on practical challenges across Africa and global markets, from startups and SMEs to public systems. Nothing fake.",
    },
    {
      title: "Hands-On, Not Theoretical",
      subTitle:
        "You don’t just learn concepts, you build real products, work on real problems, and gain experience that actually counts in the real world.",
    },
  ];

  return (
    <div className={styles.whyRootCon} id="root-builders">
      <section className={styles.whyRootContainer}>
        <h2 className={styles.whyRootTitle}>Why Root Builders?</h2>
        <p className={styles.whyRootSubTitle}>
          Root Builders turns talent into builders, and builders into
          problem-solvers the ecosystem can trust.
        </p>
        <div className={styles.whyRootBody}>
          <Image
            src="/whyrootbuilders.png"
            alt="aaaaaa"
            width={510}
            height={552}
            className={styles.whyRootImg}
          />
          <div className={styles.whyRootBodyContainer}>
            {whyRootBuilders.map((text, index) => {
              return(
              <div key={index} className={styles.whyRootBodyCon}>
                <h5> {text.title}</h5>
                <p>{text.subTitle}</p>
              </div>)
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
