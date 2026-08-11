// ============================================================
// Shared components for the portfolio
//   - FadeIn       : IntersectionObserver-driven fade/slide reveal
//   - Magnet       : mouse-following magnetic offset for hero portrait
//   - ContactButton: branded terracotta-gradient CTA pill
//   - GhostButton  : outline pill used on project cards
//   - AnimatedText : char-by-char scroll-driven opacity reveal
// ============================================================

import { useEffect, useRef, useState, useLayoutEffect, useMemo } from "react";

// ---- usePrefersReducedMotion -----------------------------------------------
function usePrefersReducedMotion() {
  const getMatch = () =>
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;
  const [reduced, setReduced] = useState(getMatch);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

// ---- FadeIn ----------------------------------------------------------------
function FadeIn({ as = 'div', children, delay = 0, y = 30, x = 0, className = '', style, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Sync fallback: if already in/near the viewport, reveal immediately.
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || 800;
    if (rect.top < vh + 100) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { rootMargin: '0px 0px -50px 0px', threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={`fade-in ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{
        transitionDelay: `${delay}s`,
        '--fade-y': `${y}px`,
        '--fade-x': `${x}px`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// ---- Magnet ----------------------------------------------------------------
function Magnet({ children, padding = 150, strength = 3, className = '', style }) {
  const ref = useRef(null);
  const inner = useRef(null);
  const [active, setActive] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    const child = inner.current;
    if (!el || !child || reducedMotion) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const within =
        Math.abs(dx) < rect.width / 2 + padding &&
        Math.abs(dy) < rect.height / 2 + padding;
      if (within) {
        setActive(true);
        child.style.transition = 'transform 0.3s ease-out';
        child.style.transform = `translate3d(${dx / strength}px, ${dy / strength}px, 0)`;
      } else if (active) {
        setActive(false);
        child.style.transition = 'transform 0.6s ease-in-out';
        child.style.transform = 'translate3d(0,0,0)';
      }
    };
    const onLeave = () => {
      setActive(false);
      child.style.transition = 'transform 0.6s ease-in-out';
      child.style.transform = 'translate3d(0,0,0)';
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, [padding, strength, active, reducedMotion]);

  return (
    <div ref={ref} className={className} style={style}>
      <div ref={inner} style={{ willChange: 'transform' }}>
        {children}
      </div>
    </div>
  );
}

// ---- ContactButton ---------------------------------------------------------
function ContactButton({ href = 'mailto:dhruvipatel2623@gmail.com', label = 'Contact Me', className = '' }) {
  return (
    <a href={href} className={`contact-btn ${className}`}>
      {label}
    </a>
  );
}

// ---- GhostButton -----------------------------------------------------------
function GhostButton({ href, label = 'Live Project', className = '', target, rel, onClick }) {
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={`ghost-btn ${className}`}>
        {label}
      </button>
    );
  }
  return (
    <a href={href || '#'} className={`ghost-btn ${className}`} target={target} rel={rel}>
      {label}
    </a>
  );
}

// ---- AnimatedText (char-by-char scroll reveal) -----------------------------
function AnimatedText({ text = '', className = '' }) {
  const ref = useRef(null);
  const chars = useMemo(() => String(text).split(''), [text]);
  const charRefs = useRef([]);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress: 0 when top is at 80% of viewport, 1 when bottom at 20%
      const start = vh * 0.8;
      const end = vh * 0.2;
      const span = start - end;
      const passed = start - rect.top;
      const progress = Math.max(0, Math.min(1, passed / (span + rect.height)));
      const litCount = Math.floor(progress * chars.length);
      charRefs.current.forEach((node, i) => {
        if (!node) return;
        node.classList.toggle('lit', i <= litCount);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [chars, reducedMotion]);

  return (
    <p ref={ref} className={`about-text ${className}`}>
      {chars.map((ch, i) => (
        <span
          key={i}
          ref={(n) => (charRefs.current[i] = n)}
          className={`char${reducedMotion ? ' lit' : ''}`}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </span>
      ))}
    </p>
  );
}

export { FadeIn, Magnet, ContactButton, GhostButton, AnimatedText, usePrefersReducedMotion };
