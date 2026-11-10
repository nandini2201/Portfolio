'use client';

import Image from 'next/image';
import type { ReactNode } from 'react';
import {
  GITHUB_USERNAME,
  type GitHubRepository,
  getRepositoryDisplayName,
} from '@/lib/github-shared';
import { githubUrl, siteConfig } from '@/lib/site-config';
import profilePicture from '../../img/profile-picture.png';
import './SocialMediaCarousel.css';

type SocialProfile = {
  id: string;
  featured?: boolean;
  name: string;
  category: string;
  href: string;
  copy: string;
  accent: string;
  icon: ReactNode;
  visual?: ReactNode;
};

type Project = {
  id: string;
  name: string;
  category: string;
  href?: string;
  copy: string;
  accent: string;
  icon: ReactNode;
  stack: string[];
  highlights: string[];
};

type SocialMediaCarouselProps = {
  pinnedRepositories: GitHubRepository[];
};

const ExternalIcon = () => (
  <svg
    className="social-card-external"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <rect
      x="6.5"
      y="6.5"
      width="11"
      height="11"
      rx="2.5"
      stroke="currentColor"
      strokeWidth="1.7"
    />
    <path
      d="M14 7.5h2.5V10M16.5 7.5 10 14"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.81c0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" />
  </svg>
);

const ResumeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M7 3.5h7l4 4V19a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19V5a1.5 1.5 0 0 1 1-1.5Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <path
      d="M9 12h6M9 15.5h4M14 3.5v4h4"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ClipIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect
      x="3.5"
      y="5.5"
      width="17"
      height="13"
      rx="2.5"
      stroke="currentColor"
      strokeWidth="1.7"
    />
    <path d="m10.5 9.5 4 2.5-4 2.5v-5Z" fill="currentColor" />
  </svg>
);

const InvoiceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M6.5 3.5h11v17l-2.75-1.6L12 20.5l-2.75-1.6L6.5 20.5v-17Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 8.5h5M9.5 12h5"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M8 1.5 9.8 5.7l4.5.4-3.4 3 1 4.4L8 11.4l-3.9 2.1 1-4.4-3.4-3 4.5-.4L8 1.5Z" />
  </svg>
);

type GitHubVisualProps = {
  repositories: GitHubRepository[];
};

