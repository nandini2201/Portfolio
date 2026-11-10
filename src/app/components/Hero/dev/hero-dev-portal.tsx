'use client';

import { type ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const PANEL_OPEN_STORAGE_KEY = 'portfolio-hero-dev-panel';

/**
 * Escape the hero viewport stacking context so fixed dev panels
 * sit above About cards and other page content.
 *
 * The panel stays hidden until the "Scene settings" button is pressed, so
 * it does not cover the page while developing.
 */
export function HeroDevPortal({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      setOpen(localStorage.getItem(PANEL_OPEN_STORAGE_KEY) === 'open');
    } catch {
      // Storage unavailable: keep the panel closed.
    }
    setReady(true);
  }, []);

  if (!ready || typeof document === 'undefined') {
    return null;
  }

  const toggle = () => {
    const next = !open;
    setOpen(next);
    try {
      localStorage.setItem(PANEL_OPEN_STORAGE_KEY, next ? 'open' : 'closed');
    } catch {
      // Storage unavailable: the choice lasts for this page view only.
    }
  };

  return createPortal(
    <>
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        style={{
          position: 'fixed',
          right: 12,
          bottom: 24,
          zIndex: 10000,
          padding: '8px 14px',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          borderRadius: 999,
          background: 'rgba(12, 18, 28, 0.88)',
          color: '#ffffff',
          font: '600 12px / 1.2 ui-sans-serif, system-ui, sans-serif',
          cursor: 'pointer',
        }}
      >
        {open ? 'Hide scene settings' : 'Scene settings'}
      </button>
      {open ? children : null}
    </>,
    document.body,
  );
}

export default HeroDevPortal;
