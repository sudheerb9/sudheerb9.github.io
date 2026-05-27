export type ExperienceHighlight = {
  title: string;
  body: string;
};

export type ExperienceSection = {
  title: string;
  highlights: string[];
};

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  href?: string;
  summary: string;
  highlights?: ExperienceHighlight[];
  sections?: ExperienceSection[];
  techStack?: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Thena",
    role: "Software Development Engineer II",
    period: "Jun 2024 - Nov 2025",
    summary:
      "At Thena, I worked on building backend systems that power our B2B customer support platform. My focus was on designing reliable, event-driven services, improving automation, and enabling seamless customer communication.",
    highlights: [
      {
        title: "Workflow Automation Platform",
        body: "Designed and built a configurable workflow automation platform using Temporal to orchestrate complex event-driven workflows with DAG dependencies, retries, compensation logic, and conditional execution paths.",
      },
      {
        title: "CRM & Core Platform Modules",
        body: "Developed core CRM modules spanning accounts, contacts, activities, and task management, enabling unified customer context and tighter integration with ticketing workflows.",
      },
      {
        title: "Data Aggregation Layer",
        body: "Designed and implemented a cross-service data aggregation layer to resolve entity relationships across microservices, enabling low-latency, unified retrieval of entities across services.",
      },
      {
        title: "Intercom Integration",
        body: "Architected and led bidirectional Thena–Intercom sync using webhook ingestion and SQS-based event pipelines, ensuring reliable cross-platform synchronization of tickets, conversations, and user entities.",
      },
      {
        title: "SLA & Auto-Responder Systems",
        body: "Built SLA and auto-responder features that allow customers to define their own support policies, automate responses, and proactively manage ticket workflows to meet support targets.",
      },
      {
        title: "Notifications & Inbox",
        body: "Designed real-time notification system across Slack, email, and in-app channels, enabling faster collaboration and timely updates.",
      },
      {
        title: "Infrastructure & CI/CD",
        body: "Owned CI/CD and deployment pipelines for gRPC and HTTP services on AWS ECS, using Cloud Map for service discovery and scalable microservice communication.",
      },
      {
        title: "Rich Text Processing & Messaging",
        body: "Revamped backend message processing pipeline to transform Slack Block Kit payloads into TipTap-compatible formats, enabling consistent rich-text rendering across communication surfaces.",
      },
    ],
    techStack: [
      "Nest.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "AWS (ECS, SQS, SNS)",
    ],
  },
  {
    company: "Unacademy",
    role: "Software Engineer",
    period: "Jun 2022 - Jun 2024",
    summary:
      "At Unacademy, I contributed to the Test Prep, UnacademyX, and AirLearn verticals, working as a backend engineer across multiple high-impact products: Compete, Air Learn, and UnacademyX.",
    sections: [
      {
        title: "Compete (Test Prep, Gamified Learning)",
        highlights: [
          "Rebuilt a legacy SQL stored procedure–based question recommendation engine using Bloom filters, significantly improving performance (60% latency reduction) and decoupling it into a standalone microservice.",
          "Designed and implemented an ELO-based rating system and real-time leaderboards for Compete, a high-traffic 1v1 quiz platform handling 10M+ matches and engaging 1.7M+ users in a year.",
          "Leveraged serverless architecture (AWS Lambda) to generate shareable user rating cards, enabling over 10K monthly shares.",
        ],
      },
      {
        title: "Airlearn (Language Learning App)",
        highlights: [
          "Served as a core backend engineer during the early stages of Airlearn, contributing to backend architecture and foundational system design.",
          "Built payment service supporting auto-renewable monthly subscriptions via Google Play and Apple App Store in-app purchases.",
          "Integrated Google and Apple OAuth to enable seamless, secure authentication flows for users.",
        ],
      },
      {
        title: "UnacademyX",
        highlights: [
          "Worked as a core backend engineer on UnacademyX, contributing to foundational backend systems.",
          "Designed and built an A/B experimentation platform that enabled data-driven personalization and faster iteration on product features.",
          "Implemented paid subscription flows using Razorpay, supporting monetization for the platform.",
          "Co-developed AI-powered talking avatars, leading to a 1.1% improvement in content completion rates.",
        ],
      },
    ],
    techStack: ["Go", "Django", "Redis", "MySQL", "DynamoDB", "Elasticsearch", "AWS"],
  },
];
