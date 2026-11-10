'use client';

import { useEffect, useState } from 'react';
import { RESUME_TIME_ZONE, RESUME_TIME_ZONE_LABEL } from '@/lib/resume';
import styles from './resume.module.css';

const formatTime = (date: Date, timeZone: string) =>
  new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    timeZone,
  }).format(date);

/** Minutes ahead of UTC for a zone at a given instant. */
const getOffsetMinutes = (date: Date, timeZone: string) => {
  const part = new Intl.DateTimeFormat('en-US', {
    timeZone,
    timeZoneName: 'shortOffset',
  })
    .formatToParts(date)
    .find((item) => item.type === 'timeZoneName')?.value;

  const match = part?.match(/GMT([+-])(\d+)(?::(\d+))?/);
  if (!match) return 0;

  const sign = match[1] === '-' ? -1 : 1;
  return sign * (Number(match[2]) * 60 + Number(match[3] ?? 0));
};

const describeDifference = (minutes: number) => {
  if (minutes === 0) return "We're in the same timezone!";

  const absolute = Math.abs(minutes);
  const hours = Math.floor(absolute / 60);
  const rest = absolute % 60;
  const amount = [hours ? `${hours}h` : '', rest ? `${rest}m` : '']
    .filter(Boolean)
    .join(' ');

  return `${amount} ${minutes > 0 ? 'ahead of' : 'behind'} you`;
};

export const ResumeTimeCard = ({ className }: { className: string }) => {
  // Rendered on the client only: the server cannot know the visitor's zone.
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const timer = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  if (!now) {
    return (
      <section className={className} aria-hidden="true">
        <div className={styles.timePlaceholder} />
      </section>
    );
  }

  const visitorTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const difference =
    getOffsetMinutes(now, RESUME_TIME_ZONE) -
    getOffsetMinutes(now, visitorTimeZone);

  return (
    <section className={className} aria-label="Local time">
      <div className={styles.timeRow}>
        <div>
          <p className={styles.timeLabel}>
            <span className={styles.timeDot} aria-hidden="true" />
            {RESUME_TIME_ZONE_LABEL}
          </p>
          <p className={styles.timeValue}>
            {formatTime(now, RESUME_TIME_ZONE)}
          </p>
        </div>
        <div className={styles.timeRight}>
          <p className={styles.timeLabel}>You</p>
          <p className={styles.timeValue}>{formatTime(now, visitorTimeZone)}</p>
        </div>
      </div>
      <p className={styles.timeNote}>{describeDifference(difference)}</p>
    </section>
  );
};

export default ResumeTimeCard;
