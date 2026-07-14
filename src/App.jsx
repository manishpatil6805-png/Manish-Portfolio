import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Photography from "./components/Photography.jsx";
import Contact, { Footer } from "./components/Contact.jsx";
import CursorGlow from "./components/CursorGlow.jsx";

export default function App() {
  return (
    <div className="page">
      <div className="mesh">
        <span></span>
      </div>
      <CursorGlow />
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Photography />
      <Contact />
      <Footer />
    </div>
  );
}
