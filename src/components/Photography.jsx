import { useEffect, useState } from "react";
import { photography } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Photography() {
  const [activeIndex, setActiveIndex] = useState(null);
  const hasPhotos = photography.length > 0;

  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + photography.length) % photography.length));
  const next = () => setActiveIndex((i) => (i === null ? null : (i + 1) % photography.length));

  useEffect(() => {
    if (activeIndex === null) return;
    function onKey(e) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex]);

  return (
    <section id="photography">
      <div className="wrap">
        <Reveal>
          <div className="eyebrow">// photography</div>
          <h2 className="section-title">
            My <em>click</em>
          </h2>
          <p className="section-sub">
            Moments I've captured beyond the screen. Click a photo to view it larger.
          </p>
        </Reveal>

        {hasPhotos ? (
          <div className="photo-grid">
            {photography.map((p, i) => (
              <Reveal delay={i * 60} key={p.src} className={`photo-item ${p.wide ? "photo-wide" : ""}`}>
                <button className="photo-btn" onClick={() => setActiveIndex(i)} aria-label={`Open photo: ${p.caption || "untitled"}`}>
                  <img src={p.src} alt={p.caption || "Photograph"} loading="lazy" />
                  {p.caption && <span className="photo-caption">{p.caption}</span>}
                </button>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="photo-empty">
            <p>
              No photos yet — drop image files into <code>public/photography/</code> and list
              them in <code>src/data/content.js</code> under <code>photography</code>.
            </p>
          </div>
        )}
      </div>

      {activeIndex !== null && (
        <div className="lightbox" onClick={close}>
          <button className="lightbox-close" onClick={close} aria-label="Close">
            ✕
          </button>
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
          >
            ‹
          </button>
          <img
            src={photography[activeIndex].src}
            alt={photography[activeIndex].caption || "Photograph"}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
          >
            ›
          </button>
          {photography[activeIndex].caption && (
            <div className="lightbox-caption">{photography[activeIndex].caption}</div>
          )}
        </div>
      )}
    </section>
  );
}
