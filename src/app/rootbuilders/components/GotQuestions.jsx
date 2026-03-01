"use client";
import Image from "next/image";
import styles from "../root-builders.module.css";
import { useState } from "react";
export default function GotQuestions() {
  const gotQuestions = [
    {
      title: "  Is Root Builders bootcamp free?",
      subTitle: "Yes it's free; what’s required is commitment.",
    },
    {
      title: "Who can apply?",
      subTitle:
        "Anyone with passion, commitment, and problem-solving mindset can apply. While the ideal age range is 18–35, exceptional younger or older applicants are welcome.",
    },
    {
      title: "How do i apply for Root Builder?",
      subTitle:
        "Applicants can click on Join Root Builders and fill in the follow up form to apply",
    },
    {
      title: "What projects will participants work on?",
      subTitle:
        "Participants work on a mix of: FSX practice challenges: structured exercises to build skills Participant-led ideas: your own ideas or team projects, with mentorship and potential venture support",
    },
    {
      title: "What is the main benefit of joining Root Builders?",
      subTitle:
        "You gain practical, hands-on experience by building real solutions with real teams, mentors, and guidance. By the end, you’ll have a strong portfolio, problem-solving skills, and access to a builder community and venture opportunities.",
    },
    {
      title: "Can I continue working on my project with FSX after the program?",
      subTitle:
        "Yes you can keep working on your project with FSX after the Program",
    },
  ];

  const [isActive, setIsActive] = useState([]);
  const handleClick = (index) => {
    setIsActive((prev) => {
      if (prev.includes(index)) {
        return prev.filter((item) => item !== index);
      } else {
        return [...prev, index];
      }
    });
  };
  return (
    <section className={styles.whoGotQuestionsContainer} id="faq">
      <Image
        src="/gotQuestionImage.png"
        alt="aaaaaa"
        width={381}
        height={600}
        className={styles.whoGotImg}
      />

      <div>
        <div className={styles.gotQuestionTitleHeader}>
          <h3 className={styles.gotQuestionTitle }>You’ve Got Questions?</h3>
          <p className={styles.gotQuestionSubTitle}>
            We’ve got you covered on any of your doubts
          </p>
        </div>
        <div className={styles.gotQuestionFaQ}>
          {gotQuestions.map((text, index) => {
           
           
           
           return (
              <>
                <div
                  key={index}
                  className={styles.gotQuestionFaQList}
                  onClick={() => handleClick(index)}
                >
                  <p className={styles.gotQuestionFaQListText}>{text.title}</p>
                  {isActive.includes(index) ? (
                    <Image
                      src="/minuses.png"
                      alt="aaaaaa"
                      width={16}
                      height={4}
                      className={styles.gotQuestionImg}
                    />
                  ) : (
                    <Image
                      src="/cross.png"
                      alt="aaaaaa"
                      width={16}
                      height={16}
                      className={styles.gotQuestionImg}
                    />
                  )}
                </div>
                {/* {isActive.include(index) && <div className={styles.gotQuestionFaQListSubtitle}>
                   <p>{text.subTitle}</p>
              </div>}
                  */}
                {isActive.includes(index) && (
                  <div className={styles.gotQuestionFaQListSubtitle}>
                    <p>{text.subTitle}</p>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
