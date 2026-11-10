import { githubUrl, siteConfig } from '@/lib/site-config';
import './FooterText.css';

const footerLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Tech Stack', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
];

/** Links without a configured URL stay hidden. */
const socialLinks = [
  { label: 'GitHub', href: githubUrl, icon: GitHubIcon },
  { label: 'LinkedIn', href: siteConfig.linkedinUrl, icon: LinkedInIcon },
  { label: 'Email', href: `mailto:${siteConfig.email}`, icon: EmailIcon },
].filter((link) => link.href);

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.81c0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m4 7.5 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const FooterText = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-main">
          <div className="site-footer-identity">
            <p className="site-footer-name">{siteConfig.name}</p>
            <p className="site-footer-bio">
              Backend Software Engineer building scalable distributed systems,
              REST APIs and microservices.
            </p>
            <ul className="site-footer-social">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={
                        link.href.startsWith('mailto:') ? undefined : '_blank'
                      }
                      rel="noopener noreferrer"
                    >
                      <Icon />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <p className="site-footer-authorship">
              Built with Next.js + TypeScript.
            </p>
          </div>

          <nav
            className="site-footer-nav"
            aria-labelledby="footer-explore-heading"
          >
            <h2 id="footer-explore-heading" className="site-footer-nav-label">
              Explore
            </h2>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="site-footer-utility">
          <div className="site-footer-meta">
            <p className="site-footer-copyright">
              &copy; {year} {siteConfig.name}
            </p>
            <p className="site-footer-location">{siteConfig.location}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterText;
