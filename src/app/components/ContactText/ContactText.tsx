import './ContactText.css';
import { siteConfig } from '@/lib/site-config';

type ContactTextProps = {};

export const ContactText = ({ ...props }: ContactTextProps) => {
  return (
    <>
      <div className="contact-text">
        <p>
          I am open to talking about other projects. You can reach me here at{' '}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. I look
          forward to hearing from you!
        </p>
      </div>
    </>
  );
};

export default ContactText;
