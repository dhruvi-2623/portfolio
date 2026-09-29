// Experience section: plain vertical timeline (no imagery), dark theme.
import { FadeIn } from "./Components.jsx";

const EXPERIENCES = [
  {
    n: '01',
    role: 'Software Developer',
    company: 'Bigblue Technologies',
    href: 'https://thebigblue.app/',
    hrefLabel: 'thebigblue.app',
    period: 'Sep 2026 – Present',
    location: 'Remote · Costa Mesa, California',
    points: [
      "Converting the company's production iOS app into an Android app with React Native and Firebase, translating native screens, navigation, and business logic into a cross-platform codebase.",
      'Using Claude Code as an AI pair engineer to map SwiftUI components to React Native and speed up refactoring, with every AI-generated change reviewed before merge.',
      'Working directly with the founder on scope and weekly priorities, turning product requirements into shippable features.',
    ],
    stack: ['React Native', 'Firebase', 'Claude Code', 'TypeScript'],
  },
  {
    n: '02',
    role: 'Software Engineer Intern',
    company: 'Bigblue Technologies',
    href: 'https://thebigblue.app/',
    hrefLabel: 'thebigblue.app',
    period: 'Jan 2026 – May 2026',
    location: 'Remote · Costa Mesa, California',
    points: [
      'Resolved critical production bugs across a 10,000-line SwiftUI iOS codebase in Xcode, giving the first 200 early adopters a stable experience; every fix was reviewed and merged by the technical founder.',
      'Built the product’s first QA and unit-test coverage, catching regressions before release and shipping three release cycles with zero post-launch regressions.',
      'Rebuilt the marketing site (thebigblue.app) from scratch, 5,000+ lines of production code, lifting Lighthouse from 60 to 95 and improving Google ranking.',
    ],
    stack: ['SwiftUI', 'Xcode', 'Unit Testing', 'SEO'],
  },
  {
    n: '03',
    role: 'Software Engineer Intern',
    company: 'Biztech Consulting & Solutions',
    period: 'Aug 2022 – Oct 2023',
    location: 'Ahmedabad, Gujarat, India',
    points: [
      'Built a document-upload pricing system with the team, connecting a React frontend to REST APIs that priced each document from its extracted content.',
      'Designed a centralized Redux store for upload and pricing state, removing prop-drilling and the inconsistent UI updates that caused incorrect prices.',
      'Added request validation and error handling to failing API integrations, cutting failed upload submissions by 35%.',
    ],
    stack: ['React', 'Redux', 'REST APIs', 'JavaScript'],
  },
];

function ExperienceCard({ exp, index }) {
  return (
    <FadeIn as="article" className="exp-card" y={30} delay={index * 0.08}>
      <div className="exp-head">
        <span className="exp-num">{exp.n}</span>
        <div className="exp-titles">
          <h3 className="exp-role">{exp.role}</h3>
          <p className="exp-company">
            {exp.company}
            {exp.href && (
              <>
                {' · '}
                <a className="exp-link" href={exp.href} target="_blank" rel="noopener">
                  {exp.hrefLabel || exp.href}
                </a>
              </>
            )}
          </p>
        </div>
      </div>
      <p className="exp-meta">
        {exp.period}
        <span className="exp-dot">·</span>
        {exp.location}
      </p>
      <ul className="exp-points">
        {exp.points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
      {exp.stack && (
        <div className="project-chips exp-chips">
          {exp.stack.map((t) => (
            <span key={t} className="project-chip">{t}</span>
          ))}
        </div>
      )}
    </FadeIn>
  );
}

function Experience() {
  return (
    <section className="experience" id="experience">
      <FadeIn as="h2" y={30} delay={0}>Experience</FadeIn>
      <div className="exp-list">
        {EXPERIENCES.map((exp, i) => (
          <ExperienceCard exp={exp} index={i} key={exp.n} />
        ))}
      </div>
    </section>
  );
}

export { Experience };
