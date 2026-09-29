import { FadeIn } from "./Components.jsx";

// ============================================================
// HERO
// ============================================================
// Impact numbers pulled from the Experience and Projects sections.
// Update together if those change.
const HERO_STATS = [
  { n: '4', label: 'LLM Agents' },
  { n: '22', label: 'REST Controllers' },
  { n: '60→95', label: 'Lighthouse Score' },
  { n: '200', label: 'Early Adopters' },
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
          <p className="hero-location">Houston, TX &middot; Open to AI, Forward Deployed &amp; Backend roles</p>
        </FadeIn>

        <FadeIn as="h1" className="hero-heading" y={30} delay={0.15}>
          Hi, i&rsquo;m Dhruvi
        </FadeIn>

        <FadeIn as="p" className="hero-tagline" y={20} delay={0.22}>
          AI Engineer &middot; Forward Deployed &middot; Backend
        </FadeIn>

        <FadeIn as="p" className="hero-description" y={20} delay={0.3}>
          I build LLM-powered systems and the backends that run them: multi-agent apps on the Gemini API with RAG, .NET 10 and Node.js APIs, and integrations that hold up in production. Software Developer at Bigblue Technologies, where I'm shipping the company's Android app with React Native, Firebase, and Claude Code.
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
  const paragraphs = [
    "I'm a software engineer who likes sitting between the customer and the codebase. I take a messy requirement, turn it into a spec, build the backend and integrations, and stay with it until it works in production.",
    "Right now I'm a Software Developer at Bigblue Technologies, converting the company's production iOS app to Android with React Native and Firebase and using Claude Code to move faster without skipping review. Before that I stabilized the SwiftUI app for its first 200 early adopters and rebuilt the marketing site from a Lighthouse score of 60 to 95.",
    "On the AI side, I built SyncMind AI, a four-agent workspace on the Gemini API with RAG, deployed on Google Cloud. On the backend side, I migrated a 7-year-old .NET Web Forms system into a HIPAA-compliant .NET 10 API with 48 entities, 22 controllers, and a fax pipeline clinics rely on. I hold Anthropic certifications in MCP and Claude Code, and I published research on AI investment as a strategic signal.",
  ];

  const focus = [
    { k: 'AI Engineering', v: 'LLM apps, multi-agent orchestration, RAG, MCP tool-use' },
    { k: 'Forward Deployed', v: 'Stakeholder requirements to specs, integrations, demos, iteration' },
    { k: 'Backend', v: '.NET 10, EF Core, Node.js, REST, auth, SQL and NoSQL data models' },
  ];

  return (
    <section className="about" id="about">
      <FadeIn as="h2" y={30} delay={0}>About me</FadeIn>
      {paragraphs.map((t, i) => (
        <FadeIn as="p" className="about-text" y={20} delay={0.1 + i * 0.05} key={i}>
          {t}
        </FadeIn>
      ))}
      <FadeIn as="div" className="about-focus" y={20} delay={0.25}>
        {focus.map((f) => (
          <div className="about-focus-item" key={f.k}>
            <span className="about-focus-key">{f.k}</span>
            <span className="about-focus-val">{f.v}</span>
          </div>
        ))}
      </FadeIn>
      <FadeIn y={20} delay={0.3}>
        <a href="#contact" className="contact-btn">Get In Touch</a>
      </FadeIn>
    </section>
  );
}

export { Hero, About };
