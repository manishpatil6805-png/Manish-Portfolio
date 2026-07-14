import useReveal from "../hooks/useReveal.js";

// Wrap any block of content to make it fade + slide up as it scrolls
// into view. `delay` (ms) staggers multiple Reveals in the same section.
export default function Reveal({ children, delay = 0, className = "", as: Tag = "div", ...rest }) {
  const { ref, inView } = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
