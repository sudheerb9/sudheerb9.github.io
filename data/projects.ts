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
      "I developed PINNs to model head-on vehicle crash dynamics and predict stress, velocity and displacement during impact. By replacing lengthy simulation runs (~25-hour FEM) with near-instant PINN inference, I reduced turnaround time dramatically while staying within <= 18% error compared to analytical/FEM baselines. I also applied transfer learning across structural variants to significantly reduce retraining effort.",
    tags: ["Python", "TensorFlow", "Physics", "PINNs"],
  },
  {
    title: "RoomMatch",
    description:
      "I built RoomMatch, a full-stack roommate matching app that ranks candidates using lifestyle preferences and habits. Compatibility scores are computed for fast retrieval by leveraging Redis ZSET to surface the top-20 matches in near real time, and a background job pipeline recomputes rankings whenever preferences change keeping results fresh without slowing down the request path.",
    tags: ["Node.js", "Express", "React", "PostgreSQL", "Redis"],
  },
  {
    title: "Wissenaire '21",
    description:
      "I engineered Wissenaire ’21, a college fest platform that handled event registrations, file submissions, and payments via Instamojo. The system supported 200+ registrations and processed 100K+ INR transactions, with an ambassador engagement flow built using the Facebook Graph API to track shares and award engagement points.",
    tags: ["Node.js", "Express", "EJS", "MongoDB", "Instamojo"],
  },
];
