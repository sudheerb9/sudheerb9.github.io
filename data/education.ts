export type EducationEntry = {
  school: string;
  degree: string;
  period: string;
  location?: string;
  detail?: string;
};

export const education: EducationEntry[] = [
  {
    school: "University of Massachusetts Amherst",
    degree: "Master of Science in Computer Science",
    period: "Jan 2026 - May 2027 (Expected)",
    location: "Amherst, MA",
    detail:
      "GPA 4.0/4.0 · Distributed & Operating Systems, Advanced Algorithms, Software Engineering, Machine Learning, Neural Networks",
  },
  {
    school: "Indian Institute of Technology Bhubaneswar",
    degree: "Bachelor of Technology in Mechanical Engineering",
    period: "July 2018 - May 2022",
    location: "Bhubaneswar, India",
    detail: "GPA 8.01/10 · Data Structures & Algorithms, Robotics, Advanced Calculus, Linear Algebra & Complex Analysis, Transform Calculus, Partial Differential Equations",
  },
];
