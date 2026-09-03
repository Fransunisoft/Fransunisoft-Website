export type StackCard = {
  id: string;
  title: string;
  description: string;
  color: string;
  image?: string;
};

export const stackCards: StackCard[] = [
  {
    id: "real-problems",
    title: "Real Problems. Not Simulations.",
    description:
      "Every project is anchored to a real challenge submitted by an organization, startup, government agency, or institution. Participants build deployed solutions, not hypothetical case studies.",
    color: "#c84d27",
    image: "/rootbuilders-stack-real-problems.png",
  },
  {
    id: "supervised",
    title: "Supervised Execution.",
    description:
      "Builders work with mentors, technical reviewers, and delivery leads who help them move from idea to practical implementation.",
    color: "#0d4d86",
  },
  {
    id: "pipeline",
    title: "A Real Builder Pipeline.",
    description:
      "RootBuilders helps identify capable African builders and connects them to opportunities across the Fransunisoft ecosystem.",
    color: "#373737",
  },
  {
    id: "integrated",
    title: "AI-Integrated From Day One.",
    description:
      "Every track teaches builders how to use AI as part of research, design, development, testing, delivery, and decision-making.",
    color: "#12675f",
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
  "How do I apply for Root Builders?",
  "Is Root Builders bootcamp free?",
  "Who can apply?",
  "What projects will participants work on?",
  "What is the main benefit of joining Root Builders?",
  "Can I continue working on my project with FSX after the program?",
];
