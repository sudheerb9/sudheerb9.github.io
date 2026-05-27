export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "Go", "Python", "C++"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Nest.js", "Django", "gRPC", "Temporal"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MySQL", "Redis", "DynamoDB", "Elasticsearch", "Redshift"],
  },
  {
    label: "Cloud",
    items: ["AWS (ECS, SQS, SNS, Lambda, DMS)", "Docker", "GitHub Actions"],
  },
];

