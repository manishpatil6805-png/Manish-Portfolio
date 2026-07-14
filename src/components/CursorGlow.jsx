import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const dotRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (prefersReduced || !isFinePointer) return;

    setEnabled(true);

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf;

    function onMove(e) {
      tx = e.clientX;
      ty = e.clientY;
    }

    function loop() {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      raf = requestAnimationFrame(loop);
    }

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return <div className="cursor-glow" ref={dotRef} aria-hidden="true"></div>;
}
