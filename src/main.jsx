import { createRoot } from "react-dom/client";
import { Hero, About } from "./SectionsTop.jsx";
import { Experience } from "./SectionsExperience.jsx";
import { Services, Projects, Contact, Footer } from "./SectionsBottom.jsx";
import "./styles.css";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
