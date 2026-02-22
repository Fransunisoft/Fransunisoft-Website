import Image from "next/image";
import styles from "../root-builders.module.css"
export default function ChooseTrack() {
  const chooseTrackText = [
    {
      title: "Product",
      subtitle: " Management"
    },
    {
      title: "AI ",
       subtitle: " Engineering"
    },
    {
      title: "Frontend ",
       subtitle: " Development"

    },
    {
      title: "Cyber ",
      subtitle: " security"
    },
    
    {
      title: "Backend ",
      subtitle: " Development"
    },
    {
      title: "Data Analysis",
       subtitle: "/visualization"
    },
    {
      title: "UI/UX ",
      subtitle: "Design"
    },
    {
      title: "Quality",
      subtitle: "Assurance"
    },
    {
      title: "DevOps",
       subtitle: "/Cloud Computing"
    },
    {
      title: "Hardware",
      subtitle: "/Robotics Engineer"
    },
  ];

  return (
    <div className={styles.chooseTrackCon}>
      <section className={styles.ChooseTrackContainer}>
        <h2 className={styles.ChooseTrackTitle}>Choose Your Track</h2>
        <p className={styles.ChooseTrackSubTitle}>
         Root Builders admits talents across 10 different tech skills to build products and gain real-world experience.
        </p>
        <div className={styles.chooseTrackBodyCon}>
          <div className={styles.chooseTrackContainer}>
            {chooseTrackText.map((text) => (
              <div>
              <h6> {text.title}</h6>
              <h6>{text.subtitle}</h6>
              </div>
            ))}
          </div>
         <Image
                src="/triangle_pair.png"
                alt="aaaaaa"
                width={200}
                height={200}
                className={styles.chooseImg}
              />
        </div>
      </section>
    </div>
  );
}
