export type StackCard = {
  id: string;
  title: string;
  description: string;
  color: string;
  image?: string;
};

export const rootBuildersApplicationUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSc07jkQrxzrXlAMuykYnvouWHBQfSv3Y8I1knfbfU2pfpSkXA/viewform?usp=preview";

export const stackCards: StackCard[] = [
  {
    id: "real-problems",
    title: "Real Problems. Not Simulations.",
    description:
      "Every project is anchored to a real challenge submitted by an organization, startup, government agency, or institution. Participants build deployed solutions, not hypothetical case studies.",
    color: "#b54c26",
    image: "/rootbuilders-stack-real-problems.webp",
  },
  {
    id: "supervised",
    title: "Supervised Execution.",
    description:
      "Builders work with mentors, technical reviewers, and delivery leads who help them move from idea to practical implementation.",
    color: "#093A6D",
    image: "/rootbuilders-stack-real-problems.webp"
  },
  {
    id: "pipeline",
    title: "A Real Builder Pipeline.",
    description:
      "RootBuilders helps identify capable African builders and connects them to opportunities across the Fransunisoft ecosystem.",
    color: "#373737",
    image: "/rootbuilders-stack-real-problems.webp"
  },
  {
    id: "integrated",
    title: "AI-Integrated From Day One.",
    description:
      "Every track teaches builders how to use AI as part of research, design, development, testing, delivery, and decision-making.",
    color: "#12675f",
    image: "/rootbuilders-stack-real-problems.webp"
  },
];

export const eligibilityCards = [
  {
    title: "All Skill Levels",
    text: "Beginners, intermediate, and advanced builders are all welcome. What matters is commitment.",
  },
  {
    title: "Career Switchers",
    text: "Transitioning into AI and technology with real project experience that stands out.",
  },
  {
    title: "Students & NYSC",
    text: "Build while studying or during your service year. Graduate with a real portfolio, not just a certificate.",
  },
  {
    title: "Working Professionals",
    text: "Up-skill and build your AI and tech portfolio while maintaining your current role.",
  },
];

export const requirements = [
  ["Age", "18-55 years. Exceptional students 16-17 with strong skills and maturity are welcome where required."],
  ["Location", "Africa-focused. Nigerian as primary starting point. Remote-first with in-person events."],
  ["Commitment", "20+ hours per week across a 5-6 month program cycle. Real teams, real timelines, real accountability."],
];

export const tracks = [
  ["Product Management", "AI-driven roadmapping and prioritization"],
  ["Data Analysis & Visualisation", "AI insights and intelligence"],
  ["AI Engineering", "Building intelligent systems and models"],
  ["UI/UX Design", "Human-centered AI product design"],
  ["Frontend Development", "AI-enhanced user experiences"],
  ["Quality Assurance", "Automated and AI-assisted testing"],
  ["Cybersecurity", "AI-powered threat detection and response"],
  ["DevOps & Cloud Computing", "AI deployment infrastructure"],
  ["Backend Development", "Scalable AI-ready infrastructure"],
  ["Hardware & Robotics Engineering", "Physical AI systems"],
];

export const faqs = [
  {
    question: "What is RootBuilders?",
    answer: "RootBuilders is a program by Fransunisoft that connects builders (developers, designers, and product managers), founders, and real businesses (SMEs) to solve real operational problems and build real ventures — in structured, time-bound cohorts.",
  },
  {
    question: "How do I join?",
    answer: "You register on the platform and select your role first — Builder, Founder, or SME/Organisation — since each path has its own application form. Admin accounts are internal only; there's no public sign-up for admins",
  },
  {
    question: "Do I get a certificate?",
    answer: "Yes — once admin marks you as Graduated, a shareable completion certificate is generated with your name, cohort details, and the products you contributed to.",
  },
  {
    question: "What do I need to apply as a founder?",
    answer: "Your startup stage, a problem statement (100–600 characters), your target customer, team size, and a motivation statement. A startup name is optional if you're pre-idea.",
  },
  {
    question: "As an Organization, what happens after I submit a problem?",
    answer: "You get a reference number and a confirmation email. Admin reviews it for quality and fit, then either approves it, declines it with a reason, or asks for more information.",
  },
  {
    question: "What is Demo Day / the Showcase?",
    answer: "An event — in-person, virtual, or hybrid — where teams present what they've built. There's a public pre-event page with event details and featured teams, and, after the event, an archive page summarizing outcomes and demo links.",
  },
];
