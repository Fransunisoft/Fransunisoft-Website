export default function ChallengeCard() {
  const challenges = [
    {
      title: "Global AI adoption is accelerating.",
      description:
        "Organizations deploying AI are reporting 20–40% efficiency gains across operations. The competitive gap between AI-enabled and AI-dormant organizations is widening every year.",
      bg: "bg-[#e1e6eb]",
      titleColor: "text-black",
    },
    {
      title: "Most African organizations lack AI readiness.",
      description:
        "Fewer than 15% of organizations across Nigeria and sub-Saharan Africa have a structured AI adoption strategy. The majority are operating without the infrastructure, workforce, or strategic clarity to begin.",
      bg: "bg-secondary-800",
       titleColor: "text-white",
    },
    {
      title: "The talent shortage is severe.",
      description:
        "Organizations deploying AI are reporting 20–40% efficiency gains across operations. The competitive gap between AI-enabled and AI-dormant organizations is widening every year.",
      bg: "bg-primary-500",
       titleColor: "text-white",
     
    },
    {
      title: "Implementation is where transformation stalls.",
      description:
        "Strategy without execution produces nothing. Most organizations that invest in AI planning never reach deployment—they lack the implementation partners and internal capability to cross the gap.",
      bg: "bg-accent-400",
       titleColor: "text-black",
    },
  ];

  return (
    <section className="grid grid-cols-1  md:grid-cols-2">
  {challenges.map((challenge, index) => (
    <div
      key={index}
      className={`${challenge.bg} rounded-2xl border border-neutral-border p-8`}
    >
      <h3 className={`font-heading font-extrabold text-2xl ${challenge.titleColor}`}>
        {challenge.title}
      </h3>

      <p className={`mt-4  font-body text-lg ${challenge.titleColor}`}>
        {challenge.description}
      </p>
    </div>
  ))}
</section>
  );
}
