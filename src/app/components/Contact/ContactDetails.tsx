'use client';

import { githubUrl, siteConfig } from '@/lib/site-config';
import CopyEmailButton from './CopyEmailButton';

export const ContactDetails = () => {
  const hasLinks = Boolean(githubUrl || siteConfig.linkedinUrl);

  return (
    <aside
      className="contact-details"
      aria-labelledby="contact-details-heading"
    >
      <p className="contact-details-kicker">Get in touch</p>
      <h3 id="contact-details-heading">
        Have a role, project or collaboration in mind?
      </h3>
      <p className="contact-details-copy">
        Feel free to send me a message. I read every enquiry and usually reply
        as soon as I can.
      </p>

      <div className="contact-details-block">
        <p className="contact-details-label">Email</p>
        <div className="contact-details-email-row">
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <CopyEmailButton />
        </div>
      </div>

      <div className="contact-details-block">
        <p className="contact-details-label">Location</p>
        <p className="contact-details-value">{siteConfig.location}</p>
      </div>

      <p className="contact-availability">
        <span className="contact-availability-dot" aria-hidden="true" />
        Open to opportunities
      </p>

      {hasLinks ? (
        <div className="contact-details-links">
          {githubUrl ? (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          ) : null}
          {siteConfig.linkedinUrl ? (
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          ) : null}
        </div>
      ) : null}
    </aside>
  );
};

export default ContactDetails;
