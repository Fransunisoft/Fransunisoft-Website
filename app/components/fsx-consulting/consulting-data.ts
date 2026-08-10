export type ConsultingService = {
  id:
    | "assessment"
    | "strategy-roadmap"
    | "advisory"
    | "program-design"
    | "oversight";
  label: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

export const consultingServices: ConsultingService[] = [
  {
    id: "assessment",
    label: "Assessment",
    title: "AI Readiness Assessment",
    description:
      "We evaluate your organization's current AI maturity - people, processes, data, and technology - and produce a clear readiness report with prioritised recommendations.",
    image: {
      src: "/consulting-ai-readiness.png",
      alt: "AI readiness assessment workshop with scorecard dashboard",
    },
  },
  {
    id: "strategy-roadmap",
    label: "Strategy & Roadmap",
    title: "AI Strategy & Roadmap Development",
    description:
      "We define your AI vision and build a phased adoption roadmap that connects AI investment to real business outcomes across your specific industry and context.",
    image: {
      src: "/consulting-strategy-roadmap.png",
      alt: "AI strategy roadmap presentation in a boardroom",
    },
  },
  {
    id: "advisory",
    label: "Advisory",
    title: "Digital Transformation Advisory",
    description:
      "We provide senior-level advisory on enterprise digital transformation - from governance design to change management, operating model redesign, and innovation program structure.",
    image: {
      src: "/consulting-advisory.png",
      alt: "Digital transformation advisory session with AI governance framework",
    },
  },
  {
    id: "program-design",
    label: "Program Design",
    title: "Innovation Program Design",
    description:
      "We design structured innovation programs for organisations and government agencies - including challenge frameworks, problem sourcing, talent deployment, and delivery oversight.",
    image: {
      src: "/consulting-program-design.png",
      alt: "Innovation program design workshop with AI capability board",
    },
  },
  {
    id: "oversight",
    label: "Oversight",
    title: "Execution Oversight",
    description:
      "We oversee the delivery of technology and AI initiatives - providing programme management, vendor governance, and outcome accountability for major transformation projects.",
    image: {
      src: "/consulting-execution-oversight.png",
      alt: "Execution oversight dashboard presentation",
    },
  },
];

export const workWithAudiences = [
  "Financial Institutions",
  "Health & Education Institutions",
  "Enterprise Organizations",
  "Government Agencies",
  "Founders & Early-Stage Startups",
  "Innovation Programs",
];

export const serviceTypeOptions = [
  "AI Readiness Assessment",
  "AI Strategy & Roadmap",
  "Digital Transformation Advisory",
  "Innovation Program Design",
  "Execution Oversight",
];
