import type { ReactNode } from 'react';
import './TechStack.css';

type TechItem = {
  name: string;
  icon: string;
};

type TechCategory = {
  title: string;
  description: string;
  technologies: TechItem[];
};

const coreStack: TechItem[] = [
  { name: 'Python', icon: 'python' },
  { name: 'FastAPI', icon: 'fastapi' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'Redis', icon: 'redis' },
  { name: 'Docker', icon: 'docker' },
];

const techCategories: TechCategory[] = [
  {
    title: 'Backend',
    description:
      'APIs, services and asynchronous workloads built with Python frameworks.',
    technologies: [
      { name: 'Python', icon: 'python' },
      { name: 'FastAPI', icon: 'fastapi' },
      { name: 'Flask', icon: 'flask' },
      { name: 'Django', icon: 'django' },
      { name: 'REST APIs', icon: 'rest' },
      { name: 'GraphQL', icon: 'graphql' },
      { name: 'WebSockets', icon: 'websockets' },
      { name: 'Celery', icon: 'queue' },
    ],
  },
  {
    title: 'Data & Messaging',
    description:
      'Relational and document databases, caching and message brokers.',
    technologies: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MySQL', icon: 'database' },
      { name: 'MongoDB', icon: 'database' },
      { name: 'Redis', icon: 'redis' },
      { name: 'Kafka', icon: 'queue' },
      { name: 'RabbitMQ', icon: 'queue' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    description: 'Containers, deployment pipelines and cloud infrastructure.',
    technologies: [
      { name: 'AWS (EC2, S3, Lambda)', icon: 'aws' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'Linux', icon: 'linux' },
      { name: 'GitHub Actions', icon: 'github-actions' },
      { name: 'CI/CD', icon: 'cicd' },
    ],
  },
  {
    title: 'Architecture',
    description:
      'Designing backends that stay scalable, reliable and maintainable.',
    technologies: [
      { name: 'System Design', icon: 'system-design' },
      { name: 'Distributed Systems', icon: 'distributed' },
      { name: 'Event-Driven Architecture', icon: 'event-driven' },
      { name: 'Microservices', icon: 'microservices' },
      { name: 'ETL Pipelines', icon: 'etl' },
    ],
  },
];

const alsoWorkWith: TechItem[] = [
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'SQL', icon: 'sql' },
  { name: 'C++', icon: 'cpp' },
  { name: 'HTML', icon: 'html' },
  { name: 'CSS', icon: 'css' },
  { name: 'Git', icon: 'git' },
  { name: 'Jira', icon: 'jira' },
  { name: 'Confluence', icon: 'confluence' },
  { name: 'Prometheus', icon: 'prometheus' },
  { name: 'pytest', icon: 'pytest' },
];

