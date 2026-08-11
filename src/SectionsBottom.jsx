import { useEffect, useState } from "react";
import { FadeIn, GhostButton } from "./Components.jsx";

// ============================================================
// SKILLS — 5 confirmed skill groups + Learning subsection
// ============================================================
const SERVICES = [
  {
    n: '01',
    name: 'Frontend Engineering',
    desc: 'React 18/19, TypeScript, JavaScript — component systems, responsive layouts, scroll-driven animations, code-splitting, and performance-first interfaces built for real users.',
  },
  {
    n: '02',
    name: 'Backend & APIs',
    desc: 'ASP.NET Core (.NET 10), Node.js, Express — 22-controller REST APIs with JWT auth, BCrypt, EF Core, role-based access (4 user classes), and HIPAA-compliant audit logging. End-to-end API ownership from schema to deployment.',
  },
  {
    n: '03',
    name: 'Databases & Data',
    desc: 'SQL Server, PostgreSQL, MongoDB, SQLite — schema design, query optimization, indexing, EF Core migrations. Owned a 48-entity domain model from scratch in a production healthcare system.',
  },
  {
    n: '04',
    name: 'Real-Time & Integrations',
    desc: 'Socket.IO WebSocket systems with rooms, presence, and typing indicators. Third-party integrations: RingCentral fax pipeline, Acuity Scheduling webhooks, Cloudinary CDN, SMTP/TLS delivery.',
  },
  {
    n: '05',
    name: 'AI & LLM Integration',
    desc: 'Anthropic MCP-certified. Building a Model Context Protocol server on the chat app — exposing tools and resources so an LLM can take real in-app actions. Prompt engineering and LLM tool-use applied to production software.',
    badge: 'Building Now',
  },
];

const LEARNING = [
  'Azure Cloud Deployments',
  'Docker',
  'GitHub Actions CI/CD',
  'RAG / Vector Databases',
];

