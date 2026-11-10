'use client';

import { useEffect, useState } from 'react';
import styles from './resume.module.css';

const ACCENTS = [
  { id: 'default', label: 'Purple', from: '#8a66ff', to: '#ff79c6' },
  { id: 'green', label: 'Green', from: '#34d67a', to: '#5cc8f0' },
  { id: 'sunset', label: 'Sunset', from: '#f6c744', to: '#ff8a5c' },
] as const;

type AccentId = (typeof ACCENTS)[number]['id'];

const ACCENT_STORAGE_KEY = 'portfolio-resume-accent';

const isAccentId = (value: unknown): value is AccentId =>
  ACCENTS.some((accent) => accent.id === value);

export const ResumeAccentCard = ({ className }: { className: string }) => {
  const [active, setActive] = useState<AccentId>('default');

  useEffect(() => {
    try {
      const saved = localStorage.getItem(ACCENT_STORAGE_KEY);
      if (isAccentId(saved)) setActive(saved);
    } catch {
      // Storage unavailable: keep the default accent.
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.resumeAccent = active;
    return () => {
      delete document.documentElement.dataset.resumeAccent;
    };
  }, [active]);

  const select = (id: AccentId) => {
    setActive(id);
    try {
      localStorage.setItem(ACCENT_STORAGE_KEY, id);
    } catch {
      // Storage unavailable: the choice lasts for this page view only.
    }
  };

  return (
    <section className={className}>
      <h2 className={styles.eyebrow}>Accent color</h2>
      <div className={styles.accents}>
        {ACCENTS.map((accent) => (
          <button
            key={accent.id}
            type="button"
            className={styles.accentButton}
            aria-label={`Use ${accent.label} accent`}
            aria-pressed={active === accent.id}
            onClick={() => select(accent.id)}
            style={{
              backgroundImage: `linear-gradient(to bottom right, ${accent.from}, ${accent.to})`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ResumeAccentCard;
