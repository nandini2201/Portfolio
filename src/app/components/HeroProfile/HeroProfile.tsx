'use client';

import Typewriter from 'typewriter-effect';
import { siteConfig } from '@/lib/site-config';
import { HeroSceneControls } from '../Hero/controls/HeroSceneControls';
import './HeroProfile.css';

const typewriterPhrases = [
  'Backend Engineer',
  'Python Developer',
  'API & Microservices Engineer',
  'Distributed Systems Engineer',
];

export const HeroProfile = () => {
  return (
    <div className="hero-profile-container">
      <div className="hero-profile">
        <p className="hero-profile-intro">
          Hey, I&apos;m {siteConfig.firstName}.
        </p>
        <h1>{siteConfig.shortRole}</h1>
        <div className="hero-profile-typewriter" aria-hidden="true">
          <Typewriter
            options={{
              strings: typewriterPhrases,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className="hero-profile-tagline">{siteConfig.tagline}</p>
        <div className="hero-profile-actions">
          <a className="hero-cta hero-cta-primary" href="/#projects">
            View Projects →
          </a>
          <a className="hero-cta hero-cta-secondary" href="/#contact">
            Contact Me
          </a>
          <a className="hero-cta hero-cta-secondary" href="/resume">
            Resume
          </a>
        </div>
        <HeroSceneControls />
      </div>
    </div>
  );
};

export default HeroProfile;
