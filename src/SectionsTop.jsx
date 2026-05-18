// Hero, Marquee, About — content from Dhruviben Patel's GitHub repo
import { useEffect, useRef } from "react";
import { FadeIn, ContactButton, AnimatedText } from "./Components.jsx";

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
          <a href="https://github.com/dhruvi-2623" target="_blank" rel="noopener">GitHub</a>
          <a href="https://www.linkedin.com/in/dhruvipatel2623" target="_blank" rel="noopener">LinkedIn</a>
          <a href="mailto:dhruvipatel2623@gmail.com">Contact</a>
        </nav>
      </FadeIn>

      <FadeIn as="div" className="hero-heading-wrap" y={40} delay={0.15}>
        <h1 className="hero-heading">hi, i&rsquo;m dhruvi</h1>
      </FadeIn>

      <div className="hero-bottom">
        <FadeIn as="p" className="hero-tagline" y={20} delay={0.35}>
          a software engineer driven by shipping full-stack web apps that work in the real world
        </FadeIn>
        <FadeIn y={20} delay={0.5}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}

// ============================================================
// MARQUEE — the original motionsites.ai preview GIFs
// ============================================================
const MARQUEE_IMAGES = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
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

  const first = MARQUEE_IMAGES.slice(0, 11);
  const second = MARQUEE_IMAGES.slice(11);
  const triple = (arr) => [...arr, ...arr, ...arr];

  return (
    <section className="marquee" ref={sectionRef}>
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
// ABOUT — content from Dhruviben's GitHub repo
// ============================================================
function About() {
  const text = "I'm a software engineer focused on building full-stack web products with React, Node.js, ASP.NET Core, MongoDB, SQL, and Azure. I take end-to-end ownership from idea to production. Let's build something incredible together!";

  return (
    <section className="about" id="about">
      <FadeIn as="div" className="about-corner tl" x={-80} delay={0.1}>
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt=""
        />
      </FadeIn>
      <FadeIn as="div" className="about-corner tr" x={80} delay={0.15}>
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt=""
        />
      </FadeIn>
      <FadeIn as="div" className="about-corner bl" x={-80} delay={0.25}>
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt=""
        />
      </FadeIn>
      <FadeIn as="div" className="about-corner br" x={80} delay={0.3}>
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt=""
        />
      </FadeIn>

      <FadeIn as="h2" className="hero-heading" y={40} delay={0}>
        About me
      </FadeIn>

      <AnimatedText text={text} />

      <FadeIn y={20} delay={0.1}>
        <ContactButton />
      </FadeIn>
    </section>
  );
}

export { Hero, About };