function Services() {
  return (
    <section className="services" id="services">
      <FadeIn as="h2" y={30} delay={0}>Skills</FadeIn>
      <div className="service-grid">
        {SERVICES.map((s, i) => (
          <FadeIn as="div" className="service-card" key={s.n} y={20} delay={i * 0.06}>
            <span className="service-num">{s.n}</span>
            <h3 className="service-name">
              {s.name}
              {s.badge && <span className="service-badge">{s.badge}</span>}
            </h3>
            <p className="service-desc">{s.desc}</p>
          </FadeIn>
        ))}
      </div>
      <FadeIn as="div" className="learning-section" y={20} delay={0.2}>
        <p className="learning-label">Learning &amp; Exploring</p>
        <div className="learning-chips">
          {LEARNING.map((item) => (
            <span key={item} className="learning-chip">{item}</span>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

// ============================================================
// CERTIFICATIONS
// ============================================================
const CERTIFICATIONS = [
  {
    n: '01',
    name: 'Model Context Protocol (MCP) Certification',
    issuer: 'Anthropic Academy',
    credentialUrl: 'https://verify.skilljar.com/c/xckta4mm95tr',
  },
  {
    n: '02',
    name: 'Claude Code in Action',
    issuer: 'Anthropic Academy',
    credentialUrl: 'https://verify.skilljar.com/c/trwz639m6wkb',
  },
  {
    n: '03',
    name: 'Oracle Cloud Infrastructure 2025 Certified Architect Associate',
    issuer: 'Oracle',
    credentialUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=4EA75774530BF6331E55A1260210D753624FAF70E8C11479AD825B865048075A',
  },
];

function CertificationCard({ cert }) {
  return (
    <FadeIn as="article" className="cert-card" y={20} delay={0.05}>
      <div className="cert-num">{cert.n}</div>
      <div className="cert-body">
        <p className="cert-issuer">{cert.issuer}</p>
        <h3 className="cert-name">{cert.name}</h3>
      </div>
      {cert.credentialUrl && (
        <GhostButton
          href={cert.credentialUrl}
          label="View Credential"
          target="_blank"
          rel="noopener noreferrer"
          className="cert-btn"
        />
      )}
    </FadeIn>
  );
}

function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <FadeIn as="h2" y={30} delay={0}>Certifications</FadeIn>
      <div className="cert-list">
        {CERTIFICATIONS.map((c) => (
          <CertificationCard cert={c} key={c.n} />
        ))}
      </div>
    </section>
  );
}

// ============================================================
// HEALTHCARE ARCHITECTURE DIAGRAM (inline SVG)
// ============================================================
function HealthcareArchDiagram() {
  return (
    <svg
      viewBox="0 0 700 400"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Healthcare platform architecture: React 19 frontend connects via HTTPS REST to a .NET 10 API layer with JWT auth, RBAC, and HIPAA audit logging. The API connects to SQL Server via EF Core, a RingCentral fax pipeline, and Acuity Scheduling webhooks."
    >
      {/* Arrow marker */}
      <defs>
        <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="rgba(215,226,234,0.35)" />
        </marker>
      </defs>

      {/* ── Frontend ── */}
      <rect x="1" y="1" width="698" height="74" rx="12"
        fill="rgba(215,226,234,0.05)" stroke="rgba(215,226,234,0.18)" strokeWidth="1.5" />
      <text x="350" y="23" textAnchor="middle"
        fontFamily="'Kanit',sans-serif" fontSize="9" fontWeight="600" letterSpacing="3" fill="rgba(52,211,153,0.9)">
        FRONTEND
      </text>
      <text x="350" y="43" textAnchor="middle"
        fontFamily="'Kanit',sans-serif" fontSize="13" fontWeight="500" fill="#D7E2EA">
        React 19 · Vite · Tailwind CSS
      </text>
      <text x="350" y="61" textAnchor="middle"
        fontFamily="'Kanit',sans-serif" fontSize="10" fill="rgba(215,226,234,0.45)">
        Admin · Super Admin · Employer · Patient / Employee
      </text>

      {/* Arrow → API */}
      <line x1="350" y1="76" x2="350" y2="110"
        stroke="rgba(215,226,234,0.3)" strokeWidth="1.5" markerEnd="url(#arr)" />
      <text x="362" y="96"
        fontFamily="'Kanit',sans-serif" fontSize="9" fill="rgba(215,226,234,0.35)">
        HTTPS · REST
      </text>

      {/* ── API Layer ── */}
      <rect x="1" y="112" width="698" height="104" rx="12"
        fill="rgba(52,211,153,0.07)" stroke="rgba(52,211,153,0.28)" strokeWidth="1.5" />
      <text x="350" y="133" textAnchor="middle"
        fontFamily="'Kanit',sans-serif" fontSize="9" fontWeight="600" letterSpacing="3" fill="rgba(52,211,153,0.9)">
        API LAYER
      </text>
      <text x="350" y="153" textAnchor="middle"
        fontFamily="'Kanit',sans-serif" fontSize="13" fontWeight="500" fill="#D7E2EA">
        .NET 10 Web API · 22 REST Controllers · EF Core 10
      </text>

      {/* Sub-boxes */}
      <rect x="14" y="163" width="204" height="40" rx="8"
        fill="rgba(215,226,234,0.05)" stroke="rgba(215,226,234,0.12)" strokeWidth="1" />
      <text x="116" y="179" textAnchor="middle"
        fontFamily="'Kanit',sans-serif" fontSize="10" fontWeight="600" fill="#D7E2EA">JWT Auth · BCrypt</text>
      <text x="116" y="195" textAnchor="middle"
        fontFamily="'Kanit',sans-serif" fontSize="9" fill="rgba(215,226,234,0.45)">Hashed credentials · RoleId login</text>

      <rect x="248" y="163" width="204" height="40" rx="8"
        fill="rgba(215,226,234,0.05)" stroke="rgba(215,226,234,0.12)" strokeWidth="1" />
      <text x="350" y="179" textAnchor="middle"
        fontFamily="'Kanit',sans-serif" fontSize="10" fontWeight="600" fill="#D7E2EA">RBAC · 4 Roles</text>
      <text x="350" y="195" textAnchor="middle"
        fontFamily="'Kanit',sans-serif" fontSize="9" fill="rgba(215,226,234,0.45)">Permission claims · [Authorize] attrs</text>

      <rect x="482" y="163" width="204" height="40" rx="8"
        fill="rgba(215,226,234,0.05)" stroke="rgba(215,226,234,0.12)" strokeWidth="1" />
      <text x="584" y="179" textAnchor="middle"
        fontFamily="'Kanit',sans-serif" fontSize="10" fontWeight="600" fill="#D7E2EA">HIPAA Audit Trail</text>
      <text x="584" y="195" textAnchor="middle"
        fontFamily="'Kanit',sans-serif" fontSize="9" fill="rgba(215,226,234,0.45)">Consent · Fax audit · Timestamps</text>

      {/* Arrows → bottom row */}
      <line x1="116" y1="216" x2="116" y2="250"
        stroke="rgba(215,226,234,0.3)" strokeWidth="1.5" markerEnd="url(#arr)" />
      <line x1="350" y1="216" x2="350" y2="250"
        stroke="rgba(215,226,234,0.3)" strokeWidth="1.5" markerEnd="url(#arr)" />
      <line x1="584" y1="216" x2="584" y2="250"
        stroke="rgba(215,226,234,0.3)" strokeWidth="1.5" markerEnd="url(#arr)" />

      {/* ── Database ── */}
      <rect x="1" y="252" width="228" height="132" rx="12"
        fill="rgba(215,226,234,0.05)" stroke="rgba(215,226,234,0.18)" strokeWidth="1.5" />
      <text x="115" y="273" textAnchor="middle"
        fontFamily="'Kanit',sans-serif" fontSize="9" fontWeight="600" letterSpacing="3" fill="rgba(52,211,153,0.9)">DATABASE</text>
      <text x="115" y="292" textAnchor="middle"
        fontFamily="'Kanit',sans-serif" fontSize="12" fontWeight="500" fill="#D7E2EA">SQL Server · EF Core 10</text>
      <text x="115" y="310" textAnchor="middle"
        fontFamily="'Kanit',sans-serif" fontSize="10" fill="rgba(215,226,234,0.45)">48 Domain Entities</text>
      <text x="115" y="326" textAnchor="middle"
        fontFamily="'Kanit',sans-serif" fontSize="10" fill="rgba(215,226,234,0.45)">HIPAA Consent + Digital Signatures</text>
      <text x="115" y="342" textAnchor="middle"
        fontFamily="'Kanit',sans-serif" fontSize="10" fill="rgba(215,226,234,0.45)">Specialist Referral Audit Log</text>
      <text x="115" y="358" textAnchor="middle"
        fontFamily="'Kanit',sans-serif" fontSize="10" fill="rgba(215,226,234,0.45)">HipaaAuthEndDate · ConsentHipaa</text>

      {/* ── Fax Pipeline ── */}
      <rect x="240" y="252" width="220" height="132" rx="12"
        fill="rgba(215,226,234,0.05)" stroke="rgba(215,226,234,0.18)" strokeWidth="1.5" />
      <text x="350" y="273" textAnchor="middle"
        fontFamily="'Kanit',sans-serif" fontSize="9" fontWeight="600" letterSpacing="3" fill="rgba(52,211,153,0.9)">FAX PIPELINE</text>
      <text x="350" y="292" textAnchor="middle"
        fontFamily="'Kanit',sans-serif" fontSize="12" fontWeight="500" fill="#D7E2EA">RingCentral API + SMTP</text>
      <text x="350" y="310" textAnchor="middle"
        fontFamily="'Kanit',sans-serif" fontSize="10" fill="rgba(215,226,234,0.45)">QuestPDF · PAR-Q forms · PDF 1.4</text>
      <text x="350" y="326" textAnchor="middle"
        fontFamily="'Kanit',sans-serif" fontSize="10" fill="rgba(215,226,234,0.45)">Email-to-fax fallback · TLS</text>
      <text x="350" y="342" textAnchor="middle"
        fontFamily="'Kanit',sans-serif" fontSize="10" fill="rgba(215,226,234,0.45)">DB-level fax ID + send-time audit</text>
      <text x="350" y="358" textAnchor="middle"
        fontFamily="'Kanit',sans-serif" fontSize="10" fill="rgba(215,226,234,0.45)">Medical clearance · HIPAA trace</text>

      {/* ── Scheduling ── */}
      <rect x="471" y="252" width="228" height="132" rx="12"
        fill="rgba(215,226,234,0.05)" stroke="rgba(215,226,234,0.18)" strokeWidth="1.5" />
      <text x="585" y="273" textAnchor="middle"
        fontFamily="'Kanit',sans-serif" fontSize="9" fontWeight="600" letterSpacing="3" fill="rgba(52,211,153,0.9)">SCHEDULING</text>
      <text x="585" y="292" textAnchor="middle"
        fontFamily="'Kanit',sans-serif" fontSize="12" fontWeight="500" fill="#D7E2EA">Acuity Scheduling</text>
      <text x="585" y="310" textAnchor="middle"
        fontFamily="'Kanit',sans-serif" fontSize="10" fill="rgba(215,226,234,0.45)">Webhook integration</text>
      <text x="585" y="326" textAnchor="middle"
        fontFamily="'Kanit',sans-serif" fontSize="10" fill="rgba(215,226,234,0.45)">Meeting URL persistence</text>
      <text x="585" y="342" textAnchor="middle"
        fontFamily="'Kanit',sans-serif" fontSize="10" fill="rgba(215,226,234,0.45)">Consent-gated telehealth access</text>
      <text x="585" y="358" textAnchor="middle"
        fontFamily="'Kanit',sans-serif" fontSize="10" fill="rgba(215,226,234,0.45)">ConsentTelehealth · right-to-revoke</text>
    </svg>
  );
}

// ============================================================
// PROJECTS
// ============================================================
const PROJECTS = [
  {
    n: '01',
    cat: 'Client Project',
    name: 'Healthcare Platform',
    images: [
      'assets/healthcare-1-welcome.png',
      'assets/healthcare-3-corporate.png',
      'assets/healthcare-2-telehealth.png',
    ],
    about: {
      title: 'NASA Fitness & Space Center Chiropractic Platform',
      period: 'January 2026 – Present · HIPAA Compliant · Code Private',
      summary: 'HIPAA-compliant telehealth and corporate-wellness platform built from scratch — migrating a 7-year-old broken .NET Web Forms system to .NET 10 / React 19, with dual-transport fax pipelines, scheduling webhooks, and JWT-secured role-based access across 4 user classes.',
      architectureSvg: true,
      points: [
        'Built .NET 10 / EF Core 10 / SQL Server backend with React 19 + Vite + Tailwind frontend — 48 domain entities, 22 REST controllers',
        'Dual-transport fax pipeline: RingCentral REST API + SMTP email-to-fax fallback with a QuestPDF generator producing fax-compatible PAR-Q medical clearance forms (PDF 1.4, Helvetica embed, US Letter)',
        'Full DB-level fax audit trail: fax ID, send time, clearance status — HIPAA traceability for reconciliation',
        'Acuity Scheduling webhook integration: appointment creation, meeting URL persistence, consent-gated telehealth access (ConsentTelehealth)',
        'Layered HIPAA consent model: ConsentHipaa, HipaaAuthEndDate, DigitalSignatureName, specialist-referral audit trail (fax sent / response received timestamps)',
        'JWT + BCrypt authentication with RoleId-qualified login and permission claims (manage_patients, manage_employees…) enforced via [Authorize] attributes and service-layer ownership checks',
        '4 role classes — Admin, Super Admin, Employer, Patient/Employee — each with distinct UIs and access scopes',
        'Delivered via Azure DevOps user stories; weekly planning and demoing to mentor and CEO',
      ],
      stack: ['.NET 10', 'EF Core 10', 'SQL Server', 'React 19', 'Vite', 'Tailwind CSS', 'RingCentral API', 'QuestPDF', 'JWT Auth', 'BCrypt', 'Azure DevOps', 'Acuity Scheduling', 'SMTP / TLS'],
    },
  },
  {
    n: '02',
    cat: 'Personal Project',
    name: 'Realtime Chat',
    liveUrl: 'https://nodejs-reactjs-chats.onrender.com',
    repoUrl: 'https://github.com/dhruvi-2623/nodejs-reactjs-chats',
    images: [
      'assets/chat-1-login.png',
      'assets/chat-2-contacts.png',
      'assets/chat-3-profile.png',
    ],
    about: {
      title: 'Real-Time Chat Application',
      period: 'Personal Project · 2024',
      summary: 'Full-stack messaging app with WebSocket-driven real-time delivery, JWT auth in httpOnly cookies, profile image uploads via Cloudinary, and live presence — deployed on Render.',
      points: [
        'Socket.IO WebSocket system with rooms, typing indicators, presence, and sub-100ms message delivery',
        'JWT authentication stored in httpOnly cookies — XSS-safe session management without localStorage',
        'Cloudinary integration for user profile image uploads with automatic CDN delivery and resizing',
        'MongoDB + Mongoose backend — conversations, messages, and user schemas with proper indexing',
        'React frontend with optimistic UI updates, scroll-to-bottom behavior, and automatic reconnect handling',
        'Deployed live on Render — try it at the link below',
        'Currently extending with a Model Context Protocol server for LLM tool-use integration',
      ],
      stack: ['React', 'Node.js', 'Express', 'Socket.IO', 'MongoDB', 'Mongoose', 'JWT', 'httpOnly Cookies', 'Cloudinary', 'Render'],
      liveUrl: 'https://nodejs-reactjs-chats.onrender.com',
      repoUrl: 'https://github.com/dhruvi-2623/nodejs-reactjs-chats',
    },
  },
  {
    n: '03',
    cat: 'In Progress',
    name: 'MCP + LLM Integration',
    badge: 'Building Now',
    summary: 'Extending the real-time chat app with a Model Context Protocol server — exposing chat tools and resources to LLMs so an agent can read conversations, list contacts, and send messages through the live app.',
    features: [
      'MCP server in Node.js exposing tools: send_message, list_contacts, get_history',
      'LLM tool-use loop — Claude reads live chat state and takes real in-app actions via Socket.IO',
      'MCP resources: conversation history and user presence as structured, queryable data',
      'Zero breaking changes — connects to the existing backend with a new MCP transport layer',
      'Built on Anthropic MCP certification — applying the protocol spec to a shipped product',
    ],
    stack: ['Model Context Protocol', 'Node.js', 'Socket.IO', 'Claude API', 'TypeScript', 'JSON-RPC 2.0'],
  },
  {
    n: '04',
    cat: 'Full-Stack',
    name: 'Foody — Home Kitchen',
    repoUrl: 'https://github.com/dhruvi-2623/foody-main',
    images: [
      'assets/foody-1-burger.png',
      'assets/foody-2-cart.png',
      'assets/foody-3-catering.png',
    ],
  },
  {
    n: '05',
    cat: 'Personal Project',
    name: 'Service Broker System',
    repoUrl: 'https://github.com/dhruvi-2623/service-broker-system',
    summary: 'A service registry that brokers requests between client apps and back-end services — React 19 admin dashboard, Node + Express backend, SQLite for local dev and MySQL for production.',
    features: [
      'Service registry with health tracking and per-instance status history',
      'Password hashing service using bcrypt + bcryptjs for credential security',
      'Random-token service for short-lived API keys and verification codes',
      'Email notifications via Nodemailer when service state changes',
      'Admin dashboard with React Router 7 routing and Axios-driven views',
    ],
    stack: ['React 19', 'Express', 'SQLite', 'MySQL', 'bcrypt', 'Nodemailer', 'Axios'],
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
    <div
      className="about-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={about.title}
    >
      <div className="about-modal" onClick={(e) => e.stopPropagation()}>
        <button className="about-modal-close" onClick={onClose} aria-label="Close case study">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="about-modal-header">
          <span className="about-modal-tag">{project.cat} &middot; {about.period}</span>
          <h4 className="about-modal-title">{about.title}</h4>
          <p className="about-modal-summary">{about.summary}</p>
        </div>

        {about.architectureSvg && (
          <div className="arch-diagram">
            <HealthcareArchDiagram />
          </div>
        )}

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

        {(about.liveUrl || about.repoUrl) && (
          <div className="about-modal-links">
            {about.liveUrl && (
              <a href={about.liveUrl} target="_blank" rel="noopener noreferrer" className="contact-btn">
                Live Demo ↗
              </a>
            )}
            {about.repoUrl && (
              <a href={about.repoUrl} target="_blank" rel="noopener noreferrer" className="ghost-btn">
                View Code ↗
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [modalOpen, setModalOpen] = useState(false);
  const thumb = project.images && project.images[0];

  return (
    <>
      {modalOpen && <AboutModal project={project} onClose={() => setModalOpen(false)} />}
      <FadeIn as="article" className="project-card" y={30} delay={index * 0.05}>
        <div className="project-card-inner">
          {thumb && (
            <div className="project-thumb">
              <img src={thumb} alt="" loading="lazy" />
            </div>
          )}
          <div className="project-card-body">
            <div className="project-head">
              <span className="project-num">{project.n}</span>
              <div className="project-info">
                <span className="project-cat">
                  {project.cat}
                  {project.badge && <span className="project-badge">{project.badge}</span>}
                </span>
                <h3 className="project-name">{project.name}</h3>
              </div>
            </div>

            {project.summary && <p className="project-summary">{project.summary}</p>}

            {project.features && (
              <ul className="project-features">
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            )}

            {project.stack && (
              <div className="project-chips">
                {project.stack.map((s) => (
                  <span key={s} className="project-chip">{s}</span>
                ))}
              </div>
            )}

            <div className="project-btns">
              {project.liveUrl && (
                <GhostButton href={project.liveUrl} label="Live Demo" target="_blank" rel="noopener noreferrer" />
              )}
              {project.repoUrl && (
                <GhostButton href={project.repoUrl} label="View Code" target="_blank" rel="noopener noreferrer" />
              )}
              {project.about && (
                <GhostButton label="Case Study" onClick={() => setModalOpen(true)} />
              )}
            </div>
          </div>
        </div>
      </FadeIn>
    </>
  );
}

function Projects() {
  return (
    <section className="projects" id="projects">
      <FadeIn as="h2" y={30} delay={0}>Projects</FadeIn>
      <div className="projects-list">
        {PROJECTS.map((p, i) => (
          <ProjectCard project={p} index={i} key={p.n} />
        ))}
      </div>
    </section>
  );
}

// ============================================================
// TESTIMONIALS / RECOMMENDATIONS
// ------------------------------------------------------------
// Empty until quotes are added. To publish a testimonial, add an
// entry here — { quote, name, title, company, avatar? } — and the
// section renders automatically. Left empty, the section renders
// nothing so an empty block never ships to the live site.
// ============================================================
const TESTIMONIALS = [
  // {
  //   quote: 'Dhruvi shipped faster than anyone on the team and always understood the "why" behind a feature.',
  //   name: 'Jane Doe',
  //   title: 'Engineering Manager',
  //   company: 'Bigblue Technologies',
  // },
];

function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="testimonials" id="testimonials">
      <FadeIn as="h2" y={30} delay={0}>Recommendations</FadeIn>
      <div className="testimonial-list">
        {TESTIMONIALS.map((t, i) => (
          <FadeIn as="figure" className="testimonial-card" y={20} delay={i * 0.1} key={t.name}>
            <blockquote className="testimonial-quote">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="testimonial-attribution">
              <span className="testimonial-name">{t.name}</span>
              <span className="testimonial-role">
                {t.title}
                {t.company && ` · ${t.company}`}
              </span>
            </figcaption>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ============================================================
// CONTACT
// ============================================================
function Contact() {
  return (
    <section className="contact-section" id="contact">
      <FadeIn as="h2" className="contact-heading" y={30} delay={0}>
        Say Hello
      </FadeIn>

      <FadeIn as="div" className="contact-wrap" y={20} delay={0.1}>
        <div className="contact-links-row">
          <a href="mailto:dhruvipatel2623@gmail.com" className="contact-link">
            dhruvipatel2623@gmail.com
          </a>
          <a href="https://github.com/dhruvi-2623" target="_blank" rel="noopener noreferrer" className="contact-link">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/dhruvipatel2623" target="_blank" rel="noopener noreferrer" className="contact-link">
            LinkedIn
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

// ============================================================
// FOOTER
// ============================================================
function Footer() {
  return (
    <footer className="site-footer">
      <p className="site-footer-signature">Dhruviben Patel — Full-Stack Software Engineer</p>
      <p className="site-footer-copy">&copy; 2026 Dhruviben Patel &middot; Houston, Texas</p>
    </footer>
  );
}

export { Services, Certifications, Projects, Testimonials, Contact, Footer };
