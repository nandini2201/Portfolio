'use client';

import { useEffect, useState } from 'react';
import styles from './resume.module.css';

type ResumeContactCardProps = {
  className: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  /** Empty when no PDF has been added to `public/`. */
  pdfHref: string;
};

export const ResumeContactCard = ({
  className,
  email,
  githubUrl,
  linkedinUrl,
  pdfHref,
}: ResumeContactCardProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;

    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className={className}>
      <h2 className={styles.eyebrow}>Get in touch</h2>
      <div className={styles.contactRow}>
        <a className={styles.link} href={`mailto:${email}`}>
          {email}
        </a>
        <button
          type="button"
          className={styles.copyButton}
          onClick={copyEmail}
          aria-label={copied ? 'Email address copied' : 'Copy email address'}
        >
          {copied ? 'Copied ✓' : 'Copy'}
        </button>
      </div>

      <div className={styles.contactActions}>
        {pdfHref ? (
          <a className={styles.primaryButton} href={pdfHref} download>
            Download CV ↓
          </a>
        ) : null}
        {githubUrl ? (
          <a
            className={styles.ghostButton}
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        ) : null}
        {linkedinUrl ? (
          <a
            className={styles.ghostButton}
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        ) : null}
      </div>
    </section>
  );
};

export default ResumeContactCard;
