export type ConnectAudienceId = "mentors" | "partners" | "investors";

export type ConnectAudience = {
  id: ConnectAudienceId;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  modal: {
    title: string;
    image: {
      src: string;
      alt: string;
    };
    bullets: string[];
  };
};

export const connectAudiences: ConnectAudience[] = [
  {
    id: "mentors",
    eyebrow: "Join as a Mentor or Advisor",
    title: "For mentors and advisors",
    subtitle: "Join as a Mentor or Advisor",
    description:
      "FSX Connect brings together senior professionals across AI, technology, product, finance, government, and ecosystem building to mentor builders, advise ventures, and shape the organizations we work with.",
    image: {
      src: "/connect-modal-mentors.png",
      alt: "FSX Connect mentoring builders session",
    },
    modal: {
      title: "For mentors and advisors",
      image: {
        src: "/connect-modal-mentors.png",
        alt: "FSX Connect mentors and advisors modal image",
      },
      bullets: [
        "Mentor RootBuilders and FSX Academy teams through real product and venture challenges",
        "Share domain expertise across AI, technology, product, finance, policy, and growth",
        "Support ventures with go-to-market, investor readiness, and operational decision-making",
        "Participate in expert sessions, reviews, workshops, and venture advisory engagements",
        "Build meaningful relationships across the wider FSX founder, talent, investor, and partner network",
      ],
    },
  },
  {
    id: "partners",
    eyebrow: "Partner With Fransunisoft",
    title: "For partners and institution",
    subtitle: "Partner With Fransunisoft",
    description:
      "FSX Connect manages Fransunisoft's institutional partnerships - with universities, government agencies, development organizations, corporate partners, and international ecosystem bodies.",
    image: {
      src: "/connect-modal-partners.png",
      alt: "FSX Connect partnership handshake",
    },
    modal: {
      title: "For partner and institution",
      image: {
        src: "/connect-modal-partners.png",
        alt: "FSX Connect partners and institutions modal image",
      },
      bullets: [
        "Co-design talent, innovation, and venture-building programmes",
        "Access skilled RootBuilders teams for real-world projects",
        "Support entrepreneurship, AI adoption, and technology ecosystem development",
        "Connect with founders, mentors, experts, and emerging ventures across the FSX network",
        "Gain visibility through co-branded programmes, events, and ecosystem initiatives",
      ],
    },
  },
  {
    id: "investors",
    eyebrow: "Access the FSX Deal Flow",
    title: "For investors",
    subtitle: "Access the FSX Deal Flow",
    description:
      "Investors connected through FSX Connect get early access to ventures built inside FSX Labs and RootBuilders - with the benefit of FSX's execution oversight and the confidence of teams that have shipped real products.",
    image: {
      src: "/connect-modal-investors.png",
      alt: "FSX Connect investor deal flow",
    },
    modal: {
      title: "For investors",
      image: {
        src: "/connect-modal-investors.png",
        alt: "FSX Connect investors modal image",
      },
      bullets: [
        "Early access to AI-first ventures developed within FSX Labs",
        "Curated opportunities from founders and RootBuilders teams that have built real products",
        "Greater confidence through FSX execution oversight and venture support",
        "Visibility into product progress, team capability, and market validation",
        "Access to founder introductions, demo sessions, and investor-ready venture updates",
      ],
    },
  },
];
