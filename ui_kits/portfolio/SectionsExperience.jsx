// Experience section — alternating image-left / image-right cards.
// Sits between About (dark) and Services (white) — uses dark theme.

const EXPERIENCES = [
  {
    n: '01',
    role: 'iOS & Web Developer',
    company: 'Bigblue Technologies',
    href: 'https://thebigblue.app/',
    hrefLabel: 'thebigblue.app',
    period: 'Jan 2026 — Current',
    location: 'Remote · Costa Mesa, California',
    points: [
      'Built and shipped 5,000+ lines of production-ready marketing landing pages — live now at thebigblue.app — aligned to UI developer and founder requirements.',
      'Fixed production iOS bugs in Xcode, with technical-founder code review on every change (~1,000 lines reviewed).',
      'Collaborated with the UI designer, senior engineer, and CEO on marketing pages, demoed builds to the full team, and tested the MVP end-to-end.',
      'Met weekly with the technical founder and CEO to plan the next week\u2019s targets and ship status updates.',
    ],
    image: 'assets/exp-bigblue-illustration.jpeg',
  },
  {
    n: '02',
    role: 'Software Engineer Intern',
    company: 'Biztech Consulting & Solutions',
    period: 'Aug 2022 — Oct 2023',
    location: 'Ahmedabad, Gujarat, India',
    points: [
      'Built a team document-upload system that priced documents based on keywords in the file content; owned the frontend UI and APIs.',
      'Wrote ~1,000+ lines of reviewed code per sprint, pushed to the main branch after mentor sign-off.',
      'Worked daily with mentors and fellow interns on real corporate project workflows — weekly stand-ups, task tracking, and QA testing.',
      'Learned Bootstrap, JavaScript fundamentals, advanced JavaScript, and Redux on the job.',
    ],
    image: 'assets/exp-biztech-illustration.jpeg',
  },
  {
    n: '03',
    role: 'UI Developer Intern',
    company: 'Elsner Technology',
    period: 'Jul 2022 — Aug 2022',
    location: 'Ahmedabad, Gujarat, India',
    points: [
      'My first professional internship \u2014 focused on UI design and coding standards for UI work.',
      'Worked with Figma designs and translated them to code following the team\u2019s standards.',
      'Learned HTML5, CSS3, and the Bootstrap library, applying them on a real project.',
    ],
    image: 'assets/exp-elsner-illustration.jpeg',
  },
];

function ExperienceCard({ exp, index }) {
  return (
    <FadeIn as="article" className="exp-card" y={40} delay={index * 0.08}>
      <div className="exp-media">
        <img src={exp.image} alt="" loading="lazy" />
      </div>
      <div className="exp-body">
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
      </div>
    </FadeIn>
  );
}

function Experience() {
  return (
    <section className="experience" id="experience">
      <FadeIn as="h2" y={40} delay={0}>Experience</FadeIn>
      <div className="exp-list">
        {EXPERIENCES.map((exp, i) => (
          <ExperienceCard exp={exp} index={i} key={exp.n} />
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Experience });
