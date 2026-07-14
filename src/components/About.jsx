import { objective, education, skillGroups } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <Reveal className="about-text">
          <div className="eyebrow">// about</div>
          <h2 className="section-title">
            Behind the <em>code</em>
          </h2>
          <p>{objective}</p>

          <div className="edu-card">
            <div className="deg">{education.degree}</div>
            <div className="inst">
              {education.institute} · {education.university}
            </div>
            <div className="edu-meta">
              <span>{education.years}</span>
              <span className="status-pill">{education.status}</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} id="skills">
          <div className="eyebrow">// skills</div>
          <h2 className="section-title">
            What I <em>work with</em>
          </h2>

          {skillGroups.map((group) => (
            <div className="skill-group" key={group.name}>
              <h4>{group.name}</h4>
              {group.skills.map((s) => (
                <div className="skill-row" key={s.name}>
                  <span>{s.name}</span>
                  <div className="skill-track">
                    <div className="skill-fill" style={{ width: `${s.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
