import Image from 'next/image';
import styles from "../root-builders.module.css"
export default function Participant() {

    const participantText = [
        {
            title: "Root Builders Summit",
            subTitle: "Convergence of builders, founders, operators, and partners focused on shaping Africa’s next generation of problem-solvers through technology, execution, and collaboration."
        },
         {
            title: "Root Builders connects talent to real opportunities",
            subTitle: "Join a builder community and venture pipeline, gaining access to mentors, teams, startups, and future opportunities beyond the program or summit."
        },
         {
            title: "Real African & Business Problems",
            subTitle: "Projects are centered on practical challenges across Africa and global markets, from startups and SMEs to public systems. Nothing fake."
        },
         {
            title: "Hands-On, Not Theoretical",
            subTitle: "You don’t just learn concepts, you build real products, work on real problems, and gain experience that actually counts in the real world."
        }
    ]

    // const whyRootMap = whyRootBuilders.map(root => {
    //     if(root) return root;
    // })
  return (
    <div className={styles.whyRootContainer}>
        <h3 className={styles.whyRootTitle}>Why Root Builders?</h3>
        <p className={styles.whyRootSubTitle}>Root Builders turns talent into builders, and builders into problem-solvers the ecosystem can trust.</p>
        <div>
       <Image
              src="/academy-what-we-do-icon.png"
              alt="aaaaaa"
              width={320}
              height={199.13}
              className={styles.whyRootImg}
            />
            
            <section className={styles.whyRootBodyContainer}>
               <h3> {participantText.title}</h3>
                <h3>{participantText.subTitle}</h3>
            </section>
        </div>
    </div>
  );
}
