/** Content for the one-page resume at /resume. */

/** Put your CV at `public/<file>` and the download button appears. */
export const RESUME_PDF_FILE = 'Nandini_Jain_Resume.pdf';

export const RESUME_TIME_ZONE = 'Asia/Dubai';
export const RESUME_TIME_ZONE_LABEL = 'Dubai';

export const resumeSummary = [
  'I am a backend software engineer with 3+ years of experience designing and building scalable distributed systems, REST APIs and microservices with Python (FastAPI, Flask, Django).',
  'My strengths are system design, database optimization and cloud-based deployments on AWS with Docker and Kubernetes. I have improved API performance, built event-driven architectures and delivered production-grade backends with a focus on scalability, reliability and maintainability.',
];

export const resumeSkillGroups = [
  {
    label: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'C++', 'HTML', 'CSS'],
  },
  {
    label: 'Backend',
    items: [
      'FastAPI',
      'Flask',
      'Django',
      'REST APIs',
      'Microservices',
      'GraphQL',
      'WebSockets',
      'Celery',
      'ETL Pipelines',
    ],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    label: 'Cloud & DevOps',
    items: [
      'AWS (EC2, S3, Lambda)',
      'Docker',
      'Kubernetes',
      'Linux',
      'CI/CD',
      'GitHub Actions',
    ],
  },
  {
    label: 'Architecture',
    items: [
      'System Design',
      'Distributed Systems',
      'Event-Driven Architecture',
      'Scalable Backend Design',
    ],
  },
  {
    label: 'Tools',
    items: [
      'Git',
      'Jira',
      'Confluence',
      'Kafka',
      'RabbitMQ',
      'Prometheus',
      'pytest',
    ],
  },
] as const;

export const resumeExperience = [
  {
    company: 'Trasna Solutions',
    role: 'Software Engineer (Backend)',
    location: 'Dubai, UAE',
    period: 'Sep 2023 – Present',
    points: [
      'Designed and developed 20+ scalable backend services using FastAPI and Flask with RESTful architecture.',
      'Improved API performance by up to 40% using PostgreSQL indexing, query optimization and Redis caching.',
      'Built distributed microservices handling high-volume transactions using Celery, RabbitMQ and asynchronous processing.',
      'Developed 50+ REST APIs for profile management, provisioning workflows and reporting systems.',
      'Designed event-driven backend workflows improving system reliability and throughput.',
      'Built Dockerized services and deployed applications using CI/CD pipelines on cloud infrastructure.',
      'Implemented JWT-based authentication and role-based access control for secure APIs.',
      'Collaborated on system design for scalable, high-availability backend architecture.',
    ],
  },
  {
    company: 'Ciena India Pvt Ltd',
    role: 'Software Engineer',
    location: 'Gurugram, India',
    period: 'Jan 2023 – Aug 2023',
    points: [
      'Developed automation tools for MPLS and BGP network systems, reducing manual effort by 30%.',
      'Built RPC-based automation and testing frameworks for large-scale network validation.',
      'Improved test coverage across distributed routing environments through automated test pipelines.',
    ],
  },
] as const;

export const resumeProjects: ReadonlyArray<{
  name: string;
  stack: string;
  description: string;
  href?: string;
}> = [
  {
    name: 'ResuLens',
    stack: 'FastAPI · Python · PostgreSQL · Grok AI',
    description:
      'AI-powered resume evaluation system using LLMs for job description matching, candidate scoring and ATS optimization.',
    href: 'https://resu-lens-chi.vercel.app/',
  },
  {
    name: 'LinkedIn Profile Analyzer',
    stack: 'JavaScript · Chrome Extension · Groq API',
    description:
      'Chrome extension that analyzes LinkedIn profiles with an LLM: scores the headline, suggests a better summary, detects missing skills and optimizes for recruiters.',
  },
  {
    name: 'SmartClips AI',
    stack: 'React · TypeScript · AI APIs · Clerk',
    description:
      'Full-stack AI platform for automated short-form video generation from text prompts, with an automated media pipeline.',
  },
  {
    name: 'Invoice Management System',
    stack: 'Node.js · React · MongoDB',
    description:
      'Full-stack invoice management system with analytics, reporting, search, filtering and invoice tracking.',
  },
];

export const resumeEducation = {
  school: 'Amity University, Noida',
  degree: 'Bachelor of Technology in Computer Science & Engineering',
  period: '2019 – 2023',
  detail: 'CGPA: 8.8',
} as const;
