export type Project = {
  title: string;
  description: string;
  href?: string;
  tags: string[];
  year?: string;
};

export const projects: Project[] = [
  {
    title: "Physics Informed Neural Networks (PINNs) for Crash Dynamics",
    description:
      "Built Physics-Informed Neural Networks (PINNs) to model vehicle crash dynamics, reducing simulation turnaround time from hours to near-instant inference while maintaining acceptable error bounds against analytical and FEM baselines.",
    tags: ["Python", "TensorFlow", "Physics", "PINNs"],
  },
  {
    title: "RoomMatch",
    description:
      "Built a roommate matching platform that ranks candidates using lifestyle compatibility scores and Redis-powered real-time retrieval, enabling fast personalized recommendations.",
    tags: ["Node.js", "Express", "React", "PostgreSQL", "Redis"],
  },
  {
    title: "Wissenaire '21",
    description:
      "Built a college fest management platform supporting registrations, submissions, payments, and ambassador engagement workflows for a large annual technical festival.",
    tags: ["Node.js", "Express", "EJS", "MongoDB", "Instamojo"],
  },
];
