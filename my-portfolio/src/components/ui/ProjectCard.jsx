import { useState } from "react";

function hexToRgba(hex, alpha) {
  const normalized = hex.replace("#", "");
  const value =
    normalized.length === 3
      ? normalized
          .split("")
          .map((char) => char + char)
          .join("")
      : normalized;

  const r = Number.parseInt(value.slice(0, 2), 16);
  const g = Number.parseInt(value.slice(2, 4), 16);
  const b = Number.parseInt(value.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function ProjectCard({ project, dark, delay = 0, inView = false }) {
  const [isHovered, setIsHovered] = useState(false);

  const borderColor = isHovered
    ? hexToRgba(project.color, 0.6)
    : dark
    ? "rgba(255, 255, 255, 0.08)"
    : "rgba(0, 0, 0, 0.08)";

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderRadius: "20px",
        border: `1px solid ${borderColor}`,
        background: dark ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0.9)",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        transform: inView
          ? `translateY(${isHovered ? "-8px" : "0"})`
          : "translateY(30px)",
        opacity: inView ? 1 : 0,
        boxShadow: isHovered ? `0 18px 40px ${hexToRgba(project.color, 0.28)}` : "none",
        transition:
          "transform 0.5s, box-shadow 0.3s, border-color 0.3s, opacity 0.5s",
        transitionDelay: `${delay}s`,
      }}
    >
      <div style={{ fontSize: "48px", lineHeight: 1 }}>{project.emoji}</div>

      <h3
        style={{
          fontFamily: "var(--font-display, 'Syne', sans-serif)",
          fontSize: "1.5rem",
          fontWeight: 700,
          color: dark ? "#f2f2f8" : "#0f1221",
          margin: 0,
        }}
      >
        {project.title}
      </h3>

      <p
        style={{
          margin: 0,
          color: dark ? "rgba(235, 235, 245, 0.72)" : "rgba(40, 42, 54, 0.72)",
          lineHeight: 1.6,
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {project.desc}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {project.tech.map((techItem) => (
          <span
            key={techItem}
            style={{
              fontSize: "0.75rem",
              lineHeight: 1,
              padding: "8px 10px",
              borderRadius: "9999px",
              background: hexToRgba(project.color, dark ? 0.2 : 0.14),
              color: dark ? "#f3f4ff" : "#1a1d2f",
              border: `1px solid ${hexToRgba(project.color, dark ? 0.38 : 0.24)}`,
            }}
          >
            {techItem}
          </span>
        ))}
      </div>

      <div style={{ marginTop: "auto", display: "flex", gap: "16px" }}>
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          style={{
            color: project.color,
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Live Demo →
        </a>
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          style={{
            color: dark ? "#d7daf3" : "#20243c",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          GitHub
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