const TechIcon = ({ name }: { name: string }) => {
  const icons: Record<string, ReactNode> = {
    python: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7.5 14.5v-8a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5 9.5v8a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2V14"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10.4" cy="7.2" r="0.9" fill="currentColor" />
        <circle cx="13.6" cy="16.8" r="0.9" fill="currentColor" />
      </svg>
    ),
    fastapi: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle
          cx="12"
          cy="12"
          r="8.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="m13 6.5-4.5 6.5H12l-1 4.5 4.5-6.5H12l1-4.5Z"
          fill="currentColor"
        />
      </svg>
    ),
    flask: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M9.5 3.5h5M10.5 3.5V9l-4.8 8.2a1.5 1.5 0 0 0 1.3 2.3h10a1.5 1.5 0 0 0 1.3-2.3L13.5 9V3.5M8 14.5h8"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    django: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M9.5 8v8H12a4 4 0 0 0 0-8H9.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    ),
    graphql: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="m12 3.5 7.4 4.25v8.5L12 20.5l-7.4-4.25v-8.5L12 3.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="m12 3.5 7.4 12.75H4.6L12 3.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
    websockets: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4.5 9H17m-3.5-3.5L17 9l-3.5 3.5M19.5 15H7m3.5-3.5L7 15l3.5 3.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    queue: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="3.5"
          y="8"
          width="4"
          height="8"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <rect
          x="10"
          y="8"
          width="4"
          height="8"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M16.5 12h4m-1.8-2 1.8 2-1.8 2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    redis: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="m12 4 8 4-8 4-8-4 8-4ZM4 12l8 4 8-4M4 16l8 4 8-4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    kubernetes: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle
          cx="12"
          cy="12"
          r="8.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle
          cx="12"
          cy="12"
          r="2.3"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M12 3.5v6.2M12 14.3v6.2M4.6 7.75 10 10.85M14 13.15l5.4 3.1M4.6 16.25l5.4-3.1M14 10.85l5.4-3.1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    linux: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="4"
          y="5"
          width="16"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M8 10.5 10.5 13 8 15.5M13 15.5h3"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    cicd: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 8.5A5.5 5.5 0 0 1 17.5 10M17 15.5A5.5 5.5 0 0 1 6.5 14"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M16 6.5 17.5 10 14 11M8 17.5 6.5 14 10 13"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    'system-design': (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="4"
          y="4.5"
          width="6.5"
          height="5.5"
          rx="1.2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <rect
          x="13.5"
          y="14"
          width="6.5"
          height="5.5"
          rx="1.2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M10.5 7.25h6.25V14M13.5 16.75H7.25V10"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    'event-driven': (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M13.5 3.5 6 13.5h5.5l-1 7 7.5-10h-5.5l1-7Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    ),
    etl: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 5.5h16l-6 7v5l-4 2v-7l-6-7Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    ),
    postgresql: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <ellipse
          cx="12"
          cy="6.5"
          rx="7"
          ry="2.8"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M5 6.5v8c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-8"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M5 10.5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    ),
    rest: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M8 8H6a3 3 0 0 0 0 6h2M16 8h2a3 3 0 0 1 0 6h-2M9 12h6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
    docker: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.4 10.4h2.1V8.4H4.4v2Zm2.6 0h2.1V8.4H7v2Zm2.6 0h2.1V8.4H9.6v2Zm0-2.5h2.1V5.9H9.6v2Zm2.6 2.5h2.1V8.4h-2.1v2Zm0-2.5h2.1V5.9h-2.1v2Zm2.6 2.5h2.1V8.4H14.8v2ZM3.2 10.4h1.2v2.1c0 3.3 2.7 5.2 6.6 5.2 4.7 0 8.4-2 8.4-6.2 1.2.1 2.6-.5 3.3-1.7-1.4.7-2.9.5-3.6.3C17.5 6.6 15.4 5 12.4 5c-.4 0-.7 0-1 .1V6h-2v1.9H7.3V6H5.2v1.9H3.2v2.5Z" />
      </svg>
    ),
    'github-actions': (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm-1.2 5.4 6 3.6-6 3.6V7.4Zm1.2 12.3A7.7 7.7 0 0 1 6.8 8.4a7.7 7.7 0 1 1 10.4 11.3Z" />
      </svg>
    ),
    aws: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7.2 14.2 12 8.8l4.8 5.4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.5 16.8c2.6 2.2 6 3.4 9.6 3.4 2.6 0 5.1-.6 7.4-1.8"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
    distributed: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle
          cx="6.5"
          cy="12"
          r="2.4"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle
          cx="17.5"
          cy="7.5"
          r="2.4"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle
          cx="17.5"
          cy="16.5"
          r="2.4"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M8.8 11.2 15.2 8.4M8.8 12.8l6.4 2.8"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    ),
    microservices: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle
          cx="12"
          cy="6.5"
          r="2.2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle
          cx="6.5"
          cy="16.5"
          r="2.2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle
          cx="17.5"
          cy="16.5"
          r="2.2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M10.3 8.2 7.8 14.3M13.7 8.2l2.5 6.1M8.8 16.5h6.4"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    ),
    database: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <ellipse
          cx="12"
          cy="6.5"
          rx="7"
          ry="2.8"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M5 6.5v8c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-8"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M5 10.5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    ),
  };

  return icons[name] ?? null;
};

const CoreTechBadge = ({ item }: { item: TechItem }) => (
  <li>
    <span className="tech-core-badge">
      <span className={`tech-icon tech-icon-${item.icon}`} aria-hidden="true">
        <TechIcon name={item.icon} />
      </span>
      {item.name}
    </span>
  </li>
);

const TechBadge = ({ item }: { item: TechItem }) => (
  <li>
    <span className="tech-badge">
      <span className={`tech-icon tech-icon-${item.icon}`} aria-hidden="true">
        <TechIcon name={item.icon} />
      </span>
      {item.name}
    </span>
  </li>
);

const TechCategoryCard = ({ category }: { category: TechCategory }) => (
  <article className="tech-category-card">
    <h3>{category.title}</h3>
    <p className="tech-category-copy">{category.description}</p>
    <ul className="tech-badge-list">
      {category.technologies.map((item) => (
        <TechBadge item={item} key={item.name} />
      ))}
    </ul>
  </article>
);

export const TechStack = () => {
  return (
    <div className="tech-stack">
      <p className="tech-stack-lede">
        Technologies I use to design, build and run scalable production
        backends.
      </p>

      <section className="tech-core" aria-labelledby="core-stack-heading">
        <h3 id="core-stack-heading">Core Stack</h3>
        <ul className="tech-core-list">
          {coreStack.map((item) => (
            <CoreTechBadge item={item} key={item.name} />
          ))}
        </ul>
      </section>

      <div className="tech-category-grid">
        {techCategories.map((category) => (
          <TechCategoryCard category={category} key={category.title} />
        ))}
      </div>

      <section className="tech-secondary" aria-labelledby="also-work-heading">
        <h3 id="also-work-heading">Also work with</h3>
        <ul className="tech-secondary-list">
          {alsoWorkWith.map((item) => (
            <li key={item.name}>
              <span className="tech-secondary-pill">{item.name}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default TechStack;
