// Education section — sits between About and Experience (both dark theme).
// Numbered layout mirrors the Experience section's card pattern.
import { FadeIn } from "./Components.jsx";

const EDUCATION = [
  {
    n: '01',
    degree: 'Master of Science, Computer Science',
    school: 'University of Houston – Clear Lake',
    location: 'Houston, TX',
    period: 'Aug 2024 — May 2026',
    gpa: 'GPA: 3.7 / 4.0',
  },
  {
    n: '02',
    degree: 'Bachelor of Engineering, Computer Science / Information Technology',
    school: 'Silver Oak University',
    location: 'Gujarat, India',
    period: 'Aug 2020 — May 2024',
    gpa: 'GPA: 3.9 / 4.0',
  },
];

function EducationCard({ edu, index }) {
  return (
    <FadeIn as="article" className="edu-card" y={30} delay={index * 0.1}>
      <span className="edu-num">{edu.n}</span>
      <div className="edu-body">
        <h3 className="edu-degree">{edu.degree}</h3>
        <p className="edu-school">{edu.school}</p>
        <p className="edu-meta">
          {edu.period}
          <span className="edu-dot">·</span>
          {edu.location}
          <span className="edu-dot">·</span>
          {edu.gpa}
        </p>
      </div>
    </FadeIn>
  );
}

function Education() {
  return (
    <section className="education" id="education">
      <FadeIn as="h2" className="hero-heading" y={40} delay={0}>Education</FadeIn>
      <div className="edu-list">
        {EDUCATION.map((edu, i) => (
          <EducationCard edu={edu} index={i} key={edu.n} />
        ))}
      </div>
    </section>
  );
}

export { Education };
