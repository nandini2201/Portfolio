'use client';

import Image from 'next/image';
import {
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { siteConfig } from '@/lib/site-config';
import profilePicture from '../../img/profile-picture.png';
import './AboutProfileText.css';

type AboutCard = {
  id: string;
  label: string;
  accent: string;
  headline: string;
  description?: string;
  points: string[];
  icon: ReactNode;
  visual: ReactNode;
};

const CheckIcon = () => (
  <svg
    className="about-card-check"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.14" />
    <path
      d="M5.8 10.2 8.4 12.8 14.2 7"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProfileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M5.5 18.5c1.2-2.8 3.5-4.2 6.5-4.2s5.3 1.4 6.5 4.2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const ToolingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect
      x="4"
      y="5"
      width="16"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M8 10.5 10.5 13 8 15.5M13 15.5h3"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ExperienceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M8 9V7.5A2.5 2.5 0 0 1 10.5 5h3A2.5 2.5 0 0 1 16 7.5V9"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <rect
      x="4.5"
      y="9"
      width="15"
      height="10"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path d="M4.5 13.5h15" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const EducationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="m3.5 9.5 8.5-4 8.5 4-8.5 4-8.5-4Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M7 11.5v4c1.3 1.3 3 2 5 2s3.7-.7 5-2v-4M20.5 9.5v5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LoopIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M7 8.5A5.5 5.5 0 0 1 17.5 10M17 15.5A5.5 5.5 0 0 1 6.5 14"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M16 6.5 17.5 10 14 11M8 17.5 6.5 14 10 13"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProfileVisual = () => (
  <div className="about-visual about-visual-profile">
    <div className="about-visual-window">
      <div className="about-visual-chrome">
        <span />
        <span />
        <span />
      </div>
      <div className="about-visual-profile-body">
        <Image
          src={profilePicture}
          alt={siteConfig.name}
          width={72}
          height={72}
        />
        <div>
          <p className="about-visual-name">{siteConfig.name}</p>
          <p className="about-visual-role">{siteConfig.shortRole}</p>
          <div className="about-visual-tags">
            <span>Python</span>
            <span>FastAPI</span>
            <span>PostgreSQL</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ToolingVisual = () => (
  <div className="about-visual about-visual-tooling">
    <div className="about-visual-window">
      <div className="about-visual-chrome">
        <span />
        <span />
        <span />
        <p>terminal</p>
      </div>
      <pre>
        <span className="about-visual-prompt">~/api</span>
        <span className="about-visual-cmd"> uvicorn app.main:app</span>
        {'\n'}
        <span className="about-visual-comment">
          # async work goes to the queue
        </span>
        {'\n'}
        <span className="about-visual-prompt">→</span>
        <span className="about-visual-cmd"> celery · rabbitmq · redis</span>
      </pre>
    </div>
    <div className="about-visual-pills">
      <span>FastAPI</span>
      <span>PostgreSQL</span>
      <span>Docker</span>
    </div>
  </div>
);

const ExperienceVisual = () => (
  <div className="about-visual about-visual-open">
    <div className="about-visual-job">
      <p>Software Engineer (Backend)</p>
      <span>Trasna Solutions · Dubai, UAE</span>
    </div>
    <div className="about-visual-job about-visual-job-offset">
      <p>Sep 2023 – Present</p>
      <span>FastAPI · Flask · Celery · RabbitMQ</span>
    </div>
  </div>
);

const EarlierVisual = () => (
  <div className="about-visual about-visual-process">
    <div className="about-visual-steps">
      <div>
        <span>01</span>
        <p>Automate</p>
      </div>
      <div>
        <span>02</span>
        <p>Test</p>
      </div>
      <div>
        <span>03</span>
        <p>Validate</p>
      </div>
    </div>
    <p className="about-visual-process-note">MPLS and BGP network systems</p>
  </div>
);

const EducationVisual = () => (
  <div className="about-visual about-visual-open">
    <div className="about-visual-job">
      <p>Amity University, Noida</p>
      <span>2019 – 2023</span>
    </div>
    <div className="about-visual-job about-visual-job-offset">
      <p>B.Tech, Computer Science</p>
      <span>CGPA 8.8</span>
    </div>
  </div>
);

const cards: AboutCard[] = [
  {
    id: 'profile',
    label: 'Profile',
    accent: '#7148FC',
    headline: 'I build backend systems that scale',
    description:
      'Backend software engineer with 3+ years of experience in distributed systems, REST APIs and microservices using Python.',
    points: [
      'FastAPI, Flask and Django in production',
      'System design, database optimization and cloud deployments',
      'Focused on scalability, reliability and maintainability',
    ],
    icon: <ProfileIcon />,
    visual: <ProfileVisual />,
  },
  {
    id: 'experience',
    label: 'Experience',
    accent: '#0c9b56',
    headline: 'Backend engineer at Trasna Solutions',
    description: 'Dubai, UAE · Sep 2023 – Present',
    points: [
      '20+ scalable backend services built with FastAPI and Flask',
      'API performance improved by up to 40% with PostgreSQL indexing, query optimization and Redis caching',
      '50+ REST APIs for profile management, provisioning workflows and reporting',
      'Distributed microservices for high-volume transactions with Celery and RabbitMQ',
    ],
    icon: <ExperienceIcon />,
    visual: <ExperienceVisual />,
  },
  {
    id: 'platform',
    label: 'Platform work',
    accent: '#0e8aa8',
    headline: 'Reliable, secure and shipped',
    description:
      'The parts of the Trasna backend that keep services fast to deploy and safe to run.',
    points: [
      'Event-driven workflows that improved reliability and throughput',
      'Dockerized services deployed through CI/CD pipelines on cloud infrastructure',
      'JWT-based authentication and role-based access control',
      'System design for scalable, high-availability architecture',
    ],
    icon: <ToolingIcon />,
    visual: <ToolingVisual />,
  },
  {
    id: 'earlier',
    label: 'Earlier',
    accent: '#ef2f4c',
    headline: 'Software engineer at Ciena India',
    description: 'Gurugram, India · Jan 2023 – Aug 2023',
    points: [
      'Automation tools for MPLS and BGP network systems that cut manual effort by 30%',
      'RPC-based automation and testing frameworks for large-scale network validation',
      'Automated test pipelines that raised coverage across distributed routing environments',
    ],
    icon: <LoopIcon />,
    visual: <EarlierVisual />,
  },
  {
    id: 'education',
    label: 'Education',
    accent: '#c99200',
    headline: 'B.Tech in Computer Science & Engineering',
    description: 'Amity University, Noida · 2019 – 2023',
    points: ['Graduated with a CGPA of 8.8'],
    icon: <EducationIcon />,
    visual: <EducationVisual />,
  },
];

export const AboutProfileText = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanScrollLeft(track.scrollLeft > 8);
    setCanScrollRight(track.scrollLeft < maxScroll - 8);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateScrollState();
    track.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      track.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByCard = (direction: 'left' | 'right') => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>('.about-card');
    const styles = card ? window.getComputedStyle(track) : null;
    const gap = styles ? parseFloat(styles.columnGap || styles.gap) || 24 : 24;
    const amount = (card?.offsetWidth ?? 392) + gap;

    track.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="about-cards">
      <div className="about-cards-toolbar">
        <p className="about-cards-kicker">A few things worth knowing</p>
        <div className="about-cards-nav">
          <button
            type="button"
            className="about-cards-arrow"
            aria-label="Previous about cards"
            disabled={!canScrollLeft}
            onClick={() => scrollByCard('left')}
          >
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M10 3 5 8l5 5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className="about-cards-arrow"
            aria-label="Next about cards"
            disabled={!canScrollRight}
            onClick={() => scrollByCard('right')}
          >
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="m6 3 5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className="about-cards-track"
        ref={trackRef}
        role="region"
        aria-label={`About ${siteConfig.firstName}`}
      >
        {cards.map((card) => (
          <article className="about-card" key={card.id}>
            <div className="about-card-visual" data-visual={card.id}>
              {card.visual}
            </div>
            <div className="about-card-body">
              <div className="about-card-label">
                <span
                  className="about-card-icon"
                  style={{ background: card.accent }}
                >
                  {card.icon}
                </span>
                {card.label}
              </div>
              <h2>{card.headline}</h2>
              {card.description ? <p>{card.description}</p> : null}
              <ul>
                {card.points.map((point) => (
                  <li key={point}>
                    <CheckIcon />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default AboutProfileText;
