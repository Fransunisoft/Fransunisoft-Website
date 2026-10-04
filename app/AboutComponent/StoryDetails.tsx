import styles from "./AboutMobile.module.css";

export default function StoryDetails() {
  return (
    <div className={`grid grid-cols-2 ${styles.storyDetails}`}>
      <div className="lg:sticky lg:top-28 lg:self-start">
        <h1>
          Built to Bridge Africa&apos;s <br />
          Execution Gap.
        </h1>
      </div>
      <div>
        <p className="font-body!">
          Fransunisoft was founded on a powerful and uncomfortable truth: Africa
          doesn&apos;t lack talent, ideas, or ambition. What is consistently missing
          is the execution infrastructure to turn those assets into real,
          scalable outcomes.
        </p> <br />

        <p className="font-body">
          We started in the venture and talent space pairing high-potential
          African builders with real startup problems and structured execution.
          We learned quickly that the problem was bigger than startups.
          Enterprises couldn&apos;t implement the tools they needed. Governments
          lacked the workforce to deploy digital systems. Organizations had AI
          ambitions but no pathway to adoption.
        </p>  <br />
        <p className="font-body">
          So we evolved. Fransunisoft is now Africa&apos;s AI Transformation, Talent
          & Technology Company — an integrated execution engine that helps
          organizations of all sizes adopt AI, develop their people, build new
          products, and transform their operations.
        </p> <br />
        <div>
          <div className="border-l-[5px] border-[#FF5A1F] pl-7">
            <h4 className="text-justify font-bold!">
              From our pilot RootBuilders cohort — where teams of African talent
              built five real products solving real problems — to partnerships
              with leading ecosystem organizations across Nigeria and the
              continent, every step has been about one thing: execution that
              creates lasting value.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
