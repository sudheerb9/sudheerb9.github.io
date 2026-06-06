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
  intro?: string;
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
      "Built workflow orchestration, CRM, notification and customer support systems powering a modern B2B customer support platform. Focused on distributed workflows, event-driven architecture, and platform reliability.",
    intro:
      "At Thena, I helped build core platform capabilities across workflow automation, CRM, messaging, notifications, and customer support infrastructure, with a strong focus on reliability and scale.",
    highlights: [
      {
        title: "Workflow Orchestration Platform",
        body: "Designed and built a configurable workflow automation platform using Temporal to orchestrate complex event-driven workflows with DAG dependencies, retries, compensation logic, and conditional execution paths.",
      },
      {
        title: "CRM & Customer Context Platform",
        body: "Developed core CRM modules spanning accounts, contacts, activities, and task management, enabling unified customer context and tighter integration with ticketing workflows.",
      },
      {
        title: "Cross-Service Entity Resolution Layer",
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
        title: "Real-Time Notifications Platform",
        body: "Designed real-time notification system across Slack, email, and in-app channels, enabling faster collaboration and timely updates.",
      },
      {
        title: "Platform Infrastructure & Delivery",
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
      "Built backend systems across multiple high scale learning products, including recommendation engines, subscription and billing systems, experimentation infrastructure, and real-time competitive learning platforms.",
    intro:
      "At Unacademy, I worked across multiple high growth products spanning competitive learning, language learning, and content personalization, building backend systems used by millions of learners.",
    sections: [
      {
        title: "Compete (Test Prep, Gamified Learning)",
        highlights: [
          "Rebuilt a legacy SQL stored procedure based question recommendation engine using Bloom filters, significantly improving performance (60% latency reduction) and decoupling it into a standalone microservice.",
          "Designed and implemented an ELO based rating system and real-time leaderboards for Compete, a high-traffic 1v1 quiz platform handling 10M+ matches and engaging 1.7M+ users in a year.",
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
    techStack: ["Go", "Django", "Node.js (Fastify)", "Redis", "MySQL", "DynamoDB", "Elasticsearch", "AWS"],
  },
];
