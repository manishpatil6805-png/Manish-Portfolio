import { useEffect, useState } from "react";
import { profile, consoleLines } from "../data/content.js";

// Types out consoleLines one character at a time, line by line, then loops.
function useTypedConsole(lines, speed = 28, pause = 1400) {
  const [shown, setShown] = useState([]);
  const [typing, setTyping] = useState("");

  useEffect(() => {
    let cancelled = false;
    let lineIndex = 0;

    async function run() {
      while (!cancelled) {
        if (lineIndex >= lines.length) {
          await new Promise((r) => setTimeout(r, pause));
          if (cancelled) return;
          setShown([]);
          lineIndex = 0;
        }
        const line = lines[lineIndex];
        for (let i = 0; i <= line.length; i++) {
          if (cancelled) return;
          setTyping(line.slice(0, i));
          await new Promise((r) => setTimeout(r, speed));
        }
        setShown((prev) => [...prev, line]);
        setTyping("");
        lineIndex += 1;
        await new Promise((r) => setTimeout(r, 260));
      }
    }
    run();
    return () => {
      cancelled = true;
    };
  }, [lines, speed, pause]);

  return { shown, typing };
}

export default function Hero() {
  const { shown, typing } = useTypedConsole(consoleLines);

  function onConsoleMove(e) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${py * -6}deg) rotateY(${px * 8}deg)`;
  }
  function onConsoleLeave(e) {
    e.currentTarget.style.transform = "";
  }

  return (
    <header className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <div className="hero-status">{profile.availability}</div>
          <h1>
            {profile.displayName.split(" ")[0]}{" "}
            <span className="grad shimmer">{profile.displayName.split(" ").slice(1).join(" ")}</span>
          </h1>
          <div className="hero-role">{profile.role}</div>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="console" aria-hidden="true" onMouseMove={onConsoleMove} onMouseLeave={onConsoleLeave}>
          <div className="console-bar">
            <span></span>
            <span></span>
            <span></span>
          </div>
          {shown.map((line, i) => (
            <div key={i} className={`console-line ${line.startsWith("$") ? "prompt" : ""}`}>
              {line}
            </div>
          ))}
          <div className={`console-line ${typing.startsWith("$") ? "prompt" : ""}`}>
            {typing}
            <span className="console-cursor"></span>
          </div>
        </div>
      </div>
    </header>
  );
}
