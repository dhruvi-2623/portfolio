import { useEffect, useRef } from "react";
import { FadeIn, AnimatedText } from "./Components.jsx";

// ============================================================
// HERO
// ============================================================
function Hero() {
  return (
    <section className="hero">
      <FadeIn className="navbar" y={-20} delay={0}>
        <a href="#" className="navbar-brand">Dhruviben Patel</a>
        <nav>
          <a href="#about">About</a>
          <a href="#services">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="https://github.com/dhruvi-2623" target="_blank" rel="noopener">GitHub</a>
          <a href="https://www.linkedin.com/in/dhruvipatel2623" target="_blank" rel="noopener">LinkedIn</a>
          <a href="/resume.pdf" download className="contact-btn nav-resume-btn">Résumé</a>
        </nav>
      </FadeIn>

      <FadeIn as="div" className="hero-heading-wrap" y={40} delay={0.15}>
        <h1 className="hero-heading">hi, i&rsquo;m dhruvi</h1>
      </FadeIn>

      <div className="hero-bottom">
        <FadeIn as="div" className="hero-tagline-wrap" y={20} delay={0.35}>
          <p className="hero-tagline">Full-Stack Software Engineer</p>
          <p className="hero-location">Houston, TX &middot; Open to full-time SWE roles</p>
        </FadeIn>
        <FadeIn as="div" className="hero-ctas" y={20} delay={0.5}>
          <a href="#projects" className="ghost-btn">View Work</a>
          <a href="/resume.pdf" download className="ghost-btn">Download Résumé</a>
          <a href="#contact" className="contact-btn">Contact</a>
        </FadeIn>
      </div>
    </section>
  );
}

// ============================================================
// MARQUEE — Dhruvi's own project screenshots
// ============================================================
const MARQUEE_IMAGES = [
  'assets/chat-1-login.png',
  'assets/chat-2-contacts.png',
  'assets/chat-3-profile.png',
  'assets/healthcare-1-welcome.png',
  'assets/healthcare-2-telehealth.png',
  'assets/healthcare-3-corporate.png',
  'assets/healthcare-4-intake.png',
  'assets/foody-1-burger.png',
  'assets/foody-2-cart.png',
  'assets/foody-3-catering.png',
  'assets/exp-bigblue-illustration.jpeg',
  'assets/exp-biztech-illustration.jpeg',
  'assets/exp-elsner-illustration.jpeg',
];

function Marquee() {
  const sectionRef = useRef(null);
  const row1 = useRef(null);
  const row2 = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const sec = sectionRef.current;
      if (!sec) return;
      const sectionTop = sec.offsetTop;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      if (row1.current) row1.current.style.transform = `translateX(${offset - 200}px)`;
      if (row2.current) row2.current.style.transform = `translateX(${-(offset - 200)}px)`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const first = MARQUEE_IMAGES.slice(0, 7);
  const second = MARQUEE_IMAGES.slice(7);
  const triple = (arr) => [...arr, ...arr, ...arr];

  return (
    <section className="marquee" ref={sectionRef} aria-hidden="true">
      <div className="marquee-row" ref={row1}>
        {triple(first).map((src, i) => (
          <div className="marquee-tile" key={`r1-${i}`}>
            <img src={src} alt="" loading="lazy" />
          </div>
        ))}
      </div>
      <div className="marquee-row" ref={row2}>
        {triple(second).map((src, i) => (
          <div className="marquee-tile" key={`r2-${i}`}>
            <img src={src} alt="" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}

// ============================================================
// ABOUT
// ============================================================
function About() {
  const text = "I build full-stack web products with React, TypeScript, Node.js, ASP.NET Core, MongoDB, and SQL Server. I take end-to-end ownership — from system design through production delivery. Currently integrating LLM tool-use via the Model Context Protocol into real shipped apps.";

  return (
    <section className="about" id="about">
      <FadeIn as="div" className="about-corner tl" x={-80} delay={0.1}>
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt=""
          loading="lazy"
        />
      </FadeIn>
      <FadeIn as="div" className="about-corner tr" x={80} delay={0.15}>
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt=""
          loading="lazy"
        />
      </FadeIn>
      <FadeIn as="div" className="about-corner bl" x={-80} delay={0.25}>
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt=""
          loading="lazy"
        />
      </FadeIn>
      <FadeIn as="div" className="about-corner br" x={80} delay={0.3}>
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt=""
          loading="lazy"
        />
      </FadeIn>

      <FadeIn as="h2" className="hero-heading" y={40} delay={0}>
        About me
      </FadeIn>

      <AnimatedText text={text} />

      <FadeIn y={20} delay={0.1}>
        <a href="#contact" className="contact-btn">Get In Touch</a>
      </FadeIn>
    </section>
  );
}

export { Hero, About };
