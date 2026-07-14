import { profile } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <Reveal>
          <div className="eyebrow">// contact</div>
          <h2 className="section-title">
            Let's build <em>something</em>
          </h2>
          <p className="section-sub">Open to internships, collaborations, and interesting problems.</p>
        </Reveal>

        <Reveal delay={100}>
        <div className="contact-box">
          <div>
            <h3 style={{ fontSize: 26, fontWeight: 600, marginBottom: 12 }}>Say hello.</h3>
            <p style={{ color: "var(--muted)", fontSize: 15, maxWidth: 380 }}>
              Reach out by email or phone, or find me on the links below.
            </p>
            <div className="social-row">
              {profile.socials.map((s) => (
                <a href={s.url} target="_blank" rel="noreferrer" key={s.label}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="contact-list">
            <div>
              <span className="label">Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div>
              <span className="label">Phone</span>
              <a href={`tel:${profile.phone.replace(/\s+/g, "")}`}>{profile.phone}</a>
            </div>
            <div>
              <span className="label">Location</span>
              <span>{profile.location}</span>
            </div>
            {profile.resumeUrl && (
              <div>
                <span className="label">Resume</span>
                <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
                  Download PDF
                </a>
              </div>
            )}
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      {profile.displayName} · Built with React · © {new Date().getFullYear()}
    </footer>
  );
}