const GitHubVisual = ({ repositories }: GitHubVisualProps) => (
  <div className="social-visual social-visual-github">
    <div className="social-visual-window">
      <div className="social-visual-chrome">
        <span />
        <span />
        <span />
        <p>github.com/{GITHUB_USERNAME}</p>
      </div>
      {repositories.length > 0 ? (
        <ul className="social-visual-repos">
          {repositories.map((repository) => {
            const language = repository.primaryLanguage;
            const displayName = getRepositoryDisplayName(repository);

            return (
              <li key={repository.id}>
                <a
                  className="social-visual-repo social-visual-repo-link"
                  href={repository.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>{displayName}</p>
                  {repository.description ? (
                    <span className="social-visual-repo-desc">
                      {repository.description}
                    </span>
                  ) : null}
                  <span className="social-visual-repo-meta">
                    {language ? (
                      <span className="social-visual-lang">
                        <i
                          style={{ backgroundColor: language.color }}
                          aria-hidden="true"
                        />
                        {language.name}
                      </span>
                    ) : null}
                    {repository.stargazerCount > 0 ? (
                      <span className="social-visual-stars">
                        <StarIcon />
                        {repository.stargazerCount}
                      </span>
                    ) : null}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="social-visual-repo social-visual-repo-fallback">
          <p>Pinned repositories</p>
          <span>View my latest work on GitHub</span>
        </div>
      )}
    </div>
  </div>
);

const LinkedInVisual = () => (
  <div className="social-visual social-visual-linkedin">
    <div className="social-visual-window">
      <div className="social-visual-profile">
        <Image src={profilePicture} alt="" width={56} height={56} />
        <div>
          <p>{siteConfig.name}</p>
          <span>
            {siteConfig.shortRole} · {siteConfig.location}
          </span>
        </div>
      </div>
      <div className="social-visual-pills">
        <span>Backend</span>
        <span>Python</span>
        <span>Distributed systems</span>
      </div>
      <div className="social-visual-repo">
        <p>Experience, projects and career updates</p>
        <span>Trasna Solutions · Ciena India</span>
      </div>
    </div>
  </div>
);

const ProjectVisual = ({ project }: { project: Project }) => (
  <div className="social-visual social-visual-project">
    <div className="social-visual-window">
      <div className="social-visual-pills">
        {project.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <ul className="social-visual-highlights">
        {project.highlights.map((highlight) => (
          <li className="social-visual-repo" key={highlight}>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

/**
 * Add an `href` (live demo or repository URL) to make a project card
 * clickable.
 */
const projects: Project[] = [
  {
    id: 'resulens',
    name: 'ResuLens',
    category: 'AI Resume Evaluation',
    copy: 'An AI-powered resume evaluation system that uses LLMs to match resumes against job descriptions and score candidates.',
    accent: '#7148fc',
    icon: <ResumeIcon />,
    stack: ['FastAPI', 'Python', 'PostgreSQL', 'Grok AI'],
    highlights: [
      'LLM-based scoring for ATS optimization, keyword extraction and skill matching',
      'Asynchronous processing with optimized database queries',
      'Faster responses through caching and backend performance tuning',
    ],
  },
  {
    id: 'smartclips',
    name: 'SmartClips AI',
    category: 'AI Video Generation',
    copy: 'A full-stack AI platform that generates short-form videos automatically from text prompts.',
    accent: '#ef2f4c',
    icon: <ClipIcon />,
    stack: ['React', 'TypeScript', 'AI APIs', 'Clerk'],
    highlights: [
      'AI APIs for content generation and an automated media pipeline',
      'Secure authentication and user management with Clerk',
    ],
  },
  {
    id: 'invoices',
    name: 'Invoice Management System',
    category: 'Full-Stack Application',
    copy: 'A full-stack invoice management system with analytics and reporting features.',
    accent: '#0c9b56',
    icon: <InvoiceIcon />,
    stack: ['Node.js', 'React', 'MongoDB'],
    highlights: [
      'Scalable REST APIs and a MongoDB schema optimized for fast queries',
      'Search, filtering and invoice tracking',
    ],
  },
];

const profiles: SocialProfile[] = [
  {
    id: 'github',
    featured: true,
    name: 'GitHub',
    category: 'Code & Projects',
    href: githubUrl,
    copy: 'Where my code lives. Explore my repositories, side projects and the technologies I am currently working with.',
    accent: '#2f2f3a',
    icon: <GitHubIcon />,
  },
  {
    id: 'linkedin',
    featured: true,
    name: 'LinkedIn',
    category: 'Professional Network',
    href: siteConfig.linkedinUrl,
    copy: 'My professional profile, with my experience building backend systems and the best place to connect about roles and collaborations.',
    accent: '#0a66c2',
    icon: <LinkedInIcon />,
    visual: <LinkedInVisual />,
  },
];

/** Profiles without a configured URL stay hidden. */
const visibleProfiles = profiles.filter((profile) => profile.href);

type CardHeaderProps = {
  name: string;
  category: string;
  accent: string;
  icon: ReactNode;
  external: boolean;
};

function CardHeader({
  name,
  category,
  accent,
  icon,
  external,
}: CardHeaderProps) {
  return (
    <div className="social-card-top">
      <div className="social-card-identity">
        <span className="social-card-icon" style={{ background: accent }}>
          {icon}
        </span>
        <div>
          <h2>{name}</h2>
          <p className="social-card-category">{category}</p>
        </div>
      </div>
      {external ? <ExternalIcon /> : null}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      <CardHeader
        name={project.name}
        category={project.category}
        accent={project.accent}
        icon={project.icon}
        external={Boolean(project.href)}
      />
      <p className="social-card-copy">{project.copy}</p>
      <ProjectVisual project={project} />
    </>
  );

  if (project.href) {
    return (
      <a
        className="social-card"
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.name}, ${project.category}`}
      >
        {content}
      </a>
    );
  }

  return <article className="social-card">{content}</article>;
}

export const SocialMediaCarousel = ({
  pinnedRepositories,
}: SocialMediaCarouselProps) => {
  return (
    <div className="social-grid">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}

      {visibleProfiles.map((profile) => {
        if (profile.id === 'github') {
          return (
            <article
              key={profile.id}
              className="social-card social-card-featured social-card-github"
            >
              <a
                className="social-card-profile-link"
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${profile.name}, ${profile.category}`}
              >
                <CardHeader {...profile} external />
              </a>
              <p className="social-card-copy">{profile.copy}</p>
              <GitHubVisual repositories={pinnedRepositories} />
            </article>
          );
        }

        return (
          <a
            key={profile.id}
            className={
              profile.featured
                ? 'social-card social-card-featured'
                : 'social-card'
            }
            href={profile.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${profile.name}, ${profile.category}`}
          >
            <CardHeader {...profile} external />
            <p className="social-card-copy">{profile.copy}</p>
            {profile.visual}
          </a>
        );
      })}
    </div>
  );
};

export default SocialMediaCarousel;
