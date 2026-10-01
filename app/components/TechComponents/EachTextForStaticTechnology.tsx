const technologyServices = [
  {
    title: "Cloud Infrastructure & Architecture",
    description:
      "We design and deploy cloud architecture that supports modern, AI-ready operations — from initial setup to multi-region scale, security hardening, and cost optimisation.",
  },
  {
    title: "Systems Integration",
    description:
      "We connect your existing systems, data sources, and third-party platforms into a coherent technology ecosystem that works reliably across your organization.",
  },
  {
    title: "AI Infrastructure",
    description:
      "We build and deploy the data pipelines, model deployment infrastructure, and monitoring systems that AI solutions require to function reliably in production environments.",
  },
  {
    title: "Product Engineering",
    description:
      "We provide dedicated engineering teams for ongoing product development, feature delivery, technical debt management, and platform scale for both FSX ventures and client organizations.",
  },
  {
    title: "Technology Health Reviews",
    description:
      "We conduct structured technology audits for organizations — assessing current systems, identifying risk, and producing a clear modernisation roadmap.",
  },
];

export default function EachTextForStaticTechnology() {
  return (
    <div className="w-full">
      {technologyServices.map((service) => (
        <div
          key={service.title}
          className="border-b border-neutral-300 py-5 first:pt-0"
        >
          <h4 className="font-serif text-2xl font-bold leading-tight text-[#0D519A]">
            {service.title}
          </h4>

          <p className="mt-3 text-sm leading-6 text-[#333333]">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
}
