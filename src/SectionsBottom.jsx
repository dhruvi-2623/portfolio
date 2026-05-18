// Services + Projects + Footer — content from Dhruviben's GitHub repo
import { useEffect, useRef, useState } from "react";
import { FadeIn, GhostButton } from "./Components.jsx";

// ============================================================
// SERVICES — Dhruvi's skill groups in the 5-item format
// ============================================================
const SERVICES = [
  {
    n: '01',
    name: 'Frontend Engineering',
    desc: 'React, TypeScript, and component systems with a focus on performance, accessibility, and clean UX — code-splitting, responsive layouts, and conversion-oriented interfaces.',
  },
  {
    n: '02',
    name: 'Full-Stack Web',
    desc: 'React + Node.js + ASP.NET Core APIs backed by MongoDB or SQL on Azure. End-to-end ownership from idea through QA, release, and iteration.',
  },
  {
    n: '03',
    name: 'Backend & APIs',
    desc: 'REST APIs with JWT auth, role-based access, query optimization, indexing, and pagination — secure document systems that cut manual operational effort by 60% or more.',
  },
  {
    n: '04',
    name: 'Real-Time Systems',
    desc: 'Socket.IO architectures with presence, typing indicators, and rooms — resilient WebSocket flows with optimistic UI and reconnect handling.',
  },
  {
    n: '05',
    name: 'Cloud & DevOps',
    desc: 'Microsoft Azure deployments, Azure DevOps pipelines, Docker containers, GitHub Actions CI/CD, and environment-safe configuration for local and production setups.',
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <FadeIn as="h2" y={40} delay={0}>Skills</FadeIn>
      <div className="service-list">
        {SERVICES.map((s, i) => (
          <FadeIn as="div" className="service-item" key={s.n} y={30} delay={i * 0.1}>
            <div className="service-num">{s.n}</div>
            <div>
              <h3 className="service-name">{s.name}</h3>
              <p className="service-desc">{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ============================================================
// PROJECTS — Dhruvi's real projects with real screenshots
// ============================================================
const PROJECTS = [
  {
    n: '01',
    cat: 'Personal',
    name: 'Realtime Chat',
    href: 'https://github.com/dhruvi-2623/nodejs-reactjs-chats',
    images: [
      'assets/chat-1-login.png',
      'assets/chat-2-contacts.png',
      'assets/chat-3-profile.png',
    ],
  },
  {
    n: '02',
    cat: 'Client',
    name: 'Healthcare Platform',
    images: [
      'assets/healthcare-1-welcome.png',
      'assets/healthcare-3-corporate.png',
      'assets/healthcare-2-telehealth.png',
    ],
    about: {
      title: 'NASA Fitness & Space Center Chiropractic Web Application',
      period: 'January 2026 – Present',
      summary: 'Built from scratch — a full-stack corporate-wellness and chiropractic platform that transforms physical treatment into online consultation, migrating a 7-year-old broken .NET Web Forms backend to a modern .NET 10 / React 19 stack with HIPAA compliance, fax pipelines, telehealth scheduling, and JWT-secured role-based access.',
      points: [
        'Built a NasaFitness application from scratch — enabling patients to take chiropractic treatment from a doctor on an online platform.',
        'Transformed physical treatment into online consultation.',
        'Migrated a 7-year-old broken .NET Web Forms backend to .NET Web API, with a React.js frontend and SQL databases compatible with new frameworks and AI integrations.',
        'Worked with mentor to gather requirements and translate non-technical needs into a technical path.',
        'Delivered updates via Microsoft Azure DevOps user stories.',
        'Built a .NET 10 / EF Core 10 / SQL Server backend for a corporate-wellness platform with a React 19 + Vite + Tailwind client, covering 48 domain entities and 22 REST controllers.',
        'Delivered a production-grade fax pipeline with dual transports (RingCentral REST API + SMTP email-to-fax) and a fax-compatible QuestPDF generator (PDF 1.4, Helvetica embed, vector text, US Letter) that dynamically renders 11-question PAR-Q forms for physician medical clearance.',
        'Managed SMTP delivery with env-driven configuration, TLS, and full DB-level audit of fax ID, send time, and clearance status for reconciliation and HIPAA traceability.',
        'Integrated Acuity Scheduling webhooks for telehealth appointment creation, with meeting URL persistence and consent-gated access on ConsentTelehealth.',
        'Implemented a layered HIPAA consent model (ConsentHipaa, HipaaAuthEndDate, DigitalSignatureName) plus specialist-referral audit trail (fax sent / response received timestamps) to satisfy minimum-necessary and right-to-revoke requirements.',
        'Hardened JWT authentication (BCrypt-hashed credentials, RoleId-qualified login, claim-carrying tokens) with four role classes — Admin, Super Admin, Employer, Patient/Employee — enforced via [Authorize] attributes, permission claims (manage_patients, manage_employees, …), and service-layer ownership checks.',
        'Used Claude AI for debugging.',
        'Attended weekly meetings with mentor to understand changes in flow and requirements.',
        'Used Git for code management and collaboration with teammates.',
      ],
      stack: ['.NET 10', 'EF Core 10', 'SQL Server', 'React 19', 'Vite', 'Tailwind CSS', 'RingCentral API', 'QuestPDF', 'JWT Auth', 'Azure DevOps', 'Acuity Scheduling', 'SMTP / TLS', 'BCrypt', 'Git'],
    },
  },
  {
    n: '03',
    cat: 'Personal',
    name: 'Service Broker System',
    href: 'https://github.com/dhruvi-2623/service-broker-system',
    // No screenshots — render a content-only card with description + features.
    summary:
      'A service registry that brokers requests between client apps and back-end services. Built with a React 19 admin dashboard and a Node + Express backend, persisted to SQLite for local development and MySQL for production.',
    features: [
      'Service registry with health tracking and per-instance status history',
      'Password hashing service using bcrypt + bcryptjs for credential security',
      'Random-token service for short-lived API keys and verification codes',
      'Email notifications through Nodemailer when service state changes',
      'Admin dashboard with React Router 7 routing and Axios-driven views',
    ],
    stack: ['React 19', 'Express', 'SQLite', 'MySQL', 'bcrypt', 'Nodemailer', 'Axios'],
  },
  {
    n: '04',
    cat: 'Full-Stack',
    name: 'Foody — Home Kitchen',
    href: 'https://github.com/dhruvi-2623/foody-main',
    images: [
      'assets/foody-1-burger.png',
      'assets/foody-2-cart.png',
      'assets/foody-3-catering.png',
    ],
  },
];

// ============================================================
// ABOUT PROJECT MODAL
// ============================================================
function AboutModal({ project, onClose }) {
  const about = project.about;
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="about-modal-overlay" onClick={onClose}>
      <div className="about-modal" onClick={(e) => e.stopPropagation()}>
        <button className="about-modal-close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="about-modal-header">
          <span className="about-modal-tag">{project.cat} &middot; {about.period}</span>
          <h4 className="about-modal-title">{about.title}</h4>
          <p className="about-modal-summary">{about.summary}</p>
        </div>

        <ul className="about-modal-points">
          {about.points.map((pt, i) => (
            <li key={i}>{pt}</li>
          ))}
        </ul>

        <div className="about-modal-stack">
          {about.stack.map((s) => (
            <span key={s} className="project-chip">{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index, total }) {
  const cardRef = useRef(null);
  const slotRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const targetScale = 1 - (total - 1 - index) * 0.03;
    const card = cardRef.current;
    const slot = slotRef.current;
    if (!card || !slot) return;

    const onScroll = () => {
      const rect = slot.getBoundingClientRect();
      const stickyTop = window.innerWidth >= 768 ? 96 : 64;
      const totalDist = window.innerHeight * 0.85;
      const passed = stickyTop - rect.top;
      const p = Math.max(0, Math.min(1, passed / totalDist));
      const isLast = index === (total - 1);
      const scale = isLast ? 1 : 1 - (1 - targetScale) * p;
      card.style.transform = `scale(${scale})`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [index, total]);

  const stickyTop = `calc(6rem + ${index * 52}px)`;

  // Layout decision:
  //   - features (no images) → content card with summary + bullets + tech stack
  //   - 4+ images           → 2 x 2 grid
  //   - otherwise           → 2-stacked + 1-tall (default)
  const hasImages = Array.isArray(project.images) && project.images.length > 0;
  const isFour = hasImages && project.images.length >= 4;

  return (
    <>
      {modalOpen && <AboutModal project={project} onClose={() => setModalOpen(false)} />}
      <div className="project-slot" ref={slotRef} style={{ top: stickyTop }}>
        <div
          className={`project-card${!hasImages ? " project-card--content" : ""}`}
          ref={cardRef}
        >
          <div className="project-head">
            <div className="project-num">{project.n}</div>
            <div className="project-info">
              <span className="project-cat">{project.cat}</span>
              <h3 className="project-name">{project.name}</h3>
            </div>
            {project.about ? (
              <GhostButton label="About Project" onClick={() => setModalOpen(true)} />
            ) : (
              <GhostButton href={project.href} label="Live Project" target="_blank" rel="noopener" />
            )}
          </div>

          {!hasImages ? (
            <div className="project-content">
              <p className="project-summary">{project.summary}</p>
              <ul className="project-features">
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <div className="project-chips">
                {project.stack.map((s) => (
                  <span key={s} className="project-chip">{s}</span>
                ))}
              </div>
            </div>
          ) : isFour ? (
            <div className="project-grid project-grid--quad">
              <div className="project-col">
                <div className="project-img half"><img src={project.images[0]} alt="" loading="lazy" /></div>
                <div className="project-img half"><img src={project.images[1]} alt="" loading="lazy" /></div>
              </div>
              <div className="project-col">
                <div className="project-img half"><img src={project.images[2]} alt="" loading="lazy" /></div>
                <div className="project-img half"><img src={project.images[3]} alt="" loading="lazy" /></div>
              </div>
            </div>
          ) : (
            <div className="project-grid">
              <div className="project-col-1">
                <div className="project-img top"><img src={project.images[0]} alt="" loading="lazy" /></div>
                <div className="project-img bot"><img src={project.images[1]} alt="" loading="lazy" /></div>
              </div>
              <div className="project-img tall"><img src={project.images[2]} alt="" loading="lazy" /></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}


function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="hero-heading">Project</h2>
      <div className="projects-list">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.n} project={p} index={i} total={PROJECTS.length} />
        ))}
      </div>
    </section>
  );
}

// ============================================================
// FOOTER
// ============================================================
function Footer() {
  return (
    <footer className="site-footer">
      <nav className="site-footer-nav">
        <a href="mailto:dhruvipatel2623@gmail.com">Email</a>
        <a href="https://github.com/dhruvi-2623" target="_blank" rel="noopener">GitHub</a>
        <a href="https://www.linkedin.com/in/dhruvipatel2623" target="_blank" rel="noopener">LinkedIn</a>
      </nav>
      <p className="site-footer-copy">© 2026 Dhruviben Patel · Houston, Texas</p>
    </footer>
  );
}

export { Services, Projects, Footer };
