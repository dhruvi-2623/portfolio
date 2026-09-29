import { useEffect, useState } from "react";
import { FadeIn, GhostButton } from "./Components.jsx";

// ============================================================
// SKILLS: 5 skill groups aligned to AI, forward deployed, and backend roles
// ============================================================
const SERVICES = [
  {
    n: '01',
    name: 'AI Engineering & LLM Apps',
    desc: 'Multi-agent systems on the Gemini API with RAG for grounded answers. Built SyncMind AI, a four-agent workspace (Research, Planner, Summarizer, Code Review) deployed on Google Cloud. Anthropic-certified in MCP and Claude Code, building an MCP server so an LLM can take real actions inside a live app.',
  },
  {
    n: '02',
    name: 'Backend & APIs',
    desc: '.NET 10, EF Core, Node.js, and Express. Shipped a 22-controller REST API over a 48-entity domain model with JWT + BCrypt auth, 4-tier role-based access, and HIPAA audit logging. Comfortable owning an API from schema design to deployment.',
  },
  {
    n: '03',
    name: 'Forward Deployed Delivery',
    desc: 'I work close to the people using the software: turning clinic and founder requirements into specs, demoing weekly, and iterating in production. Integrated RingCentral, Acuity Scheduling webhooks, SMTP/TLS, and Cloudinary into systems real users depend on.',
  },
  {
    n: '04',
    name: 'Data & Real-Time Systems',
    desc: 'SQL Server, PostgreSQL, MySQL, MongoDB, Firebase, and vector databases. Socket.IO messaging with targeted delivery and live presence, plus EF Core migrations and relational schema design for regulated data.',
  },
  {
    n: '05',
    name: 'Cloud, Mobile & Delivery',
    desc: 'Google Cloud, AWS (S3, EC2, SQS), Docker, Kubernetes, CI/CD, and Azure DevOps. Cross-platform mobile with React Native and SwiftUI, and frontends in React 19, TypeScript, and Tailwind.',
  },
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
  {
    n: '04',
    name: 'Artificial Intelligence Investment as a Strategic Signal: Implications for Stakeholder Confidence',
    issuer: 'Publication · IJESRT Vol. 15(4), 2026',
    credentialUrl: 'https://doi.org/10.64149/j.ijesrt.15.4.32-46',
    label: 'Read Paper',
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
          label={cert.label || "View Credential"}
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
      <FadeIn as="h2" y={30} delay={0}>Certifications &amp; Research</FadeIn>
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
    cat: 'AI Engineering · Hackathon',
    name: 'SyncMind AI',
    repoUrl: 'https://github.com/dhruvi-2623/syncmind-ai',
    summary: 'Multi-agent workspace built for the Google Cloud Rapid Agent Hackathon (Devpost, 2026). Upload a PRD and a supervisor agent runs it through research, summary, sprint planning, and code review, streaming every step live to everyone in the workspace.',
    features: [
      'Supervisor agent orchestrates 4 Gemini agents (Research, Summarizer, Planner, Code Review), gating each phase on the previous result',
      'RAG over uploaded PDFs: documents are parsed, chunked, and stored in MongoDB, then retrieved as grounded context for each agent',
      'Runs on Gemini through Google AI Studio or Vertex AI, with a demo mode so it can be evaluated without secrets',
      'Socket.IO pushes the action log, timeline, kanban, and review panels to every connected user in real time, with live presence',
      'Node.js + Express API with Cloud Storage uploads, built for Cloud Run deployment on Google Cloud',
    ],
    stack: ['Gemini API', 'Vertex AI', 'Multi-Agent', 'RAG', 'Node.js', 'Express', 'Socket.IO', 'MongoDB', 'React', 'Google Cloud'],
  },
  {
    n: '02',
    cat: 'Backend · Client Project',
    name: 'Healthcare Platform',
    summary: 'Client-facing .NET 10 + React 19 telehealth platform: 48-entity domain, 22 REST controllers, HIPAA audit trail, RingCentral fax pipeline, and Acuity webhooks. Scoped directly with the clinic.',
    images: [
      'assets/healthcare-1-welcome.png',
      'assets/healthcare-3-corporate.png',
      'assets/healthcare-2-telehealth.png',
    ],
    about: {
      title: 'NASA Fitness & Space Center Chiropractic Platform',
      period: 'Jan 2026 – Present · HIPAA Compliant · Code Private',
      summary: 'HIPAA-compliant telehealth and corporate-wellness platform for a real clinic. I gathered requirements from the client, then migrated a 7-year-old .NET Web Forms system to .NET 10 and React 19 with a dual-transport fax pipeline, scheduling webhooks, and JWT-secured role-based access across 4 user classes.',
      architectureSvg: true,
      points: [
        'Built a .NET 10 / EF Core 10 / SQL Server backend with a React 19 + Vite + Tailwind frontend: 48 domain entities, 22 REST controllers',
        'Dual-transport fax pipeline: RingCentral REST API + SMTP email-to-fax fallback with a QuestPDF generator producing fax-compatible PAR-Q medical clearance forms (PDF 1.4, Helvetica embed, US Letter)',
        'Full DB-level fax audit trail: fax ID, send time, clearance status, giving HIPAA traceability for reconciliation',
        'Acuity Scheduling webhook integration: appointment creation, meeting URL persistence, consent-gated telehealth access (ConsentTelehealth)',
        'Layered HIPAA consent model: ConsentHipaa, HipaaAuthEndDate, DigitalSignatureName, specialist-referral audit trail (fax sent / response received timestamps)',
        'JWT + BCrypt authentication with RoleId-qualified login and permission claims (manage_patients, manage_employees…) enforced via [Authorize] attributes and service-layer ownership checks',
        '4 role classes (Admin, Super Admin, Employer, Patient/Employee), each with distinct UIs and access scopes',
        'Translated clinic stakeholder requirements into technical specs and Azure DevOps user stories; demoed weekly to the mentor and CEO and iterated on feedback',
      ],
      stack: ['.NET 10', 'EF Core 10', 'SQL Server', 'React 19', 'Vite', 'Tailwind CSS', 'RingCentral API', 'QuestPDF', 'JWT Auth', 'BCrypt', 'Azure DevOps', 'Acuity Scheduling', 'SMTP / TLS'],
    },
  },
  {
    n: '03',
    cat: 'AI Engineering · In Progress',
    name: 'MCP Server for Live Chat',
    badge: 'Building Now',
    summary: 'Extending the real-time chat app with a Model Context Protocol server, exposing chat tools and resources to LLMs so an agent can read conversations, list contacts, and send messages through the live app.',
    features: [
      'MCP server in Node.js exposing tools: send_message, list_contacts, get_history',
      'LLM tool-use loop: Claude reads live chat state and takes real in-app actions via Socket.IO',
      'MCP resources: conversation history and user presence as structured, queryable data',
      'Zero breaking changes: connects to the existing backend through a new MCP transport layer',
      'Applies my Anthropic MCP certification to a shipped product',
    ],
    stack: ['Model Context Protocol', 'Node.js', 'Socket.IO', 'Claude API', 'TypeScript', 'JSON-RPC 2.0'],
  },
  {
    n: '04',
    cat: 'Full-Stack · Real-Time',
    name: 'Realtime Chat',
    summary: 'Live messaging app with Socket.IO targeted delivery and presence, JWT in httpOnly cookies, and Cloudinary uploads. Deployed on Render, and the base for my MCP server work.',
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
      summary: 'Full-stack messaging app with real-time delivery over Socket.IO, JWT auth in httpOnly cookies, Cloudinary image uploads, and live presence, deployed on Render.',
      points: [
        'Socket.IO messaging with a server-side userId to socketId map for targeted delivery and live online presence',
        'JWT stored in httpOnly cookies for XSS-safe sessions, bcryptjs hashing, and a protectRoute middleware on every protected call',
        'Cloudinary for profile images, persisting only the secure URL in MongoDB',
        'MongoDB + Mongoose schemas for users, conversations, and messages',
        'Found and fixed a delivery race where the client emitted joinChat with no server handler, moving routing fully to the socket map',
        'Deployed live on Render with GitHub auto-deploy; Express serves the React build in production',
        'Currently extending with a Model Context Protocol server for LLM tool-use integration',
      ],
      stack: ['React', 'Node.js', 'Express', 'Socket.IO', 'MongoDB', 'Mongoose', 'JWT', 'httpOnly Cookies', 'Cloudinary', 'Render'],
      liveUrl: 'https://nodejs-reactjs-chats.onrender.com',
      repoUrl: 'https://github.com/dhruvi-2623/nodejs-reactjs-chats',
    },
  },
  {
    n: '05',
    cat: 'Backend · Distributed Systems',
    name: 'Service Broker System',
    repoUrl: 'https://github.com/dhruvi-2623/service-broker-system',
    summary: 'A service registry that brokers requests between client apps and back-end services: React 19 admin dashboard, Node + Express backend, SQLite for local dev and MySQL for production.',
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
// entry here ({ quote, name, title, company, avatar? }) and the
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
      <p className="site-footer-signature">Dhruviben Patel · AI Engineer · Forward Deployed · Backend</p>
      <p className="site-footer-copy">&copy; 2026 Dhruviben Patel &middot; Houston, Texas</p>
    </footer>
  );
}

export { Services, Certifications, Projects, Testimonials, Contact, Footer };
