import { projects } from "../data/content.js";
import Reveal from "./Reveal.jsx";

function TiltCard({ children }) {
  function onMouseMove(e) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(700px) rotateX(${py * -8}deg) rotateY(${px * 10}deg) translateY(-4px)`;
  }
  function onMouseLeave(e) {
    e.currentTarget.style.transform = "";
  }
  return (
    <div className="project-card" onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <Reveal>
          <div className="eyebrow">// projects</div>
          <h2 className="section-title">
            Things I've <em>built</em>
          </h2>
          <p className="section-sub">A few projects that turned ideas into working software.</p>
        </Reveal>

        <div className="project-grid">
          {projects.map((p, i) => (
            <Reveal delay={i * 90} key={p.id}>
              <TiltCard>
                <span className="project-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="project-stack">
                  {p.stack.map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
                {(p.links.code || p.links.live) && (
                  <div className="project-links">
                    {p.links.code && (
                      <a href={p.links.code} target="_blank" rel="noreferrer">
                        View Code
                      </a>
                    )}
                    {p.links.live && (
                      <a href={p.links.live} target="_blank" rel="noreferrer">
                        Live →
                      </a>
                    )}
                  </div>
                )}
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
