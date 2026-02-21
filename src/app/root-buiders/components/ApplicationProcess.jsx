import Image from "next/image";
import styles from "../root-builders.module.css"
export default function ApplicationProcess() {
  const applicationBtnText = [
    {
      title: "Apply Online",
      color: "",
      imgSrc: "",
    },
    {
      title: "Application Review",
      color: "",
      imgSrc: "",
    },
    {
      title: "Selection & Onboarding",
      color: "",
      // imgSrc:
    },
  ];

  // const whyRootMap = whyRootBuilders.map(root => {
  //     if(root) return root;
  // })
  return (
    <div className={styles.ApplicationContainer}>
      <div>
        {applicationBtnText.map((text) => {
          <>
            <button>{text.title}</button>
            {text.imgSrc && <Image
              src="/academy-what-we-do-icon.png"
              alt="aaaaaa"
              width={320}
              height={199.13}
              className={styles.whyRootImg}
            />}
          </>;
        })}
      </div>
    </div>
  );
}
