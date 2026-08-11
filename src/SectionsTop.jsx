import { FadeIn } from "./Components.jsx";

// ============================================================
// HERO
// ============================================================
// Counts mirror the Experience / Projects / Education / Certifications
// arrays in their respective section files — update together if those change.
const HERO_STATS = [
  { n: '03', label: 'Roles Held' },
  { n: '05', label: 'Projects Shipped' },
  { n: '02', label: 'Degrees' },
  { n: '03', label: 'Certifications' },
];

function Hero() {
  return (
    <section className="hero">
      <FadeIn className="navbar" y={-20} delay={0}>
        <a href="#" className="navbar-brand">Dhruviben Patel</a>
        <nav>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#services">Skills</a>
          <a href="#projects">Projects</a>
          <a href="https://github.com/dhruvi-2623" target="_blank" rel="noopener">GitHub</a>
          <a href="https://www.linkedin.com/in/dhruvipatel2623" target="_blank" rel="noopener">LinkedIn</a>
          <a href="/resume.pdf" download className="contact-btn nav-resume-btn">Résumé</a>
        </nav>
      </FadeIn>

      <div className="hero-rail" aria-hidden="true">
        <span className="hero-rail-dot" />
        <span className="hero-rail-dot" />
        <span className="hero-rail-dot" />
        <span className="hero-rail-dot" />
      </div>

      <div className="hero-main">
        <FadeIn as="div" className="hero-status-wrap" y={-10} delay={0.05}>
          <p className="hero-location">Houston, TX &middot; Open to full-time SWE roles</p>
        </FadeIn>

        <FadeIn as="h1" className="hero-heading" y={30} delay={0.15}>
          Hi, i&rsquo;m Dhruvi
        </FadeIn>

        <FadeIn as="p" className="hero-tagline" y={20} delay={0.22}>
          Full-Stack Software Engineer
        </FadeIn>

        <FadeIn as="p" className="hero-description" y={20} delay={0.3}>
          I build full-stack web products with React, TypeScript, Node.js, ASP.NET Core, MongoDB, and SQL Server. I take end-to-end ownership — from system design through production delivery. Currently integrating LLM tool-use via the Model Context Protocol into real shipped apps.
        </FadeIn>

        <FadeIn as="div" className="hero-ctas" y={20} delay={0.4}>
          <a href="#contact" className="contact-btn">Contact</a>
          <a href="#projects" className="ghost-btn">View Work</a>
          <a href="/resume.pdf" download className="ghost-btn">Download Résumé</a>
        </FadeIn>

        <FadeIn as="div" className="hero-stats" y={20} delay={0.5}>
          {HERO_STATS.map((s) => (
            <div className="hero-stat" key={s.label}>
              <span className="hero-stat-num">{s.n}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </FadeIn>
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
      <FadeIn as="h2" y={30} delay={0}>About me</FadeIn>
      <FadeIn as="p" className="about-text" y={20} delay={0.1}>
        {text}
      </FadeIn>
      <FadeIn y={20} delay={0.2}>
        <a href="#contact" className="contact-btn">Get In Touch</a>
      </FadeIn>
    </section>
  );
}

export { Hero, About };
