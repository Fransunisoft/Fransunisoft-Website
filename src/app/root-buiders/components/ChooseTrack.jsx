import Image from "next/image";
import styles from "../root-builders.module.css"
export default function ChooseTrack() {
  const chooseTrackText = [
    {
      title: "  Product Management",
    },
    {
      title: "AI Engineering",
    },
    {
      title: "Frontend Development",
    },
    {
      title: "Cyber security",
    },
    {
      title: "Backend ",
    },
    {
      title: "Backend Development",
    },
    {
      title: "Data Analysis/visualization",
    },
    {
      title: "UI/UX Design",
    },
    {
      title: "Quality Assurance",
    },
    {
      title: "DevOps/Cloud Computing",
    },
    {
      title: "Hardware/Robotics Engineer",
    },
  ];

  return (
    <div className={styles.ChooseTrackContainer}>
      <h3 className={styles.ChooseTrackTitle}>Choose Your Track</h3>
      <p className={styles.ChooseTrackSubTitle}>
       Root Builders admits talents across 10 different tech skills to build products and gain real-world experience.
      </p>
      <div>
        <section className={styles.whyRootBodyContainer}>
          {chooseTrackText.map((text) => (
            <h3> {text.title}</h3>
          ))}
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
