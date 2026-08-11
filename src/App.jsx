import { Hero, About } from "./SectionsTop.jsx";
import { Education } from "./SectionsEducation.jsx";
import { Experience } from "./SectionsExperience.jsx";
import { Services, Certifications, Projects, Testimonials, Contact, Footer } from "./SectionsBottom.jsx";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Services />
      <Certifications />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
