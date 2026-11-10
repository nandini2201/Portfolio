import { existsSync } from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import Image from 'next/image';
import {
  RESUME_PDF_FILE,
  resumeEducation,
  resumeExperience,
  resumeProjects,
  resumeSkillGroups,
  resumeSummary,
} from '@/lib/resume';
import { githubUrl, siteConfig } from '@/lib/site-config';
import profilePicture from '../img/profile-picture.png';
import ResumeAccentCard from './ResumeAccentCard';
import ResumeContactCard from './ResumeContactCard';
import ResumeTimeCard from './ResumeTimeCard';
import styles from './resume.module.css';

export const metadata: Metadata = {
  title: 'Resume',
  description: `Resume of ${siteConfig.name}, ${siteConfig.role}: skills, experience, projects and education on one page.`,
  alternates: { canonical: '/resume' },
};

export default function ResumePage() {
  const hasPdf = existsSync(
    path.join(process.cwd(), 'public', RESUME_PDF_FILE),
  );
  const year = new Date().getFullYear();

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <nav className={styles.nav} aria-label="Resume">
          <a className={styles.backLink} href="/">
            ← Portfolio
          </a>
          <a
            className={styles.logo}
            href="/"
            aria-label={`${siteConfig.name}, back to portfolio`}
          >
            NJ
          </a>
          <span className={styles.navSpacer} aria-hidden="true" />
        </nav>

        <main className={styles.grid}>
          <div className={styles.mainColumn}>
            <section className={`${styles.card} ${styles.orderIntro}`}>
              <div className={styles.intro}>
                <div className={styles.avatar}>
                  <Image
                    src={profilePicture}
                    alt={`Profile picture of ${siteConfig.firstName}`}
                    width={176}
                    height={176}
                    priority
                  />
                </div>
                <h1 className={styles.introTitle}>
                  Hi, I&apos;m{' '}
                  <span className={styles.gradientText}>
                    {siteConfig.firstName}
                  </span>{' '}
                  <span className={styles.wave} aria-hidden="true">
                    👋
                  </span>
                </h1>
                <p className={styles.introRole}>
                  {siteConfig.role} · {siteConfig.location}
                </p>
                <div className={styles.introCopy}>
                  {resumeSummary.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </section>

            <section className={`${styles.card} ${styles.orderExperience}`}>
              <h2 className={styles.eyebrow}>Experience</h2>
              <ol className={styles.timeline}>
                {resumeExperience.map((job) => (
                  <li key={job.company}>
                    <div className={styles.jobHeader}>
                      <div>
                        <h3 className={styles.jobCompany}>{job.company}</h3>
                        <p className={styles.jobRole}>{job.role}</p>
                      </div>
                      <div className={styles.jobMeta}>
                        <p>{job.period}</p>
                        <p>{job.location}</p>
                      </div>
                    </div>
                    <ul className={styles.points}>
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </section>

            <section className={`${styles.card} ${styles.orderProjects}`}>
              <h2 className={styles.eyebrow}>Projects</h2>
              <ul className={styles.projects}>
                {resumeProjects.map((project) => (
                  <li key={project.name} className={styles.project}>
                    <h3 className={styles.projectName}>
                      {project.href ? (
                        <a
                          className={styles.link}
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.name} ↗
                        </a>
                      ) : (
                        project.name
                      )}
                    </h3>
                    <p className={styles.projectStack}>{project.stack}</p>
                    <p className={styles.projectCopy}>{project.description}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className={styles.sideColumn}>
            <section className={`${styles.card} ${styles.orderStack}`}>
              <h2 className={styles.eyebrow}>Stack &amp; Tools</h2>
              <div className={styles.skillGroups}>
                {resumeSkillGroups.map((group) => (
                  <div key={group.label}>
                    <h3 className={styles.skillLabel}>{group.label}</h3>
                    <ul className={styles.badges}>
                      {group.items.map((item) => (
                        <li key={item} className={styles.badge}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className={`${styles.card} ${styles.orderEducation}`}>
              <h2 className={styles.eyebrow}>Education</h2>
              <h3 className={styles.jobCompany}>{resumeEducation.school}</h3>
              <p className={styles.jobRole}>{resumeEducation.degree}</p>
              <p className={styles.educationMeta}>
                {resumeEducation.period} · {resumeEducation.detail}
              </p>
            </section>

            <ResumeContactCard
              className={`${styles.card} ${styles.orderContact}`}
              email={siteConfig.email}
              githubUrl={githubUrl}
              linkedinUrl={siteConfig.linkedinUrl}
              pdfHref={hasPdf ? `/${RESUME_PDF_FILE}` : ''}
            />

            <ResumeTimeCard className={`${styles.card} ${styles.orderTime}`} />

            <ResumeAccentCard
              className={`${styles.card} ${styles.orderAccent}`}
            />

            <footer className={`${styles.card} ${styles.orderCopyright}`}>
              <p className={styles.copyright}>
                &copy; {year} · {siteConfig.name}
              </p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
